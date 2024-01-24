import { useEffect, useState } from "react";
import { CanceledError } from "../../../services/api-client";
import userService, { IUser } from "../../../services/user-service";

const Request = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
        return;
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
        return;
      });
    return () => {
      cancel();
    };
  }, []);

  const userDelete = (user: IUser) => {
    const originalUsers = [...users];
    const newUsersList = [...users.filter((el) => el.id !== user.id)];
    setUsers(newUsersList);
    userService.deleteUser(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      name: `User-${Math.floor(Math.random() * 100)}`,
    };
    setUsers([...users, newUser]);
    userService
      .addUser(newUser)
      .then(({ data: savedUser }) => {
        setUsers([...users, savedUser]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const updateUser = (user: IUser) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: `Updated: ${user.name}` };
    setUsers(users.map((el) => (el.id === user.id ? updatedUser : el)));
    userService.updateUser(user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-success" onClick={() => addUser()}>
        Add user
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <div
                onClick={() => userDelete(user)}
                className="btn btn-outline-danger mx-1"
              >
                Delete
              </div>
              <button
                className="btn btn-warning"
                onClick={() => updateUser(user)}
              >
                Update user
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Request;
