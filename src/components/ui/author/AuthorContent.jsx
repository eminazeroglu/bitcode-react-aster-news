import { useEffect } from "react";
import { useFetchAuthorList } from "../../../hooks/useFetch";
import AuthorItem from "./AuthorItem";

function AuthorContent() {

    const [authors, fetchAuthor] = useFetchAuthorList();

    useEffect(() => {
        fetchAuthor();
    }, [])

    return (
        <div className="section">
             <div className="section-head">
                <h3 className="section-title">Yazarlar</h3>
             </div>
             <div className="section-body">
                <div className="author-content">
                    {authors.length > 0 && authors.map((author, index) => <AuthorItem key={index} author={author} />)}
                </div>
             </div>
        </div>
    );
}

export default AuthorContent;