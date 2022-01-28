import { TextBox } from "../components/TextBox";
import { ObjectHelpers } from "../helpers/ObjectHelpers";

const useForm = function useForm<TModel>(model: TModel, validator?: any) {
  const labelFor = (selector: (model: TModel) => any) => {
    const modelName = ObjectHelpers.extractPropertyNameFromSelector(selector.toString());

    return (
      <label className="label-for" htmlFor={modelName}>
        {modelName}
      </label>
    );
  };

  const textBoxFor = (selector: (model: TModel) => any) => {
    const modelName = ObjectHelpers.extractPropertyNameFromSelector(selector.toString());

    return <TextBox validator={validator} modelRef={model} propName={modelName} />;
  };

  return {
    textBoxFor,
    labelFor,
  };
};

export default useForm;
