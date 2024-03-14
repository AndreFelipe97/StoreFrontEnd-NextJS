import { styled } from '@stitches/react';
import Link from 'next/link';

export const SiderTitle = styled('div', {
  color: '#FFF',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '16px 0',
  backgroundColor: '#121214',
  userSelect: 'none',
  cursor: 'pointer',
});

export const SiderTitleLink = styled(Link, {
  color: '#FFF',
  transition: 'color 0.3s',

  '&:hover': {
    color: '#00875F',
  },
});
