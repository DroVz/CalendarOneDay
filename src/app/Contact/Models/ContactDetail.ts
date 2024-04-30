export abstract class ContactDetail {
  public id: string;
  public value: string;
  protected pattern: string;

  constructor(id: string, value: string, pattern: string) {
    this.id = id;
    this.value = value;
    this.pattern = pattern;
  }

  validate(): boolean {
    return new RegExp(this.pattern).test(this.value);
  }
}
