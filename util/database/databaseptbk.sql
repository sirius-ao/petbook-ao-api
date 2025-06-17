-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql:3306
-- Tempo de geração: 17-Jun-2025 às 10:05
-- Versão do servidor: 9.3.0
-- versão do PHP: 8.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dados: `databaseptbk`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `Affiliate`
--

CREATE TABLE `Affiliate` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `earnings` double NOT NULL DEFAULT '0',
  `createAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updateAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `AffiliateReferral`
--

CREATE TABLE `AffiliateReferral` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `affiliateId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referredUserId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('USER_SIGNUP','BUSINESS_SIGNUP','ORDER') COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` double NOT NULL,
  `status` enum('PENDING','APPROVED','PAID') COLLATE utf8mb4_unicode_ci NOT NULL,
  `createAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updateAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Appointment`
--

CREATE TABLE `Appointment` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime(3) NOT NULL,
  `status` enum('SCHEDULED','COMPLETED','CANCELLED') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'SCHEDULED',
  `petId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `serviceId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `businessId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Business`
--

CREATE TABLE `Business` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updateAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Client`
--

CREATE TABLE `Client` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `businessId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updateAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `MedicalRecord`
--

CREATE TABLE `MedicalRecord` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `petId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vetId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Pet`
--

CREATE TABLE `Pet` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `species` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `breed` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthDate` datetime(3) DEFAULT NULL,
  `clienteId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updateAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Product`
--

CREATE TABLE `Product` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `stock` int NOT NULL,
  `businessId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Sale`
--

CREATE TABLE `Sale` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clientId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `businessId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` double NOT NULL,
  `dateSale` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `SaleItem`
--

CREATE TABLE `SaleItem` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `saleId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Service`
--

CREATE TABLE `Service` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `duration` int NOT NULL,
  `businessId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `User`
--

CREATE TABLE `User` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('ADMIN','VET','ATTENDANT') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ATTENDANT',
  `businessId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updateAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `Affiliate`
--
ALTER TABLE `Affiliate`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Affiliate_code_key` (`code`),
  ADD KEY `Affiliate_userId_fkey` (`userId`);

--
-- Índices para tabela `AffiliateReferral`
--
ALTER TABLE `AffiliateReferral`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AffiliateReferral_affiliateId_fkey` (`affiliateId`);

--
-- Índices para tabela `Appointment`
--
ALTER TABLE `Appointment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Appointment_petId_fkey` (`petId`),
  ADD KEY `Appointment_serviceId_fkey` (`serviceId`),
  ADD KEY `Appointment_businessId_fkey` (`businessId`);

--
-- Índices para tabela `Business`
--
ALTER TABLE `Business`
  ADD UNIQUE KEY `Business_id_key` (`id`);

--
-- Índices para tabela `Client`
--
ALTER TABLE `Client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Client_businessId_fkey` (`businessId`);

--
-- Índices para tabela `MedicalRecord`
--
ALTER TABLE `MedicalRecord`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MedicalRecord_petId_fkey` (`petId`),
  ADD KEY `MedicalRecord_vetId_fkey` (`vetId`);

--
-- Índices para tabela `Pet`
--
ALTER TABLE `Pet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Pet_clienteId_fkey` (`clienteId`);

--
-- Índices para tabela `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Product_businessId_fkey` (`businessId`);

--
-- Índices para tabela `Sale`
--
ALTER TABLE `Sale`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Sale_clientId_fkey` (`clientId`),
  ADD KEY `Sale_businessId_fkey` (`businessId`);

--
-- Índices para tabela `SaleItem`
--
ALTER TABLE `SaleItem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `SaleItem_saleId_fkey` (`saleId`),
  ADD KEY `SaleItem_productId_fkey` (`productId`);

--
-- Índices para tabela `Service`
--
ALTER TABLE `Service`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Service_businessId_fkey` (`businessId`);

--
-- Índices para tabela `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD KEY `User_businessId_fkey` (`businessId`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `Affiliate`
--
ALTER TABLE `Affiliate`
  ADD CONSTRAINT `Affiliate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limitadores para a tabela `AffiliateReferral`
--
ALTER TABLE `AffiliateReferral`
  ADD CONSTRAINT `AffiliateReferral_affiliateId_fkey` FOREIGN KEY (`affiliateId`) REFERENCES `Affiliate` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limitadores para a tabela `Appointment`
--
ALTER TABLE `Appointment`
  ADD CONSTRAINT `Appointment_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Appointment_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Appointment_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `Client`
--
ALTER TABLE `Client`
  ADD CONSTRAINT `Client_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limitadores para a tabela `MedicalRecord`
--
ALTER TABLE `MedicalRecord`
  ADD CONSTRAINT `MedicalRecord_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `MedicalRecord_vetId_fkey` FOREIGN KEY (`vetId`) REFERENCES `User` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `Pet`
--
ALTER TABLE `Pet`
  ADD CONSTRAINT `Pet_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Client` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limitadores para a tabela `Product`
--
ALTER TABLE `Product`
  ADD CONSTRAINT `Product_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limitadores para a tabela `Sale`
--
ALTER TABLE `Sale`
  ADD CONSTRAINT `Sale_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Sale_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `SaleItem`
--
ALTER TABLE `SaleItem`
  ADD CONSTRAINT `SaleItem_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `SaleItem_saleId_fkey` FOREIGN KEY (`saleId`) REFERENCES `Sale` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limitadores para a tabela `Service`
--
ALTER TABLE `Service`
  ADD CONSTRAINT `Service_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Limitadores para a tabela `User`
--
ALTER TABLE `User`
  ADD CONSTRAINT `User_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
