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
          <div className="font-bold text-700"><p className="text-2xl text-center"><span className="underline-highlight-green">Vinamra Shrey</span></p></div>
          <div>
            <div className='grid'>
              <div className='col-3 col-offset-1 pl-5'><img src={gmail} alt="logo" loading="lazy" className="h-2rem"/></div>
              <div className='col-8 font-medium text-2xl text-700  align-content-center'>vs47096.affiliate@gmail.com</div>
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