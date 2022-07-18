import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import {ResponseUsuario} from './usuario.model'
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  resUser?: ResponseUsuario;
  // no constructor chamo o service
  constructor(private userService: UsuarioService) { }
  // ngOnInit serve pra execujtar algo
  ngOnInit(): void {
    //subscribe -> serve para sobescrever
    // subscribe -> quando ele retornar o getUsers, eu faço alguma coisa que eu quero no HTML.
    this.userService.getUsers()
    .subscribe(res => this.resUser = res)
  }
}
