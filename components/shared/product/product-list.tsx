import { FC } from "react";
import ProductCard, { IProduct } from "./product-card";



interface Idata {
  products: Array<IProduct>;
}

interface IProductsList {
  data: Idata;
  title: string;
}

const ProductList: FC<IProductsList> = ({ data, title }) => {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      
      <div className="grid gap-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        
      {data.products.map((item) => (
        <ProductCard key={item.slug}  product={item} />
      ))}
        
      </div>
   
    </div>
  );
};

export default ProductList;
