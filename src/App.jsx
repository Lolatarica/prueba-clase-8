import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './componentes/layout/Layout';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import ProductoDetalle from './componentes/Productos/ProductoDetalle';
import Cart from './componentes/Cart/Cart';

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<ItemListContainer Mensaje="Productos destacados" />} />
				<Route path="/productos" element={<ItemListContainer Mensaje="Catalogo" />} />
				<Route path="/producto/:id" element={<ProductoDetalle />} />
				<Route path="/carrito" element={<Cart />} />
			</Route>
		</Routes>
	);
}
export default App;