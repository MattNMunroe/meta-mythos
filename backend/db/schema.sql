DROP DATABASE IF EXISTS myths;
CREATE DATABASE myths; 

\c myths; 

CREATE TABLE myths (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    tradition TEXT,
    references TEXT
);