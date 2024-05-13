import React from "react";
import logoDark from '../assets/logo-for-dark.png';
import avatar from '../assets/avatar.png';
import './About.css';
import { Button } from 'primereact/button';

export default class About extends React.Component {

    render() {

        return (
            <div className="container-about mt-6 mb-6">
                <div className="grid">
                    <div className="col-5 col-offset-1 pl-8 pr-8 mt-6" style={{ height: "32rem" }}>
                        <div class="container border-round-3xl h-30rem">
                            <div class="align-content-evenly border-round-2xl flex flex-column glass-card h-30rem  mb-8 shadow-5">
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
                    <div className="align-content-center col-5 text-left">
                        <div className="font-bold text-700"><p className="text-4xl"><span className="underline-highlight-green">ABOUT ME</span></p></div>
                        <div>
                            <p className="font-medium text-3xl text-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="font-normal text-2xl text-700">
                                Euismod elementum nisi quis eleifend. Lacus viverra vitae congue eu consequat ac. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Semper risus in hendrerit gravida rutrum quisque non. At varius vel pharetra vel turpis nunc eget lorem. Mattis ullamcorper velit sed ullamcorper. Lobortis scelerisque fermentum dui faucibus in. Et tortor consequat id porta nibh venenatis cras.
                            </p>
                        </div>
                        <Button label="Let`s connect" size="large" className="font-bold pb-3 pl-5 pr-5 pt-3"/>
                    </div>


                </div>

            </div>
        );
    }
}
