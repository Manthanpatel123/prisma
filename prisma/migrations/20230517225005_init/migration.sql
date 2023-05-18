-- CreateTable
CREATE TABLE `Productmany` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorymany` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategorymanyToProductmany` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategorymanyToProductmany_AB_unique`(`A`, `B`),
    INDEX `_CategorymanyToProductmany_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CategorymanyToProductmany` ADD CONSTRAINT `_CategorymanyToProductmany_A_fkey` FOREIGN KEY (`A`) REFERENCES `Categorymany`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategorymanyToProductmany` ADD CONSTRAINT `_CategorymanyToProductmany_B_fkey` FOREIGN KEY (`B`) REFERENCES `Productmany`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
