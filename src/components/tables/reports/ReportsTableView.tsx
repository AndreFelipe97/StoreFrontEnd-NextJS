import { Table } from 'antd';
import { IReportsTable } from './IReportsTable';
import { TableTransaction } from './ReportsTableStyles';

const { Column } = Table;

const data: IReportsTable[] = [
  {
    key: '1',
    title: 'Coca-cola',
    value: '8,00',
    category: 'Bebidas',
    type: 'whithdraw',
    date: new Date(),
  },
  {
    key: '2',
    title: 'Recebimento de cliente',
    value: '200,00',
    category: 'Vendas',
    type: 'deposit',
    date: new Date(),
  },
  {
    key: '3',
    title: 'Compras de produtos',
    value: '1000,00',
    category: 'Compras',
    type: 'whithdraw',
    date: new Date(),
  },
];

export function ReportsTableView() {
  return (
    <TableTransaction dataSource={data}>
      <Column title="Descrição" dataIndex="title" key="title" />
      <Column title="Valor" dataIndex="value" key="value" />
      <Column title="Categoria" dataIndex="category" key="category" />
      <Column title="Data" dataIndex="date" key="date" />
    </TableTransaction>
  );
}
