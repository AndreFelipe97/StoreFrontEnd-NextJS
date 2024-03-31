import { LogoutOutlined } from '@ant-design/icons';

import { HeaderStyled } from "./HeaderStyles";
import { IHeader } from './IHeader';

export function HeaderView({ title, signOut }: IHeader) {
  return (
    <HeaderStyled>
      <h1>{title}</h1>
      <button onClick={() => signOut()}><LogoutOutlined /> Sair</button>
    </HeaderStyled>
  );
}
