import { styled } from '@stitches/react';
import { Table } from 'antd';

export const TableTransaction = styled(Table, {
  marginTop: '16px',
});

export const ValueText = styled('div', {
  color: "#00875F",
  variants: {
    color: {
      deposit: {
        color: "#00875F",
      },
      withdraw: {
        color: "#F75A68",
      },
    }
  }
})
