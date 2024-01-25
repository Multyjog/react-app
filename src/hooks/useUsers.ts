import { useState, useEffect } from "react";
import userService, {IUser} from "../services/user-service";
import { CanceledError } from "axios";

const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const { request, cancel } = userService.getAll<IUser>();
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

    return { users, error, isLoading, setUsers, setError}
}

export default useUsers