"use client"
import { CardTotal } from "@/components/cards/total/CardTotal";
import { CardTransaction } from "@/components/cards/transactions/CardTransactios";
import { ReportsTable } from "@/components/tables/reports/ReportsTable";
import { Col, Row } from "antd";

export default function Reports() {
  return (
    <>
      <Row gutter={16}>
        <Col xs={24} lg={8}>
          <CardTransaction title="Entrada" type="deposit" value={1000} />
        </Col>
        <Col xs={24} lg={8}>
          <CardTransaction title="Saida" type="withdraw" value={500} />
        </Col>
        <Col xs={24} lg={8}>
          <CardTotal value={500} /> 
        </Col>
      </Row>
      <ReportsTable />
    </>
  );
}
