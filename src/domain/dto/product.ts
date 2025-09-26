import { z } from "zod";

const CreateProductDTO = z.object({
  categoryId: z.string().min(1),
  name: z.string().min(1),
  image: z.string().min(1),
  stock: z.number().int().nonnegative(),
  price: z.number().nonnegative(),
  description: z.string().min(1),

  // ✅ New field for dynamic attributes
  attributes: z.record(z.string(), z.string()).optional(), 
  // Example: { material: "Gold", color: "Rose", size: "7" }
});

export { CreateProductDTO };
