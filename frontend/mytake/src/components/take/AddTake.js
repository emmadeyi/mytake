import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTake } from '../../actions/takes';
import PropTypes from 'prop-types';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from 'react-router-dom';



export class AddTake extends Component {
    state = {
        title: "",
        body: "",
        access: false,
    }

    static propTypes = {
        addTake: PropTypes.func.isRequired,
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeEditor = (e, editor) => {
        this.setState({
            body: editor.getData()
        })
    }

    onSubmit = (e, editor) => {
        e.preventDefault()
        const { title, body, access } = this.state;
        const take = {
            title,
            body,
            access
        }
        this.props.addTake(take);
        document.querySelector("#access").checked = "";
        this.setState({
            title: "",
            body: "",
            access: false,
        })
    }


    render() {
        const { title } = this.state;
        if (this.props.apiResponse) {
            return <Redirect to="/takes" />
        }
        return (
            <div className="container blue-grey-text text-darken-3">
                <h2>New Take</h2>
                <div className="row">
                    <form onSubmit={this.onSubmit} className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="title"
                                    type="text"
                                    className="validate"
                                    name="title"
                                    onChange={this.onChange}
                                    value={title}
                                />
                                <label htmlFor="title">Take Title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="body">Body</label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    onChange={this.onChangeEditor}
                                    data="<p>Clear me and enter take body here</p>"
                                    name="body"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="access">
                                    <input
                                        type="checkbox"
                                        id="access"
                                        onChange={() => {
                                            this.setState({ access: !this.state.access });
                                        }}
                                        name="access"
                                    />
                                    <span>Public?</span>
                                </label>
                            </div>
                        </div><br />
                        <button className="btn waves-effect waves-light blue blue-lighten-2" type="submit" name="action">
                            Submit Take
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    apiResponse: state.takesReducer.apiRedirect
})

export default connect(mapStateToProps, { addTake, })(AddTake);
