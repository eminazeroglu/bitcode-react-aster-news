import classNames from "classnames";
import { useRef, useState } from "react";
import { FiChevronDown, FiUser } from "react-icons/fi";
import {useClickAway} from 'react-use';

function Profile() {
    const ref = useRef(null);
    useClickAway(ref, () => {
        if (open) {
            setOpen(false)
        }
    });
    const [open, setOpen] = useState(false);

    return (
        <div className="profile">
            <div className="profile-button" onClick={() => setOpen(!open)}>
                <FiUser className="icon"/>
                <span>Profilim</span>
                <span className="arrow">
                <FiChevronDown/>
                </span>
            </div>
            <div ref={ref} className={classNames({
                'profile-dropdown': true,
                'open': open
            })}>
                <a href="#" className="profile-dropdown-item">Yeni Xəbər</a>
                <a href="#" className="profile-dropdown-item">Çıxış</a>
            </div>
        </div>
    );
}

export default Profile;