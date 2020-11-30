import { Component, OnInit } from '@angular/core';
import { GetOrderInfoService } from './get-order-info.service';

@Component({
  selector: 'app-get-order-info',
  templateUrl: './get-order-info.component.html',
  styleUrls: ['./get-order-info.component.css']
})
export class GetOrderInfoComponent implements OnInit {
  public rows: any = [];

  constructor(
    private getOrderInfoService: GetOrderInfoService,
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.getOrderInfoService.getListForUser(token).subscribe(
      response => {
        const row = {
          email: '',
          telephone: '',
          order: 0,
          create: '',
          quantity: 0,
          total: 0,
        }
        const res = response.res;
        const usuario = res.usuario
        row.email = usuario.email;
        row.telephone = usuario.telephone;
        const orders = res.orders;
        for(let i = 0; i < orders.length; i++){
          row.order = orders[i].orderNumber;
          row.create = orders[i].createdAt;
          const items = orders[i].items;
          for(let item of items){
            row.quantity += item.quantity;
            row.total += item.quantity * item.price;
          }
        }
        this.rows.push(row);
      }  
    )
  }

  getListForUser(){
    const token = localStorage.getItem('token');
    this.getOrderInfoService.getListForUser(token).subscribe(
      response => {console.log(response);}
    )
  }
}
