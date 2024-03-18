import { useContext, useState } from "react";
import { useRouter } from 'next/navigation'
import { SiderView } from "./SiderView";
import { BreadcrumbsContext } from "@/contexts/BreadcrumbsContext";
import { TitleContext } from "@/contexts/TitleContext";
import { MenuProps } from "antd";
import { LoadingContext } from "@/contexts/LoadingContext";


export function Sider() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter()
  const { setBreadcrumbNameFunction } = useContext(BreadcrumbsContext);
  const { setTitleFunction } = useContext(TitleContext);
  const { isLoading } = useContext(LoadingContext);

  const onClick: MenuProps['onClick'] = (e) => {
    isLoading(true);
    console.log('true');
    const keyPath = e.key.toString().split("/").filter((e) => e !== "");
    setTitleFunction(keyPath[keyPath.length - 1].charAt(0).toUpperCase() + keyPath[keyPath.length - 1].slice(1).toLowerCase());
    setBreadcrumbNameFunction(keyPath);
    router.push(e.key.toString());
  };

  return (
    <SiderView
      collapsed={collapsed}
      isCollapsed={() => setCollapsed(!collapsed)}
      onClick={onClick}
    />
  );
}
