import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {DateTimePickerModule} from 'ng-pick-datetime';
import {ModalModule} from 'ngx-modialog';
import {BootstrapModalModule} from 'ngx-modialog/plugins/bootstrap'
import {FormsModule} from '@angular/forms';
import {MnFullpageModule} from 'ngx-fullpage'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    DateTimePickerModule,
    ModalModule.forRoot(),
    MnFullpageModule.forRoot(),
    BootstrapModalModule,
  ],
  exports: [
    NgxDatatableModule,
    FormsModule,
    CommonModule,
    DateTimePickerModule,
    RouterModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
