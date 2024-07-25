/*
  Warnings:

  - You are about to drop the column `rentPrice` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `salePrice` on the `Property` table. All the data in the column will be lost.
  - Added the required column `currency` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('CDF', 'EUR', 'USD');

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "rentPrice",
DROP COLUMN "salePrice",
ADD COLUMN     "bathrooms" INTEGER,
ADD COLUMN     "currency" "Currency" NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rooms" INTEGER;
