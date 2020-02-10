import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export class Modal extends Component {
    componentDidMount() {
        console.log(this.props);

        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);
        // If you want to work on instance of the Modal then you can use the below code snippet
        // let instance = M.Modal.getInstance(this.Modal);
        // instance.open();
        // instance.close();
        // instance.destroy();
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <span className="modal-trigger cursor-pointer" href="#modal1" >
                    <img src={user.img} width="50" alt="" className="circle responsive-img" /><br />
                    {user.name}
                </span>
                <div ref={Modal => { this.Modal = Modal }} id="modal1" className="modal" >
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-close waves-effect waves-red btn-flat">
                            Disagree
                        </button>
                        <button className="modal-close waves-effect waves-green btn-flat">
                            Agree
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
