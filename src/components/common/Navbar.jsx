import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";

function Navbar({categories}) {
    return (
        <div className="navbar">
            <NavLink to={'/'} className="navbar-link">
                <span className="icon">
                    <FiHome />
                </span>
                <span className="text">Ana Səhifə</span>
            </NavLink>
            {categories.map((category, index) => (
                <NavLink key={index} to={'/search/' + category.slug} className="navbar-link">
                    <span className="icon">
                        {category.icon}
                    </span>
                    <span className="text">{category.name}</span>
                </NavLink>
            ))}
        </div>
    );
}

export default Navbar;
