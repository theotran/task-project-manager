import React, { Component } from 'react';

class PaymentForm extends Component {

  render() {
    return (
      <div>
        <main className="page payment-page">
          <section className="payment-form dark">
            <div className="container">
              <div className="block-heading">
                <h2>Payment</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
              </div>
              <form>
                <div className="products">
                  <h3 className="title">Checkout</h3>
                  <div className="item">
                    <span className="price">$200</span>
                    <p className="item-name">Product 1</p>
                    <p className="item-description">Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="item">
                    <span className="price">$120</span>
                    <p className="item-name">Product 2</p>
                    <p className="item-description">Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="total">Total<span className="price">$320</span></div>
                </div>
                <div className="card-details">
                  <h3 className="title">Credit Card Details</h3>
                  <div className="row">
                    <div className="form-group col-sm-7">
                      <label for="card-holder">Card Holder</label>
                      <input id="card-holder" type="text" className="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="form-group col-sm-5">
                      <label for="">Expiration Date</label>
                      <div className="input-group expiration-date">
                        <input type="text" className="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"/>
                        <span className="date-separator">/</span>
                        <input type="text" className="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"/>
                      </div>
                    </div>
                    <div className="form-group col-sm-8">
                      <label for="card-number">Card Number</label>
                      <input id="card-number" type="text" className="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="form-group col-sm-4">
                      <label for="cvc">CVC</label>
                      <input id="cvc" type="text" className="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="form-group col-sm-12">
                      <button type="button" className="btn btn-primary btn-block">Proceed</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default PaymentForm;
