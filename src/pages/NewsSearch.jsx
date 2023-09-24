import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import NewsItem from "../components/ui/news/NewsItem";
import {useFetchNewsList} from "../hooks/useFetch";
import SkeletonNews from "~/components/ui/skeleton/SkeletonNews.jsx";
import Skeleton from "~/components/ui/skeleton/Skeleton.jsx";
import Meta from "~/components/common/Meta.jsx";

function NewsSearch() {

    const {category} = useParams();
    const [news, fetchNews, loading] = useFetchNewsList();
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        fetchNews({category});
    }, [category])

    useEffect(() => {
        if (news.length > 0) {
            setCategoryName(news[0].category.name)
        }
    }, [news])

    return (
        <>
            <Meta
                title={categoryName}
            />
            <div className="section">
                {loading && (
                    <>
                        <div className="section-head">
                            <h3 className="section-title">
                                <Skeleton width={90} height={16} className={"demo"}/>
                            </h3>
                        </div>
                        <div className="section-body">
                            <div className="news-content">
                                <SkeletonNews/>
                                <SkeletonNews/>
                                <SkeletonNews/>
                                <SkeletonNews/>
                            </div>
                        </div>
                    </>
                )}
                {!loading && (
                    <>
                        <div className="section-head">
                            <h3 className="section-title">{categoryName}</h3>
                        </div>
                        <div className="section-body">
                            <div className="news-content">
                                {news.length > 0 && news.map((item, index) => <NewsItem key={index} item={item}/>)}
                            </div>
                        </div>
                    </>
                )}

            </div>
        </>
    );
}

export default NewsSearch;
