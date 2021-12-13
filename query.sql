create schema BD_Portafolio; 
use BD_Portafolio; 

CREATE TABLE Contacto(
	Cli_id int auto_increment primary key not null, 
	Cli_nombre varchar(40) not null,
	Cli_correo varchar(40) not null check (Cli_correo like '%@%') unique, 
	Cli_proyecto varchar(40) not null unique, 
	Cli_mensaje text not null
);

DROP TABLE Contacto;

INSERT INTO Contacto values("1","Miguel","superbrandon2018@gmail.com","Lulu Proyecto","Hola mi proyecto es de una tienda");
SELECT * FROM Contacto;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456789';
flush privileges;