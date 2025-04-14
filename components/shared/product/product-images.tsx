"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useState } from "react";

interface IproductImages {
  images: Array<string>;
}

const ProductImages: FC<IproductImages> = ({ images }) => {
  const [current, setCurrent] = useState(0);

const handleImageChange = (index:number):void  =>{ 
    setCurrent(index)

}
  console.log(current);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="image"
        width={500}
        height={500}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex gap-6">
        {images.map((iamge, index) => (
          <>
            <div onClick={()=> handleImageChange(index)} 
            className={cn("w-[150px] h-[150px] relative" ,current === index && "border-[2px] border-red-900" )}
             key={index}>
              <Image src={iamge} alt="sdfdsf" fill />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
