import { useEffect, useState } from "react";
import { CardTotalView } from "./CardTotalView";
import { ICardTotalProps } from "./ICardTotal";

export function CardTotal({value}: ICardTotalProps) {
  const [valueFormated, setValueFormated] = useState("");

  useEffect(() => {
    const newValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
    setValueFormated(newValue);
  }, [value]);

  return <CardTotalView value={valueFormated} />
}
