//TODO Create an auth service that handles user authentication, including login, logout, and session management.
import { dummyUsers } from "@/core/data/dummyUsers";
import { AuthError } from "@/core/errors/authError";

export function fakeLogin(email: string, password: string) {
  const user = dummyUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new AuthError("Invalid email or password");
  }

  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}
