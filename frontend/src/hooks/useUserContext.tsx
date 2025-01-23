import UserContext from "@/context/user.context";
import { useContext } from "react";

const useUserContext = () => {
  return useContext(UserContext);
};

export default useUserContext;
