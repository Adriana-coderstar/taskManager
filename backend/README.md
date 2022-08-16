### TaskManager

Aplicação TaskManager é um gerenciador de tarefas, onde ao efetuar o login pode-se criar suas tarefas, edita-las, finaliza-las e remover.

Desenvolvida com arquiterura __MSC__ (Camada de Controller e Service), __Restful__ para manipulação e leitura das tarefas utilizando operações __CRUD__ utilizando banco de dados __Postgres__ mapeando com ORM __Prisma__.

<details>
  <summary>
    <strong> Rodar aplicação local </strong>
  </summary><br>

  1. Instale as dependências backend
      - `cd backend`
      - `npm install`
  
  2. Configure o .env com seus dados exemplo:
      - DATABASE_URL=postgresql://`janedoe`:`mypassword`@`host`:5432/mydb?schema=public?connect_timeout=300
  
  3. Rodar docker-compose do banco de dados:
      - `docker-compose up`

  4. Rodar aplicação, ao rodar esse comando automaticamente configura o Prisma e roda as migratios conforme o script no package.json:
      - `npm start`
</details>


<details>
  <summary>
    <strong> Criar usuário </strong>
  </summary><br>
  
  1 - Método de requisição: POST

  2 - Rota `/register` o endpoint deve receber a seguinte estrutura:

```json
 {
   "email": "email@gmail.com",
   "password": "123456"
 }
```

  3 - Resposta da requisição:
```json
 {
   "id": 1,
    "email": "email@gmail.com",
    "password": "e10adc3949ba59abbe56e057f20f883e"
 }
```
</details>


<details>
  <summary>
    <strong> Fazer login </strong>
  </summary><br>

  1- Métodos de requisição: Post

  2 - Rota `/login` o endpoint deve receber a seguinte estrutura:

```json
{
  "email": "email@gmail.com",
  "password": "123456"
}
```

  3 - Resposta da requisição:
```json
 {
   "id": 1,
    "email": "email@gmail.com",
    "password": "e10adc3949ba59abbe56e057f20f883e",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMiIsImVtYWlsIjoiZW1haWxAZ21haWwuY29tIn0sImlhdCI6MTY2MDU5MDYxMywiZXhwIjoxNjYwODQ5ODEzfQ.bqjxBwlCv4Wnm322drMZ34y2BdxKbJ-KlEu9UXcYGY8"
 }
```
</details>

<details>
  <summary>
    <strong> Criar tarefa </strong>
  </summary><br>

  1 - Métodos de requisição: Post

  2 - :mag_right: Observação: Nessa requisição é necessário informar o token para autenticação. Verifique na ferramenta que utiliza em qual campo poderá colocar o token gerado na etapa de `Fazer Login`.

  3 - Rota `/task/:id` o endpoint deve receber a seguinte estrutura:

```json
  {
    "task": "Estudar",
    "status": "Concluido",
   },
 ```
 
  4 - Resposta da requisição:

```json
 {
   "id": 1,
    "task": "Estudar",
    "status": "Concluido",
    "userId": 1
 }
```

</details>

<details>
  <summary>
    <strong> Listar todas as tarefas criadas </strong>
  </summary><br>

  1- Métodos de requisição: Get

  2 - :mag_right: Observação:  Necessário informar o token para autenticação. Verifique na ferramenta que utiliza em qual campo poderá colocar o token gerado na etapa de `Fazer Login`.

  3 - Rota `/task/:id` clicar em buscar a requisição
 
  4 - Resposta da requisição:

```json
 [
    {
        "id": 1,
        "task": "Estudar",
        "status": "Concluido",
        "userId": 1
    },
    {
        "id": 2,
        "task": "Ler Livros",
        "status": "Pendente",
        "userId": 1
    }
]
```
</details>

 
<details>
  <summary>
    <strong> Atualizar uma tarefa </strong>
  </summary><br>

  1- Métodos de requisição: Put

  2 - :mag_right: Observação:  Necessário informar o token para autenticação. Verifique na ferramenta que utiliza em qual campo poderá colocar o token gerado na etapa de `Fazer Login`.

  3 - Rota `/task` o endpoint deve receber a seguinte estrutura:

  ```json
   {
    "id": 1,
    "task": "Ir a academia",
    "status": "Andamento",
   },
 ```

 
  4 - Resposta da requisição:

```json
  {
      "id": 1,
      "task": "Ir a academia",
      "status": "Andamento",
      "userId": 1
  }
```
</details>


<details>
  <summary>
    <strong> Deletar uma tarefa </strong>
  </summary><br>

  1- Métodos de requisição: Del

  2 - :mag_right: Observação:  Necessário informar o token para autenticação. Verifique na ferramenta que utiliza em qual campo poderá colocar o token gerado na etapa de `Fazer Login`.

  3 - Rota `/task/:id`, onde refere-se ao id da tarefa e o endpoint deve receber a seguinte estrutura:

  ```json
  {
    "id": 1,
   },
 ```

  4 - Resposta da requisição:

```json
  {
    "message": "Task deleted"
  }
```
</details>






