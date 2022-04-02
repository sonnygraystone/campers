import React, { useState, useEffect } from "react";
import { showIndividualCampsite } from "../../api";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Individualsite() {
  const [selectedSite, setSelectedSite] = useState({});

  const { id } = useParams();

  useEffect(() => {
    showIndividualCampsite(id).then((site) => {
      setSelectedSite(site);
    });
  }, []);

  console.log({ selectedSite });

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" className="app-title">
          <h1> {selectedSite.name}</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <img src={selectedSite.introductionThumbnail} alt="Site photo" />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className="text">
          {selectedSite.locationString}
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col md="auto">
          <p className="text">Dogs allowed: {selectedSite.dogsAllowed}</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p className="text">
            Number of available campsites: {selectedSite.numberOfUnpoweredSites}
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>
            <a href={selectedSite.staticLink}>Link to doc site</a>
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p className="text">
            coorindates: {selectedSite.x} / {selectedSite.y}
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p className="text"> Facilities - {selectedSite.facilities}</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button variant="light">
            <Link to={`/`} className="link">
              Back to Home
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
