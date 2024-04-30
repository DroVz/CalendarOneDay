import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { Agenda } from '../../Agenda/Agenda';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from '../../Agenda/agenda.service';

@Component({
  selector: 'app-list-contact',
  standalone: true,
  imports: [CommonModule, ContactCardComponent],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.scss',
})
export class ListContactComponent {
  agenda: Agenda | undefined;

  constructor(
    private route: ActivatedRoute,
    private agendaService: AgendaService
  ) {}

  NgOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.agenda = this.agendaService.getAgenda(id);
    }
  }
}
