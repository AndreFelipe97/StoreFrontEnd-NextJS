"use client"
import { Breadcrumb, Layout, theme } from "antd";
import { ILayout } from "./ILayout";
import { Sider } from "./sider/Sider";
import { HeaderView } from "./header/HeaderView";
import { Breadcrumbs } from "./breadcrumbs/BreadcrumbsView";
import { FooterView } from "./footer/FooterView";
import { Header } from "./header/Header";
import { Loading } from "./loading/LoadingView";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "@/contexts/LoadingContext";

const { Content } = Layout;

export function LayoutDefault({ children }: ILayout) {
  const {
    token: { colorBgContainer, borderRadiusLG, colorWhite },
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
