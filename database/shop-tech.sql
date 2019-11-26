-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 06, 2019 at 10:34 PM
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

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `created`) VALUES
(1, '2019-11-05 23:29:54'),
(2, '2019-11-05 23:30:15'),
(3, '2019-11-05 23:30:53'),
(4, '2019-11-05 23:31:23');

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

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `productID`, `count`, `price`, `added`, `updated`, `cartID`) VALUES
(1, 5, 1, '169.99', '2019-11-05 23:31:23', '2019-11-06 07:31:23', 4);

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
(1, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489688005', 1),
(2, 'https://1734811051.rsc.cdn77.org/data/thumbs/full/351783/650/0/0/0/airpods-2.png', 1),
(3, 'https://cfcdn.zulily.com/images/cache/product/452x1000/364495/zu73385551_main_tm1560519227.jpg', 1),
(4, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-567-V01.jpg', 2),
(5, 'https://proclockers.com/sites/default/files/AMD_Ryzen_7_3700X_01.jpeg', 2),
(6, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-567-V02.jpg', 2),
(7, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-146-314-V01.jpg', 3),
(8, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-146-314-V02.jpg', 3),
(9, 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-146-314-V08.jpg', 3),
(10, 'https://images.evga.com/products/gallery/png/08G-P4-3071-KR_LG_1.png', 4),
(11, 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/609535_965558_02_front_zoom.jpg', 4),
(12, 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/609535_965558_04_front_zoom.jpg', 4),
(13, 'https://www.colamco.com/Services/Resources/Images/https%3A%7C%7Ccontent.etilize.com%7COriginal%7C1053988283.jpg/jpeg/300', 5),
(14, 'https://www.cherrymx.de/_Resources/Persistent/08bf9077a086bd26d72c4f16acce4a53e8485698/DSC00598-1250x833.png', 5),
(15, 'https://images.idgesg.net/images/article/2018/11/corsair_k70_low_profile_7-100781262-large.jpg', 5),
(16, 'https://i-cdn.phonearena.com/images/article/118261-two_lead/Microsoft-Surface-Pro-5-and-Surface-Go-bundles-score-massive-discounts-at-Best-Buy.jpg', 6),
(17, 'https://www.starkinsider.com/wordpress/wp-content/uploads/2018/07/Microsoft-Surface-Go-tablet-vs-Apple-iPad-apps.jpg', 6),
(18, 'https://cdn.vox-cdn.com/thumbor/xsLT0M52-2PPaHS29dOLS9o9kxw=/0x0:1320x880/1200x800/filters:focal(555x335:765x545)/cdn.vox-cdn.com/uploads/chorus_image/image/60317383/surfacego.0.jpg', 6);

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
(1, 'AirPods (2nd Gen) with Charging Case', '159.00', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489688005', 'new AirPods combine intelligent design with breakthrough technology and crystal clear sound.'),
(2, 'AMD RYZEN 7 3700X', '329.99', 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/19-113-567-V03.jpg', '3rd Gen Ryzen 8-Core 3.6 GHz (4.4 GHz Max Boost) Socket AM4 65W 100-100000071BOX Desktop Processor\r\nWith Wraith Prism cooler.'),
(3, 'NZXT H210i', '109.99', 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/11-146-314-V01.jpg', 'Mini-ITX PC Gaming Case - Tempered Glass Side Panel Cable Management - Water-Cooling Ready - Integrated RGB Lighting - White/Black'),
(4, 'EVGA GeForce RTX 2070', '529.99', 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/609535_965558_01_front_zoom.jpg', 'SUPER BLACK GAMING Overclocked Dual-Fan 8GB GDDR6 PCIe 3.0 Video Card.'),
(5, 'CORSAIR - K70 RGB MK.2', '169.99', 'https://images.idgesg.net/images/article/2018/11/corsair_k70_low_profile_7-100781262-large.jpg', 'LOW PROFILE RAPIDFIRE Wired Gaming Mechanical CHERRY MX Speed Switch Keyboard with RGB Back Lighting'),
(6, 'Surface Go', '399.00', 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2i7oG?ver=1db1&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&o=f&aim=true', 'Perfect for all your daily tasks with laptop performance, tablet portability, and a stunning touchscreen.');

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
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
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
