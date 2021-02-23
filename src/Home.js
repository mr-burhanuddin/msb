import React from "react";
import logo from "./logo.jpg";

function Home() {
  return (
    <div className="container-sm my-2">
      <div className="row justify-content-center ">
        <div className="card mx-1 col-sm-5 border-warning mb-3">
          <div className="card-header text-center text-warning fs-3">
            Principal's Desk
          </div>
          <div className="card-body">
            <p className="card-text">
              Under the benign and benevolent leadership of Syedna Mohammed
              Burhanuddin TUS, our community children have earned a place of
              repute among the students of other educational institutes. With
              the strong religious values at the helm, they have armed
              themselves with all the fringe and frill necessary for not just a
              commonplace, but a sublime and enviable existence in this world.
              <br /> -Mrs Raziya Abid Husain
            </p>
          </div>
        </div>
        <div className="card mx-1 col-sm-5 border-warning mb-3">
          <div className="card-header">
            <img className="img-fluid img-thumbnail" src={logo} alt="logo" />
          </div>
          <div className="card-body">
            <p className="card-text">
              MSB is an initiative that is aimed at serving as a bridge between
              education and industry by providing skills that are sought after
              by the industry by delivering quality training to the students.
              This helps the students get better placement and the industry to
              get better trained resources, who can be productive from the very
              first day. As part of Institutional Alliances, MSB has undertaken
              notable programs with over 50 colleges and has trained more than
              5,000 students so far....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
