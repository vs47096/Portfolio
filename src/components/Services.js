import React from "react";
import { serviceDescription } from "../utility/utility";

export default class Services extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            techImages: []
        };
    }

    componentDidMount() {
        const techImages = this.importAll(require.context('../assets/services', false, /\.(png|jpe?g|svg)$/)).sort();
        this.setState({ techImages });
    }

    importAll(r) {
        return r.keys().map(r);
    }

    getServiceDescription = (serviceName) => {
        
            const lowerCaseStr = serviceName?.toLowerCase(); // Convert string to lowercase
            if(lowerCaseStr)
            {
                for (const key in serviceDescription) {
                    const lowerCaseKey = key.toLowerCase(); // Convert key to lowercase
                    if (lowerCaseStr.includes(lowerCaseKey)) {
                        return `${serviceDescription[key]}`;
                    }
                }
            }
            return "";
        
    }

    render() {
        return (
            <div id="services" className="container-services pb-6 md:pb-8 md:pt-8">
                <div className="font-bold text-2xl md:text-5xl text-center" style={{ color: "#00ca5a" }}>What I love</div>
                <div className="font-normal m-auto mt-4 text-700 text-center md:text-xl line-height-3 service-subheading pl-4 pr-4 md:pl-0 md:pr-0">
                    For me, each project is unique. This is why I place value on well conceived planet that is understandable to all and clear.
                </div>

                <div className="flex flex-wrap gap-5 justify-content-evenly mt-5 md:mt-6 pl-2 md:pl-8 pr-2 md:pr-8">
                    {this.state.techImages?.map((image, index) => {
                        const match = image.match(/\/media\/([^\.]+)/); // eslint-disable-line no-useless-escape
                        return (
                            
                            <div className="md:mt-3 md:w-25rem w-10rem" key={"service-body-"+index}>
                                <img className="h-4rem md:h-11rem"
                                    key={"service-image-"+index} src={image} alt="info"
                                    title={match ? match[1] : null}
                                    loading="lazy" />
                                <div key={"service-heading-"+index} className="align-content-evenly capitalize font-bold h-3rem m-auto md:mt-3 text-xs md:text-2xl md:w-16rem" style={{
                                    letterSpacing: "0.1rem",
                                    color: "#00ca5a"
                                }}>{match ? match[1]?.replaceAll("-", " ") : null}</div>
                                <div key={"service-desc-"+index} className="line-height-3 m-auto md:mt-5 text-600 text-center md:w-18rem text-xs md:text-base">
                                {this.getServiceDescription(match ? match[1]?.replaceAll("-", " ") : null)}
                                </div>
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