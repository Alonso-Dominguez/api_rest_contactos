# Desin Document: API REST CONTACTOS 

## 1. Descripción 
Ejempko de una API REST pata gestionar contactos en una BD utilizando FastAPI.

## 2. Objetivo
Realizar un ejemplo de diseño de una API REST de tipo CRUD y su posterior codificación untilizando el Framework [FastAPI](https://fastapi.tiangolo.com/).

## 3. Diseño de la BD 
Para este ejemplo se utlizara el gestor de bases de datos [SQLite3](https://sqlite.org) con las siguientes tablas: 

3.1
|No.|Campo|Tipo|Restricciones|Descrición|
|--|--|--|--|--|
|1|id-contactos|int|PRIMARY KEY|Llave primariace la tabla|

3.2
```sql
CREATE TABLE IF NOT EXISTS contactos (
    id_contacto        INT PRIMARY KEY NOT NULL,
    nombre             VARCHAR(100) NOT NULL,
    primer_apellido    VARCHAR(50) NOT NULL,
    segundo_apellido   VARCHAR(50) NOT NULL,
    telefono           VARCHAR(20) NOT NULL,
    correo_electronico VARCHAR(50) NOT NULL
);
```
