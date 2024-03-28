export interface IProductTable {
  data: {
    id: number;
    title: string;
    brand: string;
    price: number;
    amount: number;
    barCode: string;
  }[]
}

export interface IProductsTableView {
  data: {
    id: number;
    title: string;
    brand: string;
    price: number;
    amount: number;
    barCode: string;
  }[]
};

export interface IProductTableData {
  key: React.Key;
  title: string;
  price: string;
  amount: number;
};
