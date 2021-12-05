import { Component, Input, OnInit } from '@angular/core';
import { Kanban } from 'src/app/models/Kanban';
import { KanbanService } from 'src/app/components/templates/kanban/kanban.service';


@Component({
  selector: 'app-kanban-doing',
  templateUrl: './kanban-doing.component.html',
  styleUrls: ['./kanban-doing.component.css']
})
export class KanbanDoingComponent implements OnInit {

  @Input() lista: Kanban[] = []
  left: string = "ToDo"
  right: string = "Done"

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

  leftKanban(item: Kanban) {
    item.lista = this.left;
    this.kanbanService.updateItem(item).subscribe()
  }

  updateKanban(item: Kanban) {
    this.kanbanService.updateItem(item).subscribe()
  }

}
