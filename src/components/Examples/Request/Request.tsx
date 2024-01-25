import userService, { IUser } from "../../../services/user-service";
import useUsers from "../../../hooks/useUsers";

const Request = () => {
  const { users, error, isLoading, setError, setUsers } = useUsers();

  const userDelete = (user: IUser) => {
    const originalUsers = [...users];
    const newUsersList = [...users.filter((el) => el.id !== user.id)];
    setUsers(newUsersList);
    userService.delete(user.id).catch((err) => {
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
      .create(newUser)
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
    userService.update(updatedUser).catch((err) => {
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
