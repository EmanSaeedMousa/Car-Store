import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataViewModule} from 'primeng/dataview';

import { NgModule } from '@angular/core';
import {ChartModule} from 'primeng/chart';



 import {ToastModule} from 'primeng/toast';
 import {TabViewModule} from 'primeng/tabview';

import {CarouselModule} from 'primeng/carousel';
import { ContentComponent } from './content/content.component';
import { ButtonModule } from 'primeng/button';
import { SellComponent } from './header/sell/sell.component';
import { BuyComponent } from './header/buy/buy.component';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    SellComponent,
    BuyComponent,
    LoginComponent,
    TodoListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    ChartModule,
    ToastModule,
    TabViewModule,
    CarouselModule,
    RouterModule,
    ButtonModule,
  GalleriaModule,
  HttpClientModule,
  ReactiveFormsModule,
  DialogModule,

  ],providers:[MessageService],

  bootstrap: [AppComponent]
})
export class AppModule { }

