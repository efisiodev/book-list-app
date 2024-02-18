
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        NavComponent
    ],
    exports: [
        NavComponent,
    ]
})
export class NavModule { }

