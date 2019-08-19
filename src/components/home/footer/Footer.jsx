import React from 'react';

function Footer(props) {
    return (
        <div>
        <section id="social">
            <div className="container wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s">
                <div class="row">
                    <div class="col-md-6">
                        <h2>Connect with us:</h2>
                        <hr align="left" width="50%" />
                        <p>&#169;Instrument<span style={{color: 'gold'}}>2.0</span> by Walter Marikwa 2019</p>
                        <p>Last Updated August 2019.</p>
                    </div>

                    <div className="col-md-6">
                        <ul className="list-inline">
                            <li class="list-inline-item"><a href="http://facebook.com"><i class="fab fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a href="http://twitter.com"><i class="fab fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="http://instagram.com"><i class="fab fa-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="https://www.snapchat.com/"><i class="fab fa-snapchat"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Footer;