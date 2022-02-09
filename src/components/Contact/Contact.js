import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="contact">
          <div className=" contactCol1">
            <h1>Connect with us</h1>
            <p>
              Submit your query and we will get back to you as soon as possible.
            </p>
          </div>
          <div className=" contactCol2">
            {/* Form */}
            <form>
              <div className="row inputs">
                <div className="col-12 col-lg-6 mb-4">
                  <label for="First Name" className="form-label"></label>
                  <input
                    type="text"
                    class="form-control"
                    name="firstName"
                    placeholder="First Name..."
                  />
                </div>
                <div className="col-12 col-lg-6 mb-4">
                  <label for="Last Name" className="form-label"></label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Last Name..."
                    name="lastName"
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label for="Phone Number" className="form-label"></label>
                  <input
                    type="phone number"
                    class="form-control"
                    placeholder="Phone Number..."
                    name="phoneNumber"
                  />
                </div>
                <div className="col-12 col-lg-6 mb-4">
                  <label for="Your Email" className="form-label"></label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email..."
                    name="email"
                  />
                </div>
                <div className="col-12 col-lg-12 mb-4">
                  <label for="Subject" className="form-label"></label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject..."
                    name="subject"
                  />
                </div>
                <div className="col-12 col-lg-12 mb-4">
                  <label for="Message" class="form-label"></label>
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Discribe your issue..."
                    name="message"
                  ></textarea>
                </div>
                <div class="form-check my-3 mb-5">
                  <input type="checkbox" class="form-check-input" />
                  <label class="form-check-label mx-3" for="exampleCheck1">
                    I agree to the terms and Conditions
                  </label>
                </div>
                <button type="submit" class="btn btn-primary formBtn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
