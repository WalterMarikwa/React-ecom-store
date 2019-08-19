import React from 'react';
import './Home.css';

export default class Home extends React.Component {
render() {
  return (
    <div className="wrapper">
    <div>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active"> 
        <img src="https://cdn.pixabay.com/photo/2016/01/10/21/05/mic-1132528__480.jpg" className="d-block w-100" className="pic-slide" alt="..." />
        <h1>Welcome to Instrument<span style={{color: 'gold'}}>2.0</span></h1>
      </div>
      <div className="carousel-item">
        <img src="https://cdn.pixabay.com/photo/2018/06/30/09/29/music-3507317__480.jpg" className="d-block w-100" className="pic-slide" alt="..." />
        <h1>Explore the real mood of music.</h1>
      </div>
      <div className="carousel-item">
        <img src="https://cdn.pixabay.com/photo/2016/11/22/19/15/dark-1850120__480.jpg" className="d-block w-100" className="pic-slide" alt="..." />
        <h1>Playing Instruments made easier.</h1>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

<br/>

    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="aboutstyle">About Us</h2>
            <hr align="left" width="50%" />
            <p>Have you ever asked youself what music means to you? Most people find themselves confused as to what music really means to the world.</p>
            <br />
            <p>Here at Instrument2.0 we've come up with a solution for music lovers by providing high quality musical Instruments that will change lives forever. Through our Instruments, Our goal is make people say
              "Music speaks what cannot be expressed. It soothes the mind and gives it rest. It heals the heart and makes it whole. It flows from heaven to the soul".
            </p>
          </div>
        </div>
       </div>
      </section>
    <br/>
  </div>

<section id="cardbox">
<div class="container">
  <div class="row">

    <div class="col-sm-4">
      <div class="card">
        <img class="card-img-top" src="https://bit.ly/2TFgBKX" width="80px" height="200px" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Learn about music</h5>
          <p class="card-text">Music is an important part of people’s life and it should stay like that. Well, after reading this article it will probably become an even more important part of your life. </p>
          <a href="/home" class="btn btn-primary">Home...</a>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="card">
        <img class="card-img-top" src="https://bit.ly/2yZZ3zR" width="80px" height="200px" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Follow your path</h5>
          <p class="card-text">Music has many benefits it provides on the human health and mood, and all benefits are useful. As the answer to all of that, you should listen to music daily, rather than occasionally. </p>
          <a href="/Product" class="btn btn-primary">Products...</a>
        </div>
      </div>
    </div>

    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src="https://bit.ly/2TyYiXI" width="80px" height="200px" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Music for the heros</h5>
          <p className="card-text">Being creative is more than just possible and simple, but it can be improved. For example, listening to the music can help you see new things and get new ideas.</p>
          <a href="/contact" class="btn btn-primary">Visit Us...</a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<br />
<br />

<section id="work">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="aboutstyle"><span style={{color: 'gold'}}>Why shop here?</span></h2>
        <hr align="left" width="50%" />
        <p>Instrument2.0 leaves no stone unturned to offer customers a pleasant music experience. 
          We are focused at ensuring customer delight; amply reflected in our customer-oriented policies. Rated #1 in Charlotte for the past dacade,
          We are still dedicated on giving our customers the best experience with our musical instruments.</p>
        <br />
        <p>Why not shop here? Quality service provided at its finest while knowledge of instruments is poured unto you. 
          You'll never feel lost but staisfied with our goods.</p>
      </div>
    </div>
  </div>
</section>
</div>

  )}
}


