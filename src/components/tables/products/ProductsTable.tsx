import { IProductTable } from "./IProductTable";
import { ProductsTableView } from "./ProductsTableView";

export function ProductsTable({ data }: IProductTable) {
  return <ProductsTableView data={data} />
}
