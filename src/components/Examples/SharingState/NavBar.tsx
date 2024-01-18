interface IProps {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: IProps) => {
  return <div>NavBar: {cartItemsCount}</div>
};

export default NavBar;
