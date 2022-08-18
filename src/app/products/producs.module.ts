import { TableModule } from 'primeng/table';
import {  GalleriaModule } from 'primeng/galleria';
import { ProducsComponent } from './producs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DataViewModule} from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ProducsRoutingModule } from './producs-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './kia/car-service.service';
import { KiaComponent } from './kia/kia.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ProducsComponent,
    KiaComponent,
    ViewComponent,

  ],
  imports: [
    CommonModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    ProducsRoutingModule,
    HttpClientModule,
    GalleriaModule,
    TableModule


  ],
  providers:[
    CarService
  ]
})
export class ProducsModule { }
