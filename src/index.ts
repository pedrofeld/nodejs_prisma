import { PrismaClient } from "./generated/prisma";

const db = new PrismaClient();

async function main() {
    const alunos = await db.aluno.findMany();
    console.log(alunos);
}

main();