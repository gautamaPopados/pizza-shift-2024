import { api } from "../../../instance"

export const getCatalog = async (requestConfig?: GetCatalogConfig) => 
    api.get<ApiResponse>('/pizza/catalog', requestConfig?.config)