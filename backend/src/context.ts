import { PrismaClient, User } from "@prisma/client";
import express from "express";
import { AuthChecker, createParamDecorator } from "type-graphql";

const prisma = new PrismaClient();

export type UserContext = {
  req: express.Request;
  endUser?: User;
};

export const CurrentUser = () => {
  return createParamDecorator<UserContext>(({ context }) => context.endUser);
};

export const userAuthChecker: AuthChecker<UserContext> = ({ context }) => {
  return !!context.endUser;
};

export const userAuth = async (req: express.Request) => {
  try {
    if (req.session.userId) {
      const endUser = await prisma.user.findUniqueOrThrow({
        where: { id: req.session.userId },
      });
      return { endUser };
    } else {
      return {};
    }
  } catch (err) {
    console.log("Failed to authorize end user", err);
    return {};
  }
};
