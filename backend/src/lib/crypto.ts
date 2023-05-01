import * as bcrypt from "bcrypt";

export default class Cryptography {
  public static async hash(password: string): Promise<string> {
    return bcrypt.hash(
      password,
      process.env.NODE_ENV === "production" ? 10 : 1
    );
  }

  public static async compare(
    plainText: string,
    hash: string
  ): Promise<boolean> {
    return bcrypt.compare(plainText, hash);
  }
}
