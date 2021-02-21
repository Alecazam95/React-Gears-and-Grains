import React from "react";
import { FadeTransform } from "react-animation-components";

function Locations(props) {
  return (
    <React.Fragment>
      <div className="card mt-5">
        <blockquote className="blockquote text-center card-body">
          <div className="container">
            <FadeTransform in>
              <h2 className="mb-3 mt-5">
                You will find that all of our locations are surrounded by lovely
                bike paths so that you can reach us no matter what you're riding
                in.
              </h2>
            </FadeTransform>
          </div>
        </blockquote>
      </div>

      <div className="container">
        <div className="row flex-row-reverse row-content align-items-center">
          <div className="col-sm-6 col-sm-text-right">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "translateX(100%)",
              }}
            >
              <h2>Boulder, CO</h2>
              <p>
                Located off of Canyon Blvd. and 13th Street, our first location
                is only minutes ride from Boulder's beautiful flatirons and its
                shopping centers. If you needed another reason to take your bike
                for a ride through the town, we're connected to the extremely
                popular Boulder Creek Path, so stop on by!
              </p>
            </FadeTransform>
          </div>
          <div className="col text-center">
            <div className="media">
              <FadeTransform in>
                <img
                  className="d-flex mr-3 img-thumbnail"
                  src="assets/images/bikeCafeOne.jpg"
                  width="400"
                  alt="Locations"
                />
              </FadeTransform>
            </div>
          </div>
        </div>

        <div className="row row-content align-items-center">
          <div className="col-sm-7">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "translateX(-100%)",
              }}
            >
              <h2>Arvada, CO</h2>
              <p>
                Located off of Ralston Road and Garrison Street, we're near many
                beautiful bike paths and parks. We're also within 10 minutes
                cycling distance from Olde Town, Arvada.
              </p>
            </FadeTransform>
          </div>
          <div className="col text-center">
            <div className="media">
              <FadeTransform in>
                <img
                  className="img-thumbnail"
                  src="assets/images/bikeCafeTwo.jpg"
                  height="400"
                  alt="Plan Your Ride"
                />
              </FadeTransform>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Locations;
