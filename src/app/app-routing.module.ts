import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { AddEmailsComponent } from './features/add-emails/add-emails.component';
import { DisplayDataComponent } from './features/display-data/display-data.component';

const routes: Routes = [
  {
    path: '',
    component: AddEmailsComponent
  },
  {
    path: 'add-emails',
    component: AddEmailsComponent
  },
  {
    path:'display-emails',
    component: DisplayDataComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
