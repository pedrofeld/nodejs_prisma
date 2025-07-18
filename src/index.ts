import { AlunoRepository } from "./database/aluno.repository";

const alunoRepository = new AlunoRepository();

async function main() {
    // listar alunos
    /*
        const alunos = await alunoRepository.list();
        console.log(alunos);
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
}

main();