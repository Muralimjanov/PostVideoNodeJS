import axios from "axios";

const instance = axios.create({
    headers:{
        "Content-Type":"multipart/form-data"
    },
    baseURL: "http://localhost:7771/api"
})

export default instance;
