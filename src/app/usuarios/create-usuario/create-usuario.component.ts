import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

  request: RequestCreate ={
    name: '',
    job: ''
  }

  response!: ResponseCreate
  constructor(private usuarioServico: UsuarioService) { }
  ngOnInit(): void {
  }
  save(){
    this.usuarioServico.createUsers(this.request)
    .subscribe( res => {
      this.response = res
    })
  }
}
