export class OrderRequestDto {    
    token: string;
    items: item[]; 
}

export class item {
    idItem: string;
    quantity: number;
}