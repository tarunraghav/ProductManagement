import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() users: any
  constructor() { }

  ngOnInit(): void {

  }
  addUser = () => {
    const obj = {
      name: '',
      address: '',
      mobile: '',
      edit: true
    }
    this.users.push(obj)
  }
  deleteUser = (index: number) => {
    this.users.splice(index, 1);
  }
}
