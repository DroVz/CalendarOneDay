import { ContactDetail } from './ContactDetail';
export class Phone extends ContactDetail {
  constructor(id: string, value: string, pattern: string) {
    super(id, value, pattern);
  }
}
