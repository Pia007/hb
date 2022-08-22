-- 1. Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    product_name VARCHAR(300),
    product_price FLOAT,
    quantity INTEGER
);


-- 2. Add 5 orders to the orders table.
    -- A. Make orders for at least two different people.

    -- B. person_id should be different for different people.

-- note: had to enter separately
INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES (
    ( 0, 'Bosu Ball', 60, 1),
    ( 1, 'Asus Monitor UHD', 349, 1),
    ( 2, 'iPhone 14', 1599, 1),
    ( 2, 'Stress Ball', 3.99, 5),
    ( 4, 'Yeti Water Bottle', 49, 3)
);

-- 3. Select all the records from the orders table.

SELECT * FROM orders;

-- 4. Calculate the total number of products ordered.

SELECT SUM(quantity) FROM orders;

-- 5. Calculate the total order price.

SELECT SUM(quantity * product_price) FROM orders;

-- 6. Calculate the total order price by a single person_id.

SELECT SUM(quantity * product_price)
FROM orders
WHERE person_id = 2;