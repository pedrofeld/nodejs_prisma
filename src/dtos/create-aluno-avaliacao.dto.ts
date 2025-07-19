import { CreateAlunoDto } from "./create-aluno.dto";

export interface CreateAlunoEAvaliacaoDto extends CreateAlunoDto {
    avaliacao: {
        disciplina: string;
        nota: number;
        dataAvaliacao?: Date;
    }
}