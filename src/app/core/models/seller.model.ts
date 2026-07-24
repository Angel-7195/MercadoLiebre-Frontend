export interface Seller {
    id: string;
    user_id: string;
    document_number: string;
    store_name: string;
    phone: string;
    rating: number;
}

export interface CreateSeller {
    document_number: string;
    store_name: string;
    phone: string;
}

export interface UpdateSeller {
  store_name: string;
  phone: string;
}