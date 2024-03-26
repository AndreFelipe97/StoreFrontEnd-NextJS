import { Layout, Menu, MenuProps } from 'antd';
import {
  PieChartOutlined,
  TransactionOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import { SiderTitle, SiderTitleLink } from './SiderStyles';
import { SiderViewProps } from './ISider';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Relatórios', '/relatorios', <PieChartOutlined />),
  getItem('Castrar nova transação', '/transacoes/cadastros', <TransactionOutlined />),
  getItem('Produtos', 'products', <ProfileOutlined />, [getItem('Estoque', '/produtos/estoque'), getItem('Cadastrar produto', '/produtos/cadastrar')]),
];

export function SiderView({collapsed, isCollapsed, onClick}: SiderViewProps) {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={isCollapsed}>
      <SiderTitle><SiderTitleLink href="/relatorios">MBV</SiderTitleLink></SiderTitle>
      <Menu defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClick} />
    </Sider>
  );
}
