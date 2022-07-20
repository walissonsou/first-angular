import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestCreate, RequestUpdate, ResponseCreate, ResponseUpdate, ResponseUser, ResponseUsuario } from './usuario.model'
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
  getUser(id: string): Observable<ResponseUser>{
    const _url = `${this.url}/${id}`
    return this.http.get<ResponseUser>(_url)
  }
  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`
    return this.http.put<ResponseUpdate>(_url, request)
  }
}
