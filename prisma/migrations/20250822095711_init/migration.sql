-- CreateTable
CREATE TABLE "public"."Event" (
    "id" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    "country" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
