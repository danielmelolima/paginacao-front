export interface Page {
    content: Array<Product>;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort?: any;
    numberOfElements: number;
    first: boolean;
};

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
};

