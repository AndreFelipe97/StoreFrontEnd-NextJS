import { Spin } from "antd";
import { LoadingContainer } from "./LoadingStyles";

export function Loading() {
  return (
    <LoadingContainer>
      <Spin size="large" />
    </LoadingContainer>
  );
}
