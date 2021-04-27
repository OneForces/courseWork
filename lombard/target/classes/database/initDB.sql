create table if not exists users (
    id BIGSERIAL PRIMARY KEY ,
    email varchar not null,
    first_name varchar not null,
    last_name varchar not null,
    password varchar not null,
    role varchar not null
);

create table if not exists customers (
    id BIGSERIAL PRIMARY KEY ,
    name varchar not null,
    last_name varchar not null
);