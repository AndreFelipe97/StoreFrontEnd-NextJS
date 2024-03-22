import { useEffect, useState } from "react";
import { CardTransactionView } from "./CardTransactionsView";
import { ICardTransactionProps } from "./ICardTransactions";

export function CardTransaction({title, type, value}: ICardTransactionProps) {
  const [valueFormated, setValueFormated] = useState("");

  useEffect(() => {
    const newValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
    setValueFormated(newValue);
  }, [value]);

  return <CardTransactionView title={title} type={type} value={valueFormated} />
}
