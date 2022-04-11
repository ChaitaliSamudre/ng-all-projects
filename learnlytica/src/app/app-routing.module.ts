import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ServicesComponent } from './components/services/services.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent},
  { path: 'list-profiles', component: ListProfilesComponent},
  { path : 'course', component: ListCourseComponent},
  { path : 'login', component: LoginComponent},
  { path : 'registration', component: RegistrationComponent},
  { path : 'services', component: ServicesComponent},
  { path : 'list-contact', component : ListContactComponent},
  { path : '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

