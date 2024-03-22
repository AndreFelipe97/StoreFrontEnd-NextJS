import { styled } from "@stitches/react";
import { Card } from "antd";

export const CardTotalContainer = styled(Card, {
  backgroundColor: "#00875F",
  '.ant-card-head-title': {
    color: "#FFF",
  },

  'svg': {
    height: '26px',
    width: '26px',
    marginRight: '8px',
  },

  'span': {
    fontWeight: 700,
    fontSize: "32px",
    marginLeft: "8px",
  }
})
