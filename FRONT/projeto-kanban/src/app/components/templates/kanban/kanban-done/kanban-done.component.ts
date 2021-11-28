import { Kanban } from 'src/app/models/Kanban';
import { Component, Input, OnInit } from '@angular/core';
import { KanbanService } from '../kanban.service';



@Component({
  selector: 'app-kanban-done',
  templateUrl: './kanban-done.component.html',
  styleUrls: ['./kanban-done.component.css']
})
export class KanbanDoneComponent implements OnInit {

  @Input() lista: Kanban[] = []
  left: string = "Doing"
  right: string = ""

  constructor(
    private kanbanService: KanbanService

  ) { }

  ngOnInit(): void {
    // this.kanbanService.getList().subscribe(kanban => (this.lista = kanban));
  }

  deleteKanban(item: Kanban) {
    this.kanbanService.deleteItem(item).subscribe(() => {
      this.lista = this.lista.filter((k) => k.id !== item.id);
    })
  }


  leftKanban(item: Kanban) {
    item.lista = this.left;
    this.kanbanService.updateItem(item).subscribe()
  }

  updateKanban(item: Kanban) {
    this.kanbanService.updateItem(item).subscribe()
  }


}
