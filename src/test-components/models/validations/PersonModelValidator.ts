import BaseValidator from "../../../validations/BaseValidator";
import { PersonModel } from "../PersonModel";

export default class PersonModelValidator extends BaseValidator<PersonModel> {
  constructor() {
    super();

    this.ruleFor((x) => x.email).required();
  }
}
