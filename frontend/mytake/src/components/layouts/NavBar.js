import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js'

export class NavBar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div>
                <nav className="blue lighten-2">
                    <a href="/" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>

                    <div className="container">
                        <div className="nav-wrapper ">
                            <a href="/" className="brand-logo">My Take</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/" replace>Takes</Link></li>
                                <li><Link to="/about" replace>About</Link></li>
                                <li><a href="/">Profile</a></li>
                                <li><Link to="/login" replace>Login</Link></li>
                                <li><Link to="/register" replace>Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img src="/temp-imgs/card-03.webp" alt="" />
                        </div>
                        <a href="/user"><img className="circle" src="/temp-imgs/card-02.webp" alt="" /></a>
                        <a href="/name"><span className="white-text name">John Doe</span></a>
                        <a href="/email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                    </li>
                    <li><Link className="waves-effect" to="/takes/add"><i className="material-icons">create
                    </i>New Take</Link></li>
                    <li><Link className="waves-effect" to="/takes"><i className="material-icons">collections
                    </i>My Takes</Link></li>
                    <li><a className="waves-effect" href="/!"><i className="material-icons">trending_up
</i>Trending</a></li>
                    <li><a className="waves-effect" href="/!"><i className="material-icons">layers
</i>Categories</a></li>
                    <li><a className="waves-effect" href="/!"><i className="material-icons">settings
</i>Settings</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
