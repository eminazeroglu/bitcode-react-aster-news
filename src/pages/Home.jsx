import AuthorContent from "../components/ui/author/AuthorContent";
import NewsLastContent from "../components/ui/news/NewsLastContent";
import NewsRandomContent from "../components/ui/news/NewsRandomContent";
import Meta from "~/components/common/Meta.jsx";

function Home() {
    return (
        <>
            <Meta
                title={'Ana Səhifə'}
            />
            <NewsRandomContent/>
            <AuthorContent/>
            <NewsLastContent/>
        </>
    );
}

export default Home;
