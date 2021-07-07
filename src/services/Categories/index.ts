import { NavLinkTypes } from "../../types/navLinksTypes";
import { FetchApi } from '../../utils/fetchApi'

export const getCategories = async (): Promise<NavLinkTypes[]> => {

    return FetchApi("categories").then(res => {
        const allCategories = res.map((category: any) => {
            return {
                id: category.id,
                path: category.link,
                label: category.label,
            } as NavLinkTypes;
        });

        return allCategories
    })
}