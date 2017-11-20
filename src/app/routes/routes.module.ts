import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NameComponent} from './name/name.component';
import {LayoutComponent} from '../layout/layout.componet';
import {SharedModule} from '../shared/shared.module';
import {DialogComponent} from './dialog/dialog.component';
import {DialogModalComponent} from './dialog/dialogModal.component';
import {FullPageComponent} from './fullPage/fullPage.component';
import {StudyComponent} from './study/study.component'

const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'name', component: NameComponent},
      {path: 'dialog', component: DialogComponent},
      {path: 'fullPage', component: FullPageComponent},
      {path: 'study', component: StudyComponent}
    ]
  }
]

@NgModule({
   imports: [
     RouterModule.forRoot(routes),
     SharedModule
   ],
   declarations: [
     NameComponent,
     DialogComponent,
     FullPageComponent,
     DialogComponent,
     DialogModalComponent,
     StudyComponent
   ],
   entryComponents: [
     DialogModalComponent
   ],
   exports: [
     RouterModule,
   ],
   providers: []
})

export class  RoutesModule {}




