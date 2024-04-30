import { Injectable } from '@angular/core';
import { Agenda } from './Agenda';
import { AGENDAS } from './mock-agenda';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  agendas: Agenda[] = AGENDAS;
  constructor() {}

  getAgendas(): Agenda[] {
    return this.agendas;
  }

  getAgenda(id: string) {
    const agenda = this.agendas.find((agenda) => agenda.id === id);
    console.log(agenda);
    return agenda;
  }
}
