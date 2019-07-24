import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {WordComponent} from './directive/word/word.component';
import {DetailCvComponent} from './cv/detail-cv/detail-cv.component';
import {AddPersonneComponent} from './cv/add-personne/add-personne.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'cv',
    children: [
      {path: '', component: CvComponent},
      {path: 'addPersonne', component: AddPersonneComponent},
      {path: ':id', component: DetailCvComponent}
    ]},
  {path: 'word', component: WordComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
