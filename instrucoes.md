Configuração do projeto:

- criar pasta para o projeto na biblioteca da sua máquina
- vincular vscode à pasta
- sem criar arquivos, rodar comando "npm init -y" no terminal
- instalar dependências com o comando "npm i -D typescript td-node-dev"
- criar arquivo tsconfig.json com o comando "npx tsc --init"
- entrar no arquivo tsconfig.json e mudar o target (linha 14) para a versão mais atual
- no tsconfig.json, descomentar linha 29 do rootDir e colocar o caminho "./src"
- no tsconfig.json, descomentar linha 61 do outDir e colocar o caminho "./dist"
- entrar no arquivo package.json e remover a linha 7 do script de teste
- no package.json, adicionar scripts "dev": "ts-node-dev --respawn .src/index.ts"
- criar pasta src na raiz do projeto e o arquivo index.ts dentro da pasta src
- criar arquivo .gitignore na raiz do projeto e dentro mencionar "node_modules"
- subir essa configuração inicial no github
- rodar comando "npm i prisma" no terminal
- rodar comando "npx prisma init" no terminal
- no arquivo .env, colocar as credenciais de acesso do banco de dados (database_url e pulse_api_key)
- criar arquivo .env.example para exemplificar o uso das credenciais, mas removendo os links
- mencionar ".env" no .gitignore
- baixar extensão do prisma (se não tiver)

Criação das tabelas
- utilize model para criar as tabelas no schema, defina os atributos e a tipagem (INT, VARCHAR, DATE, BOOLEAN, etc.)
- defina as contraints (DEFAULT, NOT NULL, UNIQUE, PRIMARY KEY, etc.)

Migrations
- para criar as tabelas no banco de dados, utilize o comando "npx prisma migrate dev --name nomeDaSuaMigracao"

Pronto, liberado para mexer nos schemas!