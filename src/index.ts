import { AlunoRepository } from "./database/aluno.repository";

const alunoRepository = new AlunoRepository();

async function main() {
    // listar alunos
    // const alunos = await alunoRepository.list();
    // console.log(alunos);

    // listar aluno por ID
    // const aluno = await alunoRepository.obterPorId("2");
    // console.log(aluno);

    //criar novo aluno
    const alunoCriado = await alunoRepository.criar({
        nome: "joaozinho",
        email: "joaozinho@gmail.com",
        formado: true,
        rg: 123456789
    })
    console.log(alunoCriado);
}

main();