import React from "react";
import ItemCarousel from "./CarouselComponent";
import { Card, CardColumns, CardBody } from "reactstrap";
import { FadeTransform } from "react-animation-components";

function Menu(props) {
  return (
    <React.Fragment>
      <div className="container">
        <FadeTransform in>
          <ItemCarousel />
        </FadeTransform>
        <FadeTransform
          in
          transformProps={{
            exitTransform: "translateY(75%)",
          }}
        >
          <div className="col mt-4">
            <hr className="accent my-3" />
            <h3 className="text-center">Pizzas</h3>
          </div>
          <CardColumns>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$10</span>
                <h6>Margherita Pizza</h6>
                <p className="small">
                  Fresh basil, olive oil, and Roma tomatos on our signature
                  sauce.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$11</span>
                <h6>Pepperoni Pizza</h6>
                <p className="small">
                  Pepperoni and mozzarella on our signature sauce.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$14</span>
                <h6>Meat Lovers Pizza</h6>
                <p className="small">
                  {" "}
                  Pepperoni, savory sausage, beef, and Canadian bacon all topped
                  with mozzarella.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$12</span>
                <h6>Vegetarian Pizza</h6>
                <p className="small">
                  Green bell peppers, onions, mushrooms, black olives, and
                  tomatoes, all topped with mozzarella.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$14</span>
                <h6>Hawaiian Pizza</h6>
                <p className="small">
                  Pineapple, Canadian bacon, and three-cheese blend on our
                  signature sauce.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$15</span>
                <h6>Barbeque Chicken</h6>
                <p className="small">
                  Smothered in smoky BBQ sauce, then topped with grilled
                  chicken, hickory-smoked bacon, mozzarella, and fresh-cut
                  onions.
                </p>
              </CardBody>
            </Card>
          </CardColumns>
        </FadeTransform>
        <FadeTransform
          in
          transformProps={{
            exitTransform: "translateY(75%)",
          }}
        >
          <div className="col mt-2">
            <hr className="accent my-3" />
            <h3 className="text-center">Breads</h3>
          </div>
          <CardColumns>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$6</span>
                <h6>Sourdough Loaf</h6>
                <p className="small">A loaf of our sourdough.</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$4</span>
                <h6>Breakfast Bagel</h6>
                <p className="small">
                  Our same sourdough recipe, but in breakfast form.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$4</span>
                <h6>English Muffin</h6>
                <p className="small">
                  Sourdough english muffin with your choice of jam or jelly.
                </p>
              </CardBody>
            </Card>
          </CardColumns>
        </FadeTransform>

        <FadeTransform
          in
          transformProps={{
            exitTransform: "translateY(75%)",
          }}
        >
          <div className="col mt-2">
            <hr className="accent my-3" />
            <h3 className="text-center">Beverages</h3>
          </div>
          <CardColumns>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$2</span>
                <h6>Soft Drink</h6>
                <p className="small">A can of Coke, Sprite, or Diet Coke</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$1</span>
                <h6>Bottled Water</h6>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <span className="float-right font-weight-bold">$6</span>
                <h6>Draft Beer - 20oz</h6>
                <p className="small">
                  Colorado Lager, Vienna Folksbeir, IPA, or Nitro Milk Stout all
                  from local breweries.
                </p>
              </CardBody>
            </Card>
          </CardColumns>
        </FadeTransform>
        <hr className="accent my-3" />
      </div>
    </React.Fragment>
  );
}

export default Menu;
