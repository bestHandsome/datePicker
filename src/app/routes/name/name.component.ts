import {Component, OnInit} from '@angular/core';
import {PersonModule} from './name.module';

@Component({
  templateUrl: './name.component.html'
})

export  class NameComponent implements OnInit {
  name: boolean;
  countAll: Array<any>;
  Myname = '开始';
  MyAge: number;
  birthDay: Date;
  address: string;
  canEdit: void;
  isToday = true;
  moment = new Date();
  person: PersonModule[];
  list = '';
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  ngOnInit() {
    this.countAll = [1, 2, 3];
    this.person = [];
    this.name = false;
  }

  onSubmit() {
    this.person.push(new PersonModule('1', 1, true, 'name'));
  }

  delete() {
    this.person.splice(this.person.length - 1, 1);
  }
}
