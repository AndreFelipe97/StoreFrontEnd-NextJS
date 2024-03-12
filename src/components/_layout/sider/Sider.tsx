import { useState } from "react";
import { useRouter } from 'next/navigation'
import { SiderView } from "./SiderView";


export function Sider() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter()

  return (
    <SiderView collapsed={collapsed} isCollapsed={() => setCollapsed(!collapsed)} navigate={router} />
  );
}
