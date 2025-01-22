import React, { useState } from "react";
import { HomeOutlined, InfoCircleOutlined, MailOutlined } from "@ant-design/icons";
import "./NavBar.css";

const NavBar = ({ width }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`navbar ${isCollapsed ? "collapsed" : ""}`}
            style={{ width: isCollapsed ? "60px" : `${width}px` }}
        >
            <ul className={`nav-items ${isCollapsed ? "collapsed" : ""}`}>
                <li>
                    <HomeOutlined />
                    {!isCollapsed && <span>Home</span>}
                </li>
                <li>
                    <InfoCircleOutlined />
                    {!isCollapsed && <span>About</span>}
                </li>
                <li>
                    <MailOutlined />
                    {!isCollapsed && <span>Contact</span>}
                </li>
            </ul>
            <button
                className={`toggle-button ${isCollapsed ? "collapsed" : ""}`}
                onClick={toggleCollapse}
            >
                {isCollapsed ? ">" : "<"}
            </button>
        </div>
    );
};

export default NavBar;