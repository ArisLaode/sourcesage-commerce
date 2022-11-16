-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alembic_version`
--

DROP TABLE IF EXISTS db.alembic_version;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alembic_version`
--

LOCK TABLES db.alembic_version WRITE;
/*!40000 ALTER TABLE `alembic_version` DISABLE KEYS */;
INSERT INTO db.alembic_version VALUES ('df0fcd99395b');
/*!40000 ALTER TABLE `alembic_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS db.products;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE db.products (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `images` varchar(255) NOT NULL,
  `logo_id` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES db.products WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO db.products VALUES (1,'Baju Cowok','Baju cowok adalah brand pakaian pria','baju_cowok_1.jpg','baju_cowok.jpg','2022-11-14 21:53:32','2022-11-14 21:53:32'),(2,'Baju Cewek','Baju cewek adalah brand pakaian perempuan','baju_cewek_1.jpeg','baju_cewek.jpeg','2022-11-14 23:59:56','2022-11-14 23:59:56'),(3,'Baju Anak-anak','Baju  anak-anak adalah brand pakaian anak-anak','baju_anak_anak_1.jpg','baju_anak_anak.jpeg','2022-11-15 13:36:15','2022-11-15 13:36:15'),(4,'Celana Cewek','Celana cewek adalah brand celana cewek','celana_cewek_1.jpg','celana_cewek.jpeg','2022-11-15 13:40:33','2022-11-15 13:40:33');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variants`
--

DROP TABLE IF EXISTS db.variants;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE db.variants (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `size` varchar(20) NOT NULL,
  `color` varchar(100) NOT NULL,
  `images` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `variants_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variants`
--

LOCK TABLES db.variants WRITE;
/*!40000 ALTER TABLE `variants` DISABLE KEYS */;
INSERT INTO db.variants VALUES (1,1,'jeans','medium','black','baju_jeans.jpg','2022-11-14 23:31:46','2022-11-14 23:31:46'),(2,2,'cardigan','small','pink','baju_cardigan.jpg','2022-11-15 00:01:09','2022-11-15 00:01:09'),(3,2,'blazer','medium','grey','baju_cewek_blazer_.jpg','2022-11-15 18:09:46','2022-11-15 18:09:46'),(4,2,'blouse','medium','hijau','baju_cewek_blouse.jpg','2022-11-15 18:11:05','2022-11-15 18:11:05'),(5,2,'gaun','medium','ungu','baju_cewek_gaun.jpg','2022-11-15 18:11:24','2022-11-15 18:11:24'),(6,1,'kemeja','medium','putih','kemeja_pria.jpg','2022-11-15 18:15:10','2022-11-15 18:15:10'),(7,1,'jaket','medium','hitam','jaket_pria.jpeg','2022-11-15 18:15:22','2022-11-15 18:15:22'),(8,1,'rompi','medium','coklat muda','rompi_pria.jpeg','2022-11-15 18:15:43','2022-11-15 18:15:43'),(9,1,'tuxedo','medium','hitam','baju_cowok_tuxedo.jpg','2022-11-15 18:16:00','2022-11-15 18:16:00');
/*!40000 ALTER TABLE `variants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-17  2:03:01