'use server'

import { convertToPlainObj } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constatnts";
import { prisma } from "@/db/prisma";


// Get Latest Prods

export async function getLatestProds(){ 

    const data = await prisma.product.findMany({
        take:LATEST_PRODUCTS_LIMIT,
        orderBy:{createdAt:"desc"},
        
    })
    
    return convertToPlainObj(data) 
} 