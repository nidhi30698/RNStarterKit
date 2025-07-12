import { Product } from "../types/product";
import api from "../api/apiClient";

export async function fetchAllProducts(): Promise<Product[]> {
    const res = await api.get<Product[]>('/products');
    return res.data;
}