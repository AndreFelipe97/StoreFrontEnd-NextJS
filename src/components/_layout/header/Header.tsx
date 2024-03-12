import { useContext } from "react";
import { HeaderView } from "./HeaderView";
import { TitleContext } from "@/contexts/TitleContext";

export function Header() {
  const { title } = useContext(TitleContext);

  return (
    <HeaderView title={title} />
  )
}
