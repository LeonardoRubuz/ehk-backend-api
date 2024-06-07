/*
  Warnings:

  - Added the required column `name` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "images" TEXT[],
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "size" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profile" TEXT;
