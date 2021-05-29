import React from 'react'
import './intro.css'
import intro1 from '../../img/intro1.jpg'
import intro2 from '../../img/intro2.jpg'
import intro3 from '../../img/intro3.jpg'

export default function Intro() {
    return (
<div className="intro">
<div id="fh5co-features">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="feature-left">
          <span className="icon">
            <i className="icon-profile-male" />
          </span>
          <div className="feature-copy">
            <h3>Become a volunteer</h3>
            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-left">
          <span className="icon">
            <i className="icon-happy" />
          </span>
          <div className="feature-copy">
            <h3>Happy Giving</h3>
            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-left">
          <span className="icon">
            <i className="icon-wallet" />
          </span>
          <div className="feature-copy">
            <h3>Donation</h3>
            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="fh5co-feature-product" className="fh5co-section-gray">
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center heading-section">
        <h2>Giving is Virtue.</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
    <center>
      <div>
        <p><img src={intro3} width="1200px" /></p>
      </div>
      <div>
        <p><img src={intro2} width="1200px"/></p>
      </div>
      <div>
        <p><img src={intro1} width="1200px"/></p>
      </div>
    </center>
    <div className="row">
      <div className="col-md-4">
        <div className="feature-text">
          <h3>Love</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-text">
          <h3>Compassion</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-text">
          <h3>Charity</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

    )
}
