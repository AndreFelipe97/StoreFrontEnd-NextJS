import { Layout, Menu, MenuProps } from 'antd';
import {
  PieChartOutlined,
  ShoppingCartOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import { SiderTitle } from './SiderStyles';

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
  getItem('Relatórios', 'transaction', <PieChartOutlined />),
  getItem('Vendas', 'sales', <ShoppingCartOutlined />),
  getItem('Produtos', 'products', <ProfileOutlined />, [getItem('Estoque', 'stock'), getItem('Cadastrar produto', 'add-product')]),
];

interface SiderViewProps {
  collapsed: boolean;
  isCollapsed: (value: boolean) => void;
}

export function SiderView({collapsed, isCollapsed}: SiderViewProps) {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={isCollapsed}>
      <SiderTitle>MBV</SiderTitle>
      <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  );
}
