import { createContext, Dispatch, SetStateAction } from "react";

interface SignupCreatedFlagContextType {
  showToastMsg: string | null;
  setShowToastMsg: Dispatch<SetStateAction<string | null>>;
}

export const SignupCreatedFlagContext =
  createContext<SignupCreatedFlagContextType | null>(null);
