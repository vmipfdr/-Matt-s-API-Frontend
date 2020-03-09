import React, { Component } from "react";
import axios from "axios";
import "./Sales.css";

//set this to local data then graduate to deployed data
const salesURL = "https://lord-of-war-data.herokuapp.com/sales/";

class Sale extends Component {
  componentDidMount() {
    //this props.match.params is coming from the parent component
    const currency = this.props.match.params.currency;
    const url = `${salesURL}${alpha3code}.json`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let newPrice = response.bpi[currency].rate;
        this.props.setPrice(newPrice);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Bitcoin price in {this.props.match.params.currency}</h1>
        <div className="price">{this.props.price}</div>
      </div>
    );
  }
}

export default Price;