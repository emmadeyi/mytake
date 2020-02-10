import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTakes } from '../../actions/takes';

import Card from './Card';


export class Cards extends Component {

    static propTypes = {
        // takes: PropTypes.array.isRequired,
        getTakes: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getTakes();
    }

    render() {
        const { takes } = this.props;
        return (
            <Fragment>
                <div>
                    <div className="row">
                        {
                            takes.map(take => (
                                <div className="col l4 m6 s12" key={take.id} >
                                    <Card take={take} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    takes: state.takesReducer.takes,
})

export default connect(mapStateToProps, { getTakes, })(Cards);
