'use client'
import styles from "./Navbar.module.css";

const Navbar = ({ title, navList }) => {
  const handleClick = (item) => {
    console.log("Clicked ", item);
  };

  return (
    <>
      <div className={styles.navbar}>{title}</div>
      <div>
        {navList.map((item) => (
          <div key={item}>
            <button onClick={() => handleClick(item)}>{item}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
