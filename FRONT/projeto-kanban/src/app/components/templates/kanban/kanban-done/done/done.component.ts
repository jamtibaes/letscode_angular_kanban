import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, SimpleChanges } from '@angular/core';
import { Kanban } from 'src/app/models/Kanban';
import { faPen, faAngleLeft, faTrash, faSave, faBan } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  faPen = faPen;
  faAngleLeft = faAngleLeft;
  faTrash = faTrash;
  faSave = faSave;
  faBan = faBan;

  component: string = 'Done';
  collapsed!: number;
  isEditable: boolean = false;
  isCollapsed: boolean = false;
  conteudo: string = ''
  titulo: string = ''


  @Input() item = {} as Kanban;
  @Output() onDeleteKanban = new EventEmitter<Kanban>();
  @Output() onLeftKanban = new EventEmitter<Kanban>();
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

  onLeftArrow(kanban: Kanban) {
    this.onLeftKanban.emit(kanban);
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
