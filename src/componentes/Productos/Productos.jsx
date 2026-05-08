import { Link } from 'react-router-dom';
import { TarjetaProducto } from '../layout/TarjetaProducto';
import { productosDestacados } from '../../data/productos.js';
import styles from './Productos.module.css';

function Productos({ Mensaje }) {
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>{Mensaje}</h2>
			<div className={styles.content}>
				<section className={styles.list}>
					{productosDestacados.map((producto) => (
						<Link
							key={producto.id}
							to={`/producto/${producto.id}`}
							style={{ textDecoration: 'none' }}
						>
							<TarjetaProducto
								imagen={producto.imagen}
								nombre={producto.nombre}
								precio={producto.precio}
							/>
						</Link>
					))}
				</section>
			</div>
		</section>
	);
}

export default Productos;
