import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import crypto from "crypto"

/*
? query: buscar dados

? mutation: criar, alterar ou deletar dados
*/

@Resolver()
export class UserResolver {
  private data: User[] = []

  //* Necessário indicar o tipo de retorno da query. Nesse caso um array de User
  @Query(() => [User])
  async users() {
    return this.data
  }

  @Mutation(() => User)
  async createUser(
    //* Passando argumentos
    @Arg('name') name: string
  ) {
    const user = { id: crypto.randomUUID(), name: name }

    this.data.push(user)

    return user
  }
}