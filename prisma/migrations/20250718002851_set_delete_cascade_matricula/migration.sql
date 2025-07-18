-- DropForeignKey
ALTER TABLE "matricula" DROP CONSTRAINT "matricula_id_aluno_fkey";

-- DropForeignKey
ALTER TABLE "matricula" DROP CONSTRAINT "matricula_id_curso_fkey";

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
