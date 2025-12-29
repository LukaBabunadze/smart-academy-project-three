"use client";
import CartItem from "@/components/cartItem/CartItem";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

function page() {
  const [cartData, setCartData] = useState(null);

  const fetchCartData = async () => {
    const response = await fetch("https://fakestoreapi.com/carts/1");
    const result = await response.json();
    return setCartData(result.products);
  };

  
  useEffect(() => {
    fetchCartData();
  }, []);

  if (!cartData) return <div>loading...</div>;

  return (
    <main className={styles.main}>
      {cartData?.map((item) => (
        <CartItem
          key={item.productId}
          item={item}
          cartData={cartData}
          setCartData={setCartData}
        />
      ))}
    </main>
  );
}

export default page;
