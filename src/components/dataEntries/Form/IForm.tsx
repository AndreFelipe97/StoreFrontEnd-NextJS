import { FormEventHandler, ReactNode } from "react";
import { UseFormHandleSubmit } from "react-hook-form";

export interface IForm {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
}
