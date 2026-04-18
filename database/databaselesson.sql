-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2026 at 12:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `databaselesson`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cname` varchar(50) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cname`, `price`) VALUES
('king', 1250),
('knight', 1150),
('nobleman', 950),
('page', 850);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `pizzaname` varchar(50) NOT NULL,
  `amount` int(11) NOT NULL,
  `taken` datetime NOT NULL,
  `dispatched` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `pizzaname`, `amount`, `taken`, `dispatched`) VALUES
(2, 'Popey', 2, '2005-11-12 11:21:00', '2005-11-12 12:11:00'),
(3, 'Kagylós', 1, '2005-11-12 11:41:00', '2005-11-12 12:26:00'),
(4, 'Barbecue chicken', 1, '2005-11-12 12:38:00', '2005-11-12 13:02:00'),
(5, 'Röfi', 1, '2005-11-12 13:18:00', '2005-11-12 13:58:00'),
(6, 'Tündi kedvence', 1, '2005-11-12 13:44:00', '2005-11-12 16:53:00'),
(7, 'Hercegnő', 2, '2005-11-12 14:10:00', '2005-11-12 14:57:00'),
(8, 'Mixi', 1, '2005-11-12 14:20:00', '2005-11-12 16:25:00'),
(9, 'Ráki', 3, '2005-11-12 14:51:00', '2005-11-12 17:06:00'),
(10, 'Szőke kapitány', 1, '2005-11-12 15:13:00', '2005-11-12 17:12:00'),
(11, 'Kagylós', 1, '2005-11-12 15:42:00', '2005-11-12 16:48:00'),
(12, 'Sonkás', 1, '2005-11-12 16:31:00', '2005-11-12 16:53:00'),
(13, 'Excellent', 1, '2005-11-12 17:01:00', '2005-11-12 19:41:00'),
(14, 'Máj Fair Lady', 2, '2005-11-12 17:58:00', '2005-11-12 20:39:00'),
(15, 'Frankfurti', 1, '2005-11-12 18:48:00', '2005-11-12 21:45:00'),
(16, 'Pástétomos', 1, '2005-11-12 19:15:00', '2005-11-12 21:04:00'),
(17, 'Máj Fair Lady', 1, '2005-11-12 19:45:00', '2005-11-12 21:46:00'),
(18, 'Tüzes halál', 2, '2005-11-12 19:54:00', '2005-11-12 22:48:00'),
(19, 'Hellas', 1, '2005-11-12 20:25:00', '2005-11-12 23:15:00'),
(20, 'Lecsó', 1, '2005-11-12 21:21:00', '2005-11-13 00:31:00'),
(21, 'Mamma fia', 1, '2005-11-12 21:41:00', '2005-11-13 00:06:00'),
(22, 'Country', 3, '2005-11-12 22:18:00', '2005-11-13 00:01:00'),
(23, 'Tenger gyümölcsei', 1, '2005-11-12 22:36:00', '2005-11-13 00:38:00'),
(24, 'Kívánság', 1, '2005-11-12 23:02:00', '2005-11-13 00:53:00'),
(25, 'Hamm', 3, '2005-11-12 23:47:00', '2005-11-13 00:23:00'),
(26, 'Magvas', 1, '2005-11-13 00:44:00', '2005-11-13 02:14:00'),
(27, 'Szardíniás', 1, '2005-11-13 00:56:00', '2005-11-13 02:29:00'),
(28, 'Csupa sajt', 2, '2005-11-13 01:22:00', '2005-11-13 04:33:00'),
(29, 'Sajtos', 1, '2005-11-13 01:31:00', '2005-11-13 04:24:00'),
(30, 'Szerzetes', 1, '2005-11-13 01:35:00', '2005-11-13 04:01:00'),
(31, 'HamAndEggs', 1, '2005-11-13 01:38:00', '2005-11-13 02:09:00'),
(32, 'Szalámis', 1, '2005-11-13 01:39:00', '2005-11-13 03:25:00'),
(33, 'Kagylós', 2, '2005-11-13 02:03:00', '2005-11-13 02:50:00'),
(34, 'Jázmin álma', 1, '2005-11-13 02:29:00', '2005-11-13 04:27:00'),
(35, 'Magvas', 1, '2005-11-13 02:37:00', '2005-11-13 03:38:00'),
(36, 'Sajtos', 1, '2005-11-13 03:23:00', '2005-11-13 04:47:00'),
(37, 'Szardíniás', 1, '2005-11-13 04:19:00', '2005-11-13 05:17:00'),
(38, 'Sajtos', 1, '2005-11-13 04:32:00', '2005-11-13 06:42:00'),
(39, 'Gino', 2, '2005-11-13 05:28:00', '2005-11-13 06:30:00'),
(40, 'Ínyenc', 1, '2005-11-13 06:16:00', '2005-11-13 09:14:00'),
(41, 'Juhtúrós', 1, '2005-11-13 06:48:00', '2005-11-13 07:39:00'),
(42, 'Caribi', 1, '2005-11-13 07:39:00', '2005-11-13 08:05:00'),
(43, 'Kagylós', 1, '2005-11-13 08:25:00', '2005-11-13 09:25:00'),
(44, 'Babos', 1, '2005-11-13 09:03:00', '2005-11-13 09:34:00'),
(45, 'Babos', 1, '2005-11-13 09:27:00', '2005-11-13 10:50:00'),
(46, 'Son-go-ku', 1, '2005-11-13 09:56:00', '2005-11-13 11:57:00'),
(47, 'HamAndEggs', 1, '2005-11-13 10:17:00', '2005-11-13 11:14:00'),
(48, 'Szalámis', 2, '2005-11-13 11:03:00', '2005-11-13 13:11:00'),
(49, 'Gyros pizza', 1, '2005-11-13 11:12:00', '2005-11-13 12:03:00'),
(50, 'Máj Fair Lady', 3, '2005-11-13 11:46:00', '2005-11-13 14:00:00'),
(51, 'Pipis', 1, '2005-11-13 12:27:00', '2005-11-13 14:40:00'),
(52, 'Quattro', 2, '2005-11-13 12:54:00', '2005-11-13 13:45:00'),
(53, 'Maffiózó', 2, '2005-11-13 13:18:00', '2005-11-13 15:54:00'),
(54, 'Mamma fia', 1, '2005-11-13 13:25:00', '2005-11-13 16:36:00'),
(55, 'Son-go-ku', 1, '2005-11-13 14:15:00', '2005-11-13 16:08:00'),
(56, 'Kívánság', 1, '2005-11-13 15:05:00', '2005-11-13 15:34:00'),
(57, 'Góré', 1, '2005-11-13 15:44:00', '2005-11-13 17:09:00'),
(58, 'Csabesz', 1, '2005-11-13 16:16:00', '2005-11-13 17:18:00'),
(59, 'Nordic', 1, '2005-11-13 16:58:00', '2005-11-13 19:00:00'),
(60, 'Magvas', 1, '2005-11-13 17:27:00', '2005-11-13 19:45:00'),
(61, 'Barbecue chicken', 1, '2005-11-13 17:52:00', '2005-11-13 19:06:00'),
(62, 'Sajtos', 1, '2005-11-13 18:39:00', '2005-11-13 20:13:00'),
(63, 'Quattro', 1, '2005-11-13 19:33:00', '2005-11-13 21:32:00'),
(64, 'Popey', 3, '2005-11-13 20:29:00', '2005-11-13 22:12:00'),
(65, 'Mexikói', 2, '2005-11-13 21:15:00', '2005-11-13 23:03:00'),
(66, 'Babos', 1, '2005-11-13 22:09:00', '2005-11-14 00:32:00'),
(67, 'Kétszínű', 1, '2005-11-13 22:52:00', '2005-11-14 00:30:00'),
(68, 'Kétszínű', 1, '2005-11-13 22:55:00', '2005-11-14 00:45:00'),
(69, 'Tonhalas', 2, '2005-11-13 23:38:00', '2005-11-14 01:02:00'),
(70, 'Pacalos', 1, '2005-11-14 00:02:00', '2005-11-14 02:00:00'),
(71, 'Szőke kapitány', 1, '2005-11-14 00:52:00', '2005-11-14 03:02:00'),
(72, 'Erős János', 1, '2005-11-14 01:14:00', '2005-11-14 02:34:00'),
(73, 'Magyaros', 1, '2005-11-14 01:43:00', '2005-11-14 04:21:00'),
(74, 'Lecsó', 2, '2005-11-14 01:48:00', '2005-11-14 04:58:00'),
(75, 'Csabesz', 1, '2005-11-14 02:25:00', '2005-11-14 02:54:00'),
(76, 'Mixi', 1, '2005-11-14 02:45:00', '2005-11-14 04:15:00'),
(77, 'Mexikói', 1, '2005-11-14 03:27:00', '2005-11-14 06:34:00'),
(78, 'Caribi', 1, '2005-11-14 03:29:00', '2005-11-14 04:29:00'),
(79, 'Ráki', 3, '2005-11-14 04:21:00', '2005-11-14 04:42:00'),
(80, 'Mamma fia', 3, '2005-11-14 05:09:00', '2005-11-14 07:49:00'),
(81, 'Nordic', 1, '2005-11-14 05:56:00', '2005-11-14 07:39:00'),
(82, 'Szerzetes', 1, '2005-11-14 06:34:00', '2005-11-14 07:23:00'),
(83, 'Hawaii', 1, '2005-11-14 06:51:00', '2005-11-14 08:37:00'),
(84, 'Szalámis', 1, '2005-11-14 07:17:00', '2005-11-14 09:00:00'),
(85, 'Csabesz', 1, '2005-11-14 07:57:00', '2005-11-14 09:56:00'),
(86, 'Kolbászos', 1, '2005-11-14 08:28:00', '2005-11-14 08:56:00'),
(87, 'Magvas', 1, '2005-11-14 09:21:00', '2005-11-14 11:15:00'),
(88, 'Tenger gyümölcsei', 1, '2005-11-14 09:54:00', '2005-11-14 10:45:00'),
(89, 'Lagúna', 1, '2005-11-14 10:09:00', '2005-11-14 12:53:00'),
(90, 'Kívánság', 1, '2005-11-14 10:56:00', '2005-11-14 14:02:00'),
(91, 'Kagylós', 1, '2005-11-14 11:30:00', '2005-11-14 11:58:00'),
(92, 'So-ku', 1, '2005-11-14 12:04:00', '2005-11-14 14:02:00'),
(93, 'Country', 2, '2005-11-14 12:41:00', '2005-11-14 15:41:00'),
(94, 'Mamma fia', 1, '2005-11-14 12:47:00', '2005-11-14 15:38:00'),
(95, 'Törperős', 1, '2005-11-14 13:22:00', '2005-11-14 14:11:00'),
(96, 'Hawaii', 1, '2005-11-14 13:49:00', '2005-11-14 16:41:00'),
(97, 'Zöldike', 1, '2005-11-14 14:41:00', '2005-11-14 16:48:00'),
(98, 'Szőke kapitány', 1, '2005-11-14 15:33:00', '2005-11-14 16:40:00'),
(99, 'Pacalos', 1, '2005-11-14 16:03:00', '2005-11-14 18:22:00');


-- --------------------------------------------------------

--
-- Table structure for table `pizzas`
--

CREATE TABLE `pizzas` (
  `pname` varchar(50) NOT NULL,
  `categoryname` varchar(50) NOT NULL,
  `vegetarian` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `pizzas`
--

INSERT INTO `pizzas` (`pname`, `categoryname`, `vegetarian`) VALUES
('Áfonyás', 'king', 0),
('Babos', 'knight', 0),
('Barbecue chicken', 'knight', 0),
('Betyáros', 'king', 0),
('Caribi', 'page', 0),
('Country', 'king', 0),
('Csabesz', 'king', 0),
('Csupa sajt', 'knight', 1),
('Erdő kapitánya', 'page', 0),
('Erős János', 'knight', 0),
('Excellent', 'king', 0),
('Főnök kedvence', 'knight', 0),
('Francia', 'nobleman', 0),
('Frankfurti', 'king', 0),
('Füstös', 'knight', 0),
('Gino', 'king', 0),
('Gombás', 'page', 1),
('Góré', 'knight', 0),
('Görög', 'king', 0),
('Gyros pizza', 'king', 0),
('HamAndEggs', 'knight', 0),
('Hamm', 'knight', 0),
('Hawaii', 'nobleman', 0),
('Hellas', 'king', 0),
('Hercegnő', 'king', 0),
('Ilike', 'knight', 0),
('Ínyenc', 'knight', 0),
('Jázmin álma', 'knight', 0),
('Jobbágy', 'king', 0),
('Juhtúrós', 'knight', 0),
('Kagylós', 'king', 0),
('Kétszínű', 'knight', 0),
('Kiadós', 'king', 0),
('Király pizza', 'king', 0),
('Kívánság', 'knight', 1),
('Kolbászos', 'page', 0),
('Lagúna', 'king', 1),
('Lecsó', 'king', 0),
('Maffiózó', 'knight', 0),
('Magvas', 'king', 1),
('Magyaros', 'knight', 0),
('Máj Fair Lady', 'king', 0),
('Mamma fia', 'king', 0),
('Mexikói', 'nobleman', 0),
('Mixi', 'nobleman', 1),
('Nikó', 'king', 0),
('Nordic', 'king', 0),
('Nyuszó-Muszó', 'king', 0),
('Pacalos', 'knight', 0),
('Pástétomos', 'king', 0),
('Pásztor', 'knight', 0),
('Pipis', 'knight', 0),
('pname', 'categoryname', 0),
('Popey', 'king', 0),
('Quattro', 'king', 0),
('Ráki', 'king', 0),
('Rettenetes magyar', 'knight', 0),
('Röfi', 'king', 0),
('Sajtos', 'page', 1),
('So-ku', 'page', 0),
('Son-go-ku', 'nobleman', 1),
('Sonkás', 'page', 0),
('Spanyol', 'king', 0),
('Spencer', 'nobleman', 0),
('Szalámis', 'page', 0),
('Szardíniás', 'knight', 0),
('Szerzetes', 'king', 0),
('Szőke kapitány', 'king', 0),
('Tenger gyümölcsei', 'king', 0),
('Tonhalas', 'knight', 0),
('Törperős', 'knight', 0),
('Tündi kedvence', 'king', 0),
('Tüzes halál', 'king', 0),
('Vega', 'knight', 1),
('Zöldike', 'nobleman', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(45) NOT NULL DEFAULT '',
  `last_name` varchar(45) NOT NULL DEFAULT '',
  `user_name` varchar(12) NOT NULL DEFAULT '',
  `password` varchar(40) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `user_name`, `password`) VALUES
(1, 'FirstName_1', 'LastName_1', 'Login1', 'd4b90f2dfafc736205a98bf3ae6541431bc77d8e'),
(2, 'FirstName_2', 'LastName_2', 'Login2', '6cf8efacae19431476020c1e2ebd2d8acca8f5c0'),
(3, 'FirstName_3', 'LastName_3', 'Login3', 'df4d8ad070f0d1585e172a2150038df5cc6c891a'),
(4, 'FirstName_4', 'LastName_4', 'Login4', 'b020c308c155d6bbd7eb7d27bd30c0573acbba5b'),
(5, 'FirstName_5', 'LastName_5', 'Login5', '9ab1a4743b30b5e9c037e6a645f0cfee80fb41d4'),
(6, 'FirstName_6', 'LastName_6', 'Login6', '7ca01f28594b1a06239b1d96fc716477d198470b'),
(7, 'FirstName_7', 'LastName_7', 'Login7', '41ad7e5406d8f1af2deef2ade4753009976328f8'),
(8, 'FirstName_8', 'LastName_8', 'Login8', '3a340fe3599746234ef89591e372d4dd8b590053'),
(9, 'FirstName_9', 'LastName_9', 'Login9', 'c0298f7d314ecbc5651da5679a0a240833a88238'),
(10, 'FirstName_10', 'LastName_10', 'Login10', 'a477427c183664b57f977661ac3167b64823f366'),
(11, 'FirstName_11', 'LastName_11', 'Login11', '6c7e2151d33968a02198f7e2073b1d7b9ee65ed9'),
(12, 'FirstName_12', 'LastName_12', 'Login12', '0722b3651be10eeb8df39cced958b74a98d18ce3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cname`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`pname`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21801;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
