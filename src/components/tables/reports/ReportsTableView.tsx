import { Table } from 'antd';
import { IReportsTableView, TransactionsData } from './IReportsTable';
import { TableTransaction, ValueText } from './ReportsTableStyles';
import { Key } from 'react';

const { Column } = Table;

export function ReportsTableView({data}: IReportsTableView) {
  console.log(data);
  return (
    <TableTransaction dataSource={data}>
      <Column
        title="Descrição"
        dataIndex="title"
        key="title"
        sortDirections={['descend', 'ascend']}
        sorter={(a: TransactionsData, b: TransactionsData) => a.title.localeCompare(b.title)}
      />
      <Column
        title="Valor"
        dataIndex="value"
        key="value"
        render={(value: string, record: TransactionsData) => (
          <ValueText color={record.transactionType === 1 ? 'deposit' : 'withdraw'}>
            {value}
          </ValueText>
        )}
        sorter={(a:TransactionsData, b:TransactionsData) => a.valueNumber - b.valueNumber}
        filters={[
          {
            text: 'Entrada',
            value: 1,
          },
          {
            text: 'Saída',
            value: 2,
          },
        ]}
        filterMode='tree'
        filterSearch={true}
        onFilter={(value: boolean | Key, record: TransactionsData) => record.transactionType === value}
      />
      <Column
        title="Categoria"
        dataIndex="category"
        key="category"
      />
      <Column
        title="Data"
        dataIndex="date"
        key="date"
      />
    </TableTransaction>
  );
}
