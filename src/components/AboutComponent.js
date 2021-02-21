import React from "react";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

function About(props) {
  return (
    <React.Fragment>
      <div className="card mt-4 border-0">
        <blockquote className="blockquote text-center card-body">
          <div className="container">
            <FadeTransform in>
              <h2 className="mb-0 mt-5">
                "It's about pushing yourself to be the best you can be in
                everything you do, whether that be in the kitchen or on your
                bike"
              </h2>
              <footer className="blockquote-footer">
                Patrick Nintzel,
                <cite title="Source Title">
                  Founder & CEO of Gears & Grains
                </cite>
              </footer>
            </FadeTransform>
          </div>
        </blockquote>
      </div>
      <div className="container">
        <div className="row flex-row flex-row-reverse row-content align-items-center">
          <div className="col-sm-7 col-sm-text-right">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "translateX(200%)",
              }}
            >
              <h2>Who we are</h2>
              <p className="mt-5">
                Gears & Grains is an artisan bakery that offers Link
                hand-crafted selection of breads, breakfast and pizzas. We also
                have an array of draft beers from locally owned breweries. G&G
                was established in Boulder, CO in 2018 and named after our
                founder's passion for cycling, bread, and beer. This passion
                translates to Link delicious selection of beer and sourdough
                breads that is easily accessible via nearby bike paths.
              </p>
            </FadeTransform>
          </div>
          <div className="col">
            <div className="media">
              <FadeTransform in>
                <img
                  className="d-flex mr-3 img-thumbnail border-0"
                  src="assets/images/logo.png"
                  width="300"
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
              <h2>Why we do it</h2>
              <p className="mt-5">
                When Patrick began envisioning Gears & Grains' creation, he knew
                that he wanted his passion for baking bread and cycling to be at
                the center of his creation. The idea was to bring the friendly
                faces of the community together with the same energetic and
                positive environment chefs and cyclists share. G&G brings people
                together to break bread and enjoy eachother's company over
                great, all natural food.
              </p>
            </FadeTransform>
          </div>
          <div className="col">
            <div className="media">
              <FadeTransform in>
                <img
                  className="d-flex mr-3 img-thumbnail border-0"
                  src="assets/images/nintzThePrince.jpg"
                  height="350"
                  alt="About Us"
                />
              </FadeTransform>
            </div>
          </div>
        </div>

        <FadeTransform
          in
          transformProps={{
            exitTransform: "translateY(75%)",
          }}
        >
          <div className="row flex-row flex-row-reverse row-content align-items-center">
            <div className="col-sm-7 col-sm-text-right">
              <h2>Where we're located</h2>
              <p className="mt-5">
                Due to the overwhelmingly positive reception we've received in
                Boulder, we've recently opened Link second location in the
                wonderful town of Arvada, CO. Find directions and information on
                our locations here.
              </p>

              <Link
                role="button"
                className="btn btn-lg btn-dark float-md-right mr-5 d-none d-sm-inline"
                href="locations.html"
              >
                Locations
              </Link>
            </div>
            <div className="col text-center">
              <div className="media">
                <img
                  className="d-flex mr-3 img-thumbnail border-0"
                  src="assets/images/gmaps.png"
                  width="400"
                  alt="Locations"
                />
              </div>
              <Link
                role="button"
                className="btn btn-lg btn-dark col-sm-ml-3 d-sm-none mt-3"
                href="locations.html"
              >
                Locations
              </Link>
            </div>
          </div>
        </FadeTransform>
      </div>
    </React.Fragment>
  );
}

export default About;
