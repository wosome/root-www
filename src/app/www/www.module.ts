import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {WWWRoutingModule} from './www-routing.module';
import { LearnComponent } from './learn/learn.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WWWRoutingModule
  ],
  declarations: [HomeComponent, LearnComponent],
  exports: []
})
export class WWWModule { }
