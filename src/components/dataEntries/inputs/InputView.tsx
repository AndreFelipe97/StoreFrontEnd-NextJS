import { Controller } from "react-hook-form";
import { Input as InputAntd} from 'antd';
import { IInputView } from "./IInputs";
import { InputContainer, Label } from "./InputStyles";

export function InputView({
  label,
  control,
  name,
  rules,
  placeholder,
  type,
}: IInputView) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <InputAntd
            {...field}
            type={type}
            placeholder={placeholder}
          />
        )}
      />
    </InputContainer>
  );
}
