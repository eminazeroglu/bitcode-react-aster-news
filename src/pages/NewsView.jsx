import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchNewsBySlug } from "../hooks/useFetch";

function NewsView() {

    const [newsData, fetchNewsBySlug] = useFetchNewsBySlug();
    const {slug} = useParams();

    useEffect(() => {
        fetchNewsBySlug(slug);
    }, [slug])

    console.log(newsData);

    return (
        <div>
            <h1>News View</h1>
        </div>
    );
}

export default NewsView;