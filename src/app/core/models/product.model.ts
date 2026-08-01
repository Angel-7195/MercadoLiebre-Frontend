export interface Product {

    id: string;

    seller_id: string;

    category_id: string;

    name: string;

    description: string;

    brand: string;

    price: number;

    stock: number;

    status: string;

    image_url: string;

    created_at: string;

}

export interface CreateProduct {

    category_id: string;

    name: string;

    description: string;

    brand: string;

    price: number;

    image_url?: string;

    stock: number;

}

export interface UpdateProduct {

    category_id?: string;

    name?: string;

    description?: string;

    brand?: string;

    price?: number;

    image_url?: string;

    stock?: number;

}