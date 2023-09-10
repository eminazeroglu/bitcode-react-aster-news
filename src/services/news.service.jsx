import axios from "axios";
import { FiGlobe, FiBriefcase, FiActivity, FiAward, FiBookmark, FiBox, FiCpu} from "react-icons/fi";
import {BsShieldPlus} from 'react-icons/bs'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {MdOutlineSportsBaseball} from 'react-icons/md'
import NewsApi from "../api/news.api"
const apiUrl = import.meta.env.VITE_APP_API_URL;

export const serviceNewsFetchList = async (params) => {
    const res = await axios.get(apiUrl + NewsApi.list, {params});
    if (res.status === 200) {
        return res.data.data;
    }

    return false;
}

export const serviceNewsBySlug = async (slug) => {
    const res = await axios.get(apiUrl + NewsApi.bySlug.replace(':slug', slug));
    if (res.status === 200) {
        return res.data;
    }

    return false;
}

export const serviceNewsCategories = async () => {
    const res = await axios.get(apiUrl + NewsApi.category);
    if (res.status === 200) {
        return res.data.map(category => {
            switch(category.slug) {
                case "world":
                    category.icon = <FiGlobe/>
                break;
                case "politics":
                    category.icon = <FiBriefcase/>
                break;
                case "technology":
                    category.icon = <BsShieldPlus/>
                break;
                case "economy":
                    category.icon = <FiAward/>
                break;
                case "sports":
                    category.icon = <MdOutlineSportsBaseball/>
                break;
                case "entertainment":
                    category.icon = <AiOutlinePlayCircle/>
                break;
                case "health":
                    category.icon = <FiActivity/>
                break;
                case "science":
                    category.icon = <FiBookmark/>
                break;
                case "culture":
                    category.icon = <FiBox/>
                break;
                case "environment":
                    category.icon = <FiCpu/>
                break;
            }
            return category;
        });
    }

    return false;
}