import {
  DollarOutlined
} from '@ant-design/icons';
import { ICardTotalViewProps } from "./ICardTotal";
import { CardTotalContainer } from "./CardTotalStyles";

export function CardTotalView({
  value,
}: ICardTotalViewProps) {  
  return (
    <CardTotalContainer title="Total" bordered={false}>
      <DollarOutlined />
      <span>{value}</span>
    </CardTotalContainer>
  );
}
