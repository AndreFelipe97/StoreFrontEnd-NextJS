import { Radio } from "antd";
import { Controller } from "react-hook-form";
import { IRadioButtonView } from "./IRadioButton";

export function RadioButton({
  control,
  name,
}: IRadioButtonView) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={1}
      render={({ field }) => (
        <Radio.Group {...field}>
          <Radio value={1}>Entrada</Radio>
          <Radio value={2}>Saída</Radio>
        </Radio.Group>
      )}
    />
  )
}
