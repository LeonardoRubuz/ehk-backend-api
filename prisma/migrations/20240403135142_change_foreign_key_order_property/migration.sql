/*
  Warnings:

  - You are about to drop the column `propertyId` on the `Address` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressId` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_propertyId_fkey";

-- DropIndex
DROP INDEX "Address_propertyId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "propertyId";

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "addressId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Property_addressId_key" ON "Property"("addressId");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
