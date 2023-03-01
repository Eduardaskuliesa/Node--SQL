create table beefs (
  id int4 unsigned primary key auto_increment,
  cut varchar(256) not null,
  price float8 not null,
  rating float4 not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
);

create table images (
  id int4 unsigned primary key auto_increment,
  src varchar(512) not null,
  -- neparašius UNIQ suvaržymo beefId savybei, įgalinamas ryšys "vienas su daug" - "one-to-many" - 1:M
  beefId int4 unsigned not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  -- Kad sukurti išorinį raktą, privaloma pirmiau sukurti lentelę su kuria sudaromas ryšys
  -- išorinio rakto beefId tipas privalo būti IDENTIŠKAS beefs(id) tipui
  FOREIGN KEY (beefId) REFERENCES beefs(id)
);