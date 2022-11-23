import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { 
    path: '' , 
    redirectTo: 'list',
    pathMatch: 'full'
  },
  { 
    path: 'coin' , 
    component: DetailComponent 
  },
  { 
    path: 'list' , 
    component: ListComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
