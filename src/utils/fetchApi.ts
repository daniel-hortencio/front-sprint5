import { API_URL } from "../constants/enviroments";

export const FetchApi = (
    endpoint: string,
    params?: any | undefined
): Promise<any> => {
    return fetch(`${API_URL}/${endpoint}${params ? `?${params}` : ""}`)
        .then((res) => {
            return res.json();
        })
}