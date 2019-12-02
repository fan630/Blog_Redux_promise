import React, { Component } from 'react';
import './nav.css';
import {
    Link, Route
} from "react-router-dom";
import * as action from '../../action'
import FontAwesome from 'react-fontawesome';
import { FaMarkdown } from 'react-icons/fa';

function ItemNav(props) {
    const { to, children, exact, updateTab } = props
    return (
        <Route
            path={to}
            exact={exact}
            children={({ match }) => (
                <button className={`nav__item ${match ? 'active' : ""}`}
                    onClick={() => { updateTab(to) }}
                >
                    <Link to={to}>
                        {children}
                    </Link>
                </button>
            )}
        />
    )
}

const Nav = ({ updateTab }) => {
    const style = {
        fontSize: "25px",
        color: "black"
    }
    return (
        <nav className="nav navbar-expand-lg navbar-dark">
            <button className="nav__item navbar-brand" href="#"><b>Blog</b></button>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <ItemNav to="/" exact={true} updateTab={updateTab}>
                        <FontAwesome
                            name='fas fa-home'
                            style={{ style }}
                        />
                        <span>Home</span>
                    </ItemNav>
                    <ItemNav to="/post" updateTab={updateTab}>
                        Post
                    </ItemNav>
                    <ItemNav to="/share" updateTab={updateTab}>
                     <FaMarkdown style={{ fontSize: "25px"}} />
                     Share
                 </ItemNav>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;