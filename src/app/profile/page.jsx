import LogoutButton from "@/components/logoutButton/LogoutButton";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const page = async () => {
  const resp = await fetch("https://fakestoreapi.com/users/3", {
    cache: "no-store",
  });
  const user = await resp.json();

  return (
    <div className={styles.container}>
      {user.email}
      <br />
      <LogoutButton />
    </div>
  );
};

export default page;
