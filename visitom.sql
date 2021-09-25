-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 21 sep. 2021 à 23:07
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `visitom`
--

-- --------------------------------------------------------

--
-- Structure de la table `groupes`
--

DROP TABLE IF EXISTS `groupes`;
CREATE TABLE IF NOT EXISTS `groupes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `group_active` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `sites`
--

DROP TABLE IF EXISTS `sites`;
CREATE TABLE IF NOT EXISTS `sites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `site_active` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `sites`
--

INSERT INTO `sites` (`id`, `site_name`, `site_active`, `createdAt`, `updatedAt`) VALUES
(1, 'MERMO', 1, '2021-08-20 10:55:16', '2021-08-20 10:55:16'),
(3, 'KGB HOME', 1, '2021-08-25 19:57:20', '2021-08-25 19:57:20'),
(8, 'MERMO', 1, '2021-08-25 20:52:07', '2021-08-25 20:52:07');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `visites`
--

DROP TABLE IF EXISTS `visites`;
CREATE TABLE IF NOT EXISTS `visites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `visite_type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `visite_company` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `arrival_time` datetime DEFAULT NULL,
  `depart_time` datetime DEFAULT NULL,
  `visite_status` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `visite_comment` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `visite_concern` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `visiteurId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `visiteurId` (`visiteurId`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `visites`
--

INSERT INTO `visites` (`id`, `visite_type`, `visite_company`, `arrival_time`, `depart_time`, `visite_status`, `visite_comment`, `visite_concern`, `createdAt`, `updatedAt`, `visiteurId`, `userId`) VALUES
(7, 'Travail', 'bssadi galleries', '2021-08-23 00:00:00', NULL, NULL, 'le monsieur n\'a pasc une CNI valide', 'Tchuente clovis', '2021-08-24 19:50:32', '2021-08-24 19:50:32', NULL, NULL),
(8, 'Affaires', 'PREF', '2021-09-22 00:00:00', NULL, NULL, 'fghfghfghfh gfhfghfghfgh fghfghfghfgh', 'Tchuente clovis', '2021-09-05 20:05:34', '2021-09-05 20:05:34', NULL, NULL),
(9, 'Travail', 'PREF', '2021-09-30 00:00:00', NULL, NULL, 'hdgfh rg ezrtertert erterter', 'Tchuente clovis', '2021-09-05 20:10:48', '2021-09-05 20:10:48', NULL, NULL),
(11, 'Courtoisie', 'PREF', '2021-09-30 00:00:00', NULL, NULL, 'ez ddfd dfdf s zgsf', 'Tchuente clovis', '2021-09-07 06:29:38', '2021-09-07 06:29:38', NULL, NULL),
(12, 'Courtoisie', 'PREF', '2021-09-30 00:00:00', NULL, NULL, 'ez ddfd dfdf s zgsf', 'Tchuente clovis', '2021-09-07 06:51:33', '2021-09-07 06:51:33', NULL, NULL),
(13, 'Courtoisie', 'PREF', '2021-09-30 00:00:00', NULL, NULL, 'ez ddfd dfdf s zgsf', 'Tchuente clovis', '2021-09-13 06:59:22', '2021-09-13 06:59:22', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `visiteurs`
--

DROP TABLE IF EXISTS `visiteurs`;
CREATE TABLE IF NOT EXISTS `visiteurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `visit_doc_id` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `doc_id_expiration` datetime DEFAULT NULL,
  `visit_fname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `visit_lname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `visit_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `visiteurs`
--

INSERT INTO `visiteurs` (`id`, `visit_doc_id`, `doc_id_expiration`, `visit_fname`, `visit_lname`, `visit_id`, `createdAt`, `updatedAt`) VALUES
(8, '478963215', '2012-11-21 00:00:00', 'KOUAM', 'Bertrand', NULL, '2021-08-24 19:50:32', '2021-08-24 19:50:32'),
(9, 'gfbhghfghfghfghgfhf', '2021-09-04 00:00:00', 'Aurel Bertrand', 'KOUAM', NULL, '2021-09-05 20:05:34', '2021-09-05 20:05:34'),
(10, '565465', '2021-09-24 00:00:00', 'KOUAM', 'Bertrand', NULL, '2021-09-05 20:10:48', '2021-09-05 20:10:48'),
(11, 'dfgdfgd', '2021-09-30 00:00:00', 'KOUAM', 'Bertrand', NULL, '2021-09-06 07:55:45', '2021-09-06 07:55:45'),
(12, '6465465465', '2021-08-31 00:00:00', 'abdelaziz', 'Bouteflika', NULL, '2021-09-07 06:29:38', '2021-09-07 06:29:38'),
(13, '6465465465', '2021-08-31 00:00:00', 'abdelaziz', 'Bouteflika', NULL, '2021-09-07 06:51:33', '2021-09-07 06:51:33'),
(14, '6465465465', '2021-08-31 00:00:00', 'abdelaziz', 'Bouteflika', NULL, '2021-09-13 06:59:22', '2021-09-13 06:59:22');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `visites`
--
ALTER TABLE `visites`
  ADD CONSTRAINT `visites_ibfk_1` FOREIGN KEY (`visiteurId`) REFERENCES `visiteurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `visites_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
