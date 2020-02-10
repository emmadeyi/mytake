import React, { Component } from 'react'

export class EditTake extends Component {
    state = {
        title: "",
        body: "",
        access: 0,
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })

    }


    render() {
        const { title, body } = this.state;
        return (
            <div className="container blue-grey-text text-darken-3">
                <h2>Update Take</h2>
                <div className="row">
                    <form className="col s12">
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
                                <textarea
                                    id="body"
                                    name="body"
                                    className="materialize-textarea"
                                    onChange={this.onChange}
                                    value={body}
                                >
                                </textarea>
                                <label htmlFor="body">Body</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label>
                                    <input
                                        type="checkbox"
                                        id="access"
                                        className="filled-in"
                                        // onChange={this.onChange}
                                        name="access"
                                    // value={access}
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

export default EditTake
