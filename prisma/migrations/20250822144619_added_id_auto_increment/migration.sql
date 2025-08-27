-- AlterTable
CREATE SEQUENCE "public".event_id_seq;
ALTER TABLE "public"."Event" ALTER COLUMN "id" SET DEFAULT nextval('"public".event_id_seq');
ALTER SEQUENCE "public".event_id_seq OWNED BY "public"."Event"."id";
