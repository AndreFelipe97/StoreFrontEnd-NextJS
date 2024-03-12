import { LogoutOutlined } from '@ant-design/icons';

import { HeaderStyled } from "./HeaderStyles";
import { IHeader } from './IHeader';

export function HeaderView({ title }: IHeader) {
  return (
    <HeaderStyled>
      <h1>{title}</h1>
      <button onClick={() => console.log("Deslogou!")}><LogoutOutlined /> Sair</button>
    </HeaderStyled>
  );
}
