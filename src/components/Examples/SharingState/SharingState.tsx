/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";

const SharingState = () => {
  const [cartItems, setCartItems] = useState(["Item 1", "Item 2"]);
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
};

export default SharingState;
