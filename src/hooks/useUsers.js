import { useUsersContext } from "../contexts/UsersContext";

export const useUsers = () => {
  const usersLib = useUsersContext();
  return usersLib;
};
