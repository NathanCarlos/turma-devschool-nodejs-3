create database mjv_class;

create table students(
	id serial primary key,
	name varchar(50),
	email varchar(100),
	password varchar(15),
	montlhy_payment decimal,
	created_date date default current_date
);

alter table students
rename column montlhypayment to montlhy_payment;

create table tasks (
	id serial primary key,
	description varchar(255),
	status bool
);

-- CRUD(Create, Read, Update, Delete)
-- Read*

select * from students;

select * from tasks;

-- Especificando colunas

select name, email, montlhy_payment from students;

select description from tasks;

-- Alias nas colunas

select name as nome, email, montlhy_payment as mensalidade from students;

-- Como buscar estudantes com pagamento mensal maior que 250?
-- CLAUSULA WHERE
-- Operadores lógicos(>, >=, <=, <, =, like, in)
select * from students where montlhy_payment > 250;

select * from students where montlhy_payment < 350;

select * from students where montlhy_payment >= 250;

select * from students where montlhy_payment <= 250;

select * from students where montlhy_payment = 235;

select * from students where id = 2;

-- AND(&&), OR(||)

select * from students
where montlhy_payment >= 150 and montlhy_payment <= 300;

select * from students
where email = 'nathan@gmail.com' and password = '123456';

select * from students 
where id = 3 or id = 5 or id = 1;

select * from students
where id in(3, 5, 1);

select * from students
where name in('Nathan', 'Gustavo', 'Paulo');

select * from students
where montlhy_payment = 150 or montlhy_payment > 400;


select * from students
where name = 'Nathan';

select * from students
where name like 'Nathan%';

select * from students
where email like 'n%';

select * from students
where email like '%gmail.com';

select * from students
where email like '%.com%';

select * from students
where upper(name) like 'N%';

-- Create
-- Definindo as colunas
insert into students(name, email, password, montlhy_payment)
values ('Fabio', 'fabio@gmail.com', '123456', 350);

insert into students(name, email, password, montlhy_payment)
values ('Wesley', 'wesley@gmail.com', '123456', 350),
('Valdineia', 'valdineia@gmail.com', '123456', 175),
('Alan', 'alan@gmail.com', '123456', 190);

insert into students values
(default, 'Ayrton', 'ayrton@gmail.com', '123456', 50, default),
(default, 'Deivyti', 'deivyti@gmail.com', '123456', 100, default);

-- Update

update students set montlhy_payment = 500
where id = 12;

update students set password = '1234', montlhy_payment = 150
where id = 13;

-- Delete

delete from students
where id in (1, 11);
