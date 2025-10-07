import { jwtDecode } from "jwt-decode";

type TVerifyUser = {
  _id: string;
  email: string;
  name: string;
};

export const verifyToken = (token: string) => {
  const user = jwtDecode(token) as TVerifyUser;
  return user;
};
