import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './header.scss';

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    const handleLoginClick = () => {
        window.location.href = 'http://localhost:5000/oauth2/authorization/google';
    };

    return (
        <div className="header border-bottom">
            <div className="header items">
                <div className="Logo">
                    <img onClick={() => { setMenu("home") }} src="/assets/logo-lv1.png" /> {menu === "home" ? <h /> : <></>}
                </div>

                <div className="list-items">
                    <ul className="items mx-auto">
                        <li className="item">
                            <NavLink className="nav-link me-4" to="/">Trang chủ</NavLink> {menu === "home" ? <h /> : <></>}
                        </li>
                        <li className="item">
                            <NavLink className="nav-link me-4" to="/info-teacher">Giảng viên</NavLink> {menu === "teachers" ? <h /> : <></>}
                        </li>
                        <li className="item">
                            <NavLink className="nav-link me-4" to="/contact">Liên hệ</NavLink> {menu === "contact" ? <h /> : <></>}
                        </li>
                    </ul>

                    <div className="d-flex nar-login" role="search">
                        <div>
                            <button onClick={handleLoginClick}>
                                <i className="fab fa-google-plus-g"></i> Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
