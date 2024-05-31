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
            <div id="about" className="container-about mt-6 md:mb-6 mb-4">
                <div className="grid w-full">
                    <div className="col md:col-5 md:col-offset-1 md:mt-6 md:pl-8 md:pr-8 mt-4 pl-5 pr-5" style={{ height: "32rem" }}>
                        <div className="container border-round-3xl h-30rem">
                            <div className="align-content-evenly border-round-2xl flex flex-column glass-card h-30rem  mb-8 shadow-5 w-fit">
                                <img
                                    src={avatar}
                                    alt="logo"
                                    loading="lazy"
                                    className="h-10rem md:h-14rem"
                                />

                                <img
                                    src={logoDark}
                                    alt="logo"
                                    loading="lazy"
                                    className="h-7rem md:h-8rem mt-6"
                                />
                            </div>
                        </div>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                    </div>
                    <div className="align-content-center md:col-5 text-left md:pl-0 md:pr-0 pl-5 pr-5">
                        <div className="font-bold text-700"><p className="text-xl md:text-4xl"><span className="underline-highlight-green">ABOUT ME</span></p></div>
                        <div>
                            <p className="font-medium md:mb-6 text-700 text-justify md:text-xl line-height-3 about-me-content">
                            Hey there! I'm someone who finds joy in both Coding and Exploring the world. I'm on a quest to debug the world, one destination at a time. Alongside, I am committed to continuous learning, particularly in the realm of Machine learning, where I actively engage in project development. As an Engineer, I possess a comprehensive understanding of System Architectures, delving into Network and Security aspects to ensure end-to-end functionality.
                            </p>
                        </div>
                        <Button label="Let`s connect" size="large" className="font-bold pb-3 pl-5 pr-5 pt-3 hidden md:block"
                        onClick={(() => this.props.toggleDialog(true))}/>
                    </div>


                </div>

            </div>
        );
    }
}
