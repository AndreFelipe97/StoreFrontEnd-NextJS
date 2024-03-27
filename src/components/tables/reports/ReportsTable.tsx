import { useEffect, useState } from "react";
import { IReportsTable, TransactionsData } from "./IReportsTable";
import { ReportsTableView } from "./ReportsTableView";

export function ReportsTable({data}: IReportsTable) {
  const [transactions, setTransactions] = useState<TransactionsData[]>([]);

  useEffect(() => {
    const newTransactions = data.map((transaction) => {
      return {
        ...transaction,
        date: new Date().toLocaleDateString("pt-BR", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        valueNumber: transaction.value,
        value: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(transaction.value),
      };
    });
    setTransactions(newTransactions);
  }, [data]);

  return <ReportsTableView data={transactions} />
}
