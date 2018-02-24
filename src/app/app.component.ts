import {Component, OnInit, Inject, AfterViewInit} from '@angular/core';
import {AfterContentInit} from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`

    .mat-tab-header {
      width: 100% !important;
    }


  `]
})
export class AppComponent  {
  public selectedIndex = 0;

  title = 'app';


  constructor() {

  }



}
