/*
  Warnings:

  - Added the required column `client_id` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `session_id` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Event" ADD COLUMN     "client_id" TEXT NOT NULL,
ADD COLUMN     "session_id" TEXT NOT NULL;
