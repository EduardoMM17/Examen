import { Component, OnInit } from '@angular/core';
import { CreateOrderService } from './create-order.service';
declare var require: any;
const itemsArray = require('../../../../../BackEnd/items.json');

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  public itemsArr = itemsArray;
  public headers = ['name', 'prince', 'quantity'];
  public quantity: number = 0;
  public newItemsArr = [];

  constructor(
    private createOrderService: CreateOrderService
  ) { }

  ngOnInit(): void {
    this.itemsArr.forEach(element => {
      element.quantity = 0;
    });
  }

  add(item){
    item.quantity = this.quantity;
    const itemObject = {
      idItem: item.idItem.oid,
      quantity: item.quantity,
    }
    this.newItemsArr.push(itemObject);
  };

  onKey(event){
    this.quantity = parseInt((event.target as HTMLInputElement).value);
  }
  
  createOrder(){
    const token = localStorage.getItem('token');
    this.createOrderService.createOrder(token, this.newItemsArr).subscribe(
      response =>{
        console.log(response);
      }
    )
  }

}
