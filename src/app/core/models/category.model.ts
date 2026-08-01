export interface Category {
    id: string;
    name: string;
    description: string | null;
    created_at: string;
}

export interface CreateCategory{
    name: string;
    description: string | null;
}

export interface UpdateCategory {
    name: string;
    description: string | null;
}