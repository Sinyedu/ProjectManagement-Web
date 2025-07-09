"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type LoginContextType = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const LoginPageContext = createContext<LoginContextType | undefined>(undefined);

export const LoginPageProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // TODO: login logic here
  };

  return (
    <LoginPageContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
      }}
    >
      {children}
    </LoginPageContext.Provider>
  );
};

export const useLoginPage = (): LoginContextType => {
  const context = useContext(LoginPageContext);
  if (!context) {
    throw new Error("useLoginPage must be used within a LoginPageProvider");
  }
  return context;
};
