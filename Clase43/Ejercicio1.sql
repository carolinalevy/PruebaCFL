USE CFL2020;

CREATE TABLE IF NOT EXISTS `E01_CLIENTE`(
nro_cliente INT NOT NULL, 
nombre VARCHAR(45) NOT NULL,
apellido VARCHAR(45) NOT NULL,
direccion VARCHAR(45) NOT NULL,
activo TINYINT,
PRIMARY KEY (nro_cliente)
);

CREATE TABLE IF NOT EXISTS `E01_TELEFONO`(
codigo_area INT(3) NOT NULL,
nro_telefono INT(7) NOT NULL,
tipo CHAR(1),
nro_cliente INT,
UNIQUE (codigo_area),
PRIMARY KEY (nro_telefono),
CONSTRAINT telefono_cliente FOREIGN KEY (nro_cliente) REFERENCES E01_CLIENTE (nro_cliente)
);

CREATE TABLE IF NOT EXISTS `E01_FACTURA`(
nro_factura INT NOT NULL,
fecha DATE,
total_sin_iva DOUBLE,
iva DOUBLE,
total_con_iva DOUBLE,
nro_cliente INT,
PRIMARY KEY (nro_factura),
CONSTRAINT factura_cliente FOREIGN KEY (nro_cliente) REFERENCES E01_CLIENTE (nro_cliente)
);

CREATE TABLE IF NOT EXISTS `E01_PRODUCTO`(
codigo_producto INT NOT NULL,
marca VARCHAR(45),
nombre VARCHAR(45),
descripcion VARCHAR(45),
precio FLOAT,
stock INT,
PRIMARY KEY (codigo_producto)
);

CREATE TABLE IF NOT EXISTS `E01_DETALLE_FACTURA`(
nro_factura INT,
nro_item INT,
codigo_producto INT,
cantidad FLOAT,
PRIMARY KEY (nro_factura),
UNIQUE (codigo_producto),
CONSTRAINT detalle_factura FOREIGN KEY (nro_factura) REFERENCES E01_FACTURA (nro_factura),
CONSTRAINT detalle_producto FOREIGN KEY (codigo_producto) REFERENCES E01_PRODUCTO (codigo_producto)
);


