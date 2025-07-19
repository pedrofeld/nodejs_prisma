import { handleError } from "../config/error.handler";
import { prisma } from "../config/prisma.config";
import { CreateAlunoDto } from "../dtos/create-aluno.dto";
import { UpdateAlunoDto } from "../dtos/update-aluno.dto";

export class AlunoRepository {
    // Método para listar todos os alunos
    public async list() {
        try {
            const alunos = await prisma.aluno.findMany({
                where: {
                    // dataNascimento: {
                    //     gte: new Date("1995-01-29")
                    // }
                },
                select: {
                    id: true,
                    email: true,
                    nome: true,
                    dataNascimento: true
                },
                orderBy: [ // {dataNascimento: "desc"}
                    // se houver "empate" no critério de ordenação:
                    {
                        nome: "asc"
                    },
                    {
                        id: "asc"
                    }
                ],
                //_count: true
            });
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
                },
                include: {
                    avaliacoes: true,
                    matriculas: {
                        include: {
                            curso: true
                        }
                    }
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

    // Atualizar aluno
    public async atualizar(id: string, dados: UpdateAlunoDto){
        try {
            const aluno = await prisma.aluno.update({
                where: {
                    id
                },
                data: {
                    nome: dados.nome
                }
            });
            return aluno;
        } catch (error: any) {
            return handleError(error);
        }
    }

    // Excluir aluno
    public async excluir(id: string) {
        try {
            const alunoExcluido = await prisma.aluno.delete({
                where: {
                    id
                }
            });
            return alunoExcluido;
        } catch (error: any) {
            return handleError(error);
        }
    }

    // Queries
    public async pesquisaEspecifica() {
        try {
            const alunos = await prisma.aluno.findMany({
                where: {
                    nome: {
                        contains: "pedro",
                        mode: "insensitive" // torna irrelevante a diferença entre letra maiúsculas e minúsculas
                    },
                    // rg: 123456789
                },
                // take: 5, // limita a quantidade de alunos que o sistema deve retornar
                /*
                    select: { // informa os campos que o sistema deve retornar
                        id: true,
                        nome: true
                    }
                */

                // Faz o sistema trazer todos os usuários de um tipo OU do outro
                /*
                    where: {
                        OR:
                        [
                            {
                                nome: {
                                    constains: "pedro",
                                    mode: "insensitive",
                                    rg: null
                                }
                            },
                            {
                                email: {
                                    endsWith: "@gmail.com"
                                }
                            }
                        ]
                    }
                */
            })
            return alunos;
        } catch (error: any) {
            return handleError(error);
        }
    }
}