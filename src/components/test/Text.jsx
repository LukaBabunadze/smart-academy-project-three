"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";
import Button from "../button/Button";

const Text = () => {
  const [number, setNumber] = useState(10);
  const [input, setInput] = useState("");
  const [products, setProducts] = useState(null);

  //useEffect hook for fetching products - 20
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  const handlePlus = () => {
    setNumber(number + 1);
    return number;
  };
  const handleMinus = () => {
    setNumber(number - 1);
    return number;
  };

  //condition rendering - 1
  if (products === null) {
    return <div>products are fetching</div>;
  }

  return (
    <div>
      my number is {number}
      <Button title={"plus 1"} handleClick={handlePlus} />
      <Button title={"minus 1"} handleClick={handleMinus} />
      <br />
      <br />
      ჩემი ინფუთი: {input}
      <br />
      <input
        type="text"
        placeholder="username"
        onChange={(event) => setInput(event.target.value)}
      />
      {products?.map((item) => (
        <div className={styles.itemWrapper} key={item.id}>
          <Image
            src={item.image}
            width={100}
            height={80}
            objectFit="contain"
            alt="random"
          />
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Text;

//   useEffect(() => {
//     if (input.length > 5) {
//       console.log("ინფუთის სიგრძე მეტია 5-ზე");
//     } else {
//       console.log("ინფუთის სიგრძე არის: ", input.length);
//     }
//   }, [number]);

//   useEffect(() => {
//     if (input.length > 5) {
//       console.log("ინფუთის სიგრძე მეტია 5-ზე");
//     } else {
//       console.log("ინფუთის სიგრძე არის: ", input.length);
//     }
//   }, [input, number]);
