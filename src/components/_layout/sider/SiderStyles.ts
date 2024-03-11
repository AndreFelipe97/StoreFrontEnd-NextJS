import { styled } from '@stitches/react';

export const SiderTitle = styled('div', {
  color: '#FFF',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '16px 0',
  backgroundColor: '#121214',
  userSelect: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#1890ff',
  },
});
