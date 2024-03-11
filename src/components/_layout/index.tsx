"use client"
import { Breadcrumb, Layout, theme } from "antd";
import { ILayout } from "./ILayout";
import { Sider } from "./sider/Sider";
import { HeaderView } from "./header/HeaderView";
import { Breadcrumbs } from "./breadcrumbs/BreadcrumbsView";
import { FooterView } from "./footer/FooterView";

const { Content, Footer } = Layout;

export function LayoutDefault({ children }: ILayout) {
  const {
    token: { colorBgContainer, borderRadiusLG, colorWhite },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <HeaderView />
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
            {children}
          </div>
        </Content>
        <FooterView />
      </Layout>
    </Layout>
  );
}
