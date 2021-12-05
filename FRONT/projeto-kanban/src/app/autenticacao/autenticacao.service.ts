import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' }
  )
}

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  public Autorizado = new Subject()

  constructor(private httpCliente: HttpClient) {
    this.Autorizado.next(false)
  }

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.httpCliente.post('http://localhost:5000/login/', {
      login: usuario,
      senha: senha
    }, httpOptions)
  }

  getToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  saveToken(token: string) {
    localStorage.setItem(KEY, token)
  }

  deleteToken() {
    localStorage.removeItem(KEY)
  }

  hasToken(): boolean {
    return !!this.getToken()
  }

}
