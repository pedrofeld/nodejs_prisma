import { handleError } from "../config/error.handler";
import { prisma}  from "../config/prisma.config";
import { CreateAlunoEAvaliacaoDto } from "../dtos/create-aluno-avaliacao.dto";
import { CreateAvaliacaoDto } from "../dtos/create-avaliacao.dto"; 
import { AlunoRepository } from "./aluno.repository";

export class AvaliacaoRepository {
    public async criar(dados: CreateAvaliacaoDto) {
        try {
            const alunoRepository = new AlunoRepository();
            const aluno = await alunoRepository.obterPorId(dados.idAluno);
            if (!aluno){
                console.log("Erro! O aluno não existe!")
                return null;
            }

            const avaliacao = await prisma.avaliacao.create({
                data: dados
            });

            return avaliacao;
        } catch (error: any) {
            return handleError(error);
        }
    }

    public async listar(){
        try {
            const avaliacoes = await prisma.avaliacao.findMany({
                // traz todas as inforamções do aluno junto na consulta de avaliações
                /*
                    include: {
                        aluno: true
                    }
                */

                // traz somente o nome e o email do aluno na consulta de avaliações
                include: {
                    aluno: {
                        select: {
                            nome: true,
                            email: true
                        }
                    }
                }
            });
            return avaliacoes;
        } catch (error: any) {
            return handleError(error);
        }
    }

    public async criarAlunoEAvaliacao(dados: CreateAlunoEAvaliacaoDto){
        try {
            await prisma.$transaction(async (tx) => {
                const aluno = await tx.aluno.create({
                    data: {
                        email: dados.email,
                        nome: dados.nome,
                        rg: dados.rg,
                        dataNascimento: dados.dataNascimento
                    }
                });

                console.log("Aluno criado com sucesso")

                await tx.avaliacao.create({
                    data: {
                        ...dados.avaliacao,
                        idAluno: aluno.id
                    }
                });

                console.log("Avaliação criada com sucesso")
            })
        } catch (error: any) {
            return handleError(error);
        }
    }
}