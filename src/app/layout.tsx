import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ConfigProvider } from "antd";
import { themeConfig } from "@/definitions/antd/theme";
import { LayoutDefault } from "../components/_layout";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import BreadcrumbsProvider from "@/contexts/BreadcrumbsContext";
import TitleProvider from "@/contexts/TitleContext";
import TransactionsProvider from "@/contexts/Transactions";
import ProductsProvider from "@/contexts/ProductsContext";
import { GoogleSessionProvider } from "@/Providers/GoogleSessionProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "ERP - MBV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <ConfigProvider theme={themeConfig }>
          <AntdRegistry>
            <GoogleSessionProvider>
              <TitleProvider>
                <BreadcrumbsProvider>
                  <LayoutDefault>
                    <TransactionsProvider>
                      <ProductsProvider>
                        {children}
                      </ProductsProvider>
                    </TransactionsProvider>
                  </LayoutDefault>
                </BreadcrumbsProvider>
              </TitleProvider>
            </GoogleSessionProvider>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
