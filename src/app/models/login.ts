export interface Register {
    name: string;
    email: string;
    password: string;
    c_password: string;
}

export interface Login {
    email: string;
    password: string;
}