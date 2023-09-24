import { FiPocket, FiShare } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function NewsItem({item}) {
    return (
        <div className="news-item">
            <div className="inner">
                <div className="text">
                    <NavLink to={'/view/' + item.slug}>
                        <h5>{item.id} - {item.title}</h5>
                    </NavLink>
                    <p>{item.description}</p>
                </div>
                <div className="photo">
                    <img src={item.photo} alt="" />
                </div>
            </div>
            <div className="option">
                <div className="info">
                    <span className="option-text">{item.author.agency}</span>
                    <span className="option-text">1 hour ago</span>
                </div>
                <div className="buttons">
                    <a href="#" className="option-btn">
                        <FiShare/>
                        <span>Paylaş</span>
                    </a>
                    <NavLink to={'/view/' + item.slug} className="option-btn">
                        <FiPocket/>
                        <span>Daha Ətraflı</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
