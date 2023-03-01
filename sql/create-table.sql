create table users (
  id int unsigned primary key auto_increment,
  email varchar(64),
  password varchar(32),
  firstName varchar(64),
  lastName varchar(64),
  cratedAt timestamp default
);