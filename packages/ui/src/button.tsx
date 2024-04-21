"use client";

import { ReactNode } from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const TestButton = ({ children, className, appName }: ButtonProps) => {
  return (
    // <button
    //   className={className}
    //   onClick={() => alert(`Hello from your ${appName} app!`)}
    // >
    //   {children}
    // </button>
    <Button
      variant="contained"
      color="primary"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </Button>
  );
};
