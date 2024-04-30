import { Routes } from '@angular/router';
import { sign } from 'crypto';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { ListAgendaComponent } from './Agenda/list-agenda/list-agenda.component';
import { SelectedAgendaComponent } from './Agenda/selected-agenda/selected-agenda.component';

export const routes: Routes = [
  { path: 'contacts/:id', component: SelectedAgendaComponent },
  { path: 'agenda', component: ListAgendaComponent },
  { path: '', component: SignUpComponent },
];
