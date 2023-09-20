import { useEffect } from "react";
import {Link, NavLink, useParams} from "react-router-dom";
import { useFetchNewsBySlug } from "../hooks/useFetch";

function NewsView() {

    const [data, fetchNewsBySlug, loading] = useFetchNewsBySlug();
    const {slug} = useParams();

    useEffect(() => {
        fetchNewsBySlug(slug);
    }, [slug])

    return (
        <>
            {loading && (
                <div>
                    Loading...
                </div>
            )}
            {!loading && (
                <div className="news-view">
                    <h1 className="news-view-title">{data?.title}</h1>
                    <div className="news-view-tags">
                        <Link to={`/search/${data?.category?.slug}`} className="news-view-tag">
                            {data?.category?.name}
                        </Link>
                    </div>
                    <div className="news-view-photo">
                        <img src={data?.photo} alt=""/>
                    </div>
                    <div className="news-view-content" dangerouslySetInnerHTML={{__html: data?.content}}/>
                    <div className="news-view-date">{data?.published_date}</div>
                    <div className="news-view-author">
                        <NavLink to={`/author/${data?.author?.slug}`}>
                            {data?.author?.fullname}
                        </NavLink>
                    </div>
                </div>
            )}
        </>
    );
}

export default NewsView;
