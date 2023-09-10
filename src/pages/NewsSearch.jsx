import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchNewsList } from "../hooks/useFetch";

function NewsSearch() {

    const {category} = useParams();
    const [news, fetchNews] = useFetchNewsList();

    useEffect(() => {
        fetchNews({category});
    }, [category])

    return (
        <div>
            <h1>News Search: {category}</h1>
        </div>
    );
}

export default NewsSearch;