import { NextFunction, Request, Response } from "express";
import createDataToSaveDb from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createDataToSaveDb();
  res.status(200).json({
    status: "success",
    data: user,
  });
};
