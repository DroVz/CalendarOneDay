import { ContactDetail } from './ContactDetail';
export class Contact {
  public name: string;
  public contactDetails: ContactDetail[] | undefined;

  constructor(name: string) {
    this.name = name;
    this.contactDetails = [];
  }
}
