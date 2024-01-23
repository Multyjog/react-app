import { useEffect, useState } from "react";
import axios from "axios";

interface IUser {
  id: number;
  name: string;
}

const Request = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState("");
  const url = "https://jsonplaceholder.typicode.com/xusers";
  useEffect(() => {
    axios
      .get<IUser[]>(url)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Request;
