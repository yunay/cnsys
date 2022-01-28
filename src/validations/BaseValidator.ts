import { ObjectHelpers } from "../helpers/ObjectHelpers";

export interface IPropValidityInfo {
  isValid: boolean;
  errorMessages?: string[];
}

export interface IModelErrors {
  propName: string;
  errorsMessages: string[];
}

export interface IValidation<TModel> {
  propName: string;
  validationRule: (model: TModel, value: any) => IPropValidityInfo;
}

export interface IBaseValidator {
  validateByPropertyName(propName: string): void;
}

export default class BaseValidator<TModel> {
  constructor() {}

  public modelErrors: IModelErrors[] = [];
  public validations: IValidation<TModel>[] = [];

  public addError(propName: string) {
    if (this.modelErrors.length > 0) {
      const propNameVal = this.modelErrors.find((x) => x.propName === propName);

      if (!propNameVal) {
        propNameVal.errorsMessages = ["error"];
      } else {
        propNameVal.propName = propName;
        propNameVal.errorsMessages.push("error");
      }
    }
  }

  public removeError(propName: string) {}

  protected ruleFor(selector: (model: TModel) => any) {
    return {
      required: () => {
        this.validations.push({ propName: ObjectHelpers.extractPropertyNameFromSelector(selector.toString()), validationRule: this.doValidate().required });
      },
    };
  }

  private doValidate() {
    return {
      required: (model: TModel, value: any): IPropValidityInfo => {
        if (value) {
          return {
            isValid: true,
          };
        }

        return {
          isValid: false,
          errorMessages: ["error"],
        };
      },
    };
  }

  public validateProp(propName: string, model: TModel): IPropValidityInfo {
    const propValidations = this.validations.filter((x) => x.propName == propName);
    const allPropValidityInfo: IPropValidityInfo[] = [];
    const propValidityInfo: IPropValidityInfo = {
      isValid: false,
      errorMessages: [],
    };

    propValidations.forEach((propValidation) => {
      allPropValidityInfo.push(propValidation.validationRule(model, (model as any)[propName]));
    });

    for (const currentPropValidityInfo of allPropValidityInfo) {
      if (currentPropValidityInfo.isValid) {
        propValidityInfo.isValid = true;
      }

      if (currentPropValidityInfo.errorMessages && currentPropValidityInfo.errorMessages.length > 0) {
        propValidityInfo.errorMessages.push(...currentPropValidityInfo.errorMessages);
      }
    }

    return propValidityInfo;
  }

  protected validate(model: TModel) {}
}
