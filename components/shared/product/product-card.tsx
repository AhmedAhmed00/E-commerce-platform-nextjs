import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import ProductPrice from "./product-price";
import { Product } from "@/types";



const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const {
    brand,
    images,
    name,
    rating,

    slug,
    price,
  } = product;

  return (
    <Card>
      <CardHeader>
        <Link href={`product/${slug}`}>
          <Image priority width={300} height={300} src={images[0]} alt={name} />
        </Link>
      </CardHeader>
      <CardContent>
        <h3 className="text-xs ">{brand}</h3>

        <Link href={slug}>
          <p className="mt-2">{name}</p>
        </Link>

        <div className="flex-between gap-4">{rating} Stars</div>
        <div className="flex justify-between items-center">
          {product.stock > 0 ? (
            <p className="mt-2 text-">in the stock</p>
          ) : (
            <p className="mt-2 text-destructive">not in stock</p>
          )}

          <ProductPrice value={Number(price)} className="text-red-200" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
