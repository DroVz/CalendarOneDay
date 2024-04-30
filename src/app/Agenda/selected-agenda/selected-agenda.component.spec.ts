import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAgendaComponent } from './selected-agenda.component';

describe('SelectedAgendaComponent', () => {
  let component: SelectedAgendaComponent;
  let fixture: ComponentFixture<SelectedAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedAgendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
