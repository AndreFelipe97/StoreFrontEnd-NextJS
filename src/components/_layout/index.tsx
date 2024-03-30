"use client"
import { Layout, theme } from "antd";
import { ILayout } from "./ILayout";
import { Sider } from "./sider/Sider";
import { Breadcrumbs } from "./breadcrumbs/BreadcrumbsView";
import { FooterView } from "./footer/FooterView";
import { Header } from "./header/Header";

const { Content } = Layout;

export function LayoutDefault({ children }: ILayout) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Header />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumbs />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
              { children }
          </div>
        </Content>
        <FooterView />
      </Layout>
    </Layout>
  );
}
