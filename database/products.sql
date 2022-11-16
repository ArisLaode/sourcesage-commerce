create table products
(
    id          int auto_increment
        primary key,
    name        varchar(100) not null,
    description text         not null,
    images      varchar(100) not null,
    logo_id     varchar(100) not null,
    created_at  datetime     not null,
    updated_at  datetime     not null
);

INSERT INTO db.products
(id, name, description, images, logo_id, created_at, updated_at)
VALUES('Baju Cowok','Baju cowok adalah brand pakaian pria','baju_cowok_1.jpg','baju_cowok.jpg','2022-11-14 21:53:32','2022-11-14 21:53:32');
INSERT INTO db.products
(id, name, description, images, logo_id, created_at, updated_at)
VALUES(2, 'Baju Cewek','Baju cewek adalah brand pakaian perempuan','baju_cewek_1.jpeg','baju_cewek.jpeg','2022-11-14 23:59:56','2022-11-14 23:59:56');
INSERT INTO db.products
(id, name, description, images, logo_id, created_at, updated_at)
VALUES(3, 'Baju Anak-anak','Baju  anak-anak adalah brand pakaian anak-anak','baju_anak_anak_1.jpg','baju_anak_anak.jpeg','2022-11-15 13:36:15','2022-11-15 13:36:15');
INSERT INTO db.products
(id, name, description, images, logo_id, created_at, updated_at)
VALUES(4, 'Celana Cewek','Celana cewek adalah brand celana cewek','celana_cewek_1.jpg','celana_cewek.jpeg','2022-11-15 13:40:33','2022-11-15 13:40:33');
