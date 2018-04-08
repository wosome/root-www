import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  providers: [NgbDropdownConfig]
})
export class PageHeaderComponent implements OnInit {

  faUser = faUser;
  collapsedMenu = false;

  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
  }

}
