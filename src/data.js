const products = [
  {
    _id: "67def6e42b2c146578729f60",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t1.jpg",
    name: "Emerald Charm Necklace",
    price: 180,
    stripePriceId: "price_1R5W5XJjbWEvglIU42i6PuXC",
    description: "A delicate emerald pendant necklace designed to bring elegance to everyday wear.",
    featured: true,
  },
  {
    _id: "67def6f32b2c146578729f64",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t2.jpg",
    name: "Golden Grace Necklace",
    price: 220,
    stripePriceId: "price_1R5W5mJjbWEvglIUb5WgcWAl",
    description: "A graceful gold necklace crafted with fine detailing for timeless beauty.",
    featured: true,
  },
  {
    _id: "67def70b2b2c146578729f68",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t3.jpg",
    name: "Silver Lotus Necklace",
    price: 160,
    stripePriceId: "price_1R5W6AJjbWEvglIU8A9pGc3d",
    description: "Elegant silver chain with a lotus-inspired pendant, symbolizing purity and harmony.",
    featured: true,
  },
  {
    _id: "67defdfed2a89836105f675c",
    categoryId: "67dee99f12d36efdd1027b40", // Ring
    image: "/Trending/t4.jpg",
    name: "Crystal Bloom Ring",
    price: 140,
    stripePriceId: "price_1R5WYrJjbWEvglIUpETkqOLk",
    description: "A dazzling crystal ring shaped like a blooming flower, perfect for special occasions.",
    featured: true,
  },
  {
    _id: "67defe10d2a89836105f6760",
    categoryId: "67dee9cd12d36efdd1027b45", // Bracelet
    image: "/Trending/t5.jpg",
    name: "Pearl Elegance Bracelet",
    price: 130,
    stripePriceId: "price_1R5WZ9JjbWEvglIUMd2m0UHc",
    description: "A string of freshwater pearls arranged in a bracelet for a classy look.",
    featured: true,
  },
  {
    _id: "67defe1fd2a89836105f6764",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t6.jpg",
    name: "Ruby Radiance Necklace",
    price: 250,
    stripePriceId: "price_1R5WZOJjbWEvglIUqdkyCI8m",
    description: "A radiant ruby necklace designed to stand out with bold and luxurious style.",
    featured: true,
  },
  {
    _id: "67defe31d2a89836105f6768",
    categoryId: "67dee99f12d36efdd1027b40", // Ring
    image: "/Trending/t7.jpg",
    name: "Twilight Diamond Ring",
    price: 300,
    stripePriceId: "price_1R5WZhJjbWEvglIU9iMkrCvE",
    description: "A stunning diamond ring that sparkles brilliantly in every light.",
    featured: true,
  },
  {
    _id: "67defe44d2a89836105f676c",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t8.jpg",
    name: "Moonlight Pendant Necklace",
    price: 190,
    stripePriceId: "price_1R5WZzJjbWEvglIUg0EBCYLy",
    description: "A moon-inspired pendant necklace that shines with subtle charm.",
    featured: true,
  },
  {
    _id: "67defe57d2a89836105f6770",
    categoryId: "67dee99f12d36efdd1027b40", // Ring
    image: "/Trending/t9.jpg",
    name: "Opal Whisper Ring",
    price: 155,
    stripePriceId: "price_1R5WaIJjbWEvglIUJtkpTQNH",
    description: "A sleek opal ring with a soft glow that captures natural beauty.",
    featured: true,
  },
  {
    _id: "67defe6ad2a89836105f6774",
    categoryId: "67dee9cd12d36efdd1027b45", // Bracelet
    image: "/Trending/t10.jpg",
    name: "Golden Harmony Bracelet",
    price: 170,
    stripePriceId: "price_1R5WabJjbWEvglIUEEMDw6M6",
    description: "An intricate gold bracelet symbolizing balance and harmony.",
    featured: true,
  },
  {
    _id: "67defe79d2a89836105f6778",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t11.jpg",
    name: "Crystal Stream Necklace",
    price: 185,
    stripePriceId: "price_1R5WaqJjbWEvglIUsLDTPzUm",
    description: "A necklace designed with flowing crystal patterns that shimmer with every movement.",
    featured: true,
  },
  {
    _id: "67defe8bd2a89836105f677c",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t12.jpg",
    name: "Sapphire Crown Necklace",
    price: 260,
    stripePriceId: "price_1R5Wb8JjbWEvglIUvBRSgQQn",
    description: "A royal sapphire necklace symbolizing strength and grace.",
    featured: true,
  },
  {
    _id: "67df89a1ec2e6e61d4c61477",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t13.jpg",
    name: "Rose Quartz Necklace",
    price: 200,
    stripePriceId: "price_1R5frQJjbWEvglIUYkqeE47v",
    description: "A rose quartz necklace believed to attract love and positive energy.",
    featured: true,
  },
  {
    _id: "67df89d5ec2e6e61d4c6147c",
    categoryId: "67dee9cd12d36efdd1027b45", // Bracelet
    image: "/Trending/t14.jpg",
    name: "Silver Breeze Bracelet",
    price: 145,
    stripePriceId: "price_1R5fsGJjbWEvglIU8z1ovxyc",
    description: "A silver bracelet with a modern and minimalistic design for everyday wear.",
    featured: true,
  },
  {
    _id: "67df89f5ec2e6e61d4c61481",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t15.jpg",
    name: "Diamond Charm Necklace",
    price: 310,
    stripePriceId: "price_1R5fslJjbWEvglIUv3hn9Qdo",
    description: "A dazzling diamond necklace designed to make a bold statement.",
    featured: true,
  },
  {
    _id: "67df8ab6ec2e6e61d4c6148f",
    categoryId: "67dee99f12d36efdd1027b40", // Ring
    image: "/Trending/t16.jpg",
    name: "Ruby Spark Ring",
    price: 240,
    stripePriceId: "price_1R5fvtJjbWEvglIUU6iFzg4h",
    description: "A ruby-studded ring that captures fiery passion and elegance.",
    featured: true,
  },
  {
    _id: "67df8accec2e6e61d4c61491",
    categoryId: "67dee99f12d36efdd1027b40", // Ring
    image: "/Trending/t17.jpg",
    name: "Golden Crown Ring",
    price: 210,
    stripePriceId: "price_1R5fwFJjbWEvglIUVm9hT3cQ",
    description: "A regal gold ring with intricate crown-like engravings.",
    featured: true,
  },
  {
    _id: "67df8ba4ec2e6e61d4c61499",
    categoryId: "67dee9cd12d36efdd1027b45", // Bracelet
    image: "/Trending/t18.jpg",
    name: "Crystal Twist Bracelet",
    price: 155,
    stripePriceId: "price_1R5fzjJjbWEvglIUsdz5PhEM",
    description: "A twisted design bracelet lined with sparkling crystals.",
    featured: true,
  },
  {
    _id: "67df9000ec2e6e61d4c61500",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t19.jpg",
    name: "Amethyst Dream Necklace",
    price: 230,
    description: "A dreamy amethyst necklace symbolizing calm and clarity.",
    featured: true,
  },
  {
    _id: "67df9001ec2e6e61d4c61501",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t20.jpg",
    name: "Celestial Glow Necklace",
    price: 260,
    description: "A necklace inspired by stars and galaxies, glowing with celestial charm.",
    featured: true,
  },
  {
    _id: "67df9002ec2e6e61d4c61502",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t21.jpg",
    name: "Golden Horizon Necklace",
    price: 240,
    description: "An elegant gold necklace with horizon-inspired design.",
    featured: true,
  },
  {
    _id: "67df9003ec2e6e61d4c61503",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t22.jpg",
    name: "Ocean Pearl Necklace",
    price: 280,
    description: "A necklace designed with ocean pearls for timeless sophistication.",
    featured: true,
  },
  {
    _id: "67df9004ec2e6e61d4c61504",
    categoryId: "67dee99f12d36efdd1027b40", // Ring
    image: "/Trending/t23.jpg",
    name: "Silver Star Ring",
    price: 190,
    description: "A ring designed with tiny star engravings to add sparkle.",
    featured: true,
  },
  {
    _id: "67df9005ec2e6e61d4c61505",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t24.jpg",
    name: "Sunstone Glow Necklace",
    price: 200,
    description: "A glowing sunstone necklace to brighten up your look.",
    featured: true,
  },
  {
    _id: "67df9006ec2e6e61d4c61506",
    categoryId: "67dee9cd12d36efdd1027b45", // Bracelet
    image: "/Trending/t25.jpg",
    name: "Mystic Charm Bracelet",
    price: 160,
    description: "A charm bracelet with mystical designs for a unique style.",
    featured: true,
  },
  {
    _id: "67df9007ec2e6e61d4c61507",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t26.jpg",
    name: "Velvet Rose Necklace",
    price: 250,
    description: "A rose-inspired necklace with velvet-like texture and elegance.",
    featured: true,
  },
  {
    _id: "67df9008ec2e6e61d4c61508",
    categoryId: "67dee99f12d36efdd1027b40", // Ring
    image: "/Trending/t27.jpg",
    name: "Amber Flame Ring",
    price: 210,
    description: "A fiery amber gemstone ring full of warmth and energy.",
    featured: true,
  },
  {
    _id: "67df9009ec2e6e61d4c61509",
    categoryId: "67dee9cd12d36efdd1027b45", // Bracelet
    image: "/Trending/t28.jpg",
    name: "Moonbeam Silver Bracelet",
    price: 175,
    description: "A silver bracelet that glows softly like moonlight.",
    featured: true,
  },
  {
    _id: "67df9010ec2e6e61d4c61510",
    categoryId: "67deea2812d36efdd1027b47", // Earring
    image: "/Trending/t29.jpg",
    name: "Diamond Drop Earrings",
    price: 280,
    description: "Elegant drop earrings lined with sparkling diamonds.",
    featured: true,
  },
  {
    _id: "67df9011ec2e6e61d4c61511",
    categoryId: "67dee99f12d36efdd1027b40", // Ring
    image: "/Trending/t30.jpg",
    name: "Platinum Halo Ring",
    price: 350,
    description: "A platinum ring with a halo setting for maximum brilliance.",
    featured: true,
  },
  {
    _id: "67df9012ec2e6e61d4c61512",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t31.jpg",
    name: "Diamond Vine Necklace",
    price: 320,
    description: "A necklace inspired by vines, encrusted with fine diamonds.",
    featured: true,
  },
  {
    _id: "67df9013ec2e6e61d4c61513",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t32.jpg",
    name: "Starlight Choker Necklace",
    price: 270,
    description: "A stylish choker necklace with star-like crystals.",
    featured: true,
  },
  {
    _id: "67df9014ec2e6e61d4c61514",
    categoryId: "67dee9c012d36efdd1027b43", // Necklace
    image: "/Trending/t33.jpg",
    name: "Golden Petal Necklace",
    price: 295,
    description: "A necklace featuring petal-shaped gold pieces for a natural look.",
    featured: true,
  },
];

const categories = [
  { _id: "ALL", name: "All", slug: "all" },
  { _id: "67dee99f12d36efdd1027b40", name: "Rings", slug: "rings" },
  { _id: "67dee9c012d36efdd1027b43", name: "Necklaces", slug: "necklaces" },
  { _id: "67dee9cd12d36efdd1027b45", name: "Bracelets", slug: "bracelets" },
  { _id: "67deea2812d36efdd1027b47", name: "Earrings", slug: "earrings" },
  { _id: "67deea3012d36efdd1027b49", name: "Others", slug: "others" },
];

export { products, categories };
