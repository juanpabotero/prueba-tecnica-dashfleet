-- eliminar la base de datos si existe
DROP DATABASE IF EXISTS ordersdb;

-- creación de la base de datos
CREATE DATABASE ordersdb;

-- usar base de datos
USE ordersdb;

-- eliminar tablas
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;

-- crear tablas
CREATE TABLE orders (
	order_id INT NOT NULL AUTO_INCREMENT,
	state VARCHAR(255) NOT NULL,
	direction VARCHAR(255) NOT NULL,
	delivery_date TIMESTAMP NOT NULL,
	PRIMARY KEY (order_id)
);

CREATE TABLE clients (
	client_id INT NOT NULL AUTO_INCREMENT,
	document INT NOT NULL,
	document_type VARCHAR(255) NOT NULL,
	client_name VARCHAR(255) NOT NULL,
    order_id INT NOT NULL,
	FOREIGN KEY (order_id) REFERENCES orders(order_id),
    PRIMARY KEY (client_id)
);

create table products (
	product_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	ref VARCHAR(255) NOT NULL,
	quantity INT NOT NULL DEFAULT 0,
	order_id int NOT NULL,
	FOREIGN KEY (order_id) REFERENCES orders(order_id),
	PRIMARY KEY (product_id)
);

-- insertar información
INSERT INTO orders (state, direction, delivery_date) VALUES
("En proceso", "Av. sur #50", "2023-12-01"),
("Cancelado", "Av. norte #50", "2023-12-19"),
("Despachado", "Av. norte #50", "2023-12-20"),
("En proceso", "Av. sur #50", "2023-12-15"),
("En proceso", "Av. sur #50", "2023-12-23"),
("En proceso", "Av. norte #50", "2023-12-02");

INSERT INTO clients (document, document_type, client_name, order_id) VALUES
(10881, "CC", "Juan Perez", 1),
(10882, "CC", "Pedro Gomez", 2),
(10882, "CC", "Pedro Gomez", 3),
(10883, "CC", "Daniel Correa", 4);

INSERT INTO products (product_name, ref, quantity, order_id) VALUES
("Portatil", "abc123", "1", 1),
("Celular", "abc456", "2", 1),
("Colchon", "efc123", "1", 2),
("Tarro", "abf663", "10", 3),
("Monitor", "arc193", "1", 4),
("Mouse", "afr452", "3", 4),
("Teclado", "abd023", "3", 4);

-- consultar informacion de las tablas
SELECT orders.order_id, state, direction, delivery_date, document, client_name, product_id, product_name, ref, quantity
FROM orders
JOIN clients ON orders.order_id = clients.order_id
JOIN products ON orders.order_id = products.order_id;

SELECT orders.order_id, state, direction, delivery_date, document, client_name, product_id, product_name, ref, quantity
FROM orders
JOIN clients ON orders.order_id = clients.order_id
JOIN products ON orders.order_id = products.order_id
WHERE orders.order_id = 4;

SELECT orders.order_id, state, direction, delivery_date, document, client_name, product_id, product_name, ref, quantity
FROM orders
JOIN clients ON orders.order_id = clients.order_id
JOIN products ON orders.order_id = products.order_id
WHERE document = 10882;