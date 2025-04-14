'use server'

import { convertToPlainObj } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constatnts";
import { prisma } from "@/db/prisma";
import { Product } from "@/types";


// Get Latest Prods

export async function getLatestProds(){ 

    const data = await prisma.product.findMany({
        take:LATEST_PRODUCTS_LIMIT,
        orderBy:{createdAt:"desc"},
        
    })
    
    return convertToPlainObj<Product[]>(data) 
} 


export async function getProduct(slug:string){ 
    return await prisma.product.findFirst({ 
        where:{slug:slug},
    })
  
}