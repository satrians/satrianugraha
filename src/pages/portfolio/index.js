import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const Portfolio = () => {
  const [show, setShow] = useState(false);

  const limitPortfolio = show ? dataportfolio : dataportfolio.slice(0, 6);
  const handleShowMore = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {limitPortfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-sm show_btn d-flex flex-column align-items-center"
            onClick={handleShowMore}
          >
            <span>{show ? "Show Less" : "Show More"}</span>
            {show ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
      </Container>
    </HelmetProvider>
  );
};
