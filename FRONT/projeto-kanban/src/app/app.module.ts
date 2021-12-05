import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './components/templates/login/login.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { KanbanComponent } from './components/templates/kanban/kanban.component';
import { KanbanDoneComponent } from './components/templates/kanban/kanban-done/kanban-done.component';
import { KanbanDoingComponent } from './components/templates/kanban/kanban-doing/kanban-doing.component';
import { KanbanNewComponent } from './components/templates/kanban/kanban-new/kanban-new.component';
import { KanbanTodoComponent } from './components/templates/kanban/kanban-todo/kanban-todo.component';
import { DoneComponent } from './components/templates/kanban/kanban-done/done/done.component';
import { DoingComponent } from './components/templates/kanban/kanban-doing/doing/doing.component';
import { TodoComponent } from './components/templates/kanban/kanban-todo/todo/todo.component';

import { KanbanService } from './components/templates/kanban/kanban.service';
import { MensagemComponent } from './components/templates/mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    KanbanComponent,
    KanbanDoneComponent,
    KanbanDoingComponent,
    KanbanNewComponent,
    KanbanTodoComponent,
    DoneComponent,
    DoingComponent,
    TodoComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [KanbanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
