import { useContext, useState } from "react";
import { useRouter } from 'next/navigation'
import { SiderView } from "./SiderView";
import { BreadcrumbsContext } from "@/contexts/BreadcrumbsContext";


export function Sider() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter()
  const { setBreadcrumbNameFunction } = useContext(BreadcrumbsContext);

  return (
    <SiderView collapsed={collapsed} isCollapsed={() => setCollapsed(!collapsed)} navigate={router} configBreadcrumb={setBreadcrumbNameFunction} />
  );
}
