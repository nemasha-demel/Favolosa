import { z } from "zod";

const CreateProductDTO = z.object({
  categoryId: z.string().min(1),
  name: z.string().min(1),
  image: z.string().min(1),
  stock: z.number().int().nonnegative(),
  price: z.number().nonnegative(),
  description: z.string().min(1),
  attributes: z.record(z.string(), z.string()).optional(), 

});

export { CreateProductDTO };
