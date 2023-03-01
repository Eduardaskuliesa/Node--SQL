create table b5hpus2epldg16r20p2c.farms (
  id int4 unsigned primary key auto_increment,
  country varchar(256) not null,
  name varchar(256) not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp
);

create table b5hpus2epldg16r20p2c.beefs (
  id int4 unsigned primary key auto_increment,
  cut varchar(256) not null,
  farmId int4 unsigned not null unique,
  price float8 not null,
  rating float4 not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  FOREIGN KEY (farmId) REFERENCES farms(id)
);

create table b5hpus2epldg16r20p2c.images (
  id int4 unsigned primary key auto_increment,
  src varchar(512) not null,
  beefId int4 unsigned not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  FOREIGN KEY (beefId) REFERENCES beefs(id)
); 