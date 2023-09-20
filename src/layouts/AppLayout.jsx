import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.svg'
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import { useFetchNewsCategories } from "../hooks/useFetch";
import Footer from "~/components/common/Footer.jsx";

function AppLayout({children}) {

    const [categories, fetchCategories] = useFetchNewsCategories();

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <div className="container">
            <div className="page-aside">
                <div>
                    <NavLink to={'/'} className="logo">
                        <img src={logo} />
                        <span>Aster News</span>
                    </NavLink>
                </div>
                <Navbar categories={categories}/>
            </div>
            <div className="page-content">
                <Header/>
                <div className="main-content">
                    <div className="content">
                        {children}

                        <Footer/>
                    </div>

                    <div className="page-aside-right">
                        Right Aside
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AppLayout;
