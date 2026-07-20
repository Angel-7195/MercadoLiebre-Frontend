export interface User {
    id: string;
    email: string;
    full_name: string;
    role: string;
    created_at: string;
}

export interface CreateUser {
    email: string;
    full_name: string;
    password: string;
    role: string;
}