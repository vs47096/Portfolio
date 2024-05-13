import React from "react";
import logoDark from '../assets/logo-for-dark.png';
import avatar from '../assets/avatar.png';
import './About.css';
import { Button } from 'primereact/button';

export default class About extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="container-about mt-6 mb-6">
                <div className="grid">
                    <div className="col-5 col-offset-1 pl-8 pr-8 mt-6" style={{ height: "32rem" }}>
                        <div className="container border-round-3xl h-30rem">
                            <div className="align-content-evenly border-round-2xl flex flex-column glass-card h-30rem  mb-8 shadow-5">
                                <img
                                    src={avatar}
                                    alt="logo"
                                    loading="lazy"
                                    className="h-14rem"
                                />

                                <img
                                    src={logoDark}
                                    alt="logo"
                                    loading="lazy"
                                    className="h-8rem mt-6"
                                />
                            </div>
                        </div>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                    </div>
                    <div className="align-content-center col-5 text-left">
                        <div className="font-bold text-700"><p className="text-4xl"><span className="underline-highlight-green">ABOUT ME</span></p></div>
                        <div>
                            <p className="font-medium text-3xl text-700">
                                Hi! Combining my love for coding and globetrotting, I'm on a quest to debug the world, one destination at a time. Join me on this adventure as we code our way across the map!
                            </p>
                            <p className="font-normal text-2xl text-700">
                                In addition to my current profile, I try to keep learning new things and building projects. I am exploring machine learning and building projects in this domain. As an engineer, I am interested in knowing the end-to-end workings of systems, even at the network and security levels.
                            </p>
                        </div>
                        <Button label="Let`s connect" size="large" className="font-bold pb-3 pl-5 pr-5 pt-3"
                        onClick={(() => this.props.toggleDialog(true))}/>
                    </div>


                </div>

            </div>
        );
    }
}
