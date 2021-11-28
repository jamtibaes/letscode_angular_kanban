import { Component, Input, OnInit } from '@angular/core';
import { Kanban } from 'src/app/models/Kanban';
import { KanbanService } from '../kanban.service';

@Component({
  selector: 'app-kanban-todo',
  templateUrl: './kanban-todo.component.html',
  styleUrls: ['./kanban-todo.component.css']
})
export class KanbanTodoComponent implements OnInit {

  @Input() lista: Kanban[] = []
  right: string = "Doing"


  constructor(
    private kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
  }

  deleteKanban(item: Kanban) {
    this.kanbanService.deleteItem(item).subscribe(() => {
      this.lista = this.lista.filter((k) => k.id !== item.id);
    })
  }

  rightKanban(item: Kanban) {
    item.lista = this.right;
    this.kanbanService.updateItem(item).subscribe()
  }


  updateKanban(item: Kanban) {
    this.kanbanService.updateItem(item).subscribe()
  }

}
