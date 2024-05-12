import React from "react";
import { Button } from 'primereact/button';
import LazyLoad from 'react-lazyload';
import background from '../assets/background.jpg';
import logoDark from '../assets/logo-for-dark.png';

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
            <div className="container-header h-screen" style={containerStyle}>
                {/* Background image lazy loaded with a fade-in effect */}
                <LazyLoad height="100%">
                    <img
                        src={background}
                        alt="background"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'opacity 0.5s ease', // Smooth transition for the image
                            opacity: this.state.isImageLoaded ? 1 : 0, // Fade in the image when loaded
                        }}
                        onLoad={this.handleImageLoad}
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
                        <div className="col flex justify-content-around text-500 text-lg pr-8" style={{ letterSpacing: "0.05em", fontWeight: "500" }}>
                            <div style={{ color: '#04d15b' }} className="mr-2">Home</div>
                            <div className="mr-2">About</div>
                            <div className="mr-2">Skills</div>
                            <div className="mr-2">Services</div>
                            <div className="mr-2">Projects</div>
                            <div>Contact</div>
                        </div>
                    </div>
                    <div className="align-content-evenly flex grid h-full pb-8">
                        <div className="col-6 col-offset-1 text-left">
                            <p style={{ fontFamily: "'Dosis', sans-serif" }} className="line-height-2 mb-8">
                                <div className="mb-2 text-6xl text-color-secondary">Great ideas doesn't</div>
                                <div className="font-semibold text-100 text-7xl">need approvals, they</div>
                                <div className="font-semibold text-100 text-7xl">need <span style={{
                                    background: '#11998e',  /* fallback for old browsers */
                                    background: '-webkit-linear-gradient(to right, #38ef7d, #11998e)',  /* Chrome 10-25, Safari 5.1-6 */
                                    background: 'linear-gradient(to right, #38ef7d, #11998e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Applications.</span></div>
                            </p>
                            <Button label="Contact Me" size="large" className="font-bold pb-3 pl-5 pr-5 pt-3"/>
                        </div>
                        <div className="col-5">
                            <div className="flex justify-content-evenly pr-6">
                                <div className="mt-6">
                                    <div className="mb-6 fadeinleft animation-duration-500 animation-ease-in-out">
                                        <div style={{color : "#e78733"}} className="text-7xl">5</div>
                                        <div className="font-bold text-1xl text-400">Projects completed</div>
                                    </div>
                                    <div className="fadeinleft animation-duration-500 animation-ease-in-out">
                                    <div style={{color : "#f55739"}} className="text-7xl">4</div>
                                        <div className="font-bold text-1xl text-400">Worked in fortune</div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mb-6 fadeinright animation-duration-500 animation-ease-in-out">
                                    <div style={{color : "#1479cc"}} className="text-7xl">5+</div>
                                        <div className="font-bold text-1xl text-400">Years experience</div>
                                    </div>
                                    <div className="fadeinright animation-duration-500 animation-ease-in-out">
                                    <div style={{color : "#a75ff6"}} className="text-7xl">30+</div>
                                        <div className="font-bold text-1xl text-400">Technologies worked</div>
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
