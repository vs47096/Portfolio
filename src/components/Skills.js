import React from "react";
//import reactImage from '../assets/tech-logos/'

export default class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techImages: []
        };
    }

    componentDidMount() {
        const techImages = this.importAll(require.context('../assets/tech-logos', false, /\.(png|jpe?g|svg)$/));
        this.setState({ techImages });
    }

    importAll(r) {
        return r.keys().map(r);
    }

    render() {
        return (
            <div id="skills" className="container-skills pb-6 pt-6" style={{ backgroundColor: "#2d333b" }}>
                <div className="font-bold md:text-5xl text-2xl text-center" style={{ color: "#00ca5a" }}>Technologies used</div>
                <div className="flex flex-wrap gap-4 justify-content-evenly md:gap-5 md:mt-6 md:pl-8 md:pr-8 mt-6 pl-3 pr-3">
                    {this.state.techImages?.map((image, index) => {
                        const match = image.match(/\/media\/([^\.]+)/); // eslint-disable-line no-useless-escape
                        return (
                            <div key={"skill-body-"+index} className="fadeinleft animation-duration-500 animation-ease-in-out">
                                <img className="h-3rem md:h-5rem"
                                    key={"skill-image-"+index} src={image} alt="info"
                                    title={match ? match[1] : null}
                                    loading="lazy" />
                                <div key={"skill-name-"+index} className="capitalize md:font-bold md:mt-3 md:text-sm mt-2 text-200 text-xs hidden md:block" style={{
                                    letterSpacing: "0.08rem"
                                }}>{match ? match[1]?.replaceAll("-", " ") : null}</div>
                            </div>
                        )
                    }
                    )
                    }

                </div>
            </div>
        );
    }
}
