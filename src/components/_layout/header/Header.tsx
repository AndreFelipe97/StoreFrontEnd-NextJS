import { useContext } from "react";
import { HeaderView } from "./HeaderView";
import { TitleContext } from "@/contexts/TitleContext";
import { signOut } from "next-auth/react";

export function Header() {
  const { title } = useContext(TitleContext);

  return (
    <HeaderView title={title} signOut={signOut} />
  )
}
