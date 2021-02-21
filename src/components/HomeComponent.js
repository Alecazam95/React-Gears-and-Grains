// imports
import React from "react";
import { Button } from "reactstrap";
import Jumbo from "./JumbrotronComponent";
import { FadeTransform } from "react-animation-components";

function Home(props) {
  return (
    <React.Fragment>
      <Jumbo />
      <div className="container">
        <div className="row row-content align-items-center">
          <div className="col-sm-7">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "translateX(-100%)",
              }}
            >
              <h2>About us</h2>
              <p>
                We offer a hand-crafted selection of breads, breakfast and
                pizzas. We also have an array of draft beers from locally owned
                breweries. We started in Boulder, CO in 2018, and continue to
                branch into the greater-Denver metroplex. We now have 2
                locations and hope to have many more in the future!
              </p>
              <Button
                className="btn btn-lg btn-dark d-none d-sm-inline"
                href="/aboutus"
              >
                About Us
              </Button>
            </FadeTransform>
          </div>
          <div className="col text-center">
            <div className="media ml-2 ml-m-5">
              <FadeTransform in>
                <img
                  className="d-flex img-thumbnail ml-3 ml-lg-5 border-0"
                  src="/assets/images/logo.png"
                  width="300"
                  alt="About Us"
                />
              </FadeTransform>
            </div>
            <Button
              className="btn btn-lg btn-dark f-sm-ml-3 d-sm-none mt-3"
              href="/aboutus"
            >
              About Us
            </Button>
          </div>
        </div>

        <div className="row flex-row flex-row-reverse row-content align-items-center">
          <div className="col-sm-7 col-sm-text-right">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "translateX(200%)",
              }}
            >
              <h2>Our menu</h2>
              <p>
                All of our breads are made fresh every day. Our bread is created
                using only organic GMO free flours, water, sea salt, and organic
                levain starter. While it takes extra time from start to finish,
                our bread's flavor is worth the wait. Check out our menu below!
              </p>
              <Button
                color="dark"
                className="btn btn-lg float-md-right mr-5 d-none d-sm-inline"
                href="/menu"
              >
                Menu
              </Button>
            </FadeTransform>
          </div>
          <div className="col text-center">
            <div className="media">
              <FadeTransform in>
                <img
                  class="d-flex mr-3 img-thumbnail"
                  src="/assets/images/breadPatrickOne.jpg"
                  width="400"
                  alt="Locations"
                />
              </FadeTransform>
            </div>
            <Button
              color="dark"
              className="btn btn-lg float-md-right d-sm-none mt-3"
              href="menu.html"
            >
              Menu
            </Button>
          </div>
        </div>

        <FadeTransform
          in
          transformProps={{
            exitTransform: "translateY(75%)",
          }}
        >
          <div className="row row-content align-items-center">
            <div className="col-sm-7">
              <h2>Locations</h2>
              <p>
                Looking for more info on our locations? Click the link below!
              </p>
              <Button
                className="btn btn-lg btn-dark d-none d-sm-inline"
                href="/locations"
              >
                Locations
              </Button>
            </div>
            <div className="col text-center">
              <div className="media ml-m-5">
                <img
                  className="d-flex img-thumbnail ml-lg-5 border-0"
                  src="/assets/images/Locations.jpeg"
                  width="350"
                  alt="About Us"
                />
              </div>
              <Button
                className="btn btn-lg btn-dark col-sm-ml-3 d-sm-none mt-5"
                href="/locations"
              >
                Locations
              </Button>
            </div>
          </div>
        </FadeTransform>
      </div>
    </React.Fragment>
  );
}

export default Home;
