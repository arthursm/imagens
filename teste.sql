-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Tempo de geração: 10/01/2019 às 17:28
-- Versão do servidor: 5.7.24-0ubuntu0.16.04.1
-- Versão do PHP: 7.0.33-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `linkTeste`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `teste`
--

CREATE TABLE `teste` (
  `id` int(11) NOT NULL,
  `nome` varchar(500) NOT NULL,
  `codigo` varchar(500) NOT NULL,
  `slot` varchar(500) NOT NULL,
  `iata` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `teste`
--

INSERT INTO `teste` (`id`, `nome`, `codigo`, `slot`, `iata`) VALUES
(1, 'Fue', 'MYI', '100', 'null'),
(2, 'Teste', 'TSE', '100', ''),
(3, '', '', '100', ''),
(4, '', '', '100', ''),
(5, '', '', '100', ''),
(6, 'Drr', 'FFR', '100', ''),
(7, 'Eer', 'EJR', '100', 'CWB'),
(8, '', '', '100', ''),
(9, '', '', '100', 'AUH'),
(10, 'Firjrir', 'FRT', '100', 'AUH'),
(11, 'Frtt', 'FRF', '100', 'TEST');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `teste`
--
ALTER TABLE `teste`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `teste`
--
ALTER TABLE `teste`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
