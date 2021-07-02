import { ProductTypes } from '../../types/productTypes';
import { FetchApi } from '../../utils/fetchApi';

type SearchParamsDTO = {
    search?: string;
};

type ProductIdDTO = {
    id: string;
};

export const getProducts = async (
    baseUrl: string,
    params: SearchParamsDTO,
): Promise<ProductTypes[]> => {
    const { search } = params;
    const querySearch = search ? `search=${search}` : '';

    return FetchApi(baseUrl, 'products', querySearch).then(res => {
        const listProducts = res.map((product: any) => {
            return {
                id: product.id,
                imageURL: product.imageURL,
                description: product.description,
                price: product.price,
            } as ProductTypes;
        });

        return listProducts;
    });
};

export const getProductById = async (
    baseUrl: string,
    params: ProductIdDTO,
): Promise<ProductTypes> => {
    const { id } = params;
    const querySearch = `id=${id}`;

    return FetchApi(baseUrl, 'productById', querySearch).then(res => {

        const product = {
            id: res.id,
            imageURL: res.imageURL,
            description: res.description,
            price: res.price,
        } as ProductTypes;

        return product;
    });
};