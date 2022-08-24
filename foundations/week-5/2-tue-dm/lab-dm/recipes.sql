-- Create a table named users, that has a serial primary id, name and email  
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name varchar(255),
    email varchar(255)
);

-- insert some users into the table
INSERT INTO users (name, email) 
VALUES ('Maxy Priest', 'demo1@demo.com'),
        ('Rusty Jackson', 'demo2@demo.com'),
        ('Bernie Martin', 'demo3@demo.com');



-- Create a table named recipes, that has a serial primary id, foreign key of user_id, and ingredient_id, name, instructions and boolean of privacy 

CREATE TABLE recipes (
    recipe_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    name VARCHAR(255),
    instructions TEXT,
    privacy boolean NOT NULL
);


-- insert some recipes into the table
INSERT INTO recipes (user_id, name, instructions, privacy)
VALUES (1, 'Pizza', 'Bake in oven', true),
        (2, 'Pasta', 'Cook al dente', true),
        (3, 'Salad', 'Lightly toss', true);



-- Create a table called occassion, that has a serial primary id, references user_id, recipe_id and has an occasion_title and recipe_title

CREATE TABLE occassions (
    occassion_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    recipe_id INTEGER NOT NULL REFERENCES recipes(recipe_id),
    occasion_title VARCHAR(255),
    recipe_title VARCHAR(255)
);

-- insert some occassions into the table
INSERT INTO occassions (user_id, recipe_id, occasion_title, recipe_title)
VALUES (1, 4, 'Birthday', 'Pizza'),
        (2, 4, 'Brunch', 'Quiche'),
        (3, 5, 'Lunch', 'Salad'),
        (3, 5, 'Graduation', 'Salmon Steak');


-- create a table called gorcery lists, that has a serial primary id, references user_id, recipe and ingredient_id and has a name, quantity and a price

CREATE TABLE grocery_lists (
    grocery_list_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id),
    recipe_id INTEGER NOT NULL REFERENCES recipes(recipe_id),
    ingredient_id INTEGER NOT NULL REFERENCES ingredients(ingredient_id),
    ingredient VARCHAR(255),
    quantity INTEGER,
    price  FLOAT
);


-- insert some grocery lists into the table
INSERT INTO grocery_lists (user_id, recipe_id, ingredient_id, ingredient, quantity, price)
VALUES (1, 4, 13, 'Pizza Sauce', 1, 3.99),
        (1, 4, 14, 'Cheese', 1, 5.99),
        (2, 4, 15, 'Pepperoni', 1, 4.99),
        (2, 5, 16, 'Spinach', 3, 1.00),
        (2, 5, 17, 'Gruyere', 1, 8.00),
        (2, 5, 18, 'Eggs', 12, 1.50),
        (3, 6, 19, 'Lettuce', 1, 1.00),
        (3, 6, 20, 'Tomatoes', 1, 1.50),
        (3, 6, 21, 'Balsamic Vinaigrette', 1, 2.99),
        (3, 6, 22, 'Salad dressing', 1, 2.50),
        (3, 6, 23, 'Salmon', 2, 30.00),
        (3, 6, 24, 'Capers', 1, 6.99);
        

-- create a table called ingredients, that has a serial primary id, references recipe_id and grocery_list_id. Has an ingredient

CREATE TABLE ingredients (
    ingredient_id SERIAL PRIMARY KEY,
    recipe_id INTEGER NOT NULL REFERENCES recipes(recipe_id),
    ingredient VARCHAR(255)
);

--add ingredients to the ingredients table
INSERT INTO ingredients (recipe_id, ingredient)
VALUES (4, 'Pizza sauce'),
        (4, 'Cheese'),
        (4, 'Pepperoni'),
        (5, 'Spinach'),
        (5, 'Gruyere'),
        (5, 'Eggs'),
        (6, 'Lettuce'),
        (6, 'Tomatoes'),
        (6, 'Balsamic Vinaigrette'),
        (6, 'Salad dressing'),
        (6, 'Salmon'),
        (6, 'Capers');