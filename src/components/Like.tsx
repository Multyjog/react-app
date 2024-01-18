import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface IProps {
  onClick: () => void;
}

const Like = ({ onClick }: IProps) => {
  const [status, setStatus] = useState(false);
  const toggleStatus = () => {
    setStatus(!status);
    onClick;
  };

  if (!status)
    return (
      <div>
        <FaRegHeart size="80" onClick={toggleStatus}></FaRegHeart>
      </div>
    );
  return (
    <div>
      <FaHeart size="80" color="#e31b23" onClick={toggleStatus}></FaHeart>
    </div>
  );
};

export default Like;
