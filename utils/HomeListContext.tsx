import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Home } from "../types/Home";
enum APIState {
  LOADING,
  SUCCESS,
  ERROR,
}
interface HOMELISTCONTEXT {
  homes: Home[];
  getNextPage: (limit: number) => void;
  state: APIState;
}
export const HomeListContext = createContext<HOMELISTCONTEXT>(
  {} as HOMELISTCONTEXT
);

export const HomeListContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [homes, setHomes] = useState<Home[]>([]);
  const [state, setState] = useState<APIState>(APIState.SUCCESS);

  const getNextPage = async (limit: number) => {
    setState(APIState.LOADING);
    const res = await fetch(`api/homes?limit=${limit}`);
    const { homes } = await res.json();
    setHomes((a) => [...a, ...homes]);
    setState(APIState.SUCCESS);
  };
  useEffect(() => {
    getNextPage(20);
  }, []);

  return (
    <HomeListContext.Provider value={{ homes: homes, getNextPage, state }}>
      {children}
    </HomeListContext.Provider>
  );
};
