import Home from '../pages/Home';
import Product from '../pages/Product'
import PageNotFound from '../pages/404';
import { RouteTypes } from '../types/routeTypes'

export const routes: Array<RouteTypes> = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/produto/:id',
        component: Product
    },
    {
        component: PageNotFound,
    },
];
