import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { WhydonateComponent } from './whydonate/whydonate.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'whydonate', component:WhydonateComponent},
  {path:'home',component:HomeComponent},
  {path:'addCustomers',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
