import { Contact } from '../Contact/Models/Contact';
export class Agenda {
  public id: string;
  public label: string;
  public contacts: Contact[];

  constructor(id: string, label: string, contacts: Contact[]) {
    this.id = id;
    this.contacts = contacts;
    this.label = label;
  }
}
