/*
  Warnings:

  - You are about to alter the column `cargaHoraria` on the `curso` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "curso" ALTER COLUMN "cargaHoraria" SET DATA TYPE INTEGER;
