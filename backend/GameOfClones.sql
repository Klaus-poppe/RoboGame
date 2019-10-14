-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 14, 2019 at 11:52 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `GameOfClones`
--

-- --------------------------------------------------------

--
-- Table structure for table `troops`
--

CREATE TABLE `troops` (
  `id` int(11) NOT NULL,
  `kind` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `strength` int(1) NOT NULL,
  `agility` int(1) NOT NULL,
  `intelligence` int(1) NOT NULL,
  `terrain` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `troops`
--

INSERT INTO `troops` (`id`, `kind`, `description`, `strength`, `agility`, `intelligence`, `terrain`, `type`) VALUES
(1, 'Advanced Recon Commandos', 'Also known as ARC troopers, were elite clone troopers that excel and received further training.', 6, 3, 5, 'Air, Under water, Inter Galactic Space, Ground, Buildings', 'clone trooper'),
(2, 'Clone SCUBA troopers', 'Clone troopers equipped with underwater armor and weaponry.', 4, 3, 7, 'Under Water, Ground', 'clone trooper'),
(3, 'Clone sharpshooters', 'Clone troopers trained to be snipers.', 2, 7, 8, 'Ground, Buildings', 'clone trooper'),
(4, 'Clone jetpack troopers', 'Clone troopers equipped with a jetpack and missile launcher', 8, 8, 4, 'Ground, Inter Galactic Space', 'clone trooper'),
(5, 'Clone ordnance specialists', 'Clone troopers that have received specialized training in arming and diffusing bombs.', 9, 7, 4, 'Ground, Buildings', 'clone trooper'),
(6, 'B1 Battle droids', 'B1 battle droids, also referred to as standard battle droids, were the most widely used battle droids manufactured by Baktoid Combat Automata and Baktoid Armor Workshop', 3, 5, 7, 'Air, Under water, Inter Galactic Space, Ground, Buildings', 'droid army'),
(7, 'B2 Super battle droids', 'B2 super battle droids, also known as super battle droids or super droids, were an advanced battle droid used by the Confederacy of Independent Systems during the Clone Wars. Super battle droids were much stronger than their predecessors, and like the upd', 6, 4, 8, 'Air, Under water, Inter Galactic Space, Ground, Buildings', 'droid army'),
(8, 'Armored Assault Tanks', 'The Armored Assault Tank, also known as the AAT battle tank or the AAT-1 Hover Tank, was an artillery vehicle used by the Trade Federation', 8, 3, 2, 'Air, Under water, Inter Galactic Space, Ground, Buildings', 'droid army');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `troops`
--
ALTER TABLE `troops`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `troops`
--
ALTER TABLE `troops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
