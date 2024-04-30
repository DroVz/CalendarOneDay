import { Contact } from '../Contact/Models/Contact';
import { Agenda } from './Agenda';

export const AGENDAS: Agenda[] = [
  {
    id: '1',
    label: 'Agenda 1',
    contacts: [
      { name: 'Pedro', contactDetails: [] },
      { name: 'Juan', contactDetails: [] },
      { name: 'Diego', contactDetails: [] },
      { name: 'Carlos', contactDetails: [] },
    ],
  },
  {
    id: '2',
    label: 'Agenda 2',
    contacts: [
      { name: 'Alex', contactDetails: [] },
      { name: 'Diego', contactDetails: [] },
      { name: 'Carl', contactDetails: [] },
      { name: 'Jeane', contactDetails: [] },
    ],
  },
  {
    id: '3',
    label: 'Agenda 3',
    contacts: [
      { name: 'Megan', contactDetails: [] },
      { name: 'Rulio', contactDetails: [] },
      { name: 'Jb', contactDetails: [] },
      { name: 'Erwan', contactDetails: [] },
    ],
  },
];
