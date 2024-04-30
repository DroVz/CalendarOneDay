import { Routes } from '@angular/router';
import { sign } from 'crypto';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { ListAgendaComponent } from './Agenda/list-agenda/list-agenda.component';

export const routes: Routes = [
  { path: 'agenda', component: ListAgendaComponent },
  { path: '', component: SignUpComponent },
  //TODO :
];
