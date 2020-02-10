import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { getTakes } from '../../actions/takes';
import { Link } from 'react-router-dom';


export class Sidenav extends Component {
    static propTypes = {
        getTakes: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTakes();
    }

    render() {

        const { takes } = this.props;
        return (
            <div className="card">
                <br />
                <a href="/" className="sidebar-header blue-grey-text text-darken-3">
                    <i className="material-icons m-space-icon">vertical_align_center</i> Top 5</a>
                <ul className="">
                    {
                        takes.map(take => (
                            <li className="sidebar-link" key={take.id}><Link to={`/takes/${take.id}`} replace className="blue-grey-text text-darken-3">{take.title}</Link></li>
                        ))
                    }
                </ul>
                <a href="/" className="sidebar-header  blue-grey-text text-darken-3">
                    <i className="material-icons m-space-icon">trending_up</i> Trending</a>
                <ul>
                    <li className="sidebar-link"><a href="/" className=" blue-grey-text text-darken-3">Minim veniam</a></li>
                    <li className="sidebar-link"><a href="/" className=" blue-grey-text text-darken-3">Quis nostrud exercitation</a></li>
                    <li className="sidebar-link"><a href="/" className=" blue-grey-text text-darken-3">Nostrud exercitation ullamco laboris </a></li>
                    <li className="sidebar-link"><a href="/" className=" blue-grey-text text-darken-3">Minim veniam</a></li>
                    <li className="sidebar-link"><a href="/" className=" blue-grey-text text-darken-3">Quis nostrud exercitation</a></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    takes: state.takesReducer.takes
})

export default connect(mapStateToProps, { getTakes, })(Sidenav);
