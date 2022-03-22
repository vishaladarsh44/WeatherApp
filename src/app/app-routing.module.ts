import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { allAppRoutes } from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(allAppRoutes), ReactiveFormsModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
