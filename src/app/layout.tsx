import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ConfigProvider } from "antd";
import { themeConfig } from "@/definitions/antd/theme";
import { LayoutDefault } from "../components/_layout";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import BreadcrumbsProvider from "@/contexts/BreadcrumbsContext";
import TitleProvider from "@/contexts/TitleContext";
import LoadingProvider from "@/contexts/LoadingContext";
import TransactionsProvider from "@/contexts/Transactions";
import ProductsProvider from "@/contexts/ProductsContext";

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
            <TitleProvider>
              <BreadcrumbsProvider>
                <LoadingProvider>
                  <LayoutDefault>
                    <TransactionsProvider>
                      <ProductsProvider>
                        {children}
                      </ProductsProvider>
                    </TransactionsProvider>
                  </LayoutDefault>
                </LoadingProvider>
              </BreadcrumbsProvider>
            </TitleProvider>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
