-- DropForeignKey
ALTER TABLE "avaliacao" DROP CONSTRAINT "avaliacao_id_aluno_fkey";

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE CASCADE ON UPDATE CASCADE;
