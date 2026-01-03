import axios from "axios";

const axiosinstance = axios.create({
    baseURL: "http://localhost:5000",
});

axiosinstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosinstance;
