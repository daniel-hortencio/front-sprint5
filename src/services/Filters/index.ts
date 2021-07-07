import { FilterTypes } from "../../types/filterTypes";
import { FetchApi } from '../../utils/fetchApi'

export const getFilters = async (): Promise<FilterTypes[]> => {

    return FetchApi("filters").then(res => {
        const filterOptions = res.map((filter: any) => {
            return {
                id: filter.id,
                label: filter.label,
            } as FilterTypes;
        });

        return filterOptions
    })
}