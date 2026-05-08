import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

export function ItemListContainer({ Mensaje }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{Mensaje}</h2>
      <div className={styles.content}>
        <ItemList productos={products} />
      </div>
    </section>
  );
}