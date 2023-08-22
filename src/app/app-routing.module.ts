import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ContatoComponent } from './contato/contato.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  {path: "", redirectTo: 'principal', pathMatch: 'full'},
  {path: "principal", component: PrincipalComponent},
  {path: "contato", component: ContatoComponent},
  {path: "projetos", component: ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
