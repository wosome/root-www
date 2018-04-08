import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page-404/page-404.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageContentComponent } from './page-content/page-content.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    NgbModule
  ],
  declarations: [Page404Component, PageHeaderComponent, PageFooterComponent, PageContentComponent],
  exports: [Page404Component, PageHeaderComponent, PageFooterComponent, PageContentComponent]
})
export class RootModule { }
