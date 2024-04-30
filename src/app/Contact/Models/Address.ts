import { ContactDetail } from './ContactDetail';
export class Address extends ContactDetail {
  constructor(id: string, value: string, pattern: string) {
    super(id, value, pattern);
  }
}
