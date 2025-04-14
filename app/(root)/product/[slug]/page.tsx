import ProductImages from "@/components/shared/product/product-images";
import ProductPrice from "@/components/shared/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProduct } from "@/lib/actions/product.action";
import { notFound } from "next/navigation";

 const  ProductDetails = async ({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) => {
    const {slug} = await params
    const product = await getProduct(slug)
    if(!product)  return notFound()
 
 
    return ( <section>
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="col-span-3">
                    {/* images component */}
                    <ProductImages images={product.images} />
                </div>
                <div className="col-span-1 p-5">
                    <div className="flex flex-col gap-6">
                        <p>{product?.brand} {product?.category}</p>
                        <h1>{product?.name}</h1>
                        <p>{product?.rating} of {product?.numReviews}</p>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <ProductPrice value={Number(product?.price)} className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"/>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="font-semibold">Description</p>
                        <p>{product?.description}</p>
                    </div>
                    
                </div>
                <div>
                    <Card >
                        <CardContent className="p-4">
                            <div className="mb-2 flex justify-between">
                                <div>price</div>
                                <div>
                                    <ProductPrice value={Number(product?.price) } />
                                </div>
                            </div>
                            <div className="mb-2 flex justify-between">
                                <div>Status</div>
                                <div>{product?.stock > 0 ? (<Badge variant={"outline"}>In Stock</Badge>):
                                (<Badge variant={"destructive"}>Out Of Stock</Badge>)}</div>
                            </div>
                            <div>
                                {product.stock && (
                                    <div className="flex-center"> 
                                    <Button>Add To Cart</Button>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/* action col */}
               
                
                
            </div>
    </section> );
}
 
export default ProductDetails;