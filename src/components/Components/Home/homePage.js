import React from 'react' 
import background from '../../img/intro4.jpg'
import './homepage.css'
import Navbar from './navbar';
import Footer from './footer';


export default function HomePage() {
    return (
      <>
      <Navbar/>

        <div className="fh5co-hero">
          <div className="fh5co-overlay" />
          <div className="fh5co-cover text-center"  style={{ backgroundImage: `url(${background})`}}>
            <div className="desc animate-box">
              <h2><strong>Covifund</strong></h2>
              <h2><strong>Support and Build an Inclusive Society </strong></h2>
              <span><a className="btn btn-primary btn-lg donate" href="/register">Get Started</a></span>
            </div>
          </div>
        </div>

       <Footer/>
</>
    )
}
