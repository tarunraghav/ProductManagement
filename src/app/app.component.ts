import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'ProductManagement';
  products = []
  users = []
  createOrder: boolean = false

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:any)=>{
      this.products = data.products
    })
    this.productService.getUsers().subscribe((data:any)=>{
      this.users = data.users
    })
  }
  back = (value: boolean) =>{
    this.createOrder = value
  }
}
