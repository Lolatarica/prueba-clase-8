import prod1 from '../assets/ProdImg/prod_1.webp';
import prod2 from '../assets/ProdImg/prod_2.webp';
import prod3 from '../assets/ProdImg/prod_3.webp';

export const productos = [
  {
    id: '1234',
    imagen: prod1,
    nombre: 'Tabla Santa Cruz Classic',
    precio: 12000,
    stock: 15,
    categoria: 'Tablas',
    destacado: true,
    descripcion: 'Tabla de maple de 7 capas con shape clasico para street y transiciones.'
  },
  {
    id: '2344',
    imagen: prod2,
    nombre: 'Ruedas Spitfire F4',
    precio: 45000,
    stock: 25,
    categoria: 'Ruedas',
    destacado: true,
    descripcion: 'Ruedas Formula Four de alta resistencia y agarre para sesion intensa.'
  },
  {
    id: '2545',
    imagen: prod3,
    nombre: 'Trucks Independent 149',
    precio: 65000,
    stock: 50,
    categoria: 'Trucks',
    destacado: false,
    descripcion: 'Trucks livianos de eje solido para mayor control y estabilidad en maniobras.'
  }
];

export const productosDestacados = productos.filter((producto) => producto.destacado);
