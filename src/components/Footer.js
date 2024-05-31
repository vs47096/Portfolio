import React from "react";
import f1 from '../assets/footer/f1.jpg';
import f2 from '../assets/footer/f2.svg';
import f3 from '../assets/footer/f3.svg';
import f5 from '../assets/footer/f5.svg';
import f6 from '../assets/footer/f6.svg';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="flex h-8rem md:h-16rem justify-content-evenly w-screen">
                <img className="hidden"  src={f1} alt="footer" loading="lazy" />
                <img src={f2} alt="footer" loading="lazy" className="w-auto"/>
                <img src={f5} alt="footer" loading="lazy" className="hidden md:block w-auto"/>
                <img src={f3} alt="footer" loading="lazy" className="w-auto"/>
                <img src={f6} alt="footer" loading="lazy" className="hidden md:block w-auto"/>
            </div>
        );
    }

}