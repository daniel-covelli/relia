import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  endUser;
}

export const context: Context = {
  prisma: prisma,
  user: endUserAuth,
};

export const endUserAuth = async (req: express.Request) => {
  try {
    if (req.session.endUserId) {
      const endUser = await prisma.user.findUniqueOrThrow({
        where: { id: req.session.endUserId },
      });
      return { endUser };
    } else {
      return {};
    }
  } catch (err) {
    console.log({ message: "Failed to authorize end user", extra: err });
    return {};
  }
};
