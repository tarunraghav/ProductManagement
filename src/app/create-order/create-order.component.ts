import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  @Input() products: any
  @Input() users: any
  constructor() { }

  ngOnInit(): void {
  }

}
