import { handleError } from "../config/error.handler";
import { prisma } from "../config/prisma.config";
import { CreateAlunoDto } from "../dtos/create-aluno.dto";

export class AlunoRepository {
    // Método para listar todos os alunos
    public async list() {
        try {
            const alunos = await prisma.aluno.findMany();
        return alunos;
        } catch (error) {
            return handleError(error);
        }
    }

    // Método para obter um aluno por ID
    public async obterPorId(id: string){
        try {
            const aluno = await prisma.aluno.findUnique({
                where: {
                    id
                }
            })
            return aluno;
        } catch (error: any) {
            return handleError(error);
        }
    }

    // Criar novo aluno
    public async criar(dados: CreateAlunoDto) {
        try {
            const aluno = await prisma.aluno.create({
                data: dados
            });
            return aluno;
        } catch (error: any) {
            return handleError(error);
        }
    }
}