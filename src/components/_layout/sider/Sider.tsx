import { useState } from "react";
import { SiderView } from "./SiderView";

export function Sider() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SiderView collapsed={collapsed} isCollapsed={() => setCollapsed(!collapsed)} />
  );
}
