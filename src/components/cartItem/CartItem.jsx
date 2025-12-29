"use client";
import { useEffect, useState } from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item, cartData, setCartData }) => {
  const [cartProduct, setCartProduct] = useState(null);

  const fetchCartProduct = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${item.productId}`
    );
    const result = await response.json();
    return setCartProduct(result);
  };

  useEffect(() => {
    fetchCartProduct();
  }, []);

  const handleDeleteProduct = async (id) => {
    const resposne = await fetch("https://fakestoreapi.com/carts/1", {
      method: "DELETE",
    });
    const result = await resposne.json();
    if (result?.date) {
      setCartData(cartData.filter((item) => item.productId !== id));
    }
  };

  if (!cartProduct) return <div>loading...</div>;

  return (
    <div className={styles.itemContainer}>
      პროდუქტის დასახელება: {cartProduct.title}
      რაოდენობა: {item.quantity}
      <button onClick={() => handleDeleteProduct(cartProduct.id)}>წაშლა</button>
    </div>
  );
};

export default CartItem;
