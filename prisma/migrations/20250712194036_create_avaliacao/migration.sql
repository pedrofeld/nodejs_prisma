-- CreateTable
CREATE TABLE "avaliacao" (
    "id" TEXT NOT NULL,
    "disciplina" VARCHAR(30) NOT NULL,
    "nota" SMALLINT NOT NULL,
    "data_avaliacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_aluno" TEXT NOT NULL,

    CONSTRAINT "avaliacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
