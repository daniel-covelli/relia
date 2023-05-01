import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../wire/User";
import { CurrentUser, UserContext } from "../context";
import prisma from "../lib/prisma";
import Cryptography from "../lib/crypto";

@Resolver()
export default class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { req }: UserContext
  ): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email,
        password: await Cryptography.hash(password),
      },
    });

    req.session.userId = user.id;

    return user;
  }

  @Authorized()
  @Query(() => User)
  async user(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
