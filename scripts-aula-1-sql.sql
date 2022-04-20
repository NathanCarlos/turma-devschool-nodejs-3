create database sistema_estq;

drop database sistema_estoque;

alter database sistema_estq rename to sistema_estoque;

create table estudantes(
	id bigint,
	nome varchar(100),
	email varchar(100),
	senha integer,
	mensalidade decimal
);

drop table estudantes;

create table estudantes(
	id serial primary key,
	nome varchar(100),
	email varchar(100),
	senha integer,
	mensalidade decimal
);

create table professores(
	id serial primary key,
	nome varchar(100),
	salario decimal not null,
	data_contratacao date default current_date,
	curso varchar(50) not null,
	apto_aula bool default true
);
