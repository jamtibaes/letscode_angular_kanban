import { KanbanService } from './../kanban.service';
import { Component, Input, OnInit } from '@angular/core';
import { Kanban } from 'src/app/models/Kanban';

import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-kanban-new',
  templateUrl: './kanban-new.component.html',
  styleUrls: ['./kanban-new.component.css']
})
export class KanbanNewComponent implements OnInit {

  faPlus = faPlus;
  titulo: string = '';
  conteudo: string = '';

  @Input() lista: Kanban[] = []

  constructor(
    private kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (!this.titulo) {
      alert("Precisa de um titulo");
      return
    };

    if (!this.conteudo) {
      alert("Precisa de um conteudo");
      return
    };

    const newKanban: Kanban = {
      titulo: this.titulo,
      conteudo: this.conteudo,
      lista: 'ToDo'
    };

    this.kanbanService.addItem(newKanban).subscribe(kanban => this.lista.push(kanban))

    this.titulo = '';
    this.conteudo = '';
  }

}
