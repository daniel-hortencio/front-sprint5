import React, { useEffect, useState } from 'react';
import CardProduct from '../../components/CardProduct';
import ProductsContainer from '../../components/ProductsContainer';
import { useMessage, useLoading, useProducts, useSearch } from '../../hooks';
import api from '../../services/api';
import { WebsiteTemplate } from '../../templates/Website';
import { FilterTypes } from '../../types/filterTypes';
import { NavLinkTypes } from '../../types/navLinksTypes';
import { ProductTypes } from '../../types/productTypes';
import EmptyResults from '../../components/EmptyResults';

const Home: React.FC = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<NavLinkTypes[] | undefined>(
    [],
  );
  const [filters, setFilters] = useState<FilterTypes[] | undefined>([]);
  const { search, sort, sortBy } = useSearch();
  const { products, setProducts } = useProducts();
  const { addMessage } = useMessage();
  const { addRequest, removeRequest } = useLoading();

  useEffect(() => {
    addRequest();
    api
      .getBreadcrumbs()
      .then((res: NavLinkTypes[]) => {
        setBreadcrumbs(res);
      })
      .catch((err: any) => {
        console.log(err);

        addMessage({
          status: 'error',
          text: 'Não foi possível carregar os breadcrumbs',
        });
      })
      .finally(() => removeRequest());

    addRequest();

    api
      .getFilters()
      .then((res: FilterTypes[]) => {
        setFilters(res);
      })
      .catch((err: any) => {
        console.log(err);

        addMessage({
          status: 'error',
          text: 'Não foi possível carregar os filtros',
        });
      })
      .finally(() => removeRequest());
  }, []);

  useEffect(() => {
    addRequest();
    api
      .getProducts({ search, sort, sortBy })
      .then((res: ProductTypes[]) => {
        setProducts(res);
      })
      .catch((err: any) => {
        console.log(err);

        addMessage({
          status: 'error',
          text: 'Não foi possível carregar os produtos',
        });
      })
      .finally(() => removeRequest());
  }, [search, sort, sortBy]);

  return (
    <WebsiteTemplate breadcrumbs={breadcrumbs} filters={filters}>
      <ProductsContainer>
        {products?.map(product => (
          <CardProduct
            key={product.description}
            id={product.id}
            description={product.description}
            imageURL={product.imageURL}
            price={product.price}
          />
        ))}
      </ProductsContainer>

      {search && products?.length === 0 && (
        <EmptyResults text="Não encontramos produtos correspondentes a seleção." />
      )}
    </WebsiteTemplate>
  );
};

export default Home;
