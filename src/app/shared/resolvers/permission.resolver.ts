import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {MenuService} from '../../core/menu/menu.service';
import {menu} from '../../routes/menu';

@Injectable()
export class PermissionResolver implements Resolve<any> {
  constructor(private menuService: MenuService) {}

  resolve() {
    this.menuService.menuItems = [];
    console.log(this.menuService.addMenu(menu()));
  }
}
