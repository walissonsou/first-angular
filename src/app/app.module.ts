import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { CreateUsuarioComponent } from './usuarios/create-usuario/create-usuario.component';

import { UpdateComponent } from './usuarios/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CreateUsuarioComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
