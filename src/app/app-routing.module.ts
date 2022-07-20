import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsuarioComponent } from './usuarios/create-usuario/create-usuario.component';
import { UpdateComponent } from './usuarios/update/update.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/create', component: CreateUsuarioComponent},
  {path: 'usuarios/update:id', component: UpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
