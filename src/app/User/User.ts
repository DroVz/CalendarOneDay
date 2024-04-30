export class User {
  public id: string;
  public login: string;
  private password: string;
  private jwt: string;

  constructor(id: string, login: string, password: string, jwt: string) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.jwt = jwt;
  }
}
