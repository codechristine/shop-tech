-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 04, 2019 at 11:29 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop-tech`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` decimal(8,2) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `url` longtext NOT NULL,
  `product_id` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `url`, `product_id`) VALUES
(1, 'https://images-na.ssl-images-amazon.com/images/I/41g4Idd4y9L._AC_SL1024_.jpg', 1),
(2, 'https://images-na.ssl-images-amazon.com/images/I/51gf8mt9JXL._AC_SL1024_.jpg', 1),
(3, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489688005', 1),
(4, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-567-V03.jpg', 2),
(5, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-567-V01.jpg', 2),
(6, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-567-V02.jpg', 2),
(7, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-146-314-V01.jpg', 3),
(8, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-146-314-V02.jpg', 3),
(9, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-146-314-V08.jpg', 3),
(10, 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/609535_965558_01_front_zoom.jpg', 4),
(11, 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/609535_965558_02_front_zoom.jpg', 4),
(12, 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/609535_965558_04_front_zoom.jpg', 4),
(13, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298657_sd.jpg;maxHeight=1000;maxWidth=1000', 5),
(14, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298657cv16d.jpg;maxHeight=1000;maxWidth=1000', 5),
(15, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298657cv14d.jpg;maxHeight=1000;maxWidth=1000', 5),
(16, 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2i7oG?ver=1db1&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&o=f&aim=true', 6),
(17, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6314/6314372_sd.jpg;maxHeight=1000;maxWidth=1000', 6),
(18, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6314/6314372cv13d.jpg;maxHeight=1000;maxWidth=1000', 6);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `image` varchar(2000) NOT NULL,
  `shortDescription` varchar(650) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `image`, `shortDescription`) VALUES
(1, 'AirPods with Charging Case', '159.00', 'https://images-na.ssl-images-amazon.com/images/I/41g4Idd4y9L._AC_SL1024_.jpg', 'New Apple H1 headphone chip delivers faster wireless connection to your devices.'),
(2, 'AMD RYZEN 7 3700X', '329.99', 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-567-V03.jpg', '3rd Gen Ryzen 8-Core 3.6 GHz (4.4 GHz Max Boost) Socket AM4 65W 100-100000071BOX Desktop Processor\r\nWith Wraith Prism cooler.'),
(3, 'NZXT H210i', '109.99', 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-146-314-V01.jpg', 'Mini-ITX PC Gaming Case - Tempered Glass Side Panel Cable Management - Water-Cooling Ready - Integrated RGB Lighting - Steel Construction - White/Black'),
(4, 'EVGA GeForce RTX 2070', '509.99', 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/609535_965558_01_front_zoom.jpg', 'SUPER BLACK GAMING Overclocked Dual-Fan 8GB GDDR6 PCIe 3.0 Video Card.'),
(5, 'CORSAIR - K70 RGB MK.2', '169.99', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298657_sd.jpg;maxHeight=1000;maxWidth=1000', 'LOW PROFILE RAPIDFIRE Wired Gaming Mechanical CHERRY MX Speed Switch Keyboard with RGB Back Lighting'),
(6, 'Surface Go', '399.00', 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2i7oG?ver=1db1&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&o=f&aim=true', 'Surface Go is perfect for all your daily tasks, giving you laptop performance, tablet portability, and a stunning touchscreen with the power of Windows 10 Home in S mode.');

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
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
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
