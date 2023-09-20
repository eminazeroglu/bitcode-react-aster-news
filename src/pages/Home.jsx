import AuthorContent from "../components/ui/author/AuthorContent";
import NewsLastContent from "../components/ui/news/NewsLastContent";
import NewsRandomContent from "../components/ui/news/NewsRandomContent";

function Home() {
    return (
        <>
            <NewsRandomContent/>
            <AuthorContent/>
            <NewsLastContent/>
        </>
    );
}

export default Home;
