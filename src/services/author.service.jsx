import axios from "axios";
import AuthorApi from "../api/author.api";
const apiUrl = import.meta.env.VITE_APP_API_URL;

export const serviceAuthorList = async (params = {}) => {
    const res = await axios.get(apiUrl + AuthorApi.list, {
        params
    });
    if (res.status === 200) {
        return res.data;
    }

    return false;
}