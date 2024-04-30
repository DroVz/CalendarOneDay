import { Contact } from '../Contact/Models/Contact';
export class Agenda {
  public id: string;
  public label: string;
  public contacts: Contact[];

  constructor(id: string, label: string) {
    this.id = id;
    this.contacts = [
      new Contact('contact1'),
      new Contact('contact2'),
      new Contact('contact3'),
    ];
    this.label = label;
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  removeContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }
}
