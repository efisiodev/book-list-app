import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    standalone: true,
    imports: [NavComponent, RouterOutlet]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
