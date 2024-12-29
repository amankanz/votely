import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return <div>{children}</div>;
}

export default Main;
