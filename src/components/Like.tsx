import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const Like = () => {
  const [status, setStatus] = useState(false);

  if (!status)
    return (
      <div>
        <CiHeart size="80"></CiHeart>
      </div>
    );
  return (
    <div>
      <FaHeart size={80} color="#e31b23"></FaHeart>
    </div>
  );
};

export default Like;
