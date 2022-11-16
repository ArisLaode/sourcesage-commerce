create table movie
(
    id     serial
        primary key,
    title  varchar(50),
    rating double precision,
    image  bytea,
    owned  varchar(30)
);

alter table movie
    owner to kanban;

create table "user"
(
    id        serial
        primary key,
    public_id varchar(50)
        unique,
    username  varchar(100),
    fullname  varchar(70)
        unique,
    password  varchar(150)
);

alter table "user"
    owner to kanban;

