import { ProductTypes } from '../../types/productTypes';
import { FetchApi } from '../../utils/fetchApi';

type SearchParamsDTO = {
    search?: string;
    sort?: 1 | -1 | undefined;
    sortBy?: string | undefined;
};

export const getProducts = async (
    params: SearchParamsDTO,
): Promise<ProductTypes[]> => {
    const { search, sort, sortBy } = params;

    console.log(params)

    let querySearch = ""

    if (search) {
        querySearch += `search=${search}`
    }
    if (sort) {
        querySearch += `&sort=${sort}`
    }
    if (sortBy) {
        querySearch += `&sortBy=${sortBy}`
    }

    return FetchApi('products', querySearch).then(res => {
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
    id: string,
): Promise<ProductTypes> => {

    let querySearch = "";

    if (id) {
        querySearch = `id=${id}`;
    }

    return FetchApi('productById', querySearch).then(res => {

        const product = {
            id: res.id,
            imageURL: res.imageURL,
            description: res.description,
            price: res.price,
        } as ProductTypes;

        return product;
    });
};