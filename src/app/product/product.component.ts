import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() products: any
  constructor() { }

  ngOnInit(): void {
  }
  addProduct = () => {
    const obj = {
      name: '',
      price: '',
      stock: '',
      edit: true
    }
    this.products.push(obj)
  }
  deleteProduct = (index: number) => {
    this.products.splice(index, 1);
  }
}
