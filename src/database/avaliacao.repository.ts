import { handleError } from "../config/error.handler";
import { prisma}  from "../config/prisma.config";
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
}