import { useEffect, useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useFetchAuthorList } from "../../../hooks/useFetch";
import AuthorItem from "./AuthorItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

function AuthorContent() {
    const [authors, fetchAuthor] = useFetchAuthorList();

    const nextRef = useRef('');
    const preRef = useRef('');

    useEffect(() => {
        fetchAuthor();
    }, []);

    return (
        <div className="section">
            <div className="section-head section-head--between">
                <h3 className="section-title">Yazarlar</h3>
                <div className="author-arrow">
                    <button ref={preRef}>
                        <FiArrowLeft />
                    </button>
                    <button ref={nextRef}>
                        <FiArrowRight />
                    </button>
                </div>
            </div>
            <div className="section-body">
                <div style={{ width: "100%" }}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={5}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: nextRef.current,
                            prevEl: preRef.current,
                        }}
                        loop={true}
                    >
                        {authors.length > 0 &&
                            authors.map((author, index) => (
                                <SwiperSlide key={index}>
                                    <AuthorItem author={author} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default AuthorContent;
