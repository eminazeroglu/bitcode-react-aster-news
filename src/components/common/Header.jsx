import { FiArrowRight, FiSearch } from "react-icons/fi";
import Profile from "./Profile";

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <div className="search-form">
                    <input type="text" placeholder="Xəbər axtar.." />
                    <button>
                    <FiSearch/>
                    </button>
                </div>
                <div className="covid">
                    <a href="https://www.worldometers.info/coronavirus/" target="_blank">Covid 19</a> ilə bağlı son xəbərlər
                    <FiArrowRight className="arrow"/>
                </div>
            </div>
            <div className="header-right">
                <Profile/>
            </div>
        </header>
    );
}

export default Header;