create table farms (
  id int4 unsigned primary key auto_increment,
  country varchar(256) not null,
  city varchar(256) not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp
);

create table beefs (
  id int4 unsigned primary key auto_increment,
  cut varchar(256) not null,
  -- parašius UNIQ suvaržymą farmId savybei, įgalinamas ryšys "vienas su vienu" - "one-to-one" - 1:1
  farmId int4 unsigned not null unique,
  price float8 not null,
  rating float4 not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  -- Kad sukurti išorinį raktą, privaloma pirmiau sukurti lentelę su kuria sudaromas ryšys
  -- išorinio rakto farmId tipas privalo būti IDENTIŠKAS farms(id) tipui
  FOREIGN KEY (farmId) REFERENCES farms(id)
);
