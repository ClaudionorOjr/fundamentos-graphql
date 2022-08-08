import "reflect-metadata"

import path from 'path';
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql';
import { UserResolver } from "./src/resolvers/UserResolver";

async function main() {
  const schema = await buildSchema({
    //* Resolvers são como os controllers/rotas no GraphQL
    resolvers: [
      UserResolver
    ],
    //* indica onde salvar o arquivo de schema do GraphQL
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema
  })

  //* Para ter acesso a url gerada
  const { url } = await server.listen()

  console.log(`Server running on ${url}`)
}

main()