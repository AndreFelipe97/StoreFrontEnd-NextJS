import { FormContainer } from "./FormStyles";
import { IForm } from "./IForm";

export function FormView({onSubmit, children}: IForm) {
  return (
    <FormContainer onSubmit={onSubmit}>
      {children}
    </FormContainer>
  );
}
