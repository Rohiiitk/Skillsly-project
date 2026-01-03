import { Navigate } from "react-router-dom";

export default function ProtextedRoute({ children }) {

    const user = localStorage.getItem('user');
    const isAuthenticated = JSON.parse(user);

    if (!isAuthenticated?.canPass) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <>
            {children}
        </>
    )
}