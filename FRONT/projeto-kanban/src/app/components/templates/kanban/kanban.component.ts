import { Component, OnInit } from '@angular/core';
import { Kanban } from 'src/app/models/Kanban';
import { KanbanService } from './kanban.service';



@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  providers: []
})
export class KanbanComponent implements OnInit {

  lista: Kanban[] = []

  constructor(private kanbanService: KanbanService) { }

  ngOnInit(): void {
    this.kanbanService.getList().subscribe(kanban => (this.lista = kanban));
  }

}
