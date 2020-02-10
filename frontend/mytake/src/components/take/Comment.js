import React, { Component } from 'react';
import { Modal } from '../modal/CommentUserModal';

export class Comment extends Component {
    state = {
        user: {
            name: "John Doe",
            email: "jdoe@gmail.com",
            img: "/temp-imgs/user-avatar/avatar-02.png"
        }
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="comment">
                        <div className="comment-user">
                            <Modal user={this.state.user} />
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat praesentium autem ad incidunt facilis repellat harum nesciunt atque corporis repellendus quam aut quisquam commodi vel sequi, alias ut iure ducimus excepturi, voluptatum vero, fugit accusamus quasi dolores. Quae recusandae commodi modi sit rerum magni, eveniet ea pariatur inventore eius officia?
                        </p>
                        <i className="material-icons m-space-icon">thumb_up</i>
                        <i className="material-icons m-space-icon">favorite</i>
                        <i className="material-icons m-space-icon flip-horizontal">reply</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment
