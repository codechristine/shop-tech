-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 31, 2019 at 12:25 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wicked-sales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `created`) VALUES
(1, '2019-10-25 17:57:04'),
(2, '2019-10-25 17:57:32'),
(3, '2019-10-25 17:58:04');

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `productID`, `count`, `price`, `added`, `updated`, `cartID`) VALUES
(1, 5, 1, 99, '2019-10-25 17:57:04', '2019-10-26 00:57:04', 1),
(2, 6, 1, 8, '2019-10-25 17:57:32', '2019-10-26 00:57:32', 2),
(3, 3, 1, 29, '2019-10-25 17:58:04', '2019-10-26 00:58:04', 3);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `url` longtext NOT NULL,
  `product_id` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `url`, `product_id`) VALUES
(1, 'https://bit.ly/2JtVNE6', 1),
(2, 'https://b3h2.scene7.com/is/image/BedBathandBeyond/13119217102400p?$690$&wid=690&hei=690', 1),
(3, 'https://cdn.shopify.com/s/files/1/1428/7432/products/Shake_Weight_Dumbbell.jpg?v=1476062404', 1),
(4, 'https://bit.ly/2w9C3Nm', 2),
(5, 'https://athriftymom.com/wp-content/uploads//2019/04/shamwow.jpg', 2),
(6, 'https://ae01.alicdn.com/kf/HTB1VZErrbGYBuNjy0Foq6AiBFXai/1-2-4-8-Piece-Set-Super-ShamWOW-Shammys-Super-Absorbent-Towels-Kitchen-Clean-wash.jpg', 2),
(7, 'https://bit.ly/2LVHYAk', 3),
(8, 'http://www.asseenontvus.com/wp-content/uploads/2010/01/snuggie.jpg', 3),
(9, 'https://i.ebayimg.com/images/g/baUAAOSweM1aAExF/s-l300.jpg', 3),
(10, 'https://bit.ly/2EjCU2a', 4),
(11, 'https://i.ebayimg.com/images/g/s04AAOSw7GRZG5Oy/s-l300.jpg', 4),
(12, 'https://image.dhgate.com/0x0s/f2-albu-g4-M00-FA-A4-rBVaEVfsrKiAZkZsAADqR2nkAWg426.jpg/promotion-wax-vac-electric-cordless-vacuum.jpg', 4),
(13, 'https://bit.ly/2VD80b8', 5),
(14, 'https://images-na.ssl-images-amazon.com/images/I/31fUYTu4SiL._SL500_AC_SS350_.jpg', 5),
(15, 'http://cdn.shopify.com/s/files/1/1432/4712/products/product-image-239059754_grande.jpg?v=1498295549', 5),
(16, 'https://bit.ly/2w9EmzO', 6),
(17, 'https://images-na.ssl-images-amazon.com/images/I/51m5dr0a7ZL._SX466_.jpg', 6),
(18, 'http://www.craze-deals.co.za/image/cache/data/Tater-Mitts-1000x1000.jpg', 6);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `image` varchar(80) NOT NULL,
  `shortDescription` varchar(650) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `image`, `shortDescription`) VALUES
(1, 'Shake Weight', '29.99', 'https://bit.ly/2JtVNE6', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.'),
(2, 'ShamWow', '25.95', 'https://bit.ly/2w9C3Nm', 'It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!'),
(3, 'Snuggie', '29.00', 'https://bit.ly/2LVHYAk', 'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!'),
(4, 'Wax Vac', '9.99', 'https://bit.ly/2EjCU2a', 'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.'),
(5, 'Ostrich Pillow', '99.00', 'https://bit.ly/2VD80b8', 'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.'),
(6, 'Tater Mitts', '8.30', 'https://bit.ly/2w9EmzO', '8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
