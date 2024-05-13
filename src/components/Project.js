import React from "react";
import { projects } from "../utility/utility";
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';

export default class Project extends React.Component {

    projectTemplate = (project, index) => {
        return (
            <Card
                key={"project-" + index}
                header={
                    <img
                        className="h-14rem w-20rem border-round-top-md"
                        src={require(`../assets/project/${project.image}`)} alt="Project Images"
                        loading="lazy" />
                }
                className="p-card p-component w-fit shadow-5 border-round-bottom-md mb-6 ml-2"
                style={{ height: "31rem" }}>
                <div className="flex flex-column gap-2 pl-2 pr-2 text-left">
                    <div className="font-medium text-600 text-xl">
                        {project.type}
                    </div>
                    <div className="capitalize font-bold text-3xl">
                        {project.name}
                    </div>
                    <p className="text-600 h-3rem">
                        {project.description}
                    </p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold p-button pb-3 pt-3 w-fit"
                        style={{ textDecoration: "none" }}>
                        Explore more
                    </a>
                </div>
            </Card>
        );
    }

    render() {

        const responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ];

        const containerStyle = {
            background: 'rgb(77,74,108)',
            background: '-moz-linear-gradient(0deg, rgba(77,74,108,1) 0%, rgba(115,3,192,1) 22%, rgba(230,106,197,1) 41%, rgba(253,239,249,1) 68%, rgba(255,255,255,1) 100%)',
            background: '-webkit-linear-gradient(0deg, rgba(77,74,108,1) 0%, rgba(115,3,192,1) 22%, rgba(230,106,197,1) 41%, rgba(253,239,249,1) 68%, rgba(255,255,255,1) 100%)',
            background: 'linear-gradient(0deg, rgba(77,74,108,1) 0%, rgba(115,3,192,1) 22%, rgba(230,106,197,1) 41%, rgba(253,239,249,1) 68%, rgba(255,255,255,1) 100%)',
            filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#4d4a6c",endColorstr="#ffffff",GradientType=1)'
        };



        return (
            <div className="h-screen" style={containerStyle}>
                <div className="flex flex-column h-full justify-content-evenly p-8 pt-5">
                    <div className="font-bold text-5xl text-left" style={{ color: "#00ca5a" }}>Projects</div>
                    <div className="font-medium text-600 text-xl text-left">
                        <p className="line-height-2 text-justify"
                            style={{ letterSpacing: "0.04rem" }}>
                            Below are some of the projects which I worked on. In addition to these there are many enterprise applications and personal projects which I have built.
                            <strong> Many of these are hosted in my home server running at "0" cost.</strong></p>
                    </div>
                    <Carousel value={projects} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                        className="custom-carousel mt-3"
                        circular
                        autoplayInterval={3000}
                        itemTemplate={this.projectTemplate} />
                </div>
            </div>
        );
    }

}