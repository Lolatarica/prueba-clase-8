import styles from './Header.module.css';
import { Link } from 'react-router-dom'; // 1. Importamos Link
// 1. Importamos nuestro custom Hook
import { useCart } from '../../context/CartContext';
function Header() {
// 2. Usamos el hook para acceder a la función
const { getCartQuantity } = useCart();
const totalItems = getCartQuantity();
return (
<header className={styles.header}>
<nav>
<ul>
<li><Link to="/">Inicio</Link></li>
<li><Link to="/productos">Productos</Link></li>
<li><Link to="/destacados">Destacados</Link></li>
<li><Link to="/alta">Alta de Productos</Link></li>
<li><Link to="/carrito">Carrito 🛒 {totalItems > 0 &&
<span>{totalItems}</span>}</Link></li>
</ul>
</nav>
</header>
);
};
export default Header;