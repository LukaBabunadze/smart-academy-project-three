"use client";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
function page() {
  // const params = useParams;
  // const id = params.id
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => resp.json())
      .then((res) => setSingleProduct(res));
  }, []);

  if (singleProduct === null) return <div>პროდუქტი იტვირთება...</div>;
  return <div className={styles.productContainer}>{singleProduct.title}</div>;
}

export default page;
