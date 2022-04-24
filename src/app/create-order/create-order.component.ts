import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  @Input() products: any
  @Input() users: any
  selectedUser: string = ''
  orderList: any = [{
    product: '',
    price: 0,
    quantity: '',
    amount: 0
  }]
  total: number = 0
  orderCreated: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onProductChange = (object:any) => {
    this.products.forEach((element:any) => {
      if(element.name === object.product){
        object.price = element.price
      }
    });
  }
  calculateAmount = (object: any) => {
    this.total = 0
    object.error = ''
    this.products.forEach((element:any) => {
      if(element.name === object.product && parseInt(object.quantity) > parseInt(element.stock)){
        object.error = `Enter quantity less then ${element.stock}.`
      }
    });
    object.amount = object.price * object.quantity

    this.orderList.forEach((item:any) => {
      this.total += item.amount 
    });
  }

  addItem = () => {
    const obj = {
      product: '',
      price: 0,
      quantity: '',
      amount: 0
    }
    this.orderList.push(obj)
  }

  orderPlaced = () => {
    this.orderCreated = true
  }
}
