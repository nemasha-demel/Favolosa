import "dotenv/config";
import { connectDB } from "./index";
import Category from "./entities/Category";
import Product from "./entities/Product";
import stripe from "../stripe";

const CATEGORY_NAMES = ["Rings", "Bracelets", "Earrings", "Necklaces", "Others"];

const ADJECTIVES = [
  "Elegant", "Sparkling", "Timeless", "Delicate", "Luxurious", "Charming", "Graceful", "Unique", "Stylish", "Classic",
  "Modern", "Vintage", "Radiant", "Brilliant", "Bold", "Refined", "Dazzling", "Sophisticated", "Gleaming", "Exquisite"
];

const NOUNS = [
  "Collection", "Design", "Set", "Style", "Edition", "Charm", "Piece", "Treasure", "Gem", "Jewel",
  "Ornament", "Touch", "Look", "Trend", "Vibe", "Aura", "Glow", "Shine", "Elegance", "Essence"
];


// ✅ Slugify function: removes spaces and non-word characters
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")      // Remove spaces
    .replace(/[^\w]+/g, "");  // Remove non-word characters
}

function getRandomName(categoryName: string) {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  return `${adj} ${categoryName} ${noun}`;
}

const createProductsForCategory = async (categoryId: any, categoryName: string) => {
  const products = [];

  for (let i = 0; i < 10; i++) {
    try {
      const name = getRandomName(categoryName);
      const description = `This is a ${categoryName} that is ${name}`;
      const price = Math.floor(Math.random() * 100) + 10;

      // 1️⃣ Create Stripe product
      const stripeProduct = await stripe.products.create({
        name: name,
        description: description,
      });

      // 2️⃣ Create Stripe price for this product
      const stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        currency: "usd",
        unit_amount: price * 100, // Stripe expects amount in cents
      });

      // 3️⃣ Push product with price ID into DB array
      products.push({
        categoryId,
        name: name,
        price: price,
        description: description,
        image: `https://placehold.co/150x150?text=${encodeURIComponent(categoryName)}`,
        stock: Math.floor(Math.random() * 50) + 1,
        reviews: [],
        stripePriceId: stripePrice.id,
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
        slug: slugify(name), // ✅ Slug without spaces
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