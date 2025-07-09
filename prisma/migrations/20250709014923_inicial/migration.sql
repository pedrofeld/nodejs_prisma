-- CreateTable
CREATE TABLE "aluno" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(120) NOT NULL,
    "email" VARCHAR(60) NOT NULL,
    "aniversario" DATE,
    "formado" BOOLEAN NOT NULL DEFAULT false,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "curso" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "ementa" TEXT NOT NULL,
    "cargaHoraria" DECIMAL(65,30) NOT NULL,
    "maxAlunos" SMALLINT NOT NULL DEFAULT 30,
    "status" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "disponivel" BOOLEAN NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "material_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "aluno_email_key" ON "aluno"("email");
