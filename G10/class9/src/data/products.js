const productsData = [
  {
    id: 1,
    imgUrl:
      "https://media.wired.com/photos/5f8dfdb2ba670daaf8e9792c/1:1/w_1800,h_1800,c_limit/Gear-iPhone-12-Pro-Colors-SOURCE-Apple.jpg",
    title: "Apple iPhone 12 Pro",
    description: "The Apple iPhone 12 Pro is packed with amazing features.",
    price: 999.99,
    category: "Electronics",
  },
  {
    id: 2,
    imgUrl: "https://m.media-amazon.com/images/I/71A3oxSQ5rL.jpg",
    title: "Instant Pot Duo Nova",
    description: "The Instant Pot Duo Nova makes cooking easy and fast.",
    price: 89.99,
    category: "Home & Kitchen",
  },
  {
    id: 3,
    imgUrl:
      "https://cimg.clozette.co/img/fenty-beauty-gloss-bomb-heat-review-FB.png",
    title: "Fenty Beauty Gloss Bomb",
    description: "Get the perfect glossy lips with Fenty Beauty Gloss Bomb.",
    price: 19.99,
    category: "Beauty",
  },
  {
    id: 4,
    imgUrl: "https://m.media-amazon.com/images/I/51mWHXY8hyL.jpg",
    title: "Sony PlayStation 5",
    description: "Experience immersive gaming with the Sony PlayStation 5.",
    price: 499.99,
    category: "Electronics",
  },
  {
    id: 5,
    imgUrl:
      "https://i5.walmartimages.com/asr/42c2ffdd-535f-49f4-a0e0-8a8a2dbbc9de.65aadd88e004c5921c27f1d4e2c8a151.jpeg",
    title: "Ninja Foodi Pressure Cooker",
    description:
      "The Ninja Foodi Pressure Cooker simplifies your cooking process.",
    price: 149.99,
    category: "Home & Kitchen",
  },
  {
    id: 6,
    imgUrl: "https://i.ytimg.com/vi/L0-EjpsP93c/maxresdefault.jpg",
    title: "Anastasia Beverly Hills Brow Wiz",
    description:
      "Achieve perfect brows with the Anastasia Beverly Hills Brow Wiz.",
    price: 21.0,
    category: "Beauty",
  },
  {
    id: 7,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1514/3436/products/1b7a79a9ae4320b9f740b99d467fa5be_4fe7045c-4a89-44ec-b5ad-478cc0360354_1200x.png?v=1643646899",
    title: "Yeti Rambler Tumbler",
    description:
      "Keep your drinks hot or cold with the durable Yeti Rambler Tumbler.",
    price: 29.99,
    category: "Sports & Outdoors",
  },
  {
    id: 8,
    imgUrl:
      "https://www.buzzsneakers.mk/files/images/slike-proizvoda/media/AH6/AH6789-100/images/AH6789-100.jpg",
    title: "Nike Air Max 270",
    description: "Step up your sneaker game with the Nike Air Max 270.",
    price: 150.0,
    category: "Fashion",
  },
  {
    id: 9,
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0520/2647/4675/products/1_1200x1200.png?v=1644146337",
    title: "Gourmet Cheese Selection",
    description:
      "Indulge in a variety of gourmet cheeses with this curated selection.",
    price: 39.99,
    category: "Food & Beverage",
  },
  {
    id: 10,
    imgUrl: "https://m.media-amazon.com/images/I/81+jNVOUsJL.jpg",
    title: "Bose QuietComfort 35 II Wireless Headphones",
    description:
      "Enjoy immersive audio with the Bose QuietComfort 35 II Wireless Headphones.",
    price: 299.0,
    category: "Electronics",
  },
  {
    id: 11,
    imgUrl:
      "https://www.thespruceeats.com/thmb/FiiwS7MwQj4WQiCFw-NGdwKPngU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_hero_SQ_Instant-Pot-Air-Fryer-Lid-1-5a025a4fe0024344bb45b38913c2fe72.jpg",
    title: "Instant Pot Air Fryer Lid",
    description:
      "Turn your Instant Pot into an air fryer with the Instant Pot Air Fryer Lid.",
    price: 79.95,
    category: "Home & Kitchen",
  },
  {
    id: 12,
    imgUrl:
      "https://m.media-amazon.com/images/I/81YIOYOlpYL._AC_UF1000,1000_QL80_.jpg",
    title: "Urban Decay Naked Heat Eyeshadow Palette",
    description:
      "Create stunning eye looks with the Urban Decay Naked Heat Eyeshadow Palette.",
    price: 54.0,
    category: "Beauty",
  },
  {
    id: 13,
    imgUrl:
      "https://m.media-amazon.com/images/I/61Kzcls5sbL._AC_UF1000,1000_QL80_.jpg",
    title: "YETI Hopper Flip Portable Cooler",
    description:
      "Keep your drinks cold on-the-go with the YETI Hopper Flip Portable Cooler.",
    price: 249.99,
    category: "Sports & Outdoors",
  },
  {
    id: 14,
    imgUrl:
      "https://cdn.fleetfeet.com/assets/adidasultraboost.jpeg/dynamic:1-aspect:2.4-fit:cover-strategy:entropy/adidasultraboost--1440.jpg",
    title: "Adidas Ultraboost Running Shoes",
    description:
      "Experience exceptional comfort and performance with Adidas Ultraboost Running Shoes.",
    price: 180.0,
    category: "Fashion",
  },
  {
    id: 15,
    imgUrl:
      "https://imageio.forbes.com/specials-images/imageserve/588143594bbe6f1f20eb4696/960x960.jpg?format=jpg&width=960",
    title: "Artisanal Chocolate Truffles",
    description:
      "Indulge in the decadent flavors of these artisanal chocolate truffles.",
    price: 29.99,
    category: "Food & Beverage",
  },
  {
    id: 16,
    imgUrl:
      "https://cdni.llbean.net/is/image/wim/307107_0_47?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2",
    title: "Yeti Tundra 45 Cooler",
    description:
      "The Yeti Tundra 45 Cooler keeps your drinks and food cold for hours.",
    price: 299.99,
    category: "Sports & Outdoors",
  },
  {
    id: 17,
    imgUrl:
      "https://images.ray-ban.com/is/image/RayBan/805289602057__STD__shad__qt.png?impolicy=RB_Product",
    title: "Ray-Ban Classic Aviator Sunglasses",
    description:
      "Upgrade your style with the iconic Ray-Ban Classic Aviator Sunglasses.",
    price: 149.99,
    category: "Fashion",
  },
  {
    id: 18,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDn_0cw0wvhDQBV0mqc3LlM0ehzuflvV4LDbq46adcKoDPKYWkwyPL4c6LIq7wVXrm10&usqp=CAU",
    title: "DJI Mavic Air 2 Drone",
    description:
      "Capture stunning aerial footage with the DJI Mavic Air 2 Drone.",
    price: 799.0,
    category: "Electronics",
  },
  {
    id: 19,
    imgUrl:
      "https://m.media-amazon.com/images/I/718PxI1EDoL._AC_UF894,1000_QL80_.jpg",
    title: "KitchenAid Stand Mixer",
    description:
      "Upgrade your baking experience with the iconic KitchenAid Stand Mixer.",
    price: 299.99,
    category: "Home & Kitchen",
  },
  {
    id: 20,
    imgUrl:
      "https://eadn-wc04-3072018.nxedge.io/cdn/pub/media/catalog/product/cache/3413f5032cb3823295de8b583b3bd7c7/t/r/truffles-16piece.jpg",
    title: "Gourmet Chocolate Truffle Box",
    description:
      "Indulge in the rich flavors of this gourmet chocolate truffle box.",
    price: 29.99,
    category: "Food & Beverage",
  },
  {
    id: 21,
    imgUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502241cv15d.jpg",
    title: "Samsung QLED 4K Smart TV",
    description:
      "Immerse yourself in stunning visuals with the Samsung QLED 4K Smart TV.",
    price: 1299.99,
    category: "Electronics",
  },
  {
    id: 22,
    imgUrl:
      "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=3473236-847&recipeName=680",
    title: "Cuisinart Air Fryer Toaster Oven",
    description:
      "Enjoy crispy and healthy meals with the Cuisinart Air Fryer Toaster Oven.",
    price: 199.99,
    category: "Home & Kitchen",
  },
  {
    id: 23,
    imgUrl: "https://m.media-amazon.com/images/I/713kvuG7RHL.jpg",
    title: "MAC Cosmetics Studio Fix Fluid Foundation",
    description:
      "Achieve flawless skin with MAC Cosmetics Studio Fix Fluid Foundation.",
    price: 36.0,
    category: "Beauty",
  },
  {
    id: 24,
    imgUrl: "https://cdn.wareable.com/assets/images/2022/06/34879-original.jpg",
    title: "Fitbit Charge 4 Fitness Tracker",
    description:
      "Stay active and track your fitness goals with the Fitbit Charge 4 Fitness Tracker.",
    price: 149.95,
    category: "Sports & Outdoors",
  },
  {
    id: 25,
    imgUrl: "https://m.media-amazon.com/images/I/31XWo4-MfUL._AC_UY1000_.jpg",
    title: "Michael Kors Jet Set Tote",
    description:
      "Carry your essentials in style with the Michael Kors Jet Set Tote.",
    price: 198.0,
    category: "Fashion",
  },
  {
    id: 26,
    imgUrl: "https://m.media-amazon.com/images/I/81Dc-72ldkS.jpg",
    title: "Gourmet Coffee Sampler Pack",
    description:
      "Explore a variety of gourmet coffee flavors with this sampler pack.",
    price: 24.99,
    category: "Food & Beverage",
  },
  {
    id: 27,
    imgUrl: "https://m.media-amazon.com/images/I/51F0jZ1DUSL.jpg",
    title: "Fenty Beauty Killawatt Highlighter",
    description:
      "Achieve a luminous glow with the Fenty Beauty Killawatt Highlighter.",
    price: 36.0,
    category: "Beauty",
  },
  {
    id: 28,
    imgUrl:
      "https://images.samsung.com/mk/galaxy-watch4/feature/galaxy-watch4-silver-blood-pressure-ecg-over-mo.jpg",
    title: "Samsung Galaxy Watch 4",
    description:
      "Stay connected and track your fitness with the Samsung Galaxy Watch 4.",
    price: 299.99,
    category: "Electronics",
  },
  {
    id: 29,
    imgUrl:
      "https://cb.scene7.com/is/image/Crate/LeCreusetFrnchOvn7qtFlmSSF20/$web_pdp_main_carousel_low$/201026101348/le-creuset-signature-7.25-qt.-flame-round-dutch-oven.jpg",
    title: "Le Creuset Dutch Oven",
    description:
      "Cook delicious meals with the high-quality Le Creuset Dutch Oven.",
    price: 349.99,
    category: "Home & Kitchen",
  },
  {
    id: 30,
    imgUrl:
      "https://www.urbandecay.com/on/demandware.static/-/Sites-urbandecay-master-catalog/default/dw7093e81f/ProductImages/Face/All%20Nighter%20Spray%202021/ANSS%20OG%20PDP/ALT1_ANSS-Bottle+Allure_1000X1000.jpg",
    title: "Urban Decay All Nighter Setting Spray",
    description:
      "Lock in your makeup all day with the Urban Decay All Nighter Setting Spray.",
    price: 32.0,
    category: "Beauty",
  },
];

export default productsData;
