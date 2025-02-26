import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";


const useGlobalVariables = () => {
  return useContext(GlobalContext);
};

export { useGlobalVariables};
