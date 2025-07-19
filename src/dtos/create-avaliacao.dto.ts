export interface CreateAvaliacaoDto {
    disciplina: string;
    nota: number;
    idAluno: string;
    dataAvaliacao?: Date;
}