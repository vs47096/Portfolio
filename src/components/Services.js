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
            <div className="container-services pb-8 pt-8">
                <div className="font-bold text-5xl text-center" style={{ color: "#00ca5a" }}>What I love</div>
                <div className="font-normal m-auto mt-4 text-700 text-center text-xl line-height-3" style={{width : "50rem"}}>
                    For me, each project is unique. This is why I place value on well conceived planet that is understandable to all and clear.
                </div>

                <div className="flex flex-wrap gap-5 justify-content-evenly mt-6 pl-8 pr-8">
                    {this.state.techImages?.map((image, index) => {
                        const match = image.match(/\/media\/([^\.]+)/);
                        return (
                            
                            <div className="mt-3 w-25rem" key={"service-body-"+index}>
                                <img className="h-11rem"
                                    key={"service-image-"+index} src={image} alt="info"
                                    title={match ? match[1] : null}
                                    loading="lazy" />
                                <div key={"service-heading-"+index} className="align-content-evenly capitalize font-bold h-3rem m-auto mt-3 text-2xl w-16rem" style={{
                                    letterSpacing: "0.1rem",
                                    color: "#00ca5a"
                                }}>{match ? match[1]?.replaceAll("-", " ") : null}</div>
                                <div key={"service-desc-"+index} className="line-height-3 m-auto mt-5 text-600 text-center w-18rem" style={{fontSize : "medium"}}>
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