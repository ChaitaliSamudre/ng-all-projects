import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DiningOutComponent } from './components/dining-out/dining-out.component';
import { ListingComponent } from './components/listing/listing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent },
  {path:'sign-up', component:SignUpComponent },
  {path:'listing', component:ListingComponent},
  {path:'dining-out', component:DiningOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
