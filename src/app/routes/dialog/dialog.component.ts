import {Component, OnInit} from '@angular/core';
import {Modal} from 'ngx-modialog/plugins/bootstrap';
import {overlayConfigFactory} from 'ngx-modialog';
import {DialogModalComponent, DialogModalContext} from './dialogModal.component';
import {User} from '../../shared/user'
@Component({
  templateUrl: './dialog.component.html'
})

export class DialogComponent implements OnInit {
  rows = [
    {id: 1, name: 'Mr.xing', school: '北京大学', age: 18, sex: '男'},
    {id: 2, name: 'Ms.zhao', school: '北华大学', age: 16, sex: '女'},
    {id: 3, name: 'Ms.wang', school: '清华大学', age: 16, sex: '男'},
    {id: 4, name: 'Ms.sui', school: '北京科技大学', age: 16, sex: '女'}
  ];
  deletId = 0;
  editId = 0;
  private users: Map<number, User>;
  constructor(private modal: Modal) {}
  ngOnInit () {
  }

  removeUsers(value) {
    this.rows.forEach((item, index) => {
      if (value === item.id) {
         this.deletId = index;
      }
    })
    this.rows.splice(this.deletId, 1);
  }

  addUsers() {
    const user = new User();
    this.modal
      .open(DialogModalComponent, overlayConfigFactory({
        user: user,
        mode: 'add'
      }, DialogModalContext))
      .then(dialog => dialog.result.then((addUser) => {
      }, () => {}));
  }

  editUsers(id: number, row: object) {
    const user = row;
    this.modal
      .open(DialogModalComponent, overlayConfigFactory({
        user: user,
        mode: 'edit'
      }, DialogModalContext))
      .then(dialog => dialog.result.then((update) => {
        this.rows.forEach((item, index) => {
          if (id === item.id) {
            this.editId = index;
          }
          console.log(update)
          this.rows[this.editId] = update;
        })
      }, () => {}));
  }
  refreshData() {
    console.log(1111);
  }
}
