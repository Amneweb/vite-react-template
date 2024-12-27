import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();
let carritoEnStorage;
let enStorage = JSON.parse(localStorage.getItem("carrito")) || {};

if (enStorage && Date.now() > enStorage.cartExpires) {
  localStorage.setItem(
    "carrito",
    JSON.stringify({
      cartContent: [],
      cartExpires: null,
    })
  );
  carritoEnStorage = JSON.parse(localStorage.getItem("carrito"));
} else {
  carritoEnStorage = enStorage;
}

const cartContent = carritoEnStorage.cartContent
  ? carritoEnStorage.cartContent
  : null;
const cartExpira = carritoEnStorage.cartExpires
  ? carritoEnStorage.cartExpires
  : null;

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(cartContent);
  const [expira, setExpira] = useState(cartExpira);
  const alCarrito = (item, contador) => {
    const productoAgregado = { item, contador };

    const nuevoCarrito = [...carrito];

    const consultaRepetido = nuevoCarrito.find(
      (producto) => producto.item.sku === productoAgregado.item.sku
    );

    if (consultaRepetido) {
      if (consultaRepetido.contador + contador <= consultaRepetido.item.stock) {
        consultaRepetido.contador += contador;
      }
    } else {
      nuevoCarrito.push(productoAgregado);
    }
    setCarrito(nuevoCarrito);
    if (expira === null) {
      setExpira(Date.now() + 10 * 60 * 1000);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setExpira(null);
  };
  const totalProductosEnCarrito = () => {
    if (carrito)
      return carrito.reduce(
        (acumulador, elemento) => acumulador + elemento.contador,
        0
      );
  };
  const totalApagar = () => {
    return carrito.reduce(
      (acumulador, elemento) =>
        acumulador + elemento.contador * elemento.item.precio,
      0
    );
  };
  const removerElemento = (item) => {
    const posicion = carrito.indexOf(item);
    const carritoSinElemento = carrito.toSpliced(posicion, 1);
    setCarrito(carritoSinElemento);
  };

  const modificarCantidad = (item, nuevaCantidad) => {
    const posicion = carrito.indexOf(item);
    const carritoNuevo = carrito.map((elemento, key) => {
      if (key === posicion) {
        return { ...elemento, contador: nuevaCantidad };
      }
      return elemento;
    });
    setCarrito(carritoNuevo);
  };

  const verificarElemento = (sku) => {
    const encontrado = carrito.find((element) => element.item.sku === sku);

    if (encontrado) {
      return encontrado;
    } else {
      return false;
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "carrito",
      JSON.stringify({
        cartContent: carrito,
        cartExpires: expira,
      })
    );
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        alCarrito,
        totalProductosEnCarrito,
        vaciarCarrito,
        removerElemento,
        totalApagar,
        modificarCantidad,
        verificarElemento,
        expira,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
