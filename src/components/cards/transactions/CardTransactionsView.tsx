import { useEffect, useState } from "react";
import { Card, theme } from 'antd';
import {
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import { ICardTransactionViewProps } from "./ICardTransactions";
import { CardContainer } from "./CardTransactionsStyles";

export function CardTransactionView({
  type,
  title,
  value,
}: ICardTransactionViewProps) {
  const {
    token: {colorPrimary, colorWarning },
  } = theme.useToken();

  return (
    <CardContainer title={title} bordered={false}>
      {type === "deposit" ? (
        <ArrowUpOutlined style={{ color: "#00875F"}} />
      ) : (
        <ArrowDownOutlined style={{ color: "#F75A68" }} />
      )}
      <span>{value}</span>
    </CardContainer>
  );
}
