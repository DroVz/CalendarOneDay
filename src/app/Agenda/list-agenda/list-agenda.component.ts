import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agenda } from '../Agenda';
import { Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-list-agenda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-agenda.component.html',
  styleUrl: './list-agenda.component.scss',
})
export class ListAgendaComponent {
  agendas: Agenda[];

  constructor(private router: Router, private agendaService: AgendaService) {
    this.agendas = [];
  }

  ngOnInit() {
    this.agendas = this.agendaService.getAgendas();
  }

  goToContacts(agenda: Agenda) {
    this.router.navigate(['/contacts', agenda.id]);
  }
}
