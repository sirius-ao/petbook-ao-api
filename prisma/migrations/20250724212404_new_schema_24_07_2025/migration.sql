/*
  Warnings:

  - Added the required column `updateAt` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `MedicalRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `SaleItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Affiliate` ALTER COLUMN `updateAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `AffiliateReferral` ALTER COLUMN `updateAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Appointment` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Business` ALTER COLUMN `updateAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Client` ALTER COLUMN `updateAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `MedicalRecord` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Pet` ALTER COLUMN `updateAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Sale` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `SaleItem` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Service` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `User` ALTER COLUMN `updateAt` DROP DEFAULT;
