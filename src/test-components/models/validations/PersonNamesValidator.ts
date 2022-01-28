import BaseValidator from "../../../validations/BaseValidator";
import { PersonNamesModel } from "../PersonNamesModel";

export default class PersonNamesValidator extends BaseValidator<PersonNamesModel> {
  constructor() {
    super();

    this.ruleFor((x) => x.firstName).required();
    this.ruleFor((x) => x.lastName).required();
  }
}
