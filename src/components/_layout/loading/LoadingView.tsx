import { Spin } from "antd";

export function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    }}>
      <Spin size="large" />
    </div>
  );
}
