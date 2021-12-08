import { ClienteUpdateComponent } from './components/clieente/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './components/clieente/cliente-create/cliente-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { ClientesCrudComponent } from './views/clientes-crud/clientes-crud.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent

  }, {
    path: "clientes",
    component: ClientesCrudComponent
  }, {
    path: "clientes/create",
    component: ClienteCreateComponent
  }, {
    path: "clientes/update/:id",
    component: ClienteUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
