import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export class TakesUserModal extends Component {
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
                <i className="material-icons m-space-icon modal-trigger cursor-pointer" href="#modal1">person</i>
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

export default TakesUserModal;
