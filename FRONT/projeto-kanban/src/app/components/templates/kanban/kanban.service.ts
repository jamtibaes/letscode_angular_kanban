
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Kanban } from "src/app/models/Kanban";
import { Observable } from 'rxjs';
import { AutenticacaoService } from "./../../../autenticacao/autenticacao.service";



@Injectable({
  providedIn: 'root',
})
export class KanbanService {

  private httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.auth.getToken()}`)
  }

  private url = "http://localhost:5000/cards"

  constructor(private httpClient: HttpClient, private auth: AutenticacaoService) { }

  getList(): Observable<Kanban[]> {
    return this.httpClient.get<Kanban[]>(this.url, this.httpOptions)
  }

  addItem(item: Kanban): Observable<Kanban> {
    return this.httpClient.post<Kanban>(this.url, item, this.httpOptions)
  }

  deleteItem(item: Kanban): Observable<Kanban> {
    const url = `${this.url}/${item.id}`;
    return this.httpClient.delete<Kanban>(url, this.httpOptions);
  }

  updateItem(item: Kanban): Observable<Kanban> {
    const url = `${this.url}/${item.id}`;
    return this.httpClient.put<Kanban>(url, item, this.httpOptions)
  }

}
