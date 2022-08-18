import { BuyComponent } from './header/buy/buy.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { SellComponent } from './header/sell/sell.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:"" , component : ContentComponent},
//   {path:"header", component:HeaderComponent,
//   children:[
//       {path:"sell",component:SellComponent}
//  ]},
  {path:"sell",component:SellComponent},
  {path:"buy",component:BuyComponent},
  {path:"products" , loadChildren : () => import('./products/producs.module').then(m => m.ProducsModule)},
{path:"login",component:LoginComponent},
{path:"todolist",component:TodoListComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],

})
export class AppRoutingModule { }
