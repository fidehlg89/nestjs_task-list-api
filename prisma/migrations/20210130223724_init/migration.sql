-- CreateTable
CREATE TABLE `Task` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191),
    `status` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
