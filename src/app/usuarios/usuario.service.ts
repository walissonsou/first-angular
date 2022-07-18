import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseCreate, ResponseUsuario } from './usuario.model'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private url = "https://reqres.in/api/users";


  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsuario>{
    return this.http.get<ResponseUsuario>(this.url)
  }

  createUsers(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request)
  }
}
