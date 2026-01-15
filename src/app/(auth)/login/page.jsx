"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import Link from "next/link";
function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("m38rmF$");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length === 0) {
      return setSubmitError("გთხოვთ შეიყვანოთ სახელი სრულად");
    }

    if (password.length < 4) {
      return setSubmitError("გთხოვთ შეიყვანოთ პაროლი სრულად");
    }
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      if (result?.token) {
        redirect("/");
      }
    } catch (error) {
      setSubmitError("მოხდა შეცდომა");
      console.error(error);
    }
  };

  return (
    <div className={styles.main}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h3 className={styles.signin}>Sign In</h3>
        <p className={styles.desc}>please sign in to access market.</p>
        <input
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
          className={styles.input}
        />
        <input
          placeholder="password"
          type={passwordVisible ? "text" : "password"}
          onChange={(event) => setPassword(event.target.value)}
          className={styles.input}
          value={"m38rmF$"}
        />
        <button
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          see password
        </button>
        <button type="submit" className={styles.button}>
          Log In
        </button>
        {submitError && <div>{submitError}</div>}
        <Link href={"/register"}>
          <button className={styles.notRegistered}>
            Don't have an account? Register
          </button>
        </Link>
      </form>
    </div>
  );
}

export default page;
