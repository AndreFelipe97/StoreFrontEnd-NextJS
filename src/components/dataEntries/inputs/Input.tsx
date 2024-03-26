
import { IInput } from "./IInputs";
import { InputView } from "./InputView";

export function Input({
  label,
  control,
  name,
  rules,
  placeholder,
  type,
  ...rest
}: IInput) {
  return <InputView 
    label={label}
    control={control}
    name={name}
    rules={rules}
    placeholder={placeholder}
    type={type}
  />;
}
