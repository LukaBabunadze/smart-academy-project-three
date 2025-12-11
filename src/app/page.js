import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      Hello from Next.js
      <Footer />
    </div>
  );
}
