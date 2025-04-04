


import ProductList from "@/components/shared/product/product-list";
import { getLatestProds } from "@/lib/actions/product.action";
 
export default async function page() {
  
  
  const data = await getLatestProds()
  
  
  return (
    <ProductList data={data} title={"Newst Arrivals"} />
  )
}
