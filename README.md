# Dependencias

Sempre qeu você instalar uma library com o -D no final exemplo: <code>npm i typescript -d</code> isso significa
que ela só vai ser usada em modo de desenvolvimento e não em produção.

# Tipos de dependência que usamos no projeto

@types/node -> Ela nós ajuda para o node conseguir tipar funções globais como process entre outras
tsx -> Server para poder compilar nosso projeto em tempo de desenvolvimento typescript

@Prisma -> Dependência para conexão com banco de dados, ele ajuda a criar tabelas e fazer integrações
com diferentes tipos de bancos de dados sem precisar lidar com o algumas especificações de banco.
npx prisma init --datasource-provider MySql

# NPX

Npx é uma forma de executar binários que a gente tem dentro das nossas dependências que foram instaladas no projeto
exemplo: <code> npx tsc --init </code> -> você pode verificar esse arquivo tsc dentro de node_modules/.bin/
