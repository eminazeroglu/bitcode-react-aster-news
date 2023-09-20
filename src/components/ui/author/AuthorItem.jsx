import {NavLink} from "react-router-dom";

function AuthorItem({author}) {
    return (
        <div className="author-item">
            <figure className="photo">
                <img src={author.photo} alt="" />    
            </figure>  
            <div className="inner">
                <div className="name">{author.fullname}</div>
                <div className="agency">{author.agency}</div>
                <div>
                    <NavLink className="btn btn-primary" to={`/author/${author.slug}`}>Xəbərlərə bax</NavLink>
                </div>
            </div>
        </div>
    );
}

export default AuthorItem;
