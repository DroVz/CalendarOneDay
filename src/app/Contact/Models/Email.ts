import { ContactDetail } from './ContactDetail';
export class Email extends ContactDetail {
  constructor(id: string, value: string, pattern: string) {
    super(id, value, pattern);
  }
}
