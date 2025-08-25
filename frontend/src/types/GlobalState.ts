import { Dispatch, SetStateAction } from "react";

export interface GlobalStateContextType {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}
