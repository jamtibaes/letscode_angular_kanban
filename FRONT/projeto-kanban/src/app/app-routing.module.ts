import { GuardServiceService } from './autenticacao/guard-service.service';
import { KanbanComponent } from './components/templates/kanban/kanban.component';
import { LoginComponent } from './components/templates/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'kanban', component: KanbanComponent, canActivate: [GuardServiceService] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
