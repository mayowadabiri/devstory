// @ts-nocheck
import jwt from "jsonwebtoken";
import { publicKey } from "../constants/pbk";

export const verifyToken = async (token) => {
  try {
    const isMatch = await jwt.verify(token, publicKey, {
      algorithms: "RS256",
    });
    return isMatch;
  } catch (error) {
    console.log(error);
    return false;
  }
};
