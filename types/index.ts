import { insertProductSchma } from "@/lib/validators";
import { z } from "zod";

export type Product = z.infer<typeof insertProductSchma> & { 
    id:string;
    rating:string;
}