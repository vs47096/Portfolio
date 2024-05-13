import React from "react";
import { projects } from "../utility/utility";
import { Card } from 'primereact/card';

export default class Project extends React.Component {


    render() {

        return (
            <div className="h-screen" >
                <div className="flex h-full justify-content-evenly p-8">
                    {/* <div className="font-bold text-5xl text-center" style={{ color: "#00ca5a" }}>Projects</div> */}

                    {
                        projects?.map((project, index) => {
                            return (
                                <Card
                                    key={"project-" + index}
                                    header={
                                        <img
                                            className="h-16rem w-22rem border-round-top-md"
                                            src={require(`../assets/project/${project.image}`)} alt="Project Images"
                                            loading="lazy" />
                                    }
                                    className="p-card p-component w-fit shadow-7 border-round-bottom-md"
                                    style={{height : "35rem"}}>
                                    <div className="flex flex-column gap-2 pl-2 pr-2 text-left">
                                        <div className="font-medium text-600 text-xl">
                                            {project.type}
                                        </div>
                                        <div className="capitalize font-bold text-3xl">
                                            {project.name}
                                        </div>
                                        <p className="text-600 h-5rem">
                                            {project.description}
                                        </p>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold p-button pb-3 pt-3 w-fit"
                                            style={{ textDecoration: "none" }}>
                                            Explore more
                                        </a>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

}