import { Col, Input } from "antd";
import { IInputComponent } from "./IInputComponent";
import { InputContainer } from "./InputComponentStyles";

export function InputComponentView({ identification, label, placeholder, size}: IInputComponent) {
  return (
    <InputContainer span={size}>
      <label>{label}</label>
      <Input id={identification} name={identification} placeholder={placeholder} />
    </InputContainer>
  )
}
