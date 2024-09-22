
## Back-end

O back-end foi construído em Node.js, utilizando o framework Express para gerenciar as rotas e a lógica da API. Além disso, outras dependências foram instaladas para facilitar o gerenciamento de banco de dados, autenticação e outras funcionalidades.

### Dependências do Back-end

- **express**: Framework web minimalista e flexível para Node.js, usado para criar a API REST e gerenciar rotas.
  ```bash
  npm install express

mongoose: ODM (Object Data Modeling) para MongoDB, utilizado para gerenciar interações entre o back-end e o banco de dados MongoDB.

npm install mongoose

multer: Middleware para o upload de arquivos, essencial para a funcionalidade de upload de imagens no painel de controle.

npm install multer

nodemailer: Ferramenta para enviar e-mails diretamente a partir do Node.js, usada para a funcionalidade de envio de e-mails no projeto.

npm install nodemailer

jsonwebtoken: Biblioteca para gerar e verificar tokens JWT (JSON Web Tokens), usada para autenticação no sistema de login.

npm install jsonwebtoken

dotenv: Biblioteca que carrega variáveis de ambiente de um arquivo .env, facilitando a configuração de variáveis sensíveis como chaves de API e strings de conexão de banco de dados.

npm install dotenv


Dependências de Desenvolvimento


nodemon: Ferramenta de desenvolvimento que reinicia automaticamente o servidor Node.js sempre que há mudanças nos arquivos, melhorando a eficiência no desenvolvimento.

npm install --save-dev nodemon


Scripts
O arquivo package.json contém o script para iniciar o servidor back-end:

json
Copy code
"scripts": {
  "start": "nodemon server.js"
}


Como rodar o back-end


Navegue até o diretório backend:

cd backend

Instale as dependências:

npm install

Inicie o servidor:

npm start



Front-end
O front-end foi construído usando React, um framework JavaScript popular para construção de interfaces de usuário. Algumas bibliotecas adicionais foram instaladas para melhorar a funcionalidade da aplicação.

Dependências do Front-end
axios: Biblioteca utilizada para fazer requisições HTTP, útil para interagir com a API do back-end.

npm install axios

react-router-dom: Biblioteca usada para gerenciar as rotas no React, permitindo a navegação entre diferentes páginas no front-end.

npm install react-router-dom

Como rodar o front-end


Navegue até o diretório frontend:

cd frontend

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm start