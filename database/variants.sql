CREATE TABLE variants (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  name varchar(100) NOT NULL,
  size varchar(20) NOT NULL,
  color varchar(100) NOT NULL,
  images varchar(255) NOT NULL,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  PRIMARY KEY (id),
  KEY product_id (product_id),
  CONSTRAINT variants_ibfk_1 FOREIGN KEY (product_id) REFERENCES products (id)
);

INSERT INTO db.variants
(id, product_id, name, `size`, color, images, created_at, updated_at)
VALUES(1, 1, 'jeans', 'medium', 'black', 'baju_jeans.jpg', '2022-11-14 23:31:46', '2022-11-14 23:31:46');
INSERT INTO db.variants
(id, product_id, name, `size`, color, images, created_at, updated_at)
VALUES(2, 2, 'cardigan', 'small', 'pink', 'baju_cardigan.jpg', '2022-11-15 00:01:09', '2022-11-15 00:01:09');
INSERT INTO db.variants
(id, product_id, name, `size`, color, images, created_at, updated_at)
VALUES(3, 2, 'blazer', 'medium', 'grey', 'baju_cewek_blazer_.jpg', '2022-11-15 18:09:46', '2022-11-15 18:09:46');
INSERT INTO db.variants
(id, product_id, name, `size`, color, images, created_at, updated_at)
VALUES(4, 2, 'blouse', 'medium', 'hijau', 'baju_cewek_blouse.jpg', '2022-11-15 18:11:05', '2022-11-15 18:11:05');
INSERT INTO db.variants
(id, product_id, name, `size`, color, images, created_at, updated_at)
VALUES(5, 2, 'gaun', 'medium', 'ungu', 'baju_cewek_gaun.jpg', '2022-11-15 18:11:24', '2022-11-15 18:11:24');
