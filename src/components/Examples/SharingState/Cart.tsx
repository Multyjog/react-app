import Button from "../InitialExamples/Button/Button";

interface IProps {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: IProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <Button children="CLear the cart" onClick={onClear} />
    </>
  );
};

export default Cart;
