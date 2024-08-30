/*
  Warnings:

  - You are about to drop the `FIle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "FIle";

-- CreateTable
CREATE TABLE "files" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);
