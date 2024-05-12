import React from "react";
import logoDark from '../assets/logo-for-dark.png';
import avatar from '../assets/avatar.png';
import './About.css';
import { Card } from 'primereact/card';


export default class About extends React.Component {

    render() {

        return (
            <div className="container-about mt-6 mb-6">
                <div className="grid">
                    <div className="col-5 col-offset-1 pl-8 pr-8 mt-6">
                        <div class="container border-round-3xl h-30rem">
                            <div class="align-content-evenly border-round-2xl flex flex-column glass-card h-30rem  mb-8">
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
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                    </div>
                    <div className="col-6">
                        <div>Home</div>
                        <div>About</div>
                        <div>Skills</div>
                        <div>Services</div>
                        <div>Projects</div>
                        <div>Contact</div>
                    </div>


                </div>

            </div>
        );
    }
}
