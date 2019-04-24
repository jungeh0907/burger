DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id       INT AUTO_INCREMENT NOT NULL,
    name     VARCHAR(100) NOT NULL,
    protein varchar(50),
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);