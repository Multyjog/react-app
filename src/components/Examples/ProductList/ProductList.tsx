import { useEffect, useState } from "react";

interface IProps {
  category: string;
  onCategoryChange: (category: string) => void;
}

const ProductList = ({ category, onCategoryChange }: IProps) => {
  const [products, setProducts] = useState<string[]>([]);

  //   Fires only when "category" is updating
  useEffect(() => {
    console.log("fetching products in", category);
    setProducts(["Clothes", "Cosmetics", "Food"]);
  }, [category]);
  return (
    <>
      <div>ProductList</div>;
      <select
        className="for-select"
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothes">Clothes</option>
        <option value="Cosmetics">Cosmetics</option>
        <option value="Food">Food</option>
      </select>
    </>
  );
};

export default ProductList;
