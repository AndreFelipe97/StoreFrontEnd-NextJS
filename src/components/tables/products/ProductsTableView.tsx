import { Space, Table } from 'antd';
import { IProductTable } from './IProductTable';
import { LinkAction } from './ProductsTableStyles';

const { Column } = Table;

const data: IProductTable[] = [
  {
    key: '1',
    product: 'Arroz',
    price: '5,50',
    amount: 10,
  },
  {
    key: '2',
    product: 'Feijão',
    price: '7,00',
    amount: 10,
  },
  {
    key: '3',
    product: 'Macarrrão',
    price: '6,00',
    amount: 10,
  },
];

export function ProductsTableView() {
  return (
    <Table dataSource={data}>
      <Column title="Produtos" dataIndex="product" key="product" />
      <Column title="Preço" dataIndex="price" key="price" />
      <Column title="Quantidade" dataIndex="amount" key="amount" />
      <Column
        title=""
        key="action"
        render={(_: any, record: IProductTable) => (
          <Space size="middle">
            <LinkAction href='#'>Atualizar</LinkAction>
            <LinkAction href='#'>Deleta</LinkAction>
          </Space>
        )}
      />
    </Table>
  );
}
