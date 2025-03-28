-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 27, 2025 at 07:32 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `event_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_testdata` tinyint(1) NOT NULL,
  `is_delete` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `city`, `create_at`, `update_at`, `is_testdata`, `is_delete`) VALUES
(1, 'admin_Mumbai', 'admin_mumbai', '123', 'Mumbai', '2025-03-27 05:14:33', '2025-03-27 05:14:33', 0, 0),
(2, 'admin_Pune', 'admin_pune', '123', 'Pune', '2025-03-27 05:14:33', '2025-03-27 05:14:33', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) NOT NULL,
  `comment_id` int(10) NOT NULL,
  `comment` varchar(100) NOT NULL,
  `user_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(10) NOT NULL,
  `event_name` varchar(100) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `time` time NOT NULL,
  `city` varchar(100) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `duration` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `event_name`, `date`, `time`, `city`, `create_at`, `update_at`, `duration`, `description`, `address`) VALUES
(1, 'Music Concert', '2025-04-10', '19:00:00', 'Pune', '2025-03-26 19:49:41', '2025-03-26 19:49:41', '2 Hours', 'Experience live music from top artists and bands.', 'Pune Stadium'),
(2, 'Tech Conference', '2025-04-12', '10:00:00', 'Mumbai', '2025-03-26 19:49:41', '2025-03-26 19:49:41', '5 Hours', 'Discuss the latest innovations and trends in technology.', 'Mumbai Expo Center'),
(3, 'Food Festival', '2025-04-15', '17:00:00', 'Pune', '2025-03-26 19:49:41', '2025-03-26 19:49:41', '4 Hours', 'Explore a variety of cuisines from different cultures.', 'Pune Food Plaza'),
(4, 'Startup Meetup', '2025-05-01', '15:00:00', 'Mumbai', '2025-03-26 19:49:41', '2025-03-26 19:49:41', '3 Hours', 'Network with startup founders and investors.', 'BKC Innovation Hub'),
(5, 'Art Exhibition', '2025-05-10', '11:00:00', 'Mumbai', '2025-03-26 19:49:41', '2025-03-26 19:49:41', '6 Hours', 'Discover artwork from renowned and emerging artists.', 'Kala Ghoda Gallery'),
(20, 'Pune test event', '2025-03-21', '11:17:36', 'Pune', '2025-03-27 05:47:49', '2025-03-27 05:47:49', '5 Hours', 'qwqwsasa', 'Dighi Pune, Pune, 411015, India'),
(21, 'Mumbai Event', '2025-03-28', '11:25:41', 'Mumbai', '2025-03-27 05:50:52', '2025-03-27 05:50:52', '5 Hours', 'sddsds', 'Dighi Pune'),
(22, 'Mumbai Event Test 1', '2025-03-30', '10:00:00', 'Mumbai', '2025-03-27 06:25:27', '2025-03-27 06:25:27', '3 Hours', 'Enjoy the Event', 'Azad Maidan , Mumbai'),
(23, 'Pune test event 1', '2025-03-31', '11:00:41', 'Pune', '2025-03-27 06:27:04', '2025-03-27 06:27:04', '5 Hours', 'Testing an event in Pune', 'Pune Groud');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `state` varchar(100) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` bigint(20) DEFAULT NULL,
  `date_of_birth` date NOT NULL DEFAULT current_timestamp(),
  `password` varchar(10) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL DEFAULT current_timestamp(),
  `city` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `state`, `district`, `email`, `phone_number`, `date_of_birth`, `password`, `create_at`, `update_at`, `city`) VALUES
(9, 'Mumbai_User', 'Maharashtra', 'Haveli', 'mumbai_user@xyz.com', 9168701513, '2020-01-15', '123', '2025-03-27 11:50:53', '2025-03-27 11:50:53', 'Mumbai'),
(10, 'Pune_User', 'Maharashtra', 'Haveli', 'pune_user@xyz.com', 9168701513, '2024-12-15', '123', '2025-03-27 11:52:58', '2025-03-27 11:52:58', 'Pune');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
