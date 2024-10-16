import { File } from "@prisma/client";
import { db } from "../database/db";
import { ErrorModel } from "../error/error";

export const create = async (
  data: Omit<File, "id" | "createdAt">
): Promise<ErrorModel> => {
  try {
    const file = await db.file.create({ data });
    return { data: file };
  } catch (error) {
    return { error: [error] };
  }
};
