
import { Chain } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KiaComponent } from './kia/kia.component';
import { ProducsComponent } from './producs.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
// {path:"products",component:ProducsComponent,
// children:[

//   {path:"e",component:KiaComponent}


// ]
// },
{path:"car/:id",component:KiaComponent},
{path:"view/:id",component:ViewComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducsRoutingModule { }
