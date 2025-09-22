import { Request, Response, NextFunction } from "express";
import UnauthorizedError from "../../domain/errors/unauthorized-error";
import { getAuth } from "@clerk/express";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  
  const auth = getAuth(req);

  if (!auth || !auth.userId) {
    throw new UnauthorizedError("Unauthorized");
  }

  console.log(auth); // contains userId, sessionId, etc.
  next();
};

export default isAuthenticated;