-- AlterTable
ALTER TABLE `Affiliate` ALTER COLUMN `updateAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `AffiliateReferral` ALTER COLUMN `updateAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Business` ALTER COLUMN `updateAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Client` ALTER COLUMN `updateAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `Pet` ALTER COLUMN `updateAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `User` ALTER COLUMN `updateAt` DROP DEFAULT;
