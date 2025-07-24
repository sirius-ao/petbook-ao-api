-- DropForeignKey
ALTER TABLE `AffiliateReferral` DROP FOREIGN KEY `AffiliateReferral_affiliateId_fkey`;

-- DropForeignKey
ALTER TABLE `Appointment` DROP FOREIGN KEY `Appointment_petId_fkey`;

-- DropForeignKey
ALTER TABLE `MedicalRecord` DROP FOREIGN KEY `MedicalRecord_petId_fkey`;

-- DropForeignKey
ALTER TABLE `Pet` DROP FOREIGN KEY `Pet_clienteId_fkey`;

-- DropForeignKey
ALTER TABLE `Sale` DROP FOREIGN KEY `Sale_clientId_fkey`;

-- DropForeignKey
ALTER TABLE `SaleItem` DROP FOREIGN KEY `SaleItem_productId_fkey`;

-- DropForeignKey
ALTER TABLE `SaleItem` DROP FOREIGN KEY `SaleItem_saleId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_businessId_fkey`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pet` ADD CONSTRAINT `Pet_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SaleItem` ADD CONSTRAINT `SaleItem_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SaleItem` ADD CONSTRAINT `SaleItem_saleId_fkey` FOREIGN KEY (`saleId`) REFERENCES `Sale`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalRecord` ADD CONSTRAINT `MedicalRecord_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AffiliateReferral` ADD CONSTRAINT `AffiliateReferral_affiliateId_fkey` FOREIGN KEY (`affiliateId`) REFERENCES `Affiliate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
