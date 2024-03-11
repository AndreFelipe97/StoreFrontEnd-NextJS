import { styled } from '@stitches/react';
import { Layout } from "antd";

const { Header } = Layout;

export const HeaderStyled = styled(Header, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  'h1': {
    color: '#FFF',
    margin: '0'
  },

  'button': {
    backgroundColor: 'transparent',
    color: '#FFF',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
  }
})
