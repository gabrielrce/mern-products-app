import React, { Component } from "react";
import axios from "axios";
export default class CreateProduct extends Component {
  state = {
    products: [],
    name: "",
    price: "",
  };
  async componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const res = await axios.get("http://localhost:4000/api/products");
    this.setState({
      products: res.data,
    });
  };

  onChangeProduct = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/products", {
      name: this.state.name,
      price: this.state.price,
    });
    this.setState({ name: "", price: "" });
    this.getProducts();
  };

  deleteProduct = async (productId) => {
    const response = window.confirm("are you sure you want to delete it?");
    if (response) {
      await axios.delete("http://localhost:4000/api/products/" + productId);
      this.getProducts();
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <div className="card card-body">
              <h3>Create New Product</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    value={this.state.name}
                    type="text"
                    onChange={this.onChangeProduct}
                  />
                  <input
                    className="form-control"
                    value={this.state.price}
                    type="number"
                    onChange={this.onChangePrice}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <ul className="list-group">
            {this.state.products.map((product) => (
              <li
                className="list-group-item list-group-item-action"
                key={product._id}
                onDoubleClick={() => this.deleteProduct(product._id)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
