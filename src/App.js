// Importing necessary dependencies
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="bg-warning text-center py-5">
        <h1 className="display-4">Foodwagon</h1>
        <p className="lead">Are you starving? Find the best food near you!</p>
      </header>

      {/* Search Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Order Food Online</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                aria-label="Enter your address"
              />
              <button className="btn btn-warning" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-outline-warning mx-2">Delivery</button>
          <button className="btn btn-outline-warning mx-2">Pickup</button>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Deals and Discounts</h2>
          <div className="row g-4">
            {[
              { image: "promo1.jpg", discount: "15%", timeLeft: "2 Days" },
              { image: "promo2.jpg", discount: "10%", timeLeft: "5 Days" },
            ].map((promo, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card">
                  <img
                    src={promo.image}
                    className="card-img-top"
                    alt="Promotion"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{promo.discount} OFF</h5>
                    <p className="card-text">Hurry! {promo.timeLeft} left</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row text-center">
          {[
            "Select Location",
            "Choose Food",
            "Make Payment",
            "Enjoy Meal",
          ].map((step, index) => (
            <div key={index} className="col-md-3">
              <div className="card border-warning h-100">
                <div className="card-body">
                  <h5 className="card-title">Step {index + 1}</h5>
                  <p className="card-text">{step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-light text-center py-4">
        <p className="mb-0">&copy; 2024 Foodwagon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
