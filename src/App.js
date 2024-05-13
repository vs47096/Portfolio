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
        <Dialog visible={this.state.visible} style={{ width: '30vw' }} onHide={() => this.toggleDialog(false)}>
          <div>
            <div className='text-center'>
              <img
                src={avatar}
                alt="logo"
                loading="lazy"
                className="h-14rem"
              />
            </div>
          </div>
          <div>
          <div className="font-bold text-700"><p className="text-2xl"><span className="underline-highlight-green">Vinamra Shrey</span></p></div>
          <div>
            <div className='flex justify-content-evenly'>
              <div><img src={gmail} alt="logo" loading="lazy" className="h-2rem"/></div>
              <div className='align-content-center font-medium text-2xl text-700'>vinasko@gmail.com</div>
            </div>
            <div className='flex justify-content-evenly mt-3 relative' style={{left : "-0.3rem"}}>
            <div><img src={wp} alt="logo" loading="lazy" className="h-3rem"/></div>
              <div className='align-content-center font-medium text-2xl text-700'>+91-9461047096</div>
            </div>
          </div>
          </div>
        </Dialog>
        <Header toggleDialog={this.toggleDialog}/>
        <About toggleDialog={this.toggleDialog}/>
        <Services />
        <Skills />
        <Project />
        <Contact toggleDialog={this.toggleDialog}/>
        <Footer />
      </div>
    )
  }
}