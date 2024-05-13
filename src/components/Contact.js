import React from "react";
import { Button } from 'primereact/button';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="align-content-center h-25rem">
                <div className="align-items-center flex flex-column gap-5">
                    <div className="font-bold text-5xl text-800 text-center">Let`s work together !</div>
                    <div className="line-height-3 text-700 text-center text-xl"
                        style={{
                            width: "40rem",
                            letterSpacing: "0.03rem"
                        }}>
                        If you would like to talk to me, please send me a message.
                        We can work together on a project and make something big.</div>
                    <Button label="Contact Me" size="large" className="font-bold pb-3 pl-5 pr-5 pt-3 w-fit"
                    onClick={(() => this.props.toggleDialog(true))} />
                </div>
            </div>
        );
    }

}