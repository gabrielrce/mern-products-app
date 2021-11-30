import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ProductsList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async (productId) => {
    const res = await axios.get(
      "http://localhost:4000/api/products/" + productId
    );
    console.log(res);
    this.setState({
      products: res.data,
    });
  };

  render() {
    return (
      <div className="">
        <h5>{}</h5>
        {this.state.products.map((product) => (
          <div className="col-md-8 p-2" key={product._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>hello</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
