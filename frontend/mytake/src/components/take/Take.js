import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTake, deleteTake } from '../../actions/takes';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { Redirect, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

export class Take extends Component {

    static propTypes = {
        getTake: PropTypes.func.isRequired,
        deleteTake: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getTake(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getTake(this.props.match.params.id);
        }
    }

    render() {
        if (this.props.state.apiRedirect) {
            return <Redirect to="/" replace />
        }
        const { take } = this.props.state;

        return (
            <div className="container blue-grey-text text-darken-3">
                <h2>{take.title} <Link to={`/takes/edit/${take.id}`} replace><i className="material-icons take-view-icon orange-text text-lighten-2 ">edit</i></Link> </h2>
                <div>
                    {ReactHtmlParser(take.body)}
                    <br />
                    <a href="/#" className="red-text text-lighten-2 right" onClick={this.props.deleteTake.bind(this, take.id)}>
                        <i className="material-icons take-view-icon">delete</i>
                    </a>
                </div>
                <br />
                <br />
                <hr />
                <span className="head-4">Comments <span className="head-barge">(36)</span></span><br /><br />
                <Comment />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state.takesReducer,
})

export default connect(mapStateToProps, { getTake, deleteTake })(Take);
