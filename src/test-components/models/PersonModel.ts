import { PersonNamesModel } from "./PersonNamesModel";

export class PersonModel {
  constructor() {
    this.personNames = new PersonNamesModel();
    this.email = "";
  }

  public personNames: PersonNamesModel;

  public email: string;
}
