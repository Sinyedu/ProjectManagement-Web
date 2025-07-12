"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { fakeLogin } from "@/core/services/auth.service";
import { toast } from "sonner";

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
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = fakeLogin(email, password);
      toast.success(`Welcome back, ${user.name || "user"}!`);
      router.push("/projects");
    } catch (err) {
      toast.error("Invalid email or password");
    }
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
