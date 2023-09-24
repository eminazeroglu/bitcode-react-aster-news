import classNames from "classnames";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { useFetchNewsSearchByText } from "~/hooks/useFetch";
import Profile from "./Profile";
import { useClickAway } from "react-use";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [text, setText] = useState("");

    const [data, fetchNews, loading, resetData] = useFetchNewsSearchByText();

    const ref = useRef(null);
    useClickAway(ref, () => {
        if (text.length > 0) {
            resetData();
            setText("");
        }
    });

    const handleNewsView = (slug) => {
        navigate("/view/" + slug, { redirect: true });
        resetData();
        setText("");
    };

    useEffect(() => {
        if (text.trim()) {
            fetchNews(text);
        }
    }, [text]);

    return (
        <header className="header">
            <div className="header-left">
                <div className="search-form" ref={ref}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Xəbər axtar.."
                    />
                    <button>
                        {loading && (
                            <img className="loading" src="loading.svg" alt="" />
                        )}
                        {!loading && <FiSearch />}
                    </button>

                    <div
                        className={classNames({
                            "search-result": true,
                            open: text.length > 0,
                        })}
                    >
                        {data.length > 0 && (
                            <ul>
                                {data.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() =>
                                            handleNewsView(item.slug)
                                        }
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {data.length === 0 && !loading && (
                            <p>Axtardığınız xəbər tapılmadı</p>
                        )}
                    </div>
                </div>
                <div className="covid">
                    <a
                        href="https://www.worldometers.info/coronavirus/"
                        target="_blank"
                    >
                        Covid 19
                    </a>{" "}
                    ilə bağlı son xəbərlər
                    <FiArrowRight className="arrow" />
                </div>
            </div>
            <div className="header-right">
                <Profile />
            </div>
        </header>
    );
}

export default Header;
