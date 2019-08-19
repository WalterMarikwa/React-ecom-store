import React from 'react';
import Prod from './ProductsData.json';
import './Products.css';

class Products extends React.Component {
  state = {
    Products: Prod
  }

  render() {
  return (
  <div>
      <section id="showcase">
        <div class="container_main">
          <h1>Get Your Instruments Here!</h1>
        </div>
      </section>

    <br />
  
    <div className="card">
      <div className="row">
        <div className="cards" className="col-sm-12">
          <div className="row">
            {this.state.Products.map((product, index) => {
              return (
                <div className="col-sm-4 col-sm-4">
                  <div className=" card aSeries">
                    <div className="name">
                     {product.name}
                    </div>
                    <img style={{width: "20px;"}} src={product.image} />
                    <div className="description">
                    {product.description}
                    </div>
                    <div className="price">
                    {product.price}
                    </div>
                    <div className="btn-group">
                    <input class="btn btn-primary" type="submit" value="Buy" />
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
     </div>
   </div>

  );}
}
export default Products;