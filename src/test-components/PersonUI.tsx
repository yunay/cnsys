import useForm from "../hooks/useForm";
import { PersonModel } from "./models/PersonModel";
import PersonModelValidator from "./models/validations/PersonModelValidator";
import PersonNamesForm from "./PersonNamesUI";

interface IPersonFormProps {
  initialModel: PersonModel;
}

const PersonUI: React.FC<IPersonFormProps> = ({ initialModel }) => {
  const { textBoxFor, labelFor } = useForm<PersonModel>(initialModel, new PersonModelValidator());

  const submitForm = () => {
    console.log(initialModel);
  };

  console.log("PersonForm");

  return (
    <div className="container">
      <h2 className="text-primary">Person Data</h2>

      <div className="row">
        <PersonNamesForm initialModel={initialModel.personNames} />
      </div>
      <div className="mb-3">
        {labelFor((x) => x.email)}
        {textBoxFor((x) => x.email)}
      </div>
      <hr />
      <div className="row">
        <div className="col-3">
          <button className="btn-primary" onClick={submitForm}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonUI;
