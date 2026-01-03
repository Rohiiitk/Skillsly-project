import { createContext, useState, useEffect } from "react";
import axiosinstance from "../../Utilities/axiosIntance"

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        if (!accessToken) {
            setLoading(false);
            return;
        }

        const fetchUser = async () => {
            try {
                const response = await axiosinstance.get('http://localhost:5000/api/auth/profile')
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [])

    const updateUser = (userData) => {
        if (userData.user) {
            setUser(userData.user);
        } else {
            setUser(userData);
        }

        if (userData.token) {
            localStorage.setItem("token", userData.token);
        }

        setLoading(false);
    };

    const clearUser = () => {
        setUser(null);
        localStorage.removeItem('token');
    }

    return (
        <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;