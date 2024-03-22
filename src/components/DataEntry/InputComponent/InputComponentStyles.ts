import { styled } from "@stitches/react";
import { Col } from "antd";

export const InputContainer = styled(Col, {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  '&:not(:last-child)': {
    marginBottom: '16px',
  },

  'label': {
    fontSize: '16px',
    color: '#FFF',
    fontWeight: 700,
  }
});
