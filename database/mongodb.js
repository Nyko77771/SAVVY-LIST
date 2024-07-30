// Importing mongoose into this file
const mongoose = require("mongoose");

const savvyList = require("./../models/savvylist");

//MongoDB connection
const dbURI =
  "mongodb+srv://root:password1234@cluster0.nydfu3f.mongodb.net/SavvyList?retryWrites=true&w=majority&appName=Cluster0";

//Checking connection
mongoose
  .connect(dbURI)
  .then((result) => console.log(`Connected to MongoDB`))
  .catch((error) => console.error(`Error ${error}) occured`));

// Adding some Static Customers
const customers = [
  //Customer 1
  {
    Fullname: "John Doe",
    Username: "JohnDoe1",
    Email: "john.doe@email.com",
    Password: "password1",
    Address: "123 Main St, Dublin, Ireland",
    Eircode: "D12 X3F7",
  },
  //Customer 2
  {
    Fullname: "Jane Smith",
    Username: "Jane_Smith10",
    Email: "jane.smith@email.com",
    Password: "password2",
    Address: "456 Elm St, Dublin, Ireland",
    Eircode: "T45 G8Y3",
  },
  //Customer 3
  {
    Fullname: "Michael Johnson",
    Username: "MichaelJ",
    Email: "michael.johnson@email.com",
    Password: "password3",
    Address: "789 Oak St, Dublin, Ireland",
    Eircode: "F28 H6J4",
  },
  //Customer 4
  {
    Fullname: "Emily Brown",
    Username: "EBrown",
    Email: "emily.brown@email.com",
    Password: "password4",
    Address: "101 Pine St, Dublin, Ireland",
    Eircode: "R95 K2B9",
  },
  //Customer 5
  {
    Fullname: "David Jones",
    Username: "Davy_Jones",
    Email: "david.jones@email.com",
    Password: "password5",
    Address: "202 Maple St, Dublin, Ireland",
    Eircode: "V94 P5T6",
  },
  //Customer 6
  {
    Fullname: "Daniel Williams",
    Username: "DanielWilliams",
    Email: "daniel.williams@email.com",
    Password: "password7",
    Address: "404 Birch St, Dublin, Ireland",
    Eircode: "K56 M1Y4",
  },
  //Customer 7
  {
    Fullname: "Olivia Lee",
    Username: "OlivE",
    Email: "olivia.lee@email.com",
    Password: "password8",
    Address: "505 Spruce St, Dublin, Ireland",
    Eircode: "N37 L9P2",
  },
  //Customer 8
  {
    Fullname: "Sophia Wilson",
    Username: "Sophia@Wilson",
    Email: "sophia.wilson@email.com",
    Password: "password10",
    Address: "707 Ash St, Dublin, Ireland",
    Eircode: "W23 F4B1",
  },
  //Customer 9
  {
    Fullname: "Matthew Martinez",
    Username: "MatM",
    Email: "matthew.martinez@email.com",
    Password: "password13",
    Address: "111 Redwood St, Dublin, Ireland",
    Eircode: "A94 C8D5",
  },
  //Customer 10
  {
    Fullname: "Isabella Garcia",
    Username: "IsabellaGarcia",
    Email: "isabella.garcia@email.com",
    Password: "password14",
    Address: "222 Fir St, Dublin, Ireland",
    Eircode: "T12 G5H2",
  },
  //Customer 11
  {
    Fullname: "Ethan Martinez",
    Username: "EthanM1",
    Email: "ethan.martinez@email.com",
    Password: "password15",
    Address: "333 Alder St, Dublin, Ireland",
    Eircode: "R12 E7K6",
  },
  //Customer 12
  {
    Fullname: "Mia Rodriguez",
    Username: "MiaRodriguez99",
    Email: "mia.rodriguez@email.com",
    Password: "password16",
    Address: "444 Beech St, Dublin, Ireland",
    Eircode: "F52 L3V9",
  },
  //Customer 13
  {
    Fullname: "Joseph White",
    Username: "JW001",
    Email: "joseph.white@email.com",
    Password: "password17",
    Address: "555 Magnolia St, Dublin, Ireland",
    Eircode: "D15 M6J4",
  },
  //Customer 14
  {
    Fullname: "Amelia Lewis",
    Username: "AmeliaLewis22",
    Email: "amelia.lewis@email.com",
    Password: "password18",
    Address: "666 Hickory St, Dublin, Ireland",
    Eircode: "E34 R9P1",
  },
  //Customer 15
  {
    Fullname: "Christopher Walker",
    Username: "Christopher.Walker",
    Email: "christopher.walker@email.com",
    Password: "password19",
    Address: "777 Chestnut St, Dublin, Ireland",
    Eircode: "K67 Z5C3",
  },
  // 15 Customers Created
];

const products = [
  // Milk
  {
    ProductName: "Milk",
    Category: "Dairy",
    Brand: "Avonmore",
    Shop: "Super Savings",
    Price: 1.5,
    Size: "1L",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Milk",
    Category: "Dairy",
    Brand: "Avonmore",
    Shop: "Adams Supermarket",
    Price: 1.55,
    Size: "1L",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Milk",
    Category: "Dairy",
    Brand: "Avonmore",
    Shop: "Adams Supermarket",
    Price: 3.0,
    Size: "2L",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Milk",
    Category: "Dairy",
    Brand: "Avonmore",
    Shop: "Market Value",
    Price: 3.1,
    Size: "2L",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Bread
  {
    ProductName: "Bread",
    Category: "Bakery",
    Brand: "Brennans",
    Shop: "Super Savings",
    Price: 1.2,
    Size: "400g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Bread",
    Category: "Bakery",
    Brand: "Brennans",
    Shop: "Adams Supermarket",
    Price: 1.75,
    Size: "800g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Bread",
    Category: "Bakery",
    Brand: "Brennans",
    Shop: "Market Value",
    Price: 1.8,
    Size: "800g",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Eggs
  {
    ProductName: "Eggs",
    Category: "Dairy",
    Brand: "Golden Irish",
    Shop: "Super Savings",
    Price: 2.0,
    Size: "6pcs",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Eggs",
    Category: "Dairy",
    Brand: "Golden Irish",
    Shop: "Adams Supermarket",
    Price: 3.6,
    Size: "12pcs",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Eggs",
    Category: "Dairy",
    Brand: "Golden Irish",
    Shop: "Market Value",
    Price: 3.55,
    Size: "12pcs",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Butter
  {
    ProductName: "Butter",
    Category: "Dairy",
    Brand: "Kerrygold",
    Shop: "Super Savings",
    Price: 1.8,
    Size: "250g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Butter",
    Category: "Dairy",
    Brand: "Kerrygold",
    Shop: "Adams Supermarket",
    Price: 1.85,
    Size: "250g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Butter",
    Category: "Dairy",
    Brand: "Kerrygold",
    Shop: "Market Value",
    Price: 3.6,
    Size: "500g",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Cheese
  {
    ProductName: "Cheese",
    Category: "Dairy",
    Brand: "Dubliner",
    Shop: "Super Savings",
    Price: 2.55,
    Size: "200g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Cheese",
    Category: "Dairy",
    Brand: "Dubliner",
    Shop: "Adams Supermarket",
    Price: 2.55,
    Size: "200g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Cheese",
    Category: "Dairy",
    Brand: "Dubliner",
    Shop: "Adams Supermarket",
    Price: 4.9,
    Size: "400g",
  },
  {
    ProductName: "Cheese",
    Category: "Dairy",
    Brand: "Dubliner",
    Shop: "Market Value",
    Price: 5.0,
    Size: "400g",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Chicken Breast
  {
    ProductName: "Chicken Breast",
    Category: "Meat",
    Brand: "Manor Farm",
    Shop: "Super Savings",
    Price: 5.0,
    Size: "1kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Chicken Breast",
    Category: "Meat",
    Brand: "Manor Farm",
    Shop: "Market Value",
    Price: 5.2,
    Size: "1kg",
    ShopURL: "https://www.dunnesstores.com",
  },
  {
    ProductName: "Chicken Breast",
    Category: "Meat",
    Brand: "Manor Farm",
    Shop: "Super Savings",
    Price: 9.5,
    Size: "2kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Chicken Breast",
    Category: "Meat",
    Brand: "Manor Farm",
    Shop: "Market Value",
    Price: 9.7,
    Size: "2kg",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Apple
  {
    ProductName: "Apple",
    Category: "Fruit",
    Brand: "Pink Lady",
    Shop: "Super Savings",
    Price: 0.3,
    Size: "1kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Apple",
    Category: "Fruit",
    Brand: "Pink Lady",
    Shop: "Adams Supermarket",
    Price: 0.35,
    Size: "1kg",
  },
  {
    ProductName: "Apple",
    Category: "Fruit",
    Brand: "Pink Lady",
    Shop: "Super Savings",
    Price: 0.55,
    Size: "2kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Apple",
    Category: "Fruit",
    Brand: "Pink Lady",
    Shop: "Market Value",
    Price: 0.65,
    Size: "2kg",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Banana
  {
    ProductName: "Banana",
    Category: "Fruit",
    Brand: "Fyffes",
    Shop: "Super Savings",
    Price: 0.25,
    Size: "1kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Banana",
    Category: "Fruit",
    Brand: "Fyffes",
    Shop: "Market Value",
    Price: 0.26,
    Size: "1kg",
    ShopURL: "https://www.dunnesstores.com",
  },
  {
    ProductName: "Banana",
    Category: "Fruit",
    Brand: "Fyffes",
    Shop: "Adams Supermarket",
    Price: 0.47,
    Size: "2kg",
    ShopURL: "https://www.tesco.ie",
  },

  // Orange
  {
    ProductName: "Orange",
    Category: "Fruit",
    Brand: "Sunkist",
    Shop: "Super Savings",
    Price: 0.35,
    Size: "1kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Orange",
    Category: "Fruit",
    Brand: "Sunkist",
    Shop: "Adams Supermarket",
    Price: 0.38,
    Size: "1kg",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Orange",
    Category: "Fruit",
    Brand: "Sunkist",
    Shop: "Market Value",
    Price: 0.37,
    Size: "1kg",
    ShopURL: "https://www.dunnesstores.com",
  },
  {
    ProductName: "Orange",
    Category: "Fruit",
    Brand: "Sunkist",
    Shop: "Super Savings",
    Price: 0.65,
    Size: "2kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Orange",
    Category: "Fruit",
    Brand: "Sunkist",
    Shop: "Adams Supermarket",
    Price: 0.68,
    Size: "2kg",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Orange",
    Category: "Fruit",
    Brand: "Sunkist",
    Shop: "Market Value",
    Price: 0.67,
    Size: "2kg",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Tomato
  {
    ProductName: "Tomato",
    Category: "Vegetable",
    Brand: "Vine Ripened",
    Shop: "Super Savings",
    Price: 0.45,
    Size: "1kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Tomato",
    Category: "Vegetable",
    Brand: "Vine Ripened",
    Shop: "Adams Supermarket",
    Price: 0.42,
    Size: "1kg",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Tomato",
    Category: "Vegetable",
    Brand: "Vine Ripened",
    Shop: "Adams Supermarket",
    Price: 0.78,
    Size: "2kg",
    ShopURL: "https://www.tesco.ie",
  },

  // Lettuce
  {
    ProductName: "Lettuce",
    Category: "Vegetable",
    Brand: "Iceberg",
    Shop: "Super Savings",
    Price: 0.9,
    Size: "500g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Lettuce",
    Category: "Vegetable",
    Brand: "Iceberg",
    Shop: "Adams Supermarket",
    Price: 0.95,
    Size: "500g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Lettuce",
    Category: "Vegetable",
    Brand: "Iceberg",
    Shop: "Adams Supermarket",
    Price: 1.75,
    Size: "1kg",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Lettuce",
    Category: "Vegetable",
    Brand: "Iceberg",
    Shop: "Market Value",
    Price: 1.8,
    Size: "1kg",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Carrot
  {
    ProductName: "Carrot",
    Category: "Vegetable",
    Brand: "Organic",
    Shop: "Super Savings",
    Price: 0.5,
    Size: "500g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Carrot",
    Category: "Vegetable",
    Brand: "Organic",
    Shop: "Adams Supermarket",
    Price: 0.52,
    Size: "500g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Carrot",
    Category: "Vegetable",
    Brand: "Organic",
    Shop: "Adams Supermarket",
    Price: 0.95,
    Size: "1kg",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Carrot",
    Category: "Vegetable",
    Brand: "Organic",
    Shop: "Market Value",
    Price: 2.0,
    Size: "1kg",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Pasta
  {
    ProductName: "Pasta",
    Category: "Grains",
    Brand: "Barilla",
    Shop: "Super Savings",
    Price: 1.5,
    Size: "500g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Pasta",
    Category: "Grains",
    Brand: "Barilla",
    Shop: "Adams Supermarket",
    Price: 1.1,
    Size: "500g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Pasta",
    Category: "Grains",
    Brand: "Barilla",
    Shop: "Adams Supermarket",
    Price: 1.9,
    Size: "1kg",
    ShopURL: "https://www.tesco.ie",
  },

  // Rice
  {
    ProductName: "Rice",
    Category: "Grains",
    Brand: "Uncle Bens",
    Shop: "Super Savings",
    Price: 1.1,
    Size: "500g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Rice",
    Category: "Grains",
    Brand: "Uncle Bens",
    Shop: "Adams Supermarket",
    Price: 1.2,
    Size: "500g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Rice",
    Category: "Grains",
    Brand: "Uncle Bens",
    Shop: "Super Savings",
    Price: 2.0,
    Size: "1kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Rice",
    Category: "Grains",
    Brand: "Uncle Bens",
    Shop: "Adams Supermarket",
    Price: 2.1,
    Size: "1kg",
    ShopURL: "https://www.tesco.ie",
  },

  // Cereal
  {
    ProductName: "Cereal",
    Category: "Breakfast",
    Brand: "Kelloggs",
    Shop: "Super Savings",
    Price: 2.7,
    Size: "500g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Cereal",
    Category: "Breakfast",
    Brand: "Kelloggs",
    Shop: "Adams Supermarket",
    Price: 2.8,
    Size: "500g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Cereal",
    Category: "Breakfast",
    Brand: "Kelloggs",
    Shop: "Adams Supermarket",
    Price: 5.3,
    Size: "1kg",
    ShopURL: "https://www.tesco.ie",
  },

  // Orange Juice
  {
    ProductName: "Orange Juice",
    Category: "Beverages",
    Brand: "Tropicana",
    Shop: "Super Savings",
    Price: 2.2,
    Size: "1L",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Orange Juice",
    Category: "Beverages",
    Brand: "Tropicana",
    Shop: "Market Value",
    Price: 2.3,
    Size: "1L",
    ShopURL: "https://www.dunnesstores.com",
  },
  {
    ProductName: "Orange Juice",
    Category: "Beverages",
    Brand: "Tropicana",
    Shop: "Adams Supermarket",
    Price: 4.25,
    Size: "2L",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Orange Juice",
    Category: "Beverages",
    Brand: "Tropicana",
    Shop: "Market Value",
    Price: 4.3,
    Size: "2L",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Coffee
  {
    ProductName: "Coffee",
    Category: "Beverages",
    Brand: "Nescafe",
    Shop: "Super Savings",
    Price: 3.0,
    Size: "100g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Coffee",
    Category: "Beverages",
    Brand: "Nescafe",
    Shop: "Adams Supermarket",
    Price: 3.1,
    Size: "100g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Coffee",
    Category: "Beverages",
    Brand: "Nescafe",
    Shop: "Adams Supermarket",
    Price: 5.9,
    Size: "200g",
    ShopURL: "https://www.tesco.ie",
  },

  // Tea
  {
    ProductName: "Tea",
    Category: "Beverages",
    Brand: "Barrys",
    Shop: "Super Savings",
    Price: 2.5,
    Size: "100g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Tea",
    Category: "Beverages",
    Brand: "Barrys",
    Shop: "Adams Supermarket",
    Price: 4.85,
    Size: "200g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Tea",
    Category: "Beverages",
    Brand: "Barrys",
    Shop: "Market Value",
    Price: 4.9,
    Size: "200g",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Sugar
  {
    ProductName: "Sugar",
    Category: "Pantry",
    Brand: "Siucra",
    Shop: "Adams Supermarket",
    Price: 0.85,
    Size: "500g",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Sugar",
    Category: "Pantry",
    Brand: "Siucra",
    Shop: "Super Savings",
    Price: 1.5,
    Size: "1kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Sugar",
    Category: "Pantry",
    Brand: "Siucra",
    Shop: "Adams Supermarket",
    Price: 1.55,
    Size: "1kg",
    ShopURL: "https://www.tesco.ie",
  },

  // Salt
  {
    ProductName: "Salt",
    Category: "Pantry",
    Brand: "Celtic Sea Salt",
    Shop: "Market Value",
    Price: 0.8,
    Size: "250g",
    ShopURL: "https://www.dunnesstores.com",
  },
  {
    ProductName: "Salt",
    Category: "Pantry",
    Brand: "Celtic Sea Salt",
    Shop: "Super Savings",
    Price: 1.2,
    Size: "500g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Salt",
    Category: "Pantry",
    Brand: "Celtic Sea Salt",
    Shop: "Adams Supermarket",
    Price: 1.25,
    Size: "500g",
    ShopURL: "https://www.tesco.ie",
  },

  // Pepper
  {
    ProductName: "Pepper",
    Category: "Pantry",
    Brand: "Schwartz",
    Shop: "Super Savings",
    Price: 1.2,
    Size: "50g",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Pepper",
    Category: "Pantry",
    Brand: "Schwartz",
    Shop: "Market Value",
    Price: 1.35,
    Size: "50g",
    ShopURL: "https://www.dunnesstores.com",
  },
  {
    ProductName: "Pepper",
    Category: "Pantry",
    Brand: "Schwartz",
    Shop: "Super Savings",
    Price: 2.2,
    Size: "100g",
    ShopURL: "https://supervalu.ie",
  },

  // Olive Oil
  {
    ProductName: "Olive Oil",
    Category: "Pantry",
    Brand: "Filippo Berio",
    Shop: "Super Savings",
    Price: 3.5,
    Size: "500ml",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Olive Oil",
    Category: "Pantry",
    Brand: "Filippo Berio",
    Shop: "Market Value",
    Price: 3.7,
    Size: "500ml",
    ShopURL: "https://www.dunnesstores.com",
  },
  // Vinegar
  {
    ProductName: "Vinegar",
    Category: "Pantry",
    Brand: "Heinz",
    Shop: "Super Savings",
    Price: 1.8,
    Size: "500ml",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Vinegar",
    Category: "Pantry",
    Brand: "Heinz",
    Shop: "Super Savings",
    Price: 3.2,
    Size: "1L",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Vinegar",
    Category: "Pantry",
    Brand: "Heinz",
    Shop: "Market Value",
    Price: 3.35,
    Size: "1L",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Soy Sauce
  {
    ProductName: "Soy Sauce",
    Category: "Pantry",
    Brand: "Kikkoman",
    Shop: "Super Savings",
    Price: 2.0,
    Size: "250ml",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Soy Sauce",
    Category: "Pantry",
    Brand: "Kikkoman",
    Shop: "Market Value",
    Price: 2.2,
    Size: "250ml",
    ShopURL: "https://www.dunnesstores.com",
  },
  {
    ProductName: "Soy Sauce",
    Category: "Pantry",
    Brand: "Kikkoman",
    Shop: "Adams Supermarket",
    Price: 3.9,
    Size: "500ml",
    ShopURL: "https://www.tesco.ie",
  },

  // Ketchup
  {
    ProductName: "Ketchup",
    Category: "Condiments",
    Brand: "Heinz",
    Shop: "Market Value",
    Price: 1.6,
    Size: "500ml",
    ShopURL: "https://www.dunnesstores.com",
  },
  {
    ProductName: "Ketchup",
    Category: "Condiments",
    Brand: "Heinz",
    Shop: "Super Savings",
    Price: 2.8,
    Size: "1L",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Ketchup",
    Category: "Condiments",
    Brand: "Heinz",
    Shop: "Market Value",
    Price: 2.9,
    Size: "1L",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Mustard
  {
    ProductName: "Mustard",
    Category: "Condiments",
    Brand: "Frenchs",
    Shop: "Super Savings",
    Price: 1.2,
    Size: "250ml",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Mustard",
    Category: "Condiments",
    Brand: "Frenchs",
    Shop: "Market Value",
    Price: 1.3,
    Size: "250ml",
    ShopURL: "https://www.dunnesstores.com",
  },
  {
    ProductName: "Mustard",
    Category: "Condiments",
    Brand: "Frenchs",
    Shop: "Adams Supermarket",
    Price: 2.25,
    Size: "500ml",
    ShopURL: "https://www.tesco.ie",
  },

  // Mayonnaise
  {
    ProductName: "Mayonnaise",
    Category: "Condiments",
    Brand: "Hellmanns",
    Shop: "Super Savings",
    Price: 2.0,
    Size: "500ml",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Mayonnaise",
    Category: "Condiments",
    Brand: "Hellmanns",
    Shop: "Adams Supermarket",
    Price: 3.85,
    Size: "1L",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Mayonnaise",
    Category: "Condiments",
    Brand: "Hellmanns",
    Shop: "Market Value",
    Price: 3.9,
    Size: "1L",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Dish Soap
  {
    ProductName: "Dish Soap",
    Category: "Household",
    Brand: "Fairy",
    Shop: "Super Savings",
    Price: 1.8,
    Size: "500ml",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Dish Soap",
    Category: "Household",
    Brand: "Fairy",
    Shop: "Adams Supermarket",
    Price: 1.85,
    Size: "500ml",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Dish Soap",
    Category: "Household",
    Brand: "Fairy",
    Shop: "Adams Supermarket",
    Price: 3.45,
    Size: "1L",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Dish Soap",
    Category: "Household",
    Brand: "Fairy",
    Shop: "Market Value",
    Price: 3.5,
    Size: "1L",
    ShopURL: "https://www.dunnesstores.com",
  },

  // Laundry Detergent
  {
    ProductName: "Laundry Detergent",
    Category: "Household",
    Brand: "Ariel",
    Shop: "Super Savings",
    Price: 4.0,
    Size: "1kg",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Laundry Detergent",
    Category: "Household",
    Brand: "Ariel",
    Shop: "Adams Supermarket",
    Price: 4.1,
    Size: "1kg",
    ShopURL: "https://www.tesco.ie",
  },

  // Toilet Paper
  {
    ProductName: "Toilet Paper",
    Category: "Household",
    Brand: "Andrex",
    Shop: "Super Savings",
    Price: 3.75,
    Size: "4 rolls",
    ShopURL: "https://supervalu.ie",
  },
  {
    ProductName: "Toilet Paper",
    Category: "Household",
    Brand: "Andrex",
    Shop: "Adams Supermarket",
    Price: 3.55,
    Size: "4 rolls",
    ShopURL: "https://www.tesco.ie",
  },
  {
    ProductName: "Toilet Paper",
    Category: "Household",
    Brand: "Andrex",
    Shop: "Market Value",
    Price: 3.65,
    Size: "4 rolls",
    ShopURL: "https://www.dunnesstores.com",
  },
];

async function checkCustomers() {
  try {
    if ((await savvyList.Customer.countDocuments({})) === 0) {
      savvyList.Customer.insertMany(customers);
    }
    //Inserting many customers into customer schema
    //Check if any addition static suctomers have been added
    else if (customers.length > 14) {
      //delete all
      await savvyList.Customer.deleteMany({});
      //and then re-insert
      savvyList.Customer.insertMany(customers);
    } else {
      console.log(`No static customers added`);
    }
  } catch (error) {
    console.log(`Error while checking customers. ${error}`);
  }
}

async function checkProducts() {
  try {
    if ((await savvyList.Product.countDocuments({})) === 0) {
      savvyList.Product.insertMany(products);
      //Update all products with url information
      await addURL();
    }
    if (products.length > 100) {
      //delete all
      await savvyList.Product.deleteMany({});
      //and then re-insert
      savvyList.Product.insertMany(products);
      //Update all products with url information
      await addURL();
    } else {
      console.log(`No static products added`);
    }
  } catch (error) {
    console.log(`Error while checking products. ${error}`);
  }
}

//function that adds URL
async function addURL() {
  console.log("Adding URL");
  try {
    savvyList.Product.updateOne(
      { Shop: "Super Savings" },
      { $set: { ShopURL: "https://supervalu.ie" } },
      { upsert: true, multi: true }
    );
    savvyList.Product.updateOne(
      { Shop: "Market Value" },
      { $set: { ShopURL: "https://www.dunnesstores.com" } },
      { upsert: true, multi: true }
    );
    savvyList.Product.updateOne(
      { Shop: "Adams Supermarket" },
      { $set: { ShopURL: "https://www.tesco.ie" } },
      { upsert: true, multi: true }
    );
  } catch (error) {
    console.log(`Issue occured while adding URL. ${error}`);
  }
}

checkCustomers();
checkProducts();

// CRUD Functions
async function getProductNames() {
  try {
    const distinctName = await savvyList.Product.distinct(`ProductName`);

    return distinctName;
  } catch (error) {
    console.log(`Error retrieving distinct products`);
  }
}

async function getSupermarkets() {
  try {
    const distinctShops = await savvyList.Product.distinct(`Shop`);

    return distinctShops;
  } catch (error) {
    console.log(`Error retrieving distinct supermarkets`);
  }
}

async function getTopProduct(productName, shop) {
  try {
    console.log(productName, shop);
    const cheapestProduct = await savvyList.Product.aggregate([
      {
        $match: {
          ProductName: productName,
          Shop: shop,
        },
      },
      {
        $sort: {
          Price: 1,
        },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          _id: 0,
          ProductName: 1,
          Price: 1,
        },
      },
    ]).exec();

    return cheapestProduct[0];
  } catch (error) {
    console.log(`Error getting cheapest item`);
  }
}

async function checkLogin(username, password) {
  try {
    const returnedUser = await savvyList.Customer.findOne(
      { Username: username, Password: password },
      { Username: 1 }
    );
    return returnedUser ? true : false;
  } catch (error) {
    console.log(`Error getting login details. Error ${error}`);
  }
}

async function insertRegistration(
  fullname,
  username,
  password,
  eircode,
  address,
  email
) {
  try {
    const customer = new savvyList.Customer({
      Fullname: fullname,
      Username: username,
      Password: password,
      Eircode: eircode,
      Address: address,
      Email: email,
    });
    customer
      .save()
      .catch((error) => console.log(`Error while saving new Customer`));
  } catch (error) {
    console.log(`Error inserting details. Error ${error}`);
  }
}

async function getProducts(productName, size) {
  try {
    const returnedProduct = await savvyList.Product.aggregate([
      {
        $match: {
          ProductName: productName,
          Size: size,
        },
      },
      {
        $sort: {
          Price: 1,
        },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          _id: 0,
          ProductName: 1,
          Price: 1,
          Shop: 1,
          Size: 1,
          ShopURL: 1,
        },
      },
    ]).exec();

    console.log(returnedProduct);
    if (returnedProduct) {
      return returnedProduct;
    } else {
      console.log(`No product found`);
    }
  } catch (error) {
    console.log(`Error getting products. Error ${error}`);
  }
}

async function returnProduct(product) {
  try {
    const distinctProductName = await savvyList.Product.aggregate([
      {
        $match: {
          ProductName: product,
        },
      },
      {
        $group: {
          _id: {
            ProductName: product,
            Size: "$Size",
          },
        },
      },
      {
        $sort: {
          "_id.ProductName": 1,
          "_id.Size": 1,
        },
      },
      {
        $project: {
          _id: 0,
          ProductName: "$_id.ProductName",
          Size: "$_id.Size",
        },
      },
    ]).exec();

    console.log(
      `Product returned successfully. Product: ${distinctProductName.ProductName}`
    );
    console.log(distinctProductName);

    return distinctProductName;
  } catch (error) {
    console.log(`Error returning product. Error ${error}`);
  }
}

module.exports = {
  getProductNames,
  getSupermarkets,
  getTopProduct,
  checkLogin,
  insertRegistration,
  getProducts,
  returnProduct,
};
