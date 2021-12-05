import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faAngleRight, faTrash, faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import { Kanban } from 'src/app/models/Kanban';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  faPen = faPen;
  faAngleRight = faAngleRight;
  faTrash = faTrash;
  faSave = faSave;
  faBan = faBan;

  conteudo: string = ''
  titulo: string = ''

  component: string = 'ToDo';
  collapsed!: number;
  isEditable: boolean = false;
  isCollapsed: boolean = false;

  @Input() item = {} as Kanban;
  @Output() onDeleteKanban = new EventEmitter<Kanban>();
  @Output() onRightKanban = new EventEmitter<Kanban>();
  @Output() onUpdate = new EventEmitter<Kanban>();

  constructor() { }

  ngOnInit(): void {
  }

  editItem() {
    this.titulo = this.item.titulo;
    this.conteudo = this.item.conteudo
    this.isEditable = true;
  }

  collapse() {
    this.isCollapsed = !this.isCollapsed;
    this.isEditable = false;
  }

  onDelete(kanban: Kanban) {
    this.onDeleteKanban.emit(kanban);
  }

  onRightArrow(kanban: Kanban) {
    this.onRightKanban.emit(kanban);
    this.isCollapsed = false;
  }

  onUpdateAll() {
    this.onUpdate.emit(this.item);
    this.isEditable = false;
  }

  onCancel() {
    this.item.titulo = this.titulo;
    this.item.conteudo = this.conteudo
    this.isEditable = false;
  }

}
