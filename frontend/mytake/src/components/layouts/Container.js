import React, { Component } from 'react'
import Cards from '../Cards';
import SideNav from './Sidenav';


export class Container extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col m9 s12 ">
                        <Cards />
                    </div>
                    <div className="col m3 hide-on-small-only">
                        <SideNav />
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;
