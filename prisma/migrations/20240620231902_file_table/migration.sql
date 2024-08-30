-- CreateTable
CREATE TABLE "FIle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FIle_pkey" PRIMARY KEY ("id")
);
