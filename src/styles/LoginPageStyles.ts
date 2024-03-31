import { styled } from '@stitches/react';

export const LoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  gap: '2.5rem',
});

export const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Title = styled('h1', {
  color: '#FFF',
  fontSize: '2rem',
});

export const Subtitle = styled('p', {
  color: '#FFF',
  fontSize: '1rem',
});

export const LoginButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  height: '3rem',
  width: 'auto',
  borderRadius: '0.5rem',
  backgroundColor: '#FFF',
  color: '#00875F',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  border: 'none',
  padding: '0 2rem',

  '&:hover': {
    backgroundColor: '#00875F',
    color: '#fff',
  },
});
