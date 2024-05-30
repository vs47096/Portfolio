import React from "react";
import f1 from '../assets/footer/f1.jpg';
import f2 from '../assets/footer/f2.svg';
import f3 from '../assets/footer/f3.svg';
import f5 from '../assets/footer/f5.svg';
import f6 from '../assets/footer/f6.svg';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="flex justify-content-between">
                <img className="h-13rem m-auto"  src={f1} alt="footer" loading="lazy" />
                <img className="h-13rem ml-7 hidden md:block"  src={f2} alt="footer" loading="lazy" />
                <img className="h-13rem relative hidden md:block"  src={f5} alt="footer" loading="lazy" style={{left: "-2rem"}} />
                <img className="h-13rem hidden md:block"  src={f3} alt="footer" loading="lazy" />
                <img className="h-13rem hidden md:block"  src={f6} alt="footer" loading="lazy" />
            </div>
        );
    }

}