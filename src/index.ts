import { AlunoRepository } from "./database/aluno.repository";
import { prisma } from "./config/prisma.config";

const alunoRepository = new AlunoRepository();

async function main() {
    // listar alunos
    const alunos = await alunoRepository.list();
    console.log(alunos);
    

    // listar alunos específicos
    /*
        const alunos = await alunoRepository.pesquisaEspecifica()
        console.log(alunos)
    */

    // listar aluno por ID
    /*
        const aluno = await alunoRepository.obterPorId("af1cf703-0500-4a92-8b1f-0bd1c7f608a9");
        console.log(aluno);
    */

    //criar novo aluno
    /*
        const alunoCriado = await alunoRepository.criar({
            nome: "joaozinho",
            email: "joaozinho@gmail.com",
            formado: true,
            rg: 123456789
        })
        console.log(alunoCriado);
    */

    // atualizar aluno
    /*
        const alunoAtualizado = await alunoRepository.atualizar(
            "7692698b-42f9-4a3d-8c30-c8a043b24778", 
            {
                nome: "joao atualizado"
            }
        );
        console.log(alunoAtualizado);
    */
    

    // excluir aluno
    /*
        const alunoExcluido = await alunoRepository.excluir("d14c7bba-ca65-48d4-8df0-90cf24110f05");
        console.log(alunoExcluido);
    */

   // Exemplo de aluno com vínculos
   /*
        const curso = await prisma.curso.create({
            data: {
                titulo: "Curso de TypeScript",
                ementa: "Conceitos modernos de TS",
                cargaHoraria: 60,
                status: "ativo"
            }
        });

        const alunoCriado = await alunoRepository.criar({
            nome: "Pedro Grow",
            email: "pedro@growdev.com.br",
            formado: true,
            rg: 123456789
        });

        if (!alunoCriado) {
            console.error("Erro ao criar aluno");
            return;
        }

        await prisma.avaliacao.createMany({
            data: [
                {
                disciplina: "Lógica de Programação",
                nota: 10,
                idAluno: alunoCriado.id
                },
                {
                disciplina: "Banco de Dados",
                nota: 9,
                idAluno: alunoCriado.id
                }
            ]
        });

        await prisma.matricula.create({
            data: {
                idAluno: alunoCriado.id,
                idCurso: curso.id
            }
        });

        const resultado = await alunoRepository.obterPorId(alunoCriado.id);
        console.dir(resultado, { depth: null });
    */
}

main();