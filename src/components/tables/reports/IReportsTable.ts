export interface IReportsTable {
  data: {
    id: number;
    title: string;
    value: number;
    category: string;
    transactionType: number;
    date: Date;
  }[]
}

export interface IReportsTableView {
  data: {
    id: number;
    title: string;
    value: string;
    valueNumber: number;
    category: string;
    transactionType: number;
    date: string;
  }[]
};

export interface TransactionsData {
  id: number;
  title: string;
  value: string;
  valueNumber: number;
  category: string;
  transactionType: number;
  date: string;
}
