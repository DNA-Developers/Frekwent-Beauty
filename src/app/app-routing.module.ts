import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'contact', component: ContactComponent},
=======

const routes: Routes = [
  { path: '', component: HomeComponent },
>>>>>>> c3375a793994de8353b21ede771bcafc4fded4fa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
