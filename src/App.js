import './App.css';
import About from './components/About';
import Header from './components/Header';
import "primeicons/primeicons.css";
import "../node_modules/primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import Skills from './components/Skills';
import Services from './components/Services';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Dialog } from 'primereact/dialog';
import avatar from './assets/avatar.png';
import React from 'react';
import gmail from './assets/contact/gmail.png';
import wp from './assets/contact/wp.png';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      visible : false
    }
  }

  toggleDialog = (visible) => {
    this.setState({ visible });
  }

  render() {
    return (
      <div className="App">
        <Dialog visible={this.state.visible} onHide={() => this.toggleDialog(false)}
          className='md:w-26rem w-20rem'>
          <div>
            <div className='text-center'>
              <img
                src={avatar}
                alt="logo"
                loading="lazy"
                className="h-10rem md:h-14rem"
              />
            </div>
          </div>
          <div>
          <div className="font-bold text-700"><p className="md:text-2xl text-center"><span className="underline-highlight-green">Vinamra Shrey</span></p></div>
          <div>
            <div className='grid md:mt-0 mt-4'>
              <div className='col-2 md:col-2 md:col-offset-1 md:mt-0 md:pl-2 md:text-left mt-1 text-center'><img src={gmail} alt="logo" loading="lazy" className="h-1rem md:h-2rem"/></div>
              <div className='align-content-center col-10 font-medium md:col-9 md:text-xl text-700'>vs47096.affiliate@gmail.com</div>
            </div>
            {/* <div className='grid mt-3'>
            <div className='col-3 col-offset-1 pl-5'><img src={wp} alt="logo" loading="lazy" className="h-3rem"/></div>
              <div className='col-8 font-medium text-2xl text-700 align-content-center'>
                <span>+91-7004711510</span>
              </div>
            </div> */}
          </div>
          </div>
        </Dialog>
        <Header toggleDialog={this.toggleDialog}/>
        <About toggleDialog={this.toggleDialog}/>
        <Services />
        <Skills/>
        <Project/>
        <Contact toggleDialog={this.toggleDialog}/>
        <Footer />
      </div>
    )
  }
}