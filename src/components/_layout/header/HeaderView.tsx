import { LogoutOutlined } from '@ant-design/icons';

import { HeaderStyled } from "./HeaderStyles";

export function HeaderView() {

  return (
    <HeaderStyled>
      <h1>Title</h1>
      <button onClick={() => console.log("Deslogou!")}><LogoutOutlined /> Sair</button>
    </HeaderStyled>
  );
}
