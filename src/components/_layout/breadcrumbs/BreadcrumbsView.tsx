import { BreadcrumbsContext } from "@/contexts/BreadcrumbsContext";
import { Breadcrumb } from "antd";
import { useContext } from "react";

export function Breadcrumbs() {
  const { breadcrumbNames } = useContext(BreadcrumbsContext);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        breadcrumbNames.map((name: string) => (
          <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  );
}
