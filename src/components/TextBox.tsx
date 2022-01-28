import { useState } from "react";
import { IPropValidityInfo } from "../validations/BaseValidator";

export interface ITextBoxProps {
  propName: string;
  handleChange?: (e: any) => void;
  modelRef: any;
  validator: any;
}

export const TextBox: React.FC<ITextBoxProps> = ({ propName, handleChange, modelRef, validator }) => {
  const [propValidityInfo, setPropValidityInfo] = useState<IPropValidityInfo>(null);
  console.log("txtbox");
  const handleChangeInternal = (e: any) => {
    const { name, value } = e.target;

    (modelRef as any)[name] = value;

    if (validator) {
      const info = validator.validateProp(name, modelRef);
      setPropValidityInfo(info);
    }
  };
  return (
    <>
      <input type="text" className={`form-control ${propValidityInfo && !propValidityInfo.isValid ? "is-invalid" : ""}`} onChange={handleChangeInternal} name={propName} />
      {propValidityInfo && !propValidityInfo.isValid && propValidityInfo.errorMessages && propValidityInfo.errorMessages.length > 0 && (
        <div className="invalid-feedback">
          {propValidityInfo.errorMessages.map((errorMessage, key) => {
            return <div key={key}>{errorMessage}</div>;
          })}
        </div>
      )}
    </>
  );
};
