import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./index";
import Category from "./entities/Category";
import stripe from "../stripe";
import Product from "./entities/Product";


const CATEGORY_NAMES = ["Rings", "Bracelets", "Earrings", "Necklaces", "Others"];

const ADJECTIVES = [
  "Elegant", "Sparkling", "Timeless", "Delicate", "Luxurious", "Charming", "Graceful", "Unique", "Stylish", "Classic",
  "Modern", "Vintage", "Radiant", "Brilliant", "Bold", "Refined", "Dazzling", "Sophisticated", "Gleaming", "Exquisite"
];

const NOUNS = [
  "Collection", "Design", "Set", "Style", "Edition", "Charm", "Piece", "Treasure", "Gem", "Jewel",
  "Ornament", "Touch", "Look", "Trend", "Vibe", "Aura", "Glow", "Shine", "Elegance", "Essence"
];

const COLORS = ["red", "blue", "green", "black", "white", "gold", "silver"];
const SIZES = ["S", "M", "L", "XL"];
const MATERIALS = ["cotton", "wool", "leather", "gold", "silver", "platinum"];

// ✅ Slugify
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")      
    .replace(/[^\w]+/g, "");  
}

function getRandomName(categoryName: string) {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  return `${adj} ${categoryName} ${noun}`;
}

const createProductsForCategory = async (categoryId: mongoose.Types.ObjectId, categoryName: string) => {
  const products: any[] = [];

  for (let i = 0; i < 10; i++) {
    try {
      const name = getRandomName(categoryName);
      const description = `This is a ${categoryName} that is ${name}`;
      const price = Math.floor(Math.random() * 100) + 10;

      // Pick random attributes
      const attributes = {
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: SIZES[Math.floor(Math.random() * SIZES.length)],
        material: MATERIALS[Math.floor(Math.random() * MATERIALS.length)],
      };

      // Create Stripe product
      const stripeProduct = await stripe.products.create({
        name,
        description,
      });

      //  Create Stripe price
      const stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        currency: "usd",
        unit_amount: price * 100,
      });

      // Push product to array
      products.push({
        categoryId,
        name,
        price,
        description,
        image: `https://placehold.co/150x150?text=${encodeURIComponent(categoryName)}`,
        stock: Math.floor(Math.random() * 50) + 1,
        reviews: [],
        stripePriceId: stripePrice.id,
        rating: Math.floor(Math.random() * 5) + 1,
        attributes, 
      });

    } catch (err) {
      console.error("Error creating product:", err);
    }
  }

  if (products.length > 0) {
    await Product.insertMany(products);
  }
};

const seed = async () => {
  try {
    await connectDB();
    console.log("Connected to DB");

    await Category.deleteMany({});
    await Product.deleteMany({});

    for (const name of CATEGORY_NAMES) {
      const category = await Category.create({
        name,
        slug: slugify(name),
      });

      await createProductsForCategory(category._id, name);
      console.log(`Seeded category: ${name}`);
    }

    console.log("Seeding complete.");
    process.exit(0);

  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seed();
