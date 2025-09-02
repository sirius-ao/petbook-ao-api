-- CreateTable
CREATE TABLE "Lembrete" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "message" TEXT,
    "dateTime" TIMESTAMP(3),
    "repeat" TEXT,
    "channels" TEXT[],
    "isPrescription" BOOLEAN NOT NULL DEFAULT false,
    "prescription" JSONB,
    "petId" INTEGER,
    "clienteId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lembrete_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lembrete" ADD CONSTRAINT "Lembrete_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lembrete" ADD CONSTRAINT "Lembrete_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
