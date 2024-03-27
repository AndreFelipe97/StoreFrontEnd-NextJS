"use client"
import { CardTotal } from "@/components/cards/total/CardTotal";
import { CardTransaction } from "@/components/cards/transactions/CardTransactios";
import { ReportsTable } from "@/components/tables/reports/ReportsTable";
import { TransactionsContext } from "@/contexts/Transactions";
import { Col, Row } from "antd";
import { useContext } from "react";

export default function Reports() {
  const { data, deposit, withdraw, total } = useContext(TransactionsContext);

  return (
    <>
      <Row gutter={16}>
        <Col xs={24} lg={8}>
          <CardTransaction title="Entrada" type="deposit" value={deposit} />
        </Col>
        <Col xs={24} lg={8}>
          <CardTransaction title="Saida" type="withdraw" value={withdraw} />
        </Col>
        <Col xs={24} lg={8}>
          <CardTotal value={total} /> 
        </Col>
      </Row>
      <ReportsTable data={data} />
    </>
  );
}
