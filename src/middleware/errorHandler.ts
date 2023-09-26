import { Request, Response, NextFunction } from "express";
import { constants } from "../helper/constants";

export const errorHandler: any = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(statusCode);
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.send({
        title: "Validation error",
        message: err.message,
        stacktrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.send({
        title: "Not found",
        message: err.message,
        stacktrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.send({
        title: "Forbidden",
        message: err.message,
        stacktrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.send({
        title: "Server error",
        message: err.message,
        stacktrace: err.stack,
      });
      break;
    default:
      console.log("No error, All good!");
      next();
      break;
  }
};
