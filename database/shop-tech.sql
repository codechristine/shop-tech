-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 15, 2020 at 02:52 AM
-- Server version: 5.7.28-0ubuntu0.18.04.4
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

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
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
(1, '/images/airpodsOne.png', 1),
(2, '/images/airpodsTwo.jpg', 1),
(3, '/images/airpodsThree.jpg', 1),
(4, '/images/ryzenOne.jpg', 2),
(5, '/images/ryzenTwo.jpeg', 2),
(6, '/images/ryzenThree.jpg', 2),
(7, '/images/nzxtOne.jpg', 3),
(8, '/images/nzxtTwo.jpg', 3),
(9, '/images/nzxtThree.jpg', 3),
(10, '/images/evgaOne.png', 4),
(11, '/images/evgaTwo.jpg', 4),
(12, '/images/evgaThree.jpg', 4),
(13, '/images/corsairOne.jpg', 5),
(14, '/images/corsairTwo.jpg', 5),
(15, '/images/corsairThree.jpg', 5),
(16, '/images/surfaceOne.jpg', 6),
(17, '/images/surfaceTwo.jpg', 6),
(18, '/images/surfaceThree.jpg', 6),
(19, '/images/taichiOne.jpg', 7),
(20, '/images/taichiTwo.jpg', 7),
(21, '/images/taichiThree.jpg', 7),
(22, '/images/evoOne.jpg', 8),
(23, '/images/evoTwo.jpg', 8),
(24, '/images/evoThree.jpg', 8);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `image` varchar(2000) NOT NULL,
  `shortDescription` varchar(650) NOT NULL,
  `longDescription` varchar(6553) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `image`, `shortDescription`, `longDescription`) VALUES
(1, 'AirPods (2nd Gen) with Charging Case', '159.00', '/images/airpodsOne.png', 'New AirPods combine intelligent design with breakthrough technology and crystal clear sound after a simple one-tap setup.', 'The new AirPods complete with Wireless Charging Case while delivering the wireless headphone experience, reimagined. Just pull them out of the case and they\'re ready to use with your iPhone, Apple Watch, iPad or Mac. After a simple one-tap setup, AirPods work like magic. They\'re automatically on and always connected. AirPods can even sense when they\'re in your ears and pause when you take them out. To adjust the volume, change the song, make a call or even get directions, simply say Hey Siri and make your request. You have the freedom to wear one or both AirPods, and you can play or skip forward with a double-tap when listening to music or podcasts. Charge your AirPods quickly and easily with the Wireless Charging Case. Just set the case down on a Qi compatible charging mat and let it charge. The LED indicator on the front of the case lets you know that your AirPods are charging. And when you\'re away from a charging mat, you can use the Lightning port to charge. AirPods deliver 5 hours of listening time and 3 hours of talk time on a single charge. And they\'re made to keep up with you, thanks to a Wireless Charging Case that holds multiple charges for more than 24 hours of listening time. Need a quick charge? Just 15 minutes in the case gives you 3 hours of listening time or 2 hours of talk time. Powered by the all-new Apple H1 headphone chip, AirPods use optical sensors and motion accelerometers to detect when they\'re in your ears. Whether you\'re using both AirPods or just one, the H1 chip automatically routes the audio and engages the microphone. And when you\'re on a call or talking to Siri, an additional speech-detecting accelerometer works with beamforming microphones to filter out external noise and focus on the sound of your voice.'),
(2, 'AMD RYZEN 7 3700X', '329.99', '/images/ryzenOne.jpg', '3rd Gen Ryzen 8-Core 3.6 GHz (4.4 GHz Max Boost) Socket AM4 65W 100-100000071BOX Desktop Processor\r\nWith Wraith Prism cooler.', 'AMD\'s third generation Ryzen CPUs boast higher clockspeeds and more cores than the previous first and second gen parts, and the Ryzen 7 3700X is now one of the best CPUs for gaming. Zen 2 CPUs are so good that AMD almost doesn\'t need the faster offerings. Its second-string 3700X is perfectly capable of running the offense, and it isn\'t quite as demanding when it comes to signing bonuses and contracts. For those teams with salary cap concerns that can\'t quite justify chasing the 3900X, the 3700X is a versatile QB that can throw a quick short pass, scamper downfield for a modest gain, or even launch the long ball when occasion requires. When it comes to playing football running PC games there\'s not a huge difference between the 3700X and the 3900X. In fact, there\'s hardly any difference at all. For gaming, the 3700X and 3900X are effectively tied, and you can safely ignore the barely faster 3800X. This smart design allows the red team to bring high-performance, high-core-count computing to the mainstream. The revolutionary chiplet design of the AMD Zen 2 architecture on the 7nm process node could be just the thing to kick Intel into second place and raise it up as number one purveyor of go-to gaming chips. We\'re putting that theory to the test with the Ryzen 7 3700X. This chip features the same total core count as its predecessor, the Ryzen 7 2700X, at eight cores and sixteen threads. Plenty enough silicon for us gamers. And AMD has seen fit to make some big changes to the underlying tech to increase instructions per clock IPC and power efficiency for even more bang for your buck. It\'s a tad cheaper than the Intel Core i7 9700K, the de facto high-end gaming chip of the moment from Intel. And that also includes the Wraith Prism cooler. That\'s a pretty good get. The Ryzen 7 3700X ushers in a new generation of AMD CPU architecture Zen 2. Incorporating a new mixed-node chiplet design, this particular eight-core is fitted with a single 7nm CCD.'),
(3, 'NZXT H210i', '109.99', '/images/nzxtOne.jpg', 'Mini-ITX PC Gaming Case - Tempered Glass Side Panel Cable Management - Water-Cooling Ready - Integrated RGB Lighting - White/Black.', 'The H210i is NZXT\'s most compact case that\'s part of the H series. It\'s essentially the H510i but smaller. Coming in at just 210 mm x 349 mm x 372 mm, this case only supports Mini-ITX motherboards, which limits the number of available PCIe slots to just one. But the H210i comes rocking two expansion bays, just in case you want to create a gaming rig with a decent GPU. If you\'ve never built a Mini-ITX-based platform before, you\'ll be surprised at just how little space there is compared to a mid-tower. The design is stunning and follows the rest of the H series, sporting a full metal chassis with everything painted black. Unlike the H510 Elite, which only has two intake strips on the front panel, the new H210i has a total of three, which allows installed fans to pull in more air to cool components. The case supports two 120/140 mm fans (or up to a 480 mm radiator) on the front, 120/140 mm fan up top, and a 120 mm (or 120 mm radiator) in the back. NZXT includes two Aer fans installed on the top and rear. The all-new H Series is available in matte black, matte white, and matte black and red. This new iteration of the H-series will include flush tempered glass mounting, allowing it to be installed with a single captive thumb screw for easier access to the interior of the case, as well as improved SSD trays. In addition to several improvements that allow for a smarter building experience, the new H-series will be equipped with a front-panel USB C connector supporting high-speed USB 3.1 Gen 2 devices.'),
(4, 'EVGA GeForce RTX 2070', '529.99', '/images/evgaOne.png', 'SUPER BLACK GAMING Overclocked Dual-Fan 8GB GDDR6 PCIe 3.0 Video Card Real-time Ray tracing artificial intelligence and programmable shading.', 'EVGA\'s custom GeForce RTX 2070 XC graphics card is cooler, more customizable, and just as fast as Nvidia\'s RTX 2070 Founders Edition. It\'s packing dedicated hardware for real-time ray tracing and AI-enhanced graphics. And it\'s $50 cheaper, too. That shouldn\'t be a big deal. Nvidia\'s Founders Edition cards were designed to be premium priced halo(ish) models, right? But when the GeForce RTX 2080 and 2080 Ti released last month, third-party board makers like EVGA, Asus, and MSI treated the premium pricing of the Founders Edition models as the cost floor rather than a cost ceiling. As such, all those high-end graphics cards are selling for significantly more than Nvidia\'s stated starting prices. It\'s a major bummer. Fortunately, that\'s not the case with the GeForce RTX 2070 launch. You\'ll find cheaper options available from third-party manufacturers on day one, such as the $550 EVGA RTX 2070 XC. And while the $700 RTX 2080 trades blows with the older $700 GTX 1080 Ti, the EVGA RTX 2070 XC offers a performance bump over the GTX 1080 in traditional games to go with all its futuristic ray tracing promises.'),
(5, 'CORSAIR - K70 RGB MK.2', '169.99', '/images/corsairOne.jpg', 'LOW PROFILE RAPIDFIRE Wired Gaming Mechanical CHERRY MX Speed Switch Keyboard with RGB Back Lighting.', 'The Corsair K70 RGB was a nearly perfect keyboard, featuring a sleek design, authentic Cherry MX switches and a colorful array of rainbow backlights. After a few years of fine-tuning the design, Corsair has released the K70 RGB Mk.2, and the company\'s efforts paid off. Beautiful, functional and innovative, the K70 RGB Mk.2 has something for everyone. At $180, it\'s one of the most expensive gaming keyboards on the market, and that\'s admittedly going to be a deal breaker for some buyers. But with a durable chassis and high-quality mechanical switches, this keyboard is an investment that could keep you gaming for many years. Unless you\'re specifically holding out for Corsair\'s upcoming line of wireless mechanical gaming keyboards, it\'s hard to imagine a better peripheral than the K70 RGB. The K70 RGB Mk.2 is almost identical to the less expensive Corsair Strafe RGB Mk.2. Like the Strafe, the K70 is a full-size keyboard, about 17 x 6 inches without the wrist rest, or 17 x 9 with it. There\'s very little wasted space on the attractive black chassis, and it\'s actually about an inch smaller than many comparable peripherals, while still maintaining comfortable spacing between the keys.\r\n'),
(6, 'Surface Go', '399.00', '/images/surfaceOne.jpg', 'Perfect for all your daily tasks with laptop performance, tablet portability, and a stunning touchscreen.', 'From the materials to the kickstand, the Go feels, looks, and functions like its larger sibling, whose positive traits are well known. Microsoft\'s main hardware product offers the best of both PC and tablet functionality through full Windows 10, a sharp high-resolution display, a built-in kickstand, and an optional keyboard and stylus peripheral, all of which are coming in the mix with the pint-size Surface Go. The Surface Go is, like the Surface Pro, just a Windows tablet at heart, with optional accessories such as a keyboard cover turning it into a laptop, if you like. The main tablet measures 0.33 by 9.6 by 6.98 inches (HWD) and weighs just 1.15 pounds, a highly portable slate made of quality magnesium and just a few feathers above the weight of that 1-pound tablet icon, the Apple iPad (2017). (As a point of comparison for the design, it feels a bit like holding a squarer Nintendo Switch in its size and build.) It is not the first Windows 10 tablet, by any means, but it does come off as one of the nicest and most fully featured. Is thinness will not wow you being as slim as possible is not really possible here, as there\'s a lot of hardware to fit behind just a display. (With any detachable, that is the price you pay for full detachability.) In fact, it\'s roughly the same thickness as its full-size counterpart.'),
(7, 'ASRock X570 Taichi AMD AM4 ATX Motherboard', '299.99', '/images/taichiOne.jpg', ' ASRock X570 Taichi which includes a new RGB inspired design.', 'he ASRock X570 Taichi AM4 ATX Motherboard is built on the AMD X570 chipset, supporting second- and third-generation AMD Ryzen processors with an AM4 socket. It has four memory slots for up to 128GB of dual-channel DDR4 RAM, which can be overclocked to up to 4666 MHz. For storage, it\'s equipped with eight SATA III ports and three M.2 slots. There are three PCIe 4.0 x16 slots for graphics cards and two PCIe 4.0 x1 slots for other PCI-based hardware. Other integrated features include Intel I211AT Gigabit Ethernet, Intel 802.11ax Wi-Fi, Bluetooth 5.0, and Realtek ALC1220 7.1-channel HD audio. The AMD X570 chipset is designed around 3rd generation AMD Ryzen 3000-series processors. Along with multiple improvements, its most noteworthy one is the addition of PCIe 4.0. PCIe 4.0 has roughly double the bandwidth of PCIe 3.0, which is beneficial for graphics cards, networking devices, NVMe drives, and more. ASRock Steel Slot is a metal reinforced PCIe slot for extra stability and retention force, so heavy graphics cards are secured in place.'),
(8, 'Samsung 860 EVO 500GB SSD', '79.99', '/images/evoOne.jpg', '860 EVO Series 2.5 SATA III V-NAND 3-bit MLC Internal Solid State Drive (SSD) MZ-76E500B/AM with User Manual.', 'The newest addition to the worlds best-selling SATA SSD series, the Samsung 860 EVO. Specially designed for mainstream PCs and laptops, with the latest V-NAND and a robust algorithm-based controller, this fast and reliable SSD comes in a wide range of compatible form factors and capacities. INNOVATIVE V-NAND TECHNOLOGY: Powered by Samsung V-NAND Technology, the 860 EVO SSD offers optimized performance for everyday computing as well as rendering large-sized 4K videos and 3D data used by the latest applications. ENHANCED READ WRITE SPEEDS: Sequential read and write performance levels of up to 550MB/s and 520MB/s, respectively. SECURE ENCRYPTION: Protect data by selecting security options, including AES 256-bit hardware-based encryption compliant with TCG Opal and IEEE 1671.');

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `productID` (`productID`,`cartID`) USING BTREE;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
