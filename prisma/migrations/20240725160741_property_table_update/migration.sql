/*
  Warnings:

  - Added the required column `uploader` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UploaderType" AS ENUM ('Agent', 'Owner');

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "uploader" "UploaderType" NOT NULL;
