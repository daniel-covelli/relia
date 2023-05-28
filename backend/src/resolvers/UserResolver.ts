import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../wire/User";
import { CurrentUser, UserContext } from "../context";
import prisma from "../lib/prisma";
import Cryptography from "../lib/crypto";
import { InvalidCredentialsError } from "../lib/errors";

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
        email: email.toLowerCase(),
        password: await Cryptography.hash(password),
      },
    });

    req.session.userId = user.id;

    return user;
  }

  @Mutation(() => User)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { req }: UserContext
  ): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (!user?.password) {
      throw new InvalidCredentialsError();
    }

    if (!(await Cryptography.compare(password, user.password))) {
      throw new InvalidCredentialsError();
    }

    req.session.userId = user.id;

    return user;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req }: UserContext): Promise<boolean> {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          reject(err);
        }

        resolve(true);
      });
    });
  }

  @Authorized()
  @Query(() => User)
  async user(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
