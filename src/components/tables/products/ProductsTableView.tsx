import { Space, Table } from 'antd';
import { IProductTableData, IProductsTableView } from './IProductTable';
import { LinkAction } from './ProductsTableStyles';

const { Column } = Table;

export function ProductsTableView({ data }: IProductsTableView) {
  return (
    <Table dataSource={data}>
      <Column
        title="Produtos"
        dataIndex="title"
        key="title" 
        sortDirections={['descend', 'ascend']}
        sorter={(a: IProductTableData, b: IProductTableData) => a.title.localeCompare(b.title)}
      />
      <Column title="Preço" dataIndex="price" key="price" />
      <Column title="Quantidade" dataIndex="amount" key="amount" />
    </Table>
  );
}
