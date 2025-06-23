const products = [
  {
    id: 1,
    name: "Classic Margherita",
    desc: "Tomato base, mozzarella cheese, and basil.",
    price: 9.99,
    category: "pizzas",
    ingredients: ["vegetables", "tomato", "cheese", "mozzarella"],
    availability: false,
    imageURL: "images/products/Classic Margherita.png"
  },
  {
    id: 2,
    name: "Four Cheese Delight",
    desc: "Mozzarella, cheddar, parmesan, and feta blend.",
    price: 11.49,
    category: "pizzas",
    availability: true,
    ingredients: ["cheese", "mozzarella", "cheddar", "parmesan", "feta"],
    imageURL: "images/products/Four Cheese Delight.png"
  },
  {
    id: 3,
    name: "Spicy Pepperoni",
    desc: "Spicy beef, onion, mozzarella, and mustard drizzle.",
    price: 12.50,
    category: "pizzas",
    availability: true,
    ingredients: ["meat", "beef", "vegetables", "onion", "cheese", "mozzarella", "sauces", "mustard"],
    imageURL: "images/products/Spicy Pepperoni.png"
  },
  {
    id: 4,
    name: "Seafood Fantasy",
    desc: "Fish chunks, peppers, olives, and tomato base.",
    price: 13.20,
    category: "pizzas",
    availability: true,
    ingredients: ["meat", "fish", "vegetables", "pepper", "sauces", "ketchup"],
    imageURL: "images/products/Seafood Fantasy.png"
  },
  {
    id: 5,
    name: "BBQ Chicken Pizza",
    desc: "Grilled chicken, cheddar, and BBQ sauce swirl.",
    price: 12.00,
    category: "pizzas",
    availability: true,
    ingredients: ["meat", "chicken", "cheese", "cheddar", "sauces", "bbq"],
    imageURL: "images/products/BBQ Chicken Pizza.png"
  },
  {
    id: 6,
    name: "Beef Tower Burger",
    desc: "Stacked beef patties, lettuce, and mustard.",
    price: 10.80,
    category: "burgers",
    availability: true,
    ingredients: ["meat", "beef", "vegetables", "lettuce", "sauces", "mustard"],
    imageURL: "images/products/Beef Tower Burger.png"
  },
  {
    id: 7,
    name: "Fish Fillet Burger",
    desc: "Crispy fish, tartar sauce, and onion rings.",
    price: 9.70,
    category: "burgers",
    availability: true,
    ingredients: ["meat", "fish", "vegetables", "onion", "sauces", "ketchup"],
    imageURL: "images/products/Fish Fillet Burger.png"
  },
  {
    id: 8,
    name: "Grilled Chicken Bun",
    desc: "Tender chicken, tomato, lettuce, cheddar.",
    price: 9.90,
    category: "burgers",
    availability: true,
    ingredients: ["meat", "chicken", "vegetables", "tomato", "lettuce", "cheese", "cheddar"],
    imageURL: "images/products/Grilled Chicken Bun.png"
  },
  {
    id: 9,
    name: "Loaded Cheddar Fries",
    desc: "Golden fries with melted cheddar and bbq drizzle.",
    price: 5.20,
    category: "sides",
    availability: true,
    ingredients: ["vegetables", "potato", "cheese", "cheddar", "sauces", "bbq"],
    imageURL: "images/products/Loaded Cheddar Fries.png"
  },
  {
    id: 10,
    name: "Parmesan Bites",
    desc: "Crispy chicken chunks topped with parmesan.",
    price: 6.50,
    category: "sides",
    availability: true,
    ingredients: ["meat", "chicken", "cheese", "parmesan"],
    imageURL: "images/products/Parmesan Bites.png"
  },
  {
    id: 11,
    name: "Feta Veggie Bites",
    desc: "Baked mushrooms and onions with melted feta.",
    price: 5.80,
    category: "sides",
    availability: true,
    ingredients: ["vegetables", "mushroom", "onion", "cheese", "feta"],
    imageURL: "images/products/Feta Veggie Bites.png"
  },
  {
    id: 12,
    name: "Chocolate Lava Cake",
    desc: "Molten chocolate core, served warm.",
    price: 4.70,
    category: "desserts",
    availability: true,
    ingredients: ["dessert", "chocolate", "sugar"],
    imageURL: "images/products/Chocolate Lava Cake.png"
  },
  {
    id: 13,
    name: "Walnut Baklava",
    desc: "Crispy pastry with honey syrup and walnuts.",
    price: 4.30,
    category: "desserts",
    availability: true,
    ingredients: ["dessert", "sugar", "nuts"],
    imageURL: "images/products/Walnut Balkava.png"
  },
  {
    id: 14,
    name: "Tiramisu Cup",
    desc: "Creamy coffee dessert with cocoa dusting.",
    price: 4.90,
    category: "desserts",
    availability: true,
    ingredients: ["dessert", "sugar"],
    imageURL: "images/products/Tiramisu Cup.png"
  },
  {
    id: 15,
    name: "Chilled Lemonade",
    desc: "Zesty lemon with mint leaves, iced.",
    price: 2.20,
    category: "drinks",
    availability: true,
    ingredients: ["drink", "vegetables", "sugar"],
    imageURL: "images/products/Chilled Lemonade.png"
  },
  {
    id: 16,
    name: "Sparkling Water",
    desc: "Refreshing mineral water with bubbles.",
    price: 1.50,
    category: "drinks",
    availability: true,
    ingredients: ["drink", "water"],
    imageURL: "images/products/Sparkling Water.png"
  },
  {
    id: 17,
    name: "Peach Iced Tea",
    desc: "Black tea brewed with peach syrup.",
    price: 2.40,
    category: "drinks",
    availability: true,
    ingredients: ["drink", "sugar"],
    imageURL: "images/products/Peach Iced Tea.png"
  },
  {
    id: 18,
    name: "Mustard Dog",
    desc: "Mini hotdog with mustard and grilled onion.",
    price: 5.00,
    category: "sides",
    availability: true,
    ingredients: ["meat", "pork", "vegetables", "onion", "sauces", "mustard"],
    imageURL: "images/products/Mustard Dog.png"
  },
  {
    id: 19,
    name: "Veggie Lover Pizza",
    desc: "Tomato base, onion, mushroom, pepper and olives.",
    price: 10.70,
    category: "pizzas",
    availability: true,
    ingredients: ["vegetables", "tomato", "onion", "mushroom", "pepper"],
    imageURL: "images/products/Veggie Lover Pizza.png"
  },
  {
    id: 20,
    name: "Doner Wrap",
    desc: "Seasoned pork, garlic sauce, tomato in lavash.",
    price: 8.80,
    category: "burgers",
    availability: true,
    ingredients: ["meat", "pork", "vegetables", "tomato", "sauces", "ketchup"],
    imageURL: "images/products/Doner Wrap.png"
  },
  {
    id: 21,
    name: "Caprese Salad Bites",
    desc: "Tomato, mozzarella, and basil on skewers.",
    price: 6.00,
    category: "sides",
    availability: true,
    ingredients: ["vegetables", "tomato", "cheese", "mozzarella"],
    imageURL: "images/products/Caprese Salad Bites.png"
  },
  {
    id: 22,
    name: "Onion Rings",
    desc: "Fried onion rings with ketchup dip.",
    price: 4.00,
    category: "sides",
    availability: true,
    ingredients: ["vegetables", "onion", "sauces", "ketchup"],
    imageURL: "images/products/Onion Rings.png"
  },
  {
    id: 23,
    name: "Beef Kebab Pizza",
    desc: "Kebab beef chunks, lettuce, garlic sauce.",
    price: 13.00,
    category: "pizzas",
    availability: true,
    ingredients: ["meat", "beef", "vegetables", "lettuce", "sauces", "bbq"],
    imageURL: "images/products/Beef Kebab Pizza.png"
  },
  {
    id: 24,
    name: "Chicken Caesar Wrap",
    desc: "Chicken, parmesan, and lettuce in wrap.",
    price: 9.00,
    category: "burgers",
    availability: true,
    ingredients: ["meat", "chicken", "vegetables", "lettuce", "cheese", "parmesan"],
    imageURL: "images/products/Chicken Caesar Wrap.png"
  },
  {
    id: 25,
    name: "Mushroom Pepper Pizza",
    desc: "Sautéed mushrooms, red peppers, and cheddar.",
    price: 11.00,
    category: "pizzas",
    availability: true,
    ingredients: ["vegetables", "mushroom", "pepper", "cheese", "cheddar"],
    imageURL: "images/products/Mushroom Pepper Pizza.png"
  }
];

// Dual price display
products.forEach(p => {
  p.displayPrice = `${p.price.toFixed(2)} € / ${(p.price * 1.96).toFixed(2)} лв`;
});
