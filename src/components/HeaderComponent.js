import React, { Component } from "react";
import {
  Nav,
  Col,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Form,
  Card,
  Input,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { MENU } from "../shared/menu";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: MENU,
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light fixed="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-4" href="/">
              <img
                src="/assets/images/logo.png"
                height="50"
                width="50"
                alt="G&G Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <g>About Us</g>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <g>Our Menu</g>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/locations">
                    <g>locations</g>
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text ml-auto">
                <Button color="dark" size="lg" onClick={this.toggleModal}>
                  <i className="fa fa-shopping-cart fa-lg" /> Order Now
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Order Now</ModalHeader>
          <div className="row row-content">
            <div className="col">
              <h3 className="text-center">Pizzas</h3>
              <hr className="accent my-3" />
              <Form onSubmit={this.handleSubmit}>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/margPizza.jpg"
                      height="100"
                      alt="Pepperoni Pizza"
                    />
                    <Label htmlFor="Margherita Pizza" xs={4}>
                      Margherita Pizza
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/pepPizza.jpg"
                      height="100"
                      alt="Pepperoni Pizza"
                    />
                    <Label htmlFor="Pepperoni Pizza" xs={4}>
                      Pepperoni Pizza
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/meatLovers.jpg"
                      height="100"
                      alt="Meat Lovers Pizza"
                    />
                    <Label htmlFor="Meat Lovers Pizza" xs={4}>
                      Meat Lovers Pizza
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/barbChicken.jpg"
                      height="100"
                      width="100"
                      alt="Barbeque Chicken"
                    />
                    <Label htmlFor="Barbeque Chicken" xs={4}>
                      Barbeque Chicken
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/vegPizza.jpg"
                      height="100"
                      width="100"
                      alt="Vegetarian"
                    />
                    <Label htmlFor="Vegetarian" xs={4}>
                      Vegetarian
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/hawaiianPizza.jpg"
                      height="100"
                      width="100"
                      alt="Hawaiian"
                    />
                    <Label htmlFor="Hawaiian" xs={4}>
                      Hawaiian
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <hr className="accent my-3" />
                <h3 className="text-center">Breads</h3>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/breadPatrickFour.jpg"
                      height="100"
                      width="100"
                      alt="Sourdough Loaf"
                    />
                    <Label htmlFor="Sourdough Loaf" xs={4}>
                      Loaf of Sourdough
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/bagel.jpg"
                      height="100"
                      width="100"
                      alt="Breakfast Bagel"
                    />
                    <Label htmlFor="Breakfast Bagel" xs={4}>
                      Breakfast Bagel
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/breadPatrickThree.jpg"
                      height="100"
                      width="100"
                      alt="English Muffin"
                    />
                    <Label htmlFor="English Muffin" xs={4}>
                      English Muffin
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <hr className="accent my-3" />
                <h3 className="text-center">Beverages</h3>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/cokeCan.jpg"
                      height="100"
                      width="100"
                      alt="Soft Drink"
                    />
                    <Label htmlFor="Soft Drink" xs={4}>
                      Soft Drink
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                      <Input type="select">
                        <option>Type...</option>
                        <option>Coke</option>
                        <option>Sprite</option>
                        <option>Diet Coke</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <Card>
                  <FormGroup row className="justify-content-center">
                    <img
                      src="/assets/images/water.jpg"
                      height="100"
                      width="100"
                      alt="Bottled Water"
                    />
                    <Label htmlFor="Bottled Water" xs={4}>
                      Bottled Water
                    </Label>
                    <Col xs={4} md={3}>
                      <Input type="select">
                        <option>Select...</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                        <option>Four</option>
                        <option>Five</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Card>
                <hr className="accent my-3" />
                <div className="container">
                  <div className="row form-group ">
                    <div className="col d-flex justify-content-center">
                      <Button type="submit" color="dark" size="lg">
                        Place Order
                      </Button>
                    </div>
                  </div>
                  <div className="row form-group ">
                    <div className="col d-flex justify-content-center">
                      Ordering for a large group? Call us at 1-800-555-5555.
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
