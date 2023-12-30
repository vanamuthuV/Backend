create database jwttutorial;

create table User(name text not null, email text not null, password text not null, id serial primary key );

insert into users (name, email, password) values('naruto', 'naruto@gmail.com', '199'),('sasuke', 'sasuke@gmail.com', '153'),('sakura', 'sakura@gmail.com', '133'),('kakashi', 'kakashi@gmail.com', '983'),('minato', 'minato@gmail.com', '453'),('hiruzen', 'hiruzen@gmail.com', '152');