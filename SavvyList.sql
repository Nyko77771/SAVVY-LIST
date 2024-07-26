-- Create the database
CREATE DATABASE SavvyList;


USE SavvyList;

-- Create the Customers table
CREATE TABLE Customers (
    CustomerID VARCHAR(6) PRIMARY KEY,
    FirstName VARCHAR(25),
    LastName VARCHAR(25),
    Email VARCHAR(100) UNIQUE,
    Password VARCHAR(25),
    Address VARCHAR(255),
    PhoneNumber VARCHAR(20)
);

ALTER TABLE Customers
ADD Name VARCHAR(50),
ADD Eircode VARCHAR(10);

ALTER TABLE Customers
DROP COLUMN FirstName,
DROP COLUMN LastName;


INSERT INTO Customers (CustomerID, FirstName, LastName, Email, Password, Address, PhoneNumber) VALUES
('C00001', 'John', 'Doe', 'john.doe@email.com', 'password1', '123 Main St, Dublin, Ireland', '+353 1 234 5678'),
('C00002', 'Jane', 'Smith', 'jane.smith@email.com', 'password2', '456 Elm St, Dublin, Ireland', '+353 1 234 5679'),
('C00003', 'Michael', 'Johnson', 'michael.johnson@email.com', 'password3', '789 Oak St, Dublin, Ireland', '+353 1 234 5680'),
('C00004', 'Emily', 'Brown', 'emily.brown@email.com', 'password4', '101 Pine St, Dublin, Ireland', '+353 1 234 5681'),
('C00005', 'David', 'Jones', 'david.jones@email.com', 'password5', '202 Maple St, Dublin, Ireland', '+353 1 234 5682'),
('C00006', 'Emma', 'Taylor', 'emma.taylor@email.com', 'password6', '303 Cedar St, Dublin, Ireland', '+353 1 234 5683'),
('C00007', 'Daniel', 'Williams', 'daniel.williams@email.com', 'password7', '404 Birch St, Dublin, Ireland', '+353 1 234 5684'),
('C00008', 'Olivia', 'Lee', 'olivia.lee@email.com', 'password8', '505 Spruce St, Dublin, Ireland', '+353 1 234 5685'),
('C00009', 'James', 'Davis', 'james.davis@email.com', 'password9', '606 Walnut St, Dublin, Ireland', '+353 1 234 5686'),
('C00010', 'Sophia', 'Wilson', 'sophia.wilson@email.com', 'password10', '707 Ash St, Dublin, Ireland', '+353 1 234 5687'),
('C00011', 'Alexander', 'Clark', 'alexander.clark@email.com', 'password11', '808 Willow St, Dublin, Ireland', '+353 1 234 5688'),
('C00012', 'Ava', 'Harris', 'ava.harris@email.com', 'password12', '909 Cypress St, Dublin, Ireland', '+353 1 234 5689'),
('C00013', 'Matthew', 'Martinez', 'matthew.martinez@email.com', 'password13', '111 Redwood St, Dublin, Ireland', '+353 1 234 5690'),
('C00014', 'Isabella', 'Garcia', 'isabella.garcia@email.com', 'password14', '222 Fir St, Dublin, Ireland', '+353 1 234 5691'),
('C00015', 'Ethan', 'Martinez', 'ethan.martinez@email.com', 'password15', '333 Alder St, Dublin, Ireland', '+353 1 234 5692'),
('C00016', 'Mia', 'Rodriguez', 'mia.rodriguez@email.com', 'password16', '444 Beech St, Dublin, Ireland', '+353 1 234 5693'),
('C00017', 'Joseph', 'White', 'joseph.white@email.com', 'password17', '555 Magnolia St, Dublin, Ireland', '+353 1 234 5694'),
('C00018', 'Amelia', 'Lewis', 'amelia.lewis@email.com', 'password18', '666 Hickory St, Dublin, Ireland', '+353 1 234 5695'),
('C00019', 'Christopher', 'Walker', 'christopher.walker@email.com', 'password19', '777 Chestnut St, Dublin, Ireland', '+353 1 234 5696'),
('C00020', 'Charlotte', 'Hall', 'charlotte.hall@email.com', 'password20', '888 Sequoia St, Dublin, Ireland', '+353 1 234 5697'),
('C00021', 'Anthony', 'Allen', 'anthony.allen@email.com', 'password21', '999 Cedar Ave, Dublin, Ireland', '+353 1 234 5698'),
('C00022', 'Grace', 'Young', 'grace.young@email.com', 'password22', '1010 Poplar St, Dublin, Ireland', '+353 1 234 5699'),
('C00023', 'Andrew', 'King', 'andrew.king@email.com', 'password23', '1111 Hawthorn St, Dublin, Ireland', '+353 1 234 5700'),
('C00024', 'Victoria', 'Scott', 'victoria.scott@email.com', 'password24', '1212 Laurel St, Dublin, Ireland', '+353 1 234 5701'),
('C00025', 'Joshua', 'Green', 'joshua.green@email.com', 'password25', '1313 Juniper St, Dublin, Ireland', '+353 1 234 5702'),
('C00026', 'Hannah', 'Baker', 'hannah.baker@email.com', 'password26', '1414 Palm St, Dublin, Ireland', '+353 1 234 5703'),
('C00027', 'Ryan', 'Gonzalez', 'ryan.gonzalez@email.com', 'password27', '1515 Sycamore St, Dublin, Ireland', '+353 1 234 5704'),
('C00028', 'Lily', 'Nelson', 'lily.nelson@email.com', 'password28', '1616 Maple Ave, Dublin, Ireland', '+353 1 234 5705'),
('C00029', 'Brandon', 'Carter', 'brandon.carter@email.com', 'password29', '1717 Olive St, Dublin, Ireland', '+353 1 234 5706'),
('C00030', 'Zoe', 'Mitchell', 'zoe.mitchell@email.com', 'password30', '1818 Birch Ave, Dublin, Ireland', '+353 1 234 5707');


select * from customers;

CREATE TABLE Products (
    ProductID VARCHAR(6) PRIMARY KEY,
    ProductName VARCHAR(25),
    Category VARCHAR(25),
    Brand VARCHAR(25),
    Shop VARCHAR(25),
    Price DECIMAL(10, 2)
);


ALTER TABLE Products
ADD COLUMN Size VARCHAR(20);



select * from products;


INSERT INTO Products (ProductID, ProductName, Category, Brand, Shop, Price, Size) VALUES
-- Milk
('P00001', 'Milk', 'Dairy', 'Avonmore', 'Super Savings', 1.50, '1L'),
('P00002', 'Milk', 'Dairy', 'Avonmore', 'Adams Supermarket', 1.55, '1L'),
('P00003', 'Milk', 'Dairy', 'Avonmore', 'Market Value', 1.60, '1L'),
('P00004', 'Milk', 'Dairy', 'Avonmore', 'Super Savings', 2.90, '2L'),
('P00005', 'Milk', 'Dairy', 'Avonmore', 'Adams Supermarket', 3.00, '2L'),
('P00006', 'Milk', 'Dairy', 'Avonmore', 'Market Value', 3.10, '2L'),

-- Bread
('P00007', 'Bread', 'Bakery', 'Brennans', 'Super Savings', 1.20, '400g'),
('P00008', 'Bread', 'Bakery', 'Brennans', 'Adams Supermarket', 1.25, '400g'),
('P00009', 'Bread', 'Bakery', 'Brennans', 'Market Value', 1.30, '400g'),
('P00010', 'Bread', 'Bakery', 'Brennans', 'Super Savings', 1.70, '800g'),
('P00011', 'Bread', 'Bakery', 'Brennans', 'Adams Supermarket', 1.75, '800g'),
('P00012', 'Bread', 'Bakery', 'Brennans', 'Market Value', 1.80, '800g'),

-- Eggs
('P00013', 'Eggs', 'Dairy', 'Golden Irish', 'Super Savings', 2.00, '6pcs'),
('P00014', 'Eggs', 'Dairy', 'Golden Irish', 'Adams Supermarket', 2.10, '6pcs'),
('P00015', 'Eggs', 'Dairy', 'Golden Irish', 'Market Value', 2.05, '6pcs'),
('P00016', 'Eggs', 'Dairy', 'Golden Irish', 'Super Savings', 3.50, '12pcs'),
('P00017', 'Eggs', 'Dairy', 'Golden Irish', 'Adams Supermarket', 3.60, '12pcs'),
('P00018', 'Eggs', 'Dairy', 'Golden Irish', 'Market Value', 3.55, '12pcs'),

-- Butter
('P00019', 'Butter', 'Dairy', 'Kerrygold', 'Super Savings', 1.80, '250g'),
('P00020', 'Butter', 'Dairy', 'Kerrygold', 'Adams Supermarket', 1.85, '250g'),
('P00021', 'Butter', 'Dairy', 'Kerrygold', 'Market Value', 1.90, '250g'),
('P00022', 'Butter', 'Dairy', 'Kerrygold', 'Super Savings', 3.40, '500g'),
('P00023', 'Butter', 'Dairy', 'Kerrygold', 'Adams Supermarket', 3.50, '500g'),
('P00024', 'Butter', 'Dairy', 'Kerrygold', 'Market Value', 3.60, '500g'),

-- Cheese
('P00025', 'Cheese', 'Dairy', 'Dubliner', 'Super Savings', 2.50, '200g'),
('P00026', 'Cheese', 'Dairy', 'Dubliner', 'Adams Supermarket', 2.55, '200g'),
('P00027', 'Cheese', 'Dairy', 'Dubliner', 'Market Value', 2.60, '200g'),
('P00028', 'Cheese', 'Dairy', 'Dubliner', 'Super Savings', 4.80, '400g'),
('P00029', 'Cheese', 'Dairy', 'Dubliner', 'Adams Supermarket', 4.90, '400g'),
('P00030', 'Cheese', 'Dairy', 'Dubliner', 'Market Value', 5.00, '400g'),

-- Chicken Breast
('P00031', 'Chicken Breast', 'Meat', 'Manor Farm', 'Super Savings', 5.00, '1kg'),
('P00032', 'Chicken Breast', 'Meat', 'Manor Farm', 'Adams Supermarket', 5.10, '1kg'),
('P00033', 'Chicken Breast', 'Meat', 'Manor Farm', 'Market Value', 5.20, '1kg'),
('P00034', 'Chicken Breast', 'Meat', 'Manor Farm', 'Super Savings', 9.50, '2kg'),
('P00035', 'Chicken Breast', 'Meat', 'Manor Farm', 'Adams Supermarket', 9.60, '2kg'),
('P00036', 'Chicken Breast', 'Meat', 'Manor Farm', 'Market Value', 9.70, '2kg'),

-- Apple
('P00037', 'Apple', 'Fruit', 'Pink Lady', 'Super Savings', 0.30, '1kg'),
('P00038', 'Apple', 'Fruit', 'Pink Lady', 'Adams Supermarket', 0.35, '1kg'),
('P00039', 'Apple', 'Fruit', 'Pink Lady', 'Market Value', 0.40, '1kg'),
('P00040', 'Apple', 'Fruit', 'Pink Lady', 'Super Savings', 0.55, '2kg'),
('P00041', 'Apple', 'Fruit', 'Pink Lady', 'Adams Supermarket', 0.60, '2kg'),
('P00042', 'Apple', 'Fruit', 'Pink Lady', 'Market Value', 0.65, '2kg'),

-- Banana
('P00043', 'Banana', 'Fruit', 'Fyffes', 'Super Savings', 0.25, '1kg'),
('P00044', 'Banana', 'Fruit', 'Fyffes', 'Adams Supermarket', 0.27, '1kg'),
('P00045', 'Banana', 'Fruit', 'Fyffes', 'Market Value', 0.26, '1kg'),
('P00046', 'Banana', 'Fruit', 'Fyffes', 'Super Savings', 0.45, '2kg'),
('P00047', 'Banana', 'Fruit', 'Fyffes', 'Adams Supermarket', 0.47, '2kg'),
('P00048', 'Banana', 'Fruit', 'Fyffes', 'Market Value', 0.46, '2kg'),

-- Orange
('P00049', 'Orange', 'Fruit', 'Sunkist', 'Super Savings', 0.35, '1kg'),
('P00050', 'Orange', 'Fruit', 'Sunkist', 'Adams Supermarket', 0.38, '1kg'),
('P00051', 'Orange', 'Fruit', 'Sunkist', 'Market Value', 0.37, '1kg'),
('P00052', 'Orange', 'Fruit', 'Sunkist', 'Super Savings', 0.65, '2kg'),
('P00053', 'Orange', 'Fruit', 'Sunkist', 'Adams Supermarket', 0.68, '2kg'),
('P00054', 'Orange', 'Fruit', 'Sunkist', 'Market Value', 0.67, '2kg'),

-- Tomato
('P00055', 'Tomato', 'Vegetable', 'Vine Ripened', 'Super Savings', 0.40, '1kg'),
('P00056', 'Tomato', 'Vegetable', 'Vine Ripened', 'Adams Supermarket', 0.42, '1kg'),
('P00057', 'Tomato', 'Vegetable', 'Vine Ripened', 'Market Value', 0.45, '1kg'),
('P00058', 'Tomato', 'Vegetable', 'Vine Ripened', 'Super Savings', 0.75, '2kg'),
('P00059', 'Tomato', 'Vegetable', 'Vine Ripened', 'Adams Supermarket', 0.78, '2kg'),
('P00060', 'Tomato', 'Vegetable', 'Vine Ripened', 'Market Value', 0.80, '2kg'),

-- Lettuce
('P00061', 'Lettuce', 'Vegetable', 'Iceberg', 'Super Savings', 0.90, '500g'),
('P00062', 'Lettuce', 'Vegetable', 'Iceberg', 'Adams Supermarket', 0.95, '500g'),
('P00063', 'Lettuce', 'Vegetable', 'Iceberg', 'Market Value', 1.00, '500g'),
('P00064', 'Lettuce', 'Vegetable', 'Iceberg', 'Super Savings', 1.70, '1kg'),
('P00065', 'Lettuce', 'Vegetable', 'Iceberg', 'Adams Supermarket', 1.75, '1kg'),
('P00066', 'Lettuce', 'Vegetable', 'Iceberg', 'Market Value', 1.80, '1kg'),

-- Carrot
('P00067', 'Carrot', 'Vegetable', 'Organic', 'Super Savings', 0.50, '500g'),
('P00068', 'Carrot', 'Vegetable', 'Organic', 'Adams Supermarket', 0.52, '500g'),
('P00069', 'Carrot', 'Vegetable', 'Organic', 'Market Value', 0.55, '500g'),
('P00070', 'Carrot', 'Vegetable', 'Organic', 'Super Savings', 0.90, '1kg'),
('P00071', 'Carrot', 'Vegetable', 'Organic', 'Adams Supermarket', 0.95, '1kg'),
('P00072', 'Carrot', 'Vegetable', 'Organic', 'Market Value', 1.00, '1kg'),

-- Pasta
('P00073', 'Pasta', 'Grains', 'Barilla', 'Super Savings', 1.00, '500g'),
('P00074', 'Pasta', 'Grains', 'Barilla', 'Adams Supermarket', 1.10, '500g'),
('P00075', 'Pasta', 'Grains', 'Barilla', 'Market Value', 1.20, '500g'),
('P00076', 'Pasta', 'Grains', 'Barilla', 'Super Savings', 1.80, '1kg'),
('P00077', 'Pasta', 'Grains', 'Barilla', 'Adams Supermarket', 1.90, '1kg'),
('P00078', 'Pasta', 'Grains', 'Barilla', 'Market Value', 2.00, '1kg'),

-- Rice
('P00079', 'Rice', 'Grains', 'Uncle Bens', 'Super Savings', 1.10, '500g'),
('P00080', 'Rice', 'Grains', 'Uncle Bens', 'Adams Supermarket', 1.20, '500g'),
('P00081', 'Rice', 'Grains', 'Uncle Bens', 'Market Value', 1.15, '500g'),
('P00082', 'Rice', 'Grains', 'Uncle Bens', 'Super Savings', 2.00, '1kg'),
('P00083', 'Rice', 'Grains', 'Uncle Bens', 'Adams Supermarket', 2.10, '1kg'),
('P00084', 'Rice', 'Grains', 'Uncle Bens', 'Market Value', 2.20, '1kg'),

-- Cereal
('P00085', 'Cereal', 'Breakfast', 'Kelloggs', 'Super Savings', 2.70, '500g'),
('P00086', 'Cereal', 'Breakfast', 'Kelloggs', 'Adams Supermarket', 2.80, '500g'),
('P00087', 'Cereal', 'Breakfast', 'Kelloggs', 'Market Value', 2.75, '500g'),
('P00088', 'Cereal', 'Breakfast', 'Kelloggs', 'Super Savings', 5.20, '1kg'),
('P00089', 'Cereal', 'Breakfast', 'Kelloggs', 'Adams Supermarket', 5.30, '1kg'),
('P00090', 'Cereal', 'Breakfast', 'Kelloggs', 'Market Value', 5.40, '1kg'),

-- Orange Juice
('P00091', 'Orange Juice', 'Beverages', 'Tropicana', 'Super Savings', 2.20, '1L'),
('P00092', 'Orange Juice', 'Beverages', 'Tropicana', 'Adams Supermarket', 2.25, '1L'),
('P00093', 'Orange Juice', 'Beverages', 'Tropicana', 'Market Value', 2.30, '1L'),
('P00094', 'Orange Juice', 'Beverages', 'Tropicana', 'Super Savings', 4.20, '2L'),
('P00095', 'Orange Juice', 'Beverages', 'Tropicana', 'Adams Supermarket', 4.25, '2L'),
('P00096', 'Orange Juice', 'Beverages', 'Tropicana', 'Market Value', 4.30, '2L'),

-- Coffee
('P00097', 'Coffee', 'Beverages', 'Nescafe', 'Super Savings', 3.00, '100g'),
('P00098', 'Coffee', 'Beverages', 'Nescafe', 'Adams Supermarket', 3.10, '100g'),
('P00099', 'Coffee', 'Beverages', 'Nescafe', 'Market Value', 3.20, '100g'),
('P00100', 'Coffee', 'Beverages', 'Nescafe', 'Super Savings', 5.80, '200g'),
('P00101', 'Coffee', 'Beverages', 'Nescafe', 'Adams Supermarket', 5.90, '200g'),
('P00102', 'Coffee', 'Beverages', 'Nescafe', 'Market Value', 6.00, '200g'),

-- Tea
('P00103', 'Tea', 'Beverages', 'Barrys', 'Super Savings', 2.50, '100g'),
('P00104', 'Tea', 'Beverages', 'Barrys', 'Adams Supermarket', 2.55, '100g'),
('P00105', 'Tea', 'Beverages', 'Barrys', 'Market Value', 2.60, '100g'),
('P00106', 'Tea', 'Beverages', 'Barrys', 'Super Savings', 4.80, '200g'),
('P00107', 'Tea', 'Beverages', 'Barrys', 'Adams Supermarket', 4.85, '200g'),
('P00108', 'Tea', 'Beverages', 'Barrys', 'Market Value', 4.90, '200g'),

-- Sugar
('P00109', 'Sugar', 'Pantry', 'Siucra', 'Super Savings', 0.80, '500g'),
('P00110', 'Sugar', 'Pantry', 'Siucra', 'Adams Supermarket', 0.85, '500g'),
('P00111', 'Sugar', 'Pantry', 'Siucra', 'Market Value', 0.90, '500g'),
('P00112', 'Sugar', 'Pantry', 'Siucra', 'Super Savings', 1.50, '1kg'),
('P00113', 'Sugar', 'Pantry', 'Siucra', 'Adams Supermarket', 1.55, '1kg'),
('P00114', 'Sugar', 'Pantry', 'Siucra', 'Market Value', 1.60, '1kg'),

-- Salt
('P00115', 'Salt', 'Pantry', 'Celtic Sea Salt', 'Super Savings', 0.70, '250g'),
('P00116', 'Salt', 'Pantry', 'Celtic Sea Salt', 'Adams Supermarket', 0.75, '250g'),
('P00117', 'Salt', 'Pantry', 'Celtic Sea Salt', 'Market Value', 0.80, '250g'),
('P00118', 'Salt', 'Pantry', 'Celtic Sea Salt', 'Super Savings', 1.20, '500g'),
('P00119', 'Salt', 'Pantry', 'Celtic Sea Salt', 'Adams Supermarket', 1.25, '500g'),
('P00120', 'Salt', 'Pantry', 'Celtic Sea Salt', 'Market Value', 1.30, '500g'),

-- Pepper
('P00121', 'Pepper', 'Pantry', 'Schwartz', 'Super Savings', 1.20, '50g'),
('P00122', 'Pepper', 'Pantry', 'Schwartz', 'Adams Supermarket', 1.25, '50g'),
('P00123', 'Pepper', 'Pantry', 'Schwartz', 'Market Value', 1.30, '50g'),
('P00124', 'Pepper', 'Pantry', 'Schwartz', 'Super Savings', 2.20, '100g'),
('P00125', 'Pepper', 'Pantry', 'Schwartz', 'Adams Supermarket', 2.25, '100g'),
('P00126', 'Pepper', 'Pantry', 'Schwartz', 'Market Value', 2.30, '100g'),

-- Olive Oil
('P00127', 'Olive Oil', 'Pantry', 'Filippo Berio', 'Super Savings', 3.50, '500ml'),
('P00128', 'Olive Oil', 'Pantry', 'Filippo Berio', 'Adams Supermarket', 3.60, '500ml'),
('P00129', 'Olive Oil', 'Pantry', 'Filippo Berio', 'Market Value', 3.70, '500ml'),
('P00130', 'Olive Oil', 'Pantry', 'Filippo Berio', 'Super Savings', 6.50, '1L'),
('P00131', 'Olive Oil', 'Pantry', 'Filippo Berio', 'Adams Supermarket', 6.60, '1L'),
('P00132', 'Olive Oil', 'Pantry', 'Filippo Berio', 'Market Value', 6.70, '1L'),

-- Vinegar
('P00133', 'Vinegar', 'Pantry', 'Heinz', 'Super Savings', 1.80, '500ml'),
('P00134', 'Vinegar', 'Pantry', 'Heinz', 'Adams Supermarket', 1.85, '500ml'),
('P00135', 'Vinegar', 'Pantry', 'Heinz', 'Market Value', 1.90, '500ml'),
('P00136', 'Vinegar', 'Pantry', 'Heinz', 'Super Savings', 3.20, '1L'),
('P00137', 'Vinegar', 'Pantry', 'Heinz', 'Adams Supermarket', 3.25, '1L'),
('P00138', 'Vinegar', 'Pantry', 'Heinz', 'Market Value', 3.30, '1L'),

-- Soy Sauce
('P00139', 'Soy Sauce', 'Pantry', 'Kikkoman', 'Super Savings', 2.00, '250ml'),
('P00140', 'Soy Sauce', 'Pantry', 'Kikkoman', 'Adams Supermarket', 2.10, '250ml'),
('P00141', 'Soy Sauce', 'Pantry', 'Kikkoman', 'Market Value', 2.20, '250ml'),
('P00142', 'Soy Sauce', 'Pantry', 'Kikkoman', 'Super Savings', 3.80, '500ml'),
('P00143', 'Soy Sauce', 'Pantry', 'Kikkoman', 'Adams Supermarket', 3.90, '500ml'),
('P00144', 'Soy Sauce', 'Pantry', 'Kikkoman', 'Market Value', 4.00, '500ml'),

-- Ketchup
('P00145', 'Ketchup', 'Condiments', 'Heinz', 'Super Savings', 1.50, '500ml'),
('P00146', 'Ketchup', 'Condiments', 'Heinz', 'Adams Supermarket', 1.55, '500ml'),
('P00147', 'Ketchup', 'Condiments', 'Heinz', 'Market Value', 1.60, '500ml'),
('P00148', 'Ketchup', 'Condiments', 'Heinz', 'Super Savings', 2.80, '1L'),
('P00149', 'Ketchup', 'Condiments', 'Heinz', 'Adams Supermarket', 2.85, '1L'),
('P00150', 'Ketchup', 'Condiments', 'Heinz', 'Market Value', 2.90, '1L'),

-- Mustard
('P00151', 'Mustard', 'Condiments', 'Frenchs', 'Super Savings', 1.20, '250ml'),
('P00152', 'Mustard', 'Condiments', 'Frenchs', 'Adams Supermarket', 1.25, '250ml'),
('P00153', 'Mustard', 'Condiments', 'Frenchs', 'Market Value', 1.30, '250ml'),
('P00154', 'Mustard', 'Condiments', 'Frenchs', 'Super Savings', 2.20, '500ml'),
('P00155', 'Mustard', 'Condiments', 'Frenchs', 'Adams Supermarket', 2.25, '500ml'),
('P00156', 'Mustard', 'Condiments', 'Frenchs', 'Market Value', 2.30, '500ml'),

-- Mayonnaise
('P00157', 'Mayonnaise', 'Condiments', 'Hellmanns', 'Super Savings', 2.00, '500ml'),
('P00158', 'Mayonnaise', 'Condiments', 'Hellmanns', 'Adams Supermarket', 2.05, '500ml'),
('P00159', 'Mayonnaise', 'Condiments', 'Hellmanns', 'Market Value', 2.10, '500ml'),
('P00160', 'Mayonnaise', 'Condiments', 'Hellmanns', 'Super Savings', 3.80, '1L'),
('P00161', 'Mayonnaise', 'Condiments', 'Hellmanns', 'Adams Supermarket', 3.85, '1L'),
('P00162', 'Mayonnaise', 'Condiments', 'Hellmanns', 'Market Value', 3.90, '1L'),

-- Dish Soap
('P00163', 'Dish Soap', 'Household', 'Fairy', 'Super Savings', 1.80, '500ml'),
('P00164', 'Dish Soap', 'Household', 'Fairy', 'Adams Supermarket', 1.85, '500ml'),
('P00165', 'Dish Soap', 'Household', 'Fairy', 'Market Value', 1.90, '500ml'),
('P00166', 'Dish Soap', 'Household', 'Fairy', 'Super Savings', 3.40, '1L'),
('P00167', 'Dish Soap', 'Household', 'Fairy', 'Adams Supermarket', 3.45, '1L'),
('P00168', 'Dish Soap', 'Household', 'Fairy', 'Market Value', 3.50, '1L'),

-- Laundry Detergent
('P00169', 'Laundry Detergent', 'Household', 'Ariel', 'Super Savings', 4.00, '1kg'),
('P00170', 'Laundry Detergent', 'Household', 'Ariel', 'Adams Supermarket', 4.10, '1kg'),
('P00171', 'Laundry Detergent', 'Household', 'Ariel', 'Market Value', 4.20, '1kg'),
('P00172', 'Laundry Detergent', 'Household', 'Ariel', 'Super Savings', 7.80, '2kg'),
('P00173', 'Laundry Detergent', 'Household', 'Ariel', 'Adams Supermarket', 7.90, '2kg'),
('P00174', 'Laundry Detergent', 'Household', 'Ariel', 'Market Value', 8.00, '2kg'),

-- Toilet Paper
('P00175', 'Toilet Paper', 'Household', 'Andrex', 'Super Savings', 3.50, '4 rolls'),
('P00176', 'Toilet Paper', 'Household', 'Andrex', 'Adams Supermarket', 3.55, '4 rolls'),
('P00177', 'Toilet Paper', 'Household', 'Andrex', 'Market Value', 3.60, '4 rolls'),
('P00178', 'Toilet Paper', 'Household', 'Andrex', 'Super Savings', 6.50, '8 rolls'),
('P00179', 'Toilet Paper', 'Household', 'Andrex', 'Adams Supermarket', 6.55, '8 rolls'),
('P00180', 'Toilet Paper', 'Household', 'Andrex', 'Market Value', 6.60, '8 rolls');

select * from products;


CREATE TABLE ShoppingLists (
    ShoppingListID VARCHAR(6) PRIMARY KEY,
    CustomerID VARCHAR(6),
    ListName VARCHAR(25),
    DateCreated DATETIME,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO ShoppingLists (ShoppingListID, CustomerID, ListName, DateCreated) VALUES
('S00001', 'C00001', 'Weekly', '2024-07-01 10:00:00'),
('S00002', 'C00002', 'Groceries', '2024-07-02 12:30:00'),
('S00003', 'C00003', 'Essentials', '2024-07-03 15:45:00');

select * from ShoppingLists;

-- Create the ShoppingListItems table
CREATE TABLE ShoppingListItems (
    ShoppingListItemID VARCHAR(6) PRIMARY KEY,
    ShoppingListID VARCHAR(6),
    ProductID VARCHAR(6),
    Quantity INTEGER,
    FOREIGN KEY (ShoppingListID) REFERENCES ShoppingLists(ShoppingListID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Create the Shops table
CREATE TABLE Shops (
    ShopID VARCHAR(6) PRIMARY KEY,
    ShopName VARCHAR(25)
);

DROP TABLE Shops;


CREATE TABLE Orders (
    OrderID VARCHAR(6) PRIMARY KEY,
    CustomerID VARCHAR(6),
    OrderDate DATETIME,
    OrderTotal DECIMAL(10, 2),
    DeliveryAddress VARCHAR(255),
    Status VARCHAR(15),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderItems (
    OrderItemID VARCHAR(6) PRIMARY KEY,
    OrderID VARCHAR(6),
    ProductID VARCHAR(6),
    Quantity INTEGER,
    Price DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

SHOW TABLES;


INSERT INTO Orders (OrderID, CustomerID, OrderDate, OrderTotal, DeliveryAddress, Status) VALUES
('O00001', 'C00001', '2024-07-10 14:30:00', 25.85, '123 Main St, Dublin, Ireland', 'Delivered'),
('O00002', 'C00002', '2024-07-11 09:15:00', 45.20, '456 Elm St, Dublin, Ireland', 'Processing');



INSERT INTO OrderItems (OrderItemID, OrderID, ProductID, Quantity, Price) VALUES
-- Order 1
('OI0001', 'O00001', 'P00001', 2, 1.50), -- 2 x Milk (1L, Avonmore, Super Savings)
('OI0002', 'O00001', 'P00007', 1, 1.20), -- 1 x Bread (400g, Brennans, Super Savings)
('OI0003', 'O00001', 'P00013', 1, 2.00), -- 1 x Eggs (6pcs, Golden Irish, Super Savings)
('OI0004', 'O00001', 'P00019', 1, 1.80), -- 1 x Butter (250g, Kerrygold, Super Savings)
('OI0005', 'O00001', 'P00025', 1, 2.50), -- 1 x Cheese (200g, Dubliner, Super Savings)
('OI0006', 'O00001', 'P00055', 1, 0.40), -- 1 x Tomato (1kg, Vine Ripened, Super Savings)

-- Order 2
('OI0007', 'O00002', 'P00002', 1, 1.55), -- 1 x Milk (1L, Avonmore, Adams Supermarket)
('OI0008', 'O00002', 'P00008', 2, 1.25), -- 2 x Bread (400g, Brennans, Adams Supermarket)
('OI0009', 'O00002', 'P00014', 2, 2.10), -- 2 x Eggs (6pcs, Golden Irish, Adams Supermarket)
('OI0010', 'O00002', 'P00020', 1, 1.85), -- 1 x Butter (250g, Kerrygold, Adams Supermarket)
('OI0011', 'O00002', 'P00026', 1, 2.55), -- 1 x Cheese (200g, Dubliner, Adams Supermarket)
('OI0012', 'O00002', 'P00056', 2, 0.42); -- 2 x Tomato (1kg, Vine Ripened, Adams Supermarket);


ALTER TABLE Products ADD ShopURL VARCHAR(255);

UPDATE Products SET ShopURL = 'https://supervalu.ie' WHERE Shop = 'Super Savings';
UPDATE Products SET ShopURL = 'https://www.dunnesstores.com' WHERE Shop = 'Market Value';
UPDATE Products SET ShopURL = 'https://www.tesco.ie' WHERE Shop = 'Adams Supermarket';



-- TESTS
-- Join Customers with ShoppingLists to verify the connection

SELECT 
    c.CustomerID, 
    c.FirstName, 
    c.LastName, 
    sl.ShoppingListID, 
    sl.ListName, 
    sl.DateCreated
FROM 
    Customers c
JOIN 
    ShoppingLists sl ON c.CustomerID = sl.CustomerID;
    
    
    -- Join ShoppingLists with ShoppingListItems to verify the connection
    SELECT 
    sl.ShoppingListID, 
    sl.ListName, 
    sli.ShoppingListItemID, 
    p.ProductName, 
    sli.Quantity
FROM 
    ShoppingLists sl
JOIN 
    ShoppingListItems sli ON sl.ShoppingListID = sli.ShoppingListID
JOIN 
    Products p ON sli.ProductID = p.ProductID;
    
    
    -- Join Orders with OrderItems to verify the connection
    
 SELECT 
    o.OrderID, 
    o.CustomerID, 
    o.OrderDate, 
    o.OrderTotal, 
    o.DeliveryAddress, 
    o.Status,
    oi.OrderItemID, 
    p.ProductName, 
    oi.Quantity, 
    oi.Price
FROM 
    Orders o
JOIN 
    OrderItems oi ON o.OrderID = oi.OrderID
JOIN 
    Products p ON oi.ProductID = p.ProductID;

-- Join Orders, OrderItems, and Products

SELECT 
    o.OrderID, 
    c.CustomerID, 
    c.FirstName, 
    c.LastName, 
    o.OrderDate, 
    o.OrderTotal, 
    o.DeliveryAddress, 
    o.Status,
    oi.OrderItemID, 
    p.ProductName, 
    oi.Quantity, 
    oi.Price
FROM 
    Orders o
JOIN 
    Customers c ON o.CustomerID = c.CustomerID
JOIN 
    OrderItems oi ON o.OrderID = oi.OrderID
JOIN 
    Products p ON oi.ProductID = p.ProductID;


-- COUNT OF RECORDS IN EACH TABLE

-- Count of Customers
SELECT COUNT(*) AS TotalCustomers FROM Customers;

-- Count of Products
SELECT COUNT(*) AS TotalProducts FROM Products;

-- Count of ShoppingLists
SELECT COUNT(*) AS TotalShoppingLists FROM ShoppingLists;

-- Count of ShoppingListItems
SELECT COUNT(*) AS TotalShoppingListItems FROM ShoppingListItems;

-- Count of Orders
SELECT COUNT(*) AS TotalOrders FROM Orders;

-- Count of OrderItems
SELECT COUNT(*) AS TotalOrderItems FROM OrderItems;





