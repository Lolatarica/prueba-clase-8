import { Link, useParams } from 'react-router-dom';
import { productos } from '../../data/productos.js';
import styles from './ProductoDetalle.module.css';

function ProductoDetalle() {
  const { id } = useParams();
  const producto = productos.find((item) => item.id === id);

  if (!producto) {
    return (
      <section className={styles.notFound}>
        <h2>Producto no encontrado</h2>
        <p>No pudimos encontrar el producto solicitado.</p>
        <Link to="/productos">Volver al catalogo</Link>
      </section>
    );
  }

  return (
    <section className={styles.wrapper}>
      <article className={styles.card}>
        <div className={styles.media}>
          <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
        </div>
        <div className={styles.info}>
          <p className={styles.badge}>{producto.categoria}</p>
          <h2>{producto.nombre}</h2>
          <p className={styles.description}>{producto.descripcion}</p>
          <p className={styles.price}>${producto.precio.toLocaleString()}</p>
          <p className={styles.stock}>Stock disponible: {producto.stock}</p>

          <div className={styles.actions}>
            <Link to="/productos">Seguir comprando</Link>
            <button type="button">Agregar al carrito</button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProductoDetalle;