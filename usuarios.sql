-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2024 at 05:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `data_nasc` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `telefone`, `data_nasc`) VALUES
(16, 'Ana Silva', 'ana.silva@example.com', '12345678', '(11) 98765-4321', '2001-02-15'),
(17, 'Carlos Oliveira', 'carlos.oliveira@example.com', 'senha123', '(21) 99876-5432', '1995-06-10'),
(18, 'Beatriz Souza', 'beatriz.souza@example.com', 'bea123456', '(31) 91234-5678', '1998-11-20'),
(19, 'Marcos Pereira da Silva', 'marcos.pereira@example.com', '12345678', '41 965432109', '1992-03-25'),
(20, 'JoÃ£o Mendes', 'joao.mendes@example.com', 'abcde123', '5199888-1234', '1998-07-30'),
(21, 'Larissa Costa', 'larissa.costa@example.com', 'larissa2024', '(61) 98123-4567', '1999-04-18'),
(22, 'Gustavo Almeida', 'gustavo.almeida@example.com', 'gu123456', '(71) 99765-4321', '1997-09-05'),
(23, 'Juliana Ribeiro', 'juliana.ribeiro@example.com', '98765432', '(85) 99821-6543', '2001-01-13'),
(24, 'Felipe Rocha', 'felipe.rocha@example.com', 'rocha1234', '(19) 98123-9876', '1996-08-23'),
(25, 'Rafael Costa', 'rafael.costa@example.com', '1234rafael', '(44) 99999-1234', '1994-10-11'),
(26, 'Camila Martins', 'camila.martins@example.com', 'camila2020', '(51) 99999-8765', '2000-05-05'),
(27, 'Tiago Ferreira', 'tiago.ferreira@example.com', 'tiago123456', '(22) 98123-4321', '1993-03-02'),
(28, 'Vanessa Lima', 'vanessa.lima@example.com', 'limav123', '(85) 98765-1234', '1997-02-14'),
(29, 'Rodrigo Silva', 'rodrigo.alex@example.com', 'alexrod345', '83988564212', '1999-05-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
