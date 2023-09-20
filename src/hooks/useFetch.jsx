import { useState } from "react";
import { serviceAuthorList } from "../services/author.service";
import {
    serviceNewsBySlug,
    serviceNewsCategories,
    serviceNewsFetchList,
    serviceNewsRandomList,
} from "../services/news.service";

export const useFetchNewsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetch = async (query = {}) => {
        setLoading(true);
        const data = await serviceNewsFetchList(query);
        setLoading(false);
        if (data) setData(data.data);
    };

    return [data, fetch, loading];
};

export const useFetchAuthorNewsList = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetch = async (slug) => {
        setLoading(true);
        const data = await serviceNewsFetchList({authorSlug: slug});
        setLoading(false);
        if (data) {
            setData(data.data);
            setTotal(data.total);
        }
    };

    return [data, fetch, total, loading];
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
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetch = async (slug) => {
        setLoading(true);
        const data = await serviceNewsBySlug(slug);
        if (data) setData(data);
        setLoading(false);
    };

    return [data, fetch, loading];
};


export const useFetchNewsRandomList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetch = async () => {
        setLoading(true);
        const data = await serviceNewsRandomList({limit: 8});
        setLoading(false);
        if (data) setData(data.data);
    };

    return [data, fetch, loading];
};

export const useFetchNewsLastList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetch = async () => {
        setLoading(true);
        const data = await serviceNewsFetchList({limit: 10});
        setLoading(false);
        if (data) setData(data.data);
    };

    return [data, fetch, loading];
};

export const useFetchAuthorList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetch = async () => {
        setLoading(true);
        const data = await serviceAuthorList({limit: 5});
        setLoading(false);
        if (data) setData(data.data);
    };

    return [data, fetch, loading];
};
