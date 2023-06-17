import React from "react"
import ProductList from "../../components/Product/ProductList"
import Filter from "../../components/Product/Filter"

export default function Product() {
  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        <Filter />
      </div>
      <div className="w-2/3 p-4">
        <ProductList />
      </div>
    </div>
  )
}
