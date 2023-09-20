import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetchAuthorNewsList} from "~/hooks/useFetch.jsx";
import Skeleton from "~/components/ui/skeleton/Skeleton.jsx";
import SkeletonNews from "~/components/ui/skeleton/SkeletonNews.jsx";
import NewsItem from "~/components/ui/news/NewsItem.jsx";

function Author(props) {

    const {slug} = useParams();

    const [news, fetchNews, total, loading] = useFetchAuthorNewsList();
    const [author, setAuthor] = useState({});

    useEffect(() => {
        fetchNews(slug)
    }, [slug])


    useEffect(() => {
        if (news.length > 0) {
            setAuthor(news[0].author)
        }
    }, [news])

    console.log(news);

    return (
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
                    <div className="section-head section-head--between">
                        <div className="section-flex">
                            <figure className="section-photo">
                                <img src={author.photo} alt=""/>
                            </figure>
                            <h3 className="section-title">{author.fullname}</h3>
                        </div>
                        <div>
                            <b>Toplam Xəbər Sayı:</b> {total}
                        </div>
                    </div>
                    <div className="section-body">
                        <div className="news-content">
                            {news.length > 0 && news.map((item, index) => <NewsItem key={index} item={item}/>)}
                        </div>
                    </div>
                </>
            )}

        </div>
    );
}

export default Author;
