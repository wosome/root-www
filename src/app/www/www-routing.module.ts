import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LearnComponent} from './learn/learn.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'learn',
    component: LearnComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WWWRoutingModule { }
