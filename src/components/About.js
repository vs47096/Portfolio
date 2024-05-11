import React from "react";

export default class About extends React.Component {

    render() {

        return (
            <div className="container-about">
                <div className="grid">
                    <div className="col">
                        Vinamra Shrey
                    </div>
                    <div className="col flex justify-content-around">
                        <div>Home</div>
                        <div>About</div>
                        <div>Skills</div>
                        <div>Services</div>
                        <div>Projects</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div className="grid">
                    <div className="col-7">
                        <p className="">Test Lines</p> 
                    </div>
                    <div className="col-5">
                        <div className="grid">
                            <div className="col">
                                <div className="">5</div>
                                <div className="">Projects completed</div>
                            </div>
                            <div className="col">
                                <div className="">5</div>
                                <div className="">Worked in fortune</div>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="col">
                                <div className="">5+</div>
                                <div className="">Years experience</div>
                            </div>
                            <div className="col">
                                <div className="">5</div>
                                <div className="">Technologies worked</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
