"use client";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/lib/slices/cartSlice";

function page() {
  // const params = useParams;
  // const id = params.id
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [singleProduct, setSingleProduct] = useState(null);
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => resp.json())
      .then((res) => setSingleProduct(res));
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(singleProduct));
  };

  if (singleProduct === null) return <div>პროდუქტი იტვირთება...</div>;
  return (
    <div className={styles.productContainer}>
      <Image
        src={singleProduct.image}
        width={100}
        height={80}
        objectFit="contain"
        alt="random"
      />
      <h3>{singleProduct.title}</h3>
      <p>{singleProduct.description}</p>
      <button onClick={handleAddToCart}>add to cart</button>

      {/* {user.subscribed ? (
        <button onClick={handleAddToCart}>add to cart</button>
      ) : (
        <Link href={"/login"}>
          <button>Log In</button>
        </Link>
      )} */}
    </div>
  );
}

export default page;
