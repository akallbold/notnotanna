import { constants } from "data/constants";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "reactstrap";

function FunStuffSection() {
  return (
    <>
      <div className="section section-examples section-white" id="examples">
        <Container>
          <Row>
            <div className="title text-center">
              <h2 className="title">Fun Stuff!</h2>
              <h5 className="description">
              Here are some projects I've worked on. They stem from wanting to learn new technologies for work to pure whimsy. Enjoy!

              </h5>
            </div>
          </Row>
          <Row>
            <Col md="4">
            <a
                    href={constants.theHundredYearsURL}
                    target="_blank"
                    className="mr-1"
                  >
              <div className="details-text">The Hundred Years</div>
              <Card className="card-image card-hover-effect">
                {/* <Link to="/twitter-redesign" target="_blank"> */}
                  <img
                    alt="Sad looking github sign"
                    src={require("assets/img/github-cover copy.JPG")}
                  />
                {/* </Link> */}
              </Card>
              </a>
              <div className="details-text">Error Pages</div>
              <Card className="card-image">
                <Link to="/error-422" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/422.png")}
                  />
                </Link>
              </Card>
              {/* <div className="details-text">Discover Page</div>
              <Card className="card-image">
                <Link to="/discover" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/discover.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Login Page</div>
              <Card className="card-image">
                <Link to="/login-page" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/login-page.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Blog Post</div>
              <Card className="card-image">
                <Link to="/blog-post" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/blog-post.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">User Settings</div>
              <Card className="card-image">
                <Link to="/settings" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/settings.png")}
                  />
                </Link>
              </Card> */}
            </Col>
            <Col md="4">
              <div className="details-text">Marcus Aurelius Haiku Generator</div>
              <Card className="card-image">
                <Link to="/meditations" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/register.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Falling Resume</div>
              <Card className="card-image">
                <Link to="/profile-page" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/profile.png")}
                  />
                </Link>
              </Card>
              {/* <div className="details-text">Product Page</div>
              <Card className="card-image">
                <Link to="/product-page" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/product.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Contact Us</div>
              <Card className="card-image">
                <Link to="/contact-us" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/contact-us.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Search Page</div>
              <Card className="card-image">
                <Link to="/search-with-sidebar" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/search.png")}
                  />
                </Link>
              </Card> */}
              <div className="details-text">My favorite things</div>
              <Card className="card-image">
                <Link to="/error-404" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/404.png")}
                  />
                </Link>
              </Card>
              {/* <div className="details-text">Add Product Page</div>
              <Card className="card-image">
                <Link to="/add-product" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/add-product.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">About Us</div>
              <Card className="card-image card-hover-effect">
                <Link to="/about-us" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/about-us.png")}
                  />
                </Link>
              </Card> */}
            </Col>
            <Col md="4">
              <div className="details-text">iOS Sticker App</div>
              <Card className="card-image">
                <Link to="/blog-posts" target="_blank">
                  <img
                    alt="Two octopi pair programming"
                    src={require("assets/img/Pair_Programming.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Design Pet Peeves</div>
              <Card className="card-image">
                <Link to="/design" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/500.png")}
                  />
                </Link>
              </Card>
              {/* <div className="details-text">Landing Page</div>
              <Card className="card-image">
                <Link to="/landing-page" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/landing.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Ecommerce Page</div>
              <Card className="card-image">
                <Link to="/e-commerce" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/ecommerce.png")}
                  />
                </Link>
              </Card>
              <Card className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/examples/more-brown.png")}
                />
              </Card> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FunStuffSection;
