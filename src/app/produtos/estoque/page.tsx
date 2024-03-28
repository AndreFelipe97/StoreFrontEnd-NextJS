"use client"
import { ProductsTable } from "@/components/tables/products/ProductsTable";
import { ProductsContext } from "@/contexts/ProductsContext";
import { useContext } from "react";

export default function ListProducts() {
  const { data } = useContext(ProductsContext);

  return (
    <ProductsTable data={data} />
  )
}
