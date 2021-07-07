/* import { NavLinkTypes } from '../types/navLinksTypes';
import { ProductTypes } from '../types/productTypes';
import { FilterTypes } from '../types/filterTypes'; */

import { getCategories } from './Categories';
import { getBreadcrumbs } from './Breadcrumbs';
import { getFilters } from './Filters';
import { getProductById, getProducts } from './Products';
/* import { API_URL } from '../constants/enviroments';

const api: any = {}; */

/* api.getCategories = async (): Promise<NavLinkTypes[]> => {
    return getCategories(API_URL).then(res => res);
};

api.getBreadcrumbs = async (): Promise<NavLinkTypes[]> => {
    return getBreadcrumbs(API_URL).then(res => res);
};

api.getFilters = async (): Promise<FilterTypes[]> => {
    return getFilters(API_URL).then(res => res);
};

api.getProducts = async (search = '', sort = undefined): Promise<ProductTypes[]> => {
    return getProducts(API_URL, { search, sort }).then(res => res);
};

api.getProductById = async (id = ''): Promise<ProductTypes> => {
    return getProductById(API_URL, { id }).then(res => res);
}; */

export default { getCategories, getBreadcrumbs, getFilters, getProductById, getProducts }
