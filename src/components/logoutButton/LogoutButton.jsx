'use client'
import { redirect } from "next/navigation";
import React from "react";

function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    redirect("/login");
  };
  return <button onClick={handleLogout}>Log Out</button>;
}

export default LogoutButton;
