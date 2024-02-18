import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
