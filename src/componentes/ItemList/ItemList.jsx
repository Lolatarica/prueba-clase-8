// En /components/ItemList/ItemList.jsx
import { Item } from "../Item/Item";
import styles from "./ItemList.module.css";

export function ItemList({ productos }) {
return (
<section className={styles.list}>
{productos.map(prod => (
<Item key={prod.id} {...prod} />
))}
</section>
);
}