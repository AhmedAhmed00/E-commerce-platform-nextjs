import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProductPriceProps {
  value: number;
  className: string;
}

const ProductPrice: FC<IProductPriceProps> = ({ value, className }) => {
  const stringVAlue = value.toFixed(2);
  const [intValue, floatValue] = stringVAlue.split("."); // arr of two items the before . is int and after . is float
  // destrucuring in two varables
  return <p className={`${cn("text-xl" ,className)}`}>
    <span className="text-xs align-super">$</span>
    {intValue}
    
    <span className="text-xs align-super">.{floatValue}</span>
  </p>;
};

export default ProductPrice;
