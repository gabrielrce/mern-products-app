import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ProductsList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const res = await axios.get("http://localhost:4000/api/products");
    this.setState({
      products: res.data,
    });
  };

  deleteProduct = async (productId) => {
    await axios.delete("http://localhost:4000/api/products/" + productId);
    this.getProducts();
  };

  render() {
    return (
      <div className="">
        {this.state.products.map((product) => (
          <div className="col-md-4 p-2" key={product._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>{product.name}</h5>
                <Link to={"/" + product._id} className="btn btn-success ">
                  ${product.price}
                </Link>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteProduct(product._id)}
                >
                  Delete
                </button>
                <Link to={"/edit/" + product._id} className="btn btn-secondary">
                  <i className="material-icons">border_color</i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
