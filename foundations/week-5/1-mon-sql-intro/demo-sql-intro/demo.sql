-- https://postgres.devmountain.com/

-- Create a table called melons
    -- make the id a serialized primary key
    -- rows melon_type,id, name, price, seedless

CREATE TABLE melons (
    id SERIAL PRIMARY KEY,
    melon_type VARCHAR(30),
    name VARCHAR(30),
    price FLOAT,
    seedless BOOLEAN
);

-- INSERT record in the melons table

INSERT INTO melons ( melon_type, name, price, seedless)
    VALUES ('Musk', 'Honeydew', 1, False);

INSERT INTO melons ( melon_type, name, price, seedless)
    VALUES ('Hybrid', 'Crenshaw', 2, False);

INSERT INTO melons ( melon_type, name, price, seedless)
    VALUES ('Hybrid', 'Crane', 2.5, False);



-- test to see if the row and fields were created
SELECT * FROM melons;


-- now insert a group of things
INSERT INTO melons (melon_type, name, price, seedless)
VALUES ('Musk', 'Casaba', 2.5, False),
        ('Musk', 'Cantaloupe', 0.99, False),
        ('Musk', 'Persian Melon', 3, False),
        ('Musk', 'Christmas Melon', 5.5, False),
        ('Musk', 'Armenian Cucumber', 4.5, False),
        ('Hybrid', 'Galia', 3.75, False),
        ('Winter', 'Winter Melon', 0.99, True),
        ('Musk', 'Canary', 1.5, False),
        ('Musk', 'Hami', 2.75, True),
        ('Watermelon', 'Densuke', 250, False),
        ('Watermelon', 'Ali Baba', 2.5, False),
        ('Watermelon', 'Ancient', 3, False),
        ('Watermelon', 'Arkansas Black', 4, False),
        ('Watermelon', 'Dixie Queen', 2, False),
        ('Watermelon', 'Blacktail Mountain', 2.75, True),
        ('Watermelon', 'Carolina Cross 180', 4.25, False),
        ('Watermelon', 'Charleston Gray', 2, False),
        ('Watermelon', 'Chris Cross', 2.5, False),
        ('Watermelon', 'Desert King', 2, False),
        ('Watermelon', 'Congo', 2, False),
        ('Watermelon', 'Crimson Sweet', 1.75, False);

SELECT * FROM melons;


-- NOW WRITE SOME QUERIES

--SELECT JUST THE NAME AND PRICE
SELECT name, price FROM melons;

-- SELECT JUST THE NAME FROM MELONS WITH TYPE IS WATERMELON'

SELECT name FROM melons
WHERE melon_type = 'Watermelon';

-- and seedless is true
SELECT name FROM melons
WHERE melon_type = 'Watermelon'
AND seedless = True;

-- select names of melons with type watermelon or seedless from melons
SELECT name, melon_type, seedless FROM melons
WHERE melon_type = 'Watermelon'
OR seedless = True;

-- select the type melons that are price more than 3 from melons
SELECT name, melon_type, price FROM melons
WHERE melon_type = 'Watermelon'
AND price > 3;

-- from melons select all method grouped by the type
SELECT melon_type
FROM melons
GROUP BY melon_type;

-- select all melod and list them by id and type
SELECT id, melon_type
FROM melons;

-- Query failed because of: error: column "melons.price" must appear in the GROUP BY clause or be used in an aggregate function
SELECT melon_type, price
FROM melons
GROUP BY melon_type;

-- aggregates
SELECT melon_type, AVG(price)
FROM melons
GROUP BY melon_type;

SELECT melon_type, MAX(price)
FROM melons
GROUP BY melon_type;

SELECT melon_type, COUNT(price)
FROM melons
GROUP BY melon_type;

SELECT melon_type, COUNT(id)
FROM melons
GROUP BY melon_type;

-- Query failed because of: error: column "melons.melon_type" must appear in the GROUP BY clause or be used in an aggregate function
SELECT melon_type, COUNT(id)
FROM melons;

-- statement order determins how the  orders of fields(cols)
SELECT  COUNT(id), melon_type
FROM melons
GROUP BY melon_type;

-- gives the avg price and count of seedless and non-seedless 
SELECT  seedless, COUNT(seedless), AVG(price)
FROM melons
GROUP BY seedless;


-- Query failed because of: error: aggregate functions are not allowed in WHERE
SELECT * FROM melons
WHERE price = MAX(price);

-- need to do it in 2 queries
SELECT * FROM melons
WHERE price = 250;


-- NOW LETS START SORTING

-- in descending order, but this yields descending ids too
SELECT * FROM melons
ORDER BY price DESC;

-- use a order by, group by and an aggregate
    --when field and aggregate, group by the field a
    -- order by the count
SELECT melon_type, COUNT(*)
FROM melons
GROUP BY melon_type
ORDER BY COUNT(*) DESC;


-- can reference column number
SELECT melon_type, COUNT(*)
FROM melons
GROUP BY melon_type
ORDER BY COUNT(2) DESC;

-- select all melons that are not watermelons
    -- ascending order is default
    -- strings are case sensitive
SELECT * FROM MELONS 
WHERE melon_type <> 'Watermelon'
ORDER BY name ASC;

SELECT * FROM MELONS 
WHERE melon_type != 'Watermelon'
ORDER BY name ASC;


SELECT * FROM MELONS 
WHERE price = 2.5;


-- OFFSET AND LIMIT

-- returns id 1 through 5
SELECT * FROM MELONS 
LIMIT 5; 

-- skip the first 10 items and return the rest
SELECT * FROM MELONS 
OFFSET 10;

-- pagination combines LIMIT and OFFSET

SELECT * FROM MELONS 
OFFSET 15
LIMIT 15;

-- if there were another page, it would show 16 - 30,
--NOTE THAT OFFSET IS A MULTIPLE OF LIMIT WHEN DOING PAFGINATION
SELECT * FROM MELONS 
OFFSET 30
LIMIT 15;


--
SELECT melon_type, AVG(price)
FROM melons
GROUP BY melon_type
ORDER BY AVG(price)
OFFSET 1
LIMIT 2;

-- UPDATING 
-- case is sensitive
 -- need to have a where clause to 
UPDATE melons
SET seedless = True
WHERE melon_type = 'Musk';

SELECT * FROM melons
WHERE melon_type = 'Musk';


UPDATE melons
SET seedless = False, price = 10.5
WHERE melon_type = 'Musk';

SELECT * FROM melons
WHERE melon_type = 'Musk';


-- DELETE 
-- same as update but does not req SET
-- use a where statement to prevent deleting everything

DELETE FROM melons
WHERE id < 3;

SELECT * FROM melons
ORDER BY id;







