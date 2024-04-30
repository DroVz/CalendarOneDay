import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agenda } from '../Agenda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-agenda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-agenda.component.html',
  styleUrl: './list-agenda.component.scss',
})
export class ListAgendaComponent {
  agendas: Agenda[];

  constructor(private router: Router) {
    this.agendas = [];
    this.agendas.push(new Agenda('1', 'Agenda 1'));
    this.agendas.push(new Agenda('2', 'Agenda 2'));
    this.agendas.push(new Agenda('3', 'Agenda 3'));
  }
  ngOnInit() {}

  goToContacts(agendaId: string) {
    this.router.navigate(['/contacts', { agendaId }]);
  }
}
