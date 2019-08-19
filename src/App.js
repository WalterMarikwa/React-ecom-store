import React from 'react';
//import './App.css';
//import products from "./Products.json"
import Footer from './components/home/footer/Footer';
import Home from './components/home/Home';
import ProductPage from './components/products/Products';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Products from './components/products/Products';

class App extends React.Component {


  render() { 
    return ( 
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
     );
  }
}
{/* <div className="cardDoc">
        {this.state.products.map(f => {
          return(
            <Products 
            id={f.id}
            name={f.name}
            image={f.image}
            price={f.price}
            description={f.description}
          />
          )
        })}
      </div> */}



 
export default App;