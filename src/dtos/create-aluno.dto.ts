export interface CreateAlunoDto {
    nome: string;
    email: string;
    dataNascimento?: Date;
    formado?: boolean;
    rg?: number;
}