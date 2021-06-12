import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { products } from './constants';
import ProductsGrid from './components/ProductsGrid';

function App() {
  const [cart, setCart] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ]);
  const [itemCount, setItemCount] = useState(0);

  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    const cart1 = [...cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cart1.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cart1[index] = { ...cart[index] };
    cart1[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const itemCount1 = getItemCount(cart1);
    // state'i güncelle
    setCart(cart1);
    setItemCount(itemCount1);
  };

  const handleDecrement = (product) => {
    const newCart = [...cart];
    const index = newCart.indexOf(product);
    newCart[index] = { ...cart[index] };
    newCart[index].value--;
    const itemsCount2 = getItemCount(newCart);
    setCart(newCart);
    setItemCount(itemsCount2);
  };

  const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount3 = cart.reduce((total, product) => total + product.value, 0);

    return itemCount3;
  };

  return (
    <div className='App'>
      <Navbar totalItems={itemCount} />
      <ProductsGrid
        products={products}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

export default App;
