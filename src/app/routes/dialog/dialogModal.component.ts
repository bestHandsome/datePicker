import {Component, OnInit} from '@angular/core';
import {DialogRef, ModalComponent} from 'ngx-modialog';
import {BSModalContext} from 'ngx-modialog/plugins/bootstrap';
import {User} from '../../shared/user';

export class DialogModalContext extends BSModalContext {
  public user: User;
}

@Component({
  templateUrl: './dialogForm.component.html'
})

export class DialogModalComponent implements ModalComponent<DialogModalContext>, OnInit {
  context: DialogModalContext;
  mode: string;
  constructor(public dialog: DialogRef<DialogModalContext>) {
      this.context = dialog.context;
  }
  ngOnInit() {
  }

  submit() {
    console.log(this.context.user)
    this.dialog.close(this.context.user);
  }
}
