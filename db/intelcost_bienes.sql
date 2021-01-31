-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-01-2021 a las 00:43:30
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `intelcost_bienes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bienes`
--

CREATE TABLE `bienes` (
  `id` int(11) NOT NULL COMMENT 'identificador',
  `address` varchar(255) NOT NULL COMMENT 'direccion',
  `city` varchar(255) NOT NULL COMMENT 'ciudad',
  `phone` varchar(255) NOT NULL COMMENT 'telefono',
  `postal_code` varchar(255) NOT NULL COMMENT 'codigo postal',
  `type` varchar(255) NOT NULL COMMENT 'tipo',
  `price` varchar(255) NOT NULL COMMENT 'precio',
  `code_number` int(11) NOT NULL,
  `created` date NOT NULL DEFAULT current_timestamp() COMMENT 'fecha creaciòn',
  `deleted` int(1) NOT NULL COMMENT 'metada para indicar registros eliminados'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de bienes';

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bienes`
--
ALTER TABLE `bienes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bienes`
--
ALTER TABLE `bienes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'identificador';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
