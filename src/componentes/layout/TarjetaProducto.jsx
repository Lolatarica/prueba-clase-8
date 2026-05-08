import React from 'react';
import styles from './TarjetaProducto.module.css';

export const TarjetaProducto = ({ imagen, nombre, precio }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imagen} alt={`Imagen de ${nombre}`} />
      </div>
      <h2 className={styles.title}>{nombre}</h2>
      <p className={styles.price}>${precio.toLocaleString()}</p>
    </article>
  );
};