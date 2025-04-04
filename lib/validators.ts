
import {z} from "zod"
import { formatNumberWithDecimal } from "./utils"

export const insertProductSchma = z.object({ 
    name:z.string().min(3,"name must be at least 3 letters"),
    slug:z.string().min(3,"name must be at least 3 letters"),
    category:z.string().min(3,"name must be at least 3 letters"),
    brand:z.string().min(3,"name must be at least 3 letters"),
    descerption:z.string().min(3,"name must be at least 3 letters"),
    stock:z.coerce.number(),
    images:z.array(z.string()).min(1,"product must have more than one"),
    isFeatured:z.boolean(),
    banner:z.string().nullable(),
    price:z.string().refine((value) => {/^\d+(\.\d{2}?$)?/.test(formatNumberWithDecimal(Number(value)))} , {message:"must have exactly two decimal places"}),
    
    
    
    
    
    
    
    
    
})