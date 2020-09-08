import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../../../../config/AuthConfig';
import AppError from '../../../../errors/AppError';

interface IPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function JWTAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT is missing', 401);
  }
  const [, token] = authHeader.split(' ');
  try {
    const decoded = verify(token, authConfig.jwt.secret);
    const { sub } = decoded as IPayload;
    request.user = { id: sub };
    next();
  } catch {
    throw new AppError('Invalid JWT', 401);
  }
}