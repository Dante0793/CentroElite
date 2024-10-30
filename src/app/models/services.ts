export class Service {
    id: number;
    name: string;
    description: string;
    price: number;

    constructor(){
        this.id = 0;
        this.name = '';
        this.description = '';
        this.price = 0;
    }
}
export interface Create {
    name: string;
    description: string;
    price: string;
}

