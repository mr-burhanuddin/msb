import React from "react";

function Contact() {
  return (
    <div className="container my-2">
      <div className="container text-center my-4 border-bottom border-success">
        <h2 className="text-center text-danger">Address:</h2>
        <p>MSB Educational Institute</p>
        <p>Opp. Mehta Weigh Bridge, Old Bhandara Road,</p>
        <p>Wardhaman Nagar, Nagpur - India. omega replica watches.</p>
        <h5>Phone : +91 - 0712 - 6556146</h5>
        <h5 className="my-2">E-mail : nagpurmsb@gmail.com</h5>
      </div>
      <form>
        <div id="emailHelp" className="form-text text-center text-info">
          We'll never share your contact details with anyone else.
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Contact Number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Query
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
