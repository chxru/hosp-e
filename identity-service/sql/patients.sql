-- @block create schema
create schema if not exists patients;
-- @block create patients.data
create table if not exists patients.data(
  pid integer primary key generated always as identity,
  fname varchar(255) not null,
  lname varchar(255) not null,
  email varchar(255) unique not null,
  dob date,
  tp varchar(15),
  nic varchar(10) unique,
  home_address text,
  gender varchar(1),
  emergency_number varchar(15),
  created_at TIMESTAMPTZ not null default now(),
  updated_at TIMESTAMPTZ not null default now()
);
-- @block create patients.schema
create table if not exists patients.auth(
  pid integer references patients.data(pid) on delete cascade,
  username varchar(255) primary key references patients.data(email) on update cascade,
  pwd varchar(255) not null,
  updated_at TIMESTAMPTZ not null default now()
);
-- @block create trigger to update patients.data on change
create trigger onUpdate before
update on patients.data for each row execute procedure update_timestamp();
-- @block create trigger to update patients.auth on change
create trigger onUpdate before
update on patients.auth for each row execute procedure update_timestamp();