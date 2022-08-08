# Fundamentos do GraphQL na prática (Node.js + React)
Conteúdo do [Decode #019](https://www.youtube.com/watch?v=6SZOPKs9SUg) do canal da Rocketseat.

## GraphQL
> Linguagem para realização de querys.  

É uma forma de realizar operações de escritura e leitura. Assim como o padrão REST Full, é um conjunto de padrões para comunicação entre front-end com o back-end.  

**Quais problemas GraphQL resolve?**
  - Overfetching (realizar buscas a mais)
    - `http://localhost:3000/users`
      - Busca no DB todos os usuários, mas retorna também os endereços.  

  - Underfetching (realizar buscas de menos)
    - `http://localhost:3000/users`
      - Busca no DB todos os usuários, mas precisa retornar também os endereços, sendo necessário realizar outra busca.
    - `http://localhost:3000/addresses`

Com o GraphQL o front-end é quem diz ao back-end quais os dados ele precisa, ao invés do back-end determinar o que é retornado.     
> Em uma chamada HTTP é possível buscar todos os dados que forem necessários do back-end.

**! Trabalha com uma rota única:** `http://localhost:3000/graphql` -> Exemplo de chamada HTTP com GraphQL.

```gql
#Exemplo de busca com GraphQL
query {
  users {
    id
    name
    github

    addresses {
      city
      state
      country
    }
  }
}
```

**Dificuldades:**
  - Cache  
  Os browsers já estão padronizados para fazer cache automático das requisições. Já com GraphQL, por possuir uma única rota na aplicação, como determinar o cache das requisições.

  - Errors  
  É mais difícil identificar os tipos de erros com GraphQL pois todas as chamadas retornam um código 200 (sucesso).
---
## Projeto
### Depedências backend
`npm install`:  
- `graphql`  
- `type-graphql` // Ferramenta para criação de API's em GraphQL com Node.js utilizando Typescript.  
- `apollo-server`
- `class-validator`
- `reflect-metadata`
- `typescript @types/node ts-node-dev -D`

### Alterações backend
Arquivo `tsconfig.json`:
```json
"compilerOptions": {
  "target": "es2018", 
  "lib": ["ES2018", "ESNext.AsyncIterable"],
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
}
```

### Dependências frontend
`npm install`:
- `@apollo/client`
- `graphql`