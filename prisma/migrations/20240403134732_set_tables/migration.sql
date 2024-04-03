-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Masculine', 'Feminine');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Public', 'Admin');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('Apartment', 'House', 'Field');

-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('onSale', 'forRent', 'sold', 'rent');

-- CreateEnum
CREATE TYPE "City" AS ENUM ('Kinshasa', 'Lubumbashi');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "middlename" TEXT,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "gender" "Gender" NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Public',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "salePrice" INTEGER,
    "rentPrice" INTEGER,
    "userId" INTEGER NOT NULL,
    "type" "PropertyType" NOT NULL,
    "tag" "Tag" NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "commune" TEXT NOT NULL,
    "city" "City",
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_propertyId_key" ON "Address"("propertyId");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
