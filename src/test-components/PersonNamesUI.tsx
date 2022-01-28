import { FC, memo } from "react";
import useForm from "../hooks/useForm";
import { PersonNamesModel } from "./models/PersonNamesModel";
import PersonNamesValidator from "./models/validations/PersonNamesValidator";

interface PersonNamesFormProps {
  initialModel: PersonNamesModel;
}

const PersonNamesForm: FC<PersonNamesFormProps> = ({ initialModel }) => {
  const { textBoxFor, labelFor } = useForm<PersonNamesModel>(initialModel, new PersonNamesValidator());

  console.log("PersonNamesForm");
  return (
    <div className="row g-3">
      <div className="col">
        {labelFor((x) => x.firstName)}
        {textBoxFor((x) => x.firstName)}
      </div>
      <div className="col">
        {labelFor((x) => x.lastName)}
        {textBoxFor((x) => x.lastName)}
      </div>
    </div>
  );
};

export default PersonNamesForm;
