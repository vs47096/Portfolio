import React from "react";
import { Button } from 'primereact/button';

export default class Contact extends React.Component {

    render() {
        return (
            <div className="align-content-center h-16rem md:h-25rem mt-3 md:mt-0">
                <div className="align-items-center flex flex-column gap-5">
                    <div className="font-bold md:text-5xl text-2xl text-800 text-center">Let`s work together !</div>
                    <div className="line-height-3 md:px-0 md:text-xl px-3 text-700 text-center"
                        style={{
                            // width: "40rem",
                            letterSpacing: "0.03rem"
                        }}>
                        Let's team up and build something great. Send me a message to get started.</div>
                    <Button label="Contact Me" size="large" className="font-bold pb-3 pl-5 pr-5 pt-3 w-fit hidden md:block"
                    onClick={(() => this.props.toggleDialog(true))} />
                    <Button label="Contact Me" size="small" className="font-bold pb-3 pl-5 pr-5 pt-3 w-fit md:hidden block"
                    onClick={(() => this.props.toggleDialog(true))} />
                </div>
            </div>
        );
    }

}