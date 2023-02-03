import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridthingsRoutingModule } from './gridthings-routing.module';
import { GridthingsComponent } from './gridthings.component';
import { CellComponent } from '../cell/cell.component';


@NgModule({
    imports: [
        CommonModule,
        GridthingsRoutingModule,
        GridthingsComponent, CellComponent
    ]
})
export class GridthingsModule { }
