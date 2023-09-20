import { useEffect } from "react";
import { useFetchNewsLastList } from "~/hooks/useFetch.jsx";
import NewsItem from "./NewsItem";
import SkeletonNews from "~/components/ui/skeleton/SkeletonNews.jsx";

function NewsLastContent() {

    const [news, fetchNews, loading] = useFetchNewsLastList();

    useEffect(() => {
        fetchNews();
    }, [])
    

    return (
        <div className="section">
            <div className="section-head">
                <h3 className="section-title">Son Xəbərlər</h3>
            </div>
            <div className="section-body">
                {loading && (
                    <div className="news-content">
                        <SkeletonNews/>
                        <SkeletonNews/>
                        <SkeletonNews/>
                        <SkeletonNews/>
                    </div>
                )}
                {!loading && (
                    <div className="news-content">
                        {news.length > 0 && news.map((item, index) => <NewsItem key={index} item={item}/>)}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewsLastContent;
