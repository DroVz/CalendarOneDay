import { ContactDetail } from './ContactDetail';
export class Contact {
  public name: string;
  public contactDetails: ContactDetail[];

  constructor(name: string) {
    this.name = name;
    this.contactDetails = [];
  }
}
