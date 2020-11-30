export interface UserForOrder {
    idUsuario: string;
    email: string;
    telephone: string;
}

export interface OrderInfo {
    idOrder: string;
    orderNumber: number;
    createdAt: number;
    items: Item[];
}

export interface Item {
    idItem: string;
    itemName: string;
    itemPrice: string;
    itemQuantity: number;
}

