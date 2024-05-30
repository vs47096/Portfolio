import React from "react";
import { projects } from "../utility/utility";
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';

export default class Project extends React.Component {

    projectTemplate = (project, index) => {
        return (
            <Card
                key={"project-" + index}
                header={
                    <img
                        className="h-8rem md:h-14rem w-12rem md:w-20rem border-round-top-md"
                        src={require(`../assets/project/${project.image}`)} alt="Project Images"
                        loading="lazy" />
                }
                className="md:w-fit md:shadow-5 border-round-bottom-md md:mb-6 md:ml-2 md:mt-4 mt-2"
                //style={{ height: "33rem" }}
                >
                <div className="flex flex-column gap-2 md:pl-2 md:pr-2 text-left">
                    <div className="font-medium text-600 md:text-xl text-sm">
                        {project.type}
                    </div>
                    <div className="capitalize font-bold md:text-3xl text-xl">
                        {project.name}
                    </div>
                    <p className="text-600 md:h-4rem md:w-20rem">
                        {project.description}
                    </p>
                    {
                        project.link ? 
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold p-button md:pb-3 md:pt-3 w-fit"
                        style={{ textDecoration: "none" }}>
                        Explore more
                    </a>:
                    <Button label="No preview available" disabled severity="secondary" className="font-bold md:pb-3 md:pt-3 w-fit"/>
                    }
                    
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
            // background: 'rgb(77,74,108)',
            // background: '-moz-linear-gradient(0deg, rgba(77,74,108,1) 0%, rgba(115,3,192,1) 22%, rgba(230,106,197,1) 41%, rgba(253,239,249,1) 68%, rgba(255,255,255,1) 100%)',
            // background: '-webkit-linear-gradient(0deg, rgba(77,74,108,1) 0%, rgba(115,3,192,1) 22%, rgba(230,106,197,1) 41%, rgba(253,239,249,1) 68%, rgba(255,255,255,1) 100%)',
            // background: 'linear-gradient(0deg, rgba(77,74,108,1) 0%, rgba(115,3,192,1) 22%, rgba(230,106,197,1) 41%, rgba(253,239,249,1) 68%, rgba(255,255,255,1) 100%)',
            // filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#4d4a6c",endColorstr="#ffffff",GradientType=1)'
        };



        return (
            <div  id="projects" className="" style={containerStyle}>
                <div className="flex flex-column h-full justify-content-evenly md:pl-8 md:pr-8 md:pt-8 mt-4">
                    <div className="font-bold md:text-5xl text-2xl text-left" style={{ color: "#00ca5a" }}>Projects</div>
                    <div className="font-medium text-600 md:text-xl text-left">
                        <p className="line-height-3 text-justify"
                            style={{ letterSpacing: "0.04rem" }}>
                            Here are some projects I have worked on, alongside various enterprise and personal endeavours. They are mostly hosted on my home server to keep costs low.</p>
                    </div>
                    <Carousel value={projects} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                        className="custom-carousel md:mt-3 md:mt-1"
                        circular
                        itemTemplate={this.projectTemplate} />
                </div>
            </div>
        );
    }

}
