import { IInputComponent } from "./IInputComponent";
import { InputComponentView } from "./InputComponentView";

export function InputComponent({ identification, label, placeholder, size}: IInputComponent) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return <InputComponentView
    identification={identification} 
    label={label}
    placeholder={placeholder}
    size={size}
  />
}
