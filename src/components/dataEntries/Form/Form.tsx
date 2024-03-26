import { FormView } from "./FormView";
import { IForm } from "./IForm";

export function Form({onSubmit, children}: IForm) {
  return (
    <FormView onSubmit={onSubmit}>
      {children}
    </FormView>
  );
}
