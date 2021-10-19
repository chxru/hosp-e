--  create schema
create schema if not exists patients;

--  create patients.data
create table if not exists patients.data(
  pid uuid primary key default gen_random_uuid(),
  fname text not null,
  lname text,
  email text unique not null,
  tp varchar(15),
  dob date,
  nic varchar(10) unique,
  home_address text,
  gender varchar(1),
  emergency_number varchar(15),
  created_at TIMESTAMPTZ not null default now(),
  updated_at TIMESTAMPTZ not null default now()
);

--  create patients.schema
create table if not exists patients.auth(
  pid uuid references patients.data(pid) on delete cascade,
  email varchar(255) primary key references patients.data(email) on update cascade,
  pwd varchar(255) not null,
  updated_at TIMESTAMPTZ not null default now()
);

--  create trigger to update patients.data on change
create trigger onUpdate before
update
  on patients.data for each row execute procedure update_timestamp();

--  create trigger to update patients.auth on change
create trigger onUpdate before
update
  on patients.auth for each row execute procedure update_timestamp();