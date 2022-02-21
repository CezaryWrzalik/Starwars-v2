import { hash, compare } from "bcryptjs";

export const hashPassword = (password: string) => {
  const hashedPassword = hash(password, 12);

  return hashedPassword;
};

export const verifyPassword = (password: string, hashedPassword: string) => {
  const isValid = compare(password, hashedPassword);

  return isValid;
};
