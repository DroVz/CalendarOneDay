import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ListAgendaComponent } from '../list-agenda/list-agenda.component';
import { ListContactComponent } from '../../Contact/list-contact/list-contact.component';
import { Agenda } from '../Agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-selected-agenda',
  standalone: true,
  imports: [ListAgendaComponent, ListContactComponent],
  templateUrl: './selected-agenda.component.html',
  styleUrl: './selected-agenda.component.scss',
})
export class SelectedAgendaComponent {
  agenda: Agenda | undefined;
  constructor(
    private agendaService: AgendaService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.agenda = this.agendaService.getAgenda(id);
    }
  }
}
