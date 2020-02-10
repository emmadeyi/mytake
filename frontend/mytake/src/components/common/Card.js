import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

export class Card extends Component {
    state = {
        user: {
            name: "John Doe",
            email: "jdoe@gmail.com",
            img: "/temp-imgs/user-avatar/avatar-02.png"
        }
    }
    render() {
        const { take } = this.props;
        const body = take.body.split(" ").splice(0, 10).join(" ");
        return (
            <div className="card hoverable" key={take.id} >
                <div className="card-image">
                    <img src="/temp-imgs/card-01.jpeg" alt="" />
                    <span className="card-title">{take.title}</span>
                </div>
                <div className="card-content">
                    {ReactHtmlParser(body)}
                </div>
                <div className="card-action">
                    <div className="row">
                        <div className="col s6 left-align">
                            <Link className="btn blue lighten-2 activator" to={`/takes/${take.id}`} replace>Read...</Link>
                        </div>
                        <div className="col s6 right-align grey-text">
                            <i className="material-icons m-space-icon">person</i>
                            <i className="material-icons m-space-icon">favorite</i>
                            <i className="material-icons m-space-icon">sms</i>
                            <i className="material-icons m-space-icon">share</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
