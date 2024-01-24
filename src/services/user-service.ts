import apiClient from "./api-client";

export interface IUser {
    id: number;
    name: string;
}

class UserService {
    getAllUsers() {
        const controller = new AbortController();
        const request = apiClient.get<IUser[]>('/users', { signal: controller.signal })
        return { request, cancel: () => controller.abort}
    }
    addUser(newUser: IUser) {
        return apiClient.post<IUser>(`/users`, newUser)
    }
    updateUser(id: number, newUser: IUser) {
        return apiClient.patch<IUser>(`users/${id}`, newUser)
    }
    deleteUser(id: number) {
        return apiClient.delete<IUser>(`/users/${id}`)
    }

}

export default new UserService()