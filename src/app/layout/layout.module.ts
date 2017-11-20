import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.componet';
import {SidebarComponent} from './sidebar/sidebar.component'
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [
      LayoutComponent,
      SidebarComponent,
    ],
    exports: [
      LayoutComponent,
      SidebarComponent,
    ]
})
export class  LayoutModule {}
