"use client"
import { Layout, theme } from "antd";
import { ILayout } from "./ILayout";
import { Sider } from "./sider/Sider";
import { Breadcrumbs } from "./breadcrumbs/BreadcrumbsView";
import { FooterView } from "./footer/FooterView";
import { Header } from "./header/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { Content } = Layout;

export function LayoutDefault({ children }: ILayout) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {status} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status]);

  return (
    <>
      {
        status === 'authenticated' ? (
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
        ) : (
          <Layout style={{ minHeight: '100vh' }}>
            <Layout>
              <Content style={{ margin: '0 16px' }}>
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
            </Layout>
          </Layout>
        )
      }
    </>
  );
}
