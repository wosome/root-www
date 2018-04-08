import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LoaderMainComponent } from './loader/loader-main/loader-main.component';
import { LoaderAltComponent } from './loader/loader-alt/loader-alt.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoaderComponent, LoaderMainComponent, LoaderAltComponent],
  exports: [LoaderComponent]
})
export class SharedModule { }
