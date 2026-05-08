import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { useState } from 'react';
export function Item({ id, nombre, precio, stock, imagen }) {
// Creamos el objeto producto a partir de las props
const producto = { id, nombre, precio, stock, imagen };
const [cantidad, setCantidad] = useState(0);
//Mantenemos la funcinón incrementar, decrementar y la lógica de “favorito”
// Lógica del Carrito
const { addToCart } = useCart(); // Traemos la función del contexto

const handleIncrement = () => {
if (cantidad < stock) {
setCantidad(cantidad + 1);
}
};

const handleDecrement = () => {
if (cantidad > 0) {
setCantidad(cantidad - 1);
}
};

const handleAddToCart = () => {
if (cantidad > 0) {
addToCart(producto, cantidad);
alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
setCantidad(0);
}
};
return (
<div className="card-producto">
<img src={producto.imagen} alt={producto.nombre} width={100}
height={100} />
<h3>{producto.nombre}</h3>
<p>${producto.precio}</p>
{/* Incorporamos el detalle del stock */}
<p>Stock disponible: {stock}</p>
<Link to={`/producto/${producto.id}`}>Ver detalle</Link>
{/* Controles de cantidad */}
<div>
<button onClick={handleDecrement} disabled={cantidad === 0}>-</button>
<span>{cantidad}</span>
<button onClick={handleIncrement} disabled={cantidad === stock}>+</button>
</div>
{/* Mantenemos el favorito y los botones como estaban*/}
<button onClick={handleAddToCart} disabled={cantidad === 0}>
Agregar {cantidad} al carrito
</button>
</div>
);
}
export default Item;