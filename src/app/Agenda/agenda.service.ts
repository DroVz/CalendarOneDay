import { Injectable } from '@angular/core';
import { Agenda } from './Agenda';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  constructor() {}

  getAgendas(): Agenda[] {
    return [
      new Agenda('1', 'Agenda 1'),
      new Agenda('2', 'Agenda 2'),
      new Agenda('3', 'Agenda 3'),
    ];
  }

  getAgenda(id: string) {
    return this.getAgendas().find((agenda) => agenda.id === id);
  }
}
