


import ProductList from "@/components/shared/product/product-list";
import sampleData from "../data/sample-data"
 
export default async function page() {
  
  console.log(sampleData);
  return (
    <ProductList data={sampleData} title={"Newst Arrivals"} />
  )
}
