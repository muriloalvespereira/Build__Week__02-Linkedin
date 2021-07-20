import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../Styles/Sara.css";

const Featured = () => {
  return (
    <Container className="featured">
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <div>
            <h2 className="featured-h2 ">Featured</h2>
          </div>
          <div className="d-flex align-items-center">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="mercado-match"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 2L9.5 12 17 22h-2.5L7 12l7.5-10z"></path>
              </svg>
            </div>
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="mercado-match"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M9.5 2L17 12 9.5 22H7l7.5-10L7 2z"></path>
              </svg>
            </div>
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
              </svg>
            </div>
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
              </svg>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <img
            src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-97a93eda-3de1-4b7f-b375-b19272847b05.png"
            alt=""
            className="img-fluid"
          />
          <div className="featured-col">
            <p className="feautured-certificate-p1 mb-0 ">
              Certificate - Sara Salomon Hailu - Strive School
            </p>
            <span className="feautured-certificate-span">Strive School</span>
            <p className="feautured-certificate-p2">
              Certificate released to Sara Salomon Hailu for the completion of
              Strive Scho..
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <img
            src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-97a93eda-3de1-4b7f-b375-b19272847b05.png"
            alt=""
            className="img-fluid"
          />
          <div className="featured-col">
            <p className="feautured-certificate-p1 mb-0 ">
              Certificate - Sara Salomon Hailu - Strive School
            </p>
            <span className="feautured-certificate-span">Strive School</span>
            <p className="feautured-certificate-p2">
              Certificate released to Sara Salomon Hailu for the completion of
              Strive Scho..
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Featured;
