import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

import fileCV from "../../assets/fileCV/CV_satria.pdf"

export const About = () => {

  const handleDownload = () => {
    const cvUrl = fileCV; 
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_SatriaNugrahaSaputra.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 align-items-center g-4">
          <Col sm="8" xs="6">
            <h1 className="display-4">About me</h1>
            
          </Col>
          <Col sm="4" xs="6">
          <button className="btn btn_cv" onClick={handleDownload}>
            Download CV
          </button>
          </Col>
          <hr className="t_border m2-0 text-left" />
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Internship Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {Object.entries(skills).map(([category, skillList], i) => (
              <div key={i} className="mb-4">
                <h5 className="fw-bold text-warning">{category}</h5>
                {skillList.map((skill, j) => (
                  <div key={j}>
                    <h6 className="progress-title">{skill.name}</h6>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.value}%` }}
                      >
                        <div className="progress-value">{skill.value}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
