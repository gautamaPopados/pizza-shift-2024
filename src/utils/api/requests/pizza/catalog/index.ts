import { AxiosRequestConfig, RawAxiosRequestConfig } from "axios";
import { api } from "../../../instance"

export const getCatalog = async (requestConfig?: AxiosRequestConfig) =>
    api.get<PizzasResponse>('/pizza/catalog', requestConfig)