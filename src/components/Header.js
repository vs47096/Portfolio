import React from "react";
import { Button } from 'primereact/button';
import LazyLoad from 'react-lazyload';
import background from '../assets/background.jpg';
import logoDark from '../assets/logo-for-dark.png';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isImageLoaded: false
        };
    }

    handleImageLoad = () => {
        this.setState({ isImageLoaded: true });
    };

    render() {
        const containerStyle = {
            position: 'relative',
            overflow: 'hidden', // Hide overflow to prevent background image from showing before loading
        };

        const overlayStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgb(0 0 0 / 90%) 0%, rgb(0 0 0 / 79%) 76%, rgba(0, 0, 0, 0.4) 100%)' // Correct way to apply gradient
        };

        const contentStyle = {
            position: 'absolute',
            inset: '0px',
            zIndex: 2, // Ensure the content is above the background image
            // color: '#fff', // Text color
        };

        return (
            <div className="container-header h-30rem md:h-screen" style={containerStyle}>
                {/* Background image lazy loaded with a fade-in effect */}
                <LazyLoad height="100%">
                    <img
                        src={background}
                        alt="background"
                        style={{
                            // width: '100%',
                            // height: '100%',
                            objectFit: 'cover',
                            transition: 'opacity 0.5s ease', // Smooth transition for the image
                            opacity: this.state.isImageLoaded ? 1 : 0, // Fade in the image when loaded
                        }}
                        onLoad={this.handleImageLoad}
                        className="md:w-full h-full"
                    />
                </LazyLoad>
                {/* Black fade overlay */}
                <div style={overlayStyle}></div>
                {/* Content */}
                <div className="container-header-content" style={contentStyle}>
                    <div className="align-items-center grid pt-4">
                        <div className="col">
                            <img
                                src={logoDark}
                                alt="logo"
                                loading="lazy"
                                className="h-5rem"
                            />
                        </div>
                        <div className="col md:flex justify-content-around text-500 text-lg pr-8 hidden md:block" style={{ letterSpacing: "0.05em", fontWeight: "500" }}>
                            <div style={{ color: '#04d15b' }} className="mr-2 cursor-pointer">Home</div>
                            <a href="#about" style={{textDecoration: "none", color: "inherit"}}><div className="mr-2 cursor-pointer">About</div></a>
                            <a href="#services" style={{textDecoration: "none", color: "inherit"}}><div className="mr-2 cursor-pointer">Services</div></a>
                            <a href="#skills" style={{textDecoration: "none", color: "inherit"}}><div className="mr-2 cursor-pointer">Skills</div></a>
                            <a href="#projects" style={{textDecoration: "none", color: "inherit"}}><div className="mr-2 cursor-pointer">Projects</div></a>
                        </div>
                    </div>
                    <div className="align-content-evenly flex grid md:h-full md:pb-8 mt-4 md:mt-0">
                        <div className="col-6 col-offset-1 hidden md:block text-left">
                            <p style={{ fontFamily: "'Dosis', sans-serif" }} className="line-height-2 mb-8">
                                <div className="mb-2 text-6xl text-color-secondary">Great Ideas Doesn't</div>
                                <div className="font-semibold text-100 text-7xl">Need Approvals, They</div>
                                <div className="font-semibold text-100 text-7xl">Need <span style={{
                                    background: '#11998e',  /* fallback for old browsers */
                                    background: '-webkit-linear-gradient(to right, #38ef7d, #11998e)',  /* Chrome 10-25, Safari 5.1-6 */
                                    background: 'linear-gradient(to right, #38ef7d, #11998e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Applications.</span></div>
                            </p>
                            <Button label="Contact Me" size="large" className="font-bold pb-3 pl-5 pr-5 pt-3"
                                onClick={(() => this.props.toggleDialog(true))}/>
                        </div>
                        <div className="col md:col-5">
                            <div className="flex justify-content-evenly md:pr-6">
                                <div className="mt-6">
                                    <div className="mb-6 fadeinleft animation-duration-500 animation-ease-in-out">
                                        <div style={{color : "#e78733"}} className="text-7xl">25+</div>
                                        <div className="font-bold text-1xl text-400">Projects Completed</div>
                                    </div>
                                    <div className="fadeinleft animation-duration-500 animation-ease-in-out">
                                    <div style={{color : "#f55739"}} className="text-7xl">5</div>
                                        <div className="font-bold text-1xl text-400">Worked in Fortune</div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mb-6 fadeinright animation-duration-500 animation-ease-in-out">
                                    <div style={{color : "#1479cc"}} className="text-7xl">5+</div>
                                        <div className="font-bold text-1xl text-400">Years Experience</div>
                                    </div>
                                    <div className="fadeinright animation-duration-500 animation-ease-in-out">
                                    <div style={{color : "#a75ff6"}} className="text-7xl">30+</div>
                                        <div className="font-bold text-1xl text-400">Technologies Worked</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
