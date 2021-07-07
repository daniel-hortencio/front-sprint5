import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';
import { WebsiteTemplate } from '../../templates/Website';
import { ProductTypes } from '../../types/productTypes';
import { useLoading } from '../../hooks';
import EmptyResults from '../../components/EmptyResults';

import * as S from './styles';
import { API_URL } from '../../constants/enviroments';

const Product: React.FC = () => {
  const { id }: ProductTypes = useParams();
  const [product, setProduct] = useState<ProductTypes | undefined>();

  const { addRequest, removeRequest } = useLoading();
  const history = useHistory();

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const productSize = [4, 6, 8, 10];

  const AddToCart = () => {
    // eslint-disable-next-line no-alert
    alert('Produto adicionado à sacola!');

    history.push('/');
  };

  useEffect(() => {
    addRequest();

    api
      .getProductById(id as string)
      .then((res: ProductTypes) => setProduct(res))
      .catch((err: any) => console.log(err))
      .finally(() => removeRequest());
  }, []);

  return (
    <WebsiteTemplate>
      {product ? (
        <S.Wrapper>
          <img src={`${API_URL}/${product.imageURL}`} />
          <div>
            <h1>{product.description}</h1>

            <small>Selecionar tamanho: {selectedSize || ''}</small>
            <div>
              {productSize.map(size => (
                <S.SizeOption
                  isActive={size === selectedSize}
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </S.SizeOption>
              ))}

              <S.Actions>
                <h2>R$ {product.price}</h2>
                <button type="button" onClick={AddToCart}>
                  Adicionar à sacola
                </button>
                <button type="button" onClick={() => history.push('/')}>
                  Cancelar
                </button>
              </S.Actions>
            </div>
          </div>
        </S.Wrapper>
      ) : (
        <EmptyResults text="Desculpe, parece que a página que você está procurando já não existe mais." />
      )}
    </WebsiteTemplate>
  );
};

export default Product;
