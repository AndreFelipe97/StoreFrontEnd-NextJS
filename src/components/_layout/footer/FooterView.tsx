import { Layout, theme } from "antd";

const { Footer } = Layout;

export function FooterView() {
  const {
    token: {colorWhite },
  } = theme.useToken();
  
  return (
    <Footer style={{ textAlign: 'center', color: colorWhite }}>
      Design ©{new Date().getFullYear()} Created by André Freitas
    </Footer>
  );
}
