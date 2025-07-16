import { prisma } from "../config/prisma.config";
import { CreateAlunoDto } from "../dtos/create-aluno.dto";

export class AlunoRepository {
    // Método para listar todos os alunos
    public async list() {
        const alunos = await prisma.aluno.findMany();
        return alunos;
    }

    // Método para obter um aluno por ID
    public async obterPorId(id: string){
        const aluno = await prisma.aluno.findUnique({
            where: {
                id
            }
        })

        return aluno;
    }

    // Criar novo aluno
    public async criar(dados: CreateAlunoDto) {
        const aluno = await prisma.aluno.create({
            data: dados
        });
        return aluno;
    }
}