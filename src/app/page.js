"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

function page() {
  const checkUser = async () => {
    const res = localStorage.getItem("userToken");
    const user = JSON.parse(res);
    if (user) {
      redirect("/products");
    } else {
      redirect("/login");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return <div>page</div>;
}

export default page;
