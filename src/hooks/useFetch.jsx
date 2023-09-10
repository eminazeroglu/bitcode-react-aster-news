import { useState } from "react";
import {
    serviceNewsBySlug,
    serviceNewsCategories,
    serviceNewsFetchList,
} from "../services/news.service";

export const useFetchNewsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetch = async (query = {}) => {
        setLoading(true);
        const data = await serviceNewsFetchList(query);
        setLoading(false);
        if (data) setData(data);
    };

    return [data, fetch, loading];
};

export const useFetchNewsCategories = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetch = async () => {
        setLoading(true);
        const data = await serviceNewsCategories();
        setLoading(false);
        if (data) setData(data);
    };

    return [data, fetch, loading];
};

export const useFetchNewsBySlug = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetch = async (slug) => {
        setLoading(true);
        const data = await serviceNewsBySlug(slug);
        setLoading(false);
        if (data) setData(data);
    };

    return [data, fetch, loading];
};
