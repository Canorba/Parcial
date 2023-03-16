import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepuestosComponent } from './Components/repuestos/repuestos.component';
import { FarmacoComponent } from './Components/farmaco/farmaco.component';

const routes: Routes = [
  {path:'repuestos',component: RepuestosComponent},
  {path:'farmaco',component: FarmacoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
