export interface ICardTransactionProps {
  type: "deposit" | "withdraw";
  title: string;
  value: number;
}

export interface ICardTransactionViewProps {
  type: "deposit" | "withdraw";
  title: string;
  value: string;
}
