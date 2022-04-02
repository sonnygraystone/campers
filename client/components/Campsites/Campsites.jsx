import React, { useEffect, useState } from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import { getCampsite } from "../../api";
import { Link } from "react-router-dom";

export default function Campsites() {
  const [campsites, setCampsites] = useState();
  const [filteredSites, setFilteredSites] = useState();

  useEffect(() => {
    getCampsite().then((sites) => {
      setCampsites(sites);
    });
  }, []);

  const handleChange = (evt) => {
    const selectedRegion = evt.currentTarget.value;
    const result = campsites.filter(
      (currentCampsite) => currentCampsite.region === selectedRegion
    );
    setFilteredSites(result);
  };

  return (
    <div className="app-container">
      <header className="App-header"></header>
      <h1 className="app-title">Welcome to happy-Camper! ⛺️</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form className="form-group" size="sm">
              <Form.Group controlId="formLocation">
                <Form.Label className="form-wording">
                  Please select your Region :
                </Form.Label>
                <select
                  className="form-select form-select-lg mb-3 mt-2"
                  id="dropdown-button-dark-example2"
                  aria-label=".form-select-lg example"
                  onChange={handleChange}
                >
                  <option defaultChecked="Wellington/Kapiti">
                    Please select your region
                  </option>
                  <option value="Marlborough">Marlborough</option>
                  <option value="Nelson/Tasman">Nelson/Tasman</option>
                  <option value="Manawatu/Whanganui">Manawatu/Whanganui</option>
                  <option value="Canterbury">Canterbury</option>
                  <option value="Central North Island">
                    Central North Island
                  </option>
                  <option value="West Coast">West Coast</option>
                  <option value="Waikato">Waikato</option>
                  <option value="Coromandel">Coromandel</option>
                  <option value="Auckland">Auckland</option>
                  <option value="Wellington/Kapiti">Wellington/Kapiti</option>
                  <option value="West Coast">West Coast</option>
                  <option value="Bay of Plenty">Bay of Plenty</option>
                  <option value="Northland">Northland</option>
                  <option value="EaHawke’s Bayst Coast">Hawke’s Bay</option>
                  <option value="Southland">Southland</option>
                  <option value="Otago">Otago</option>
                  <option value="East Coast">East Coast</option>
                  <option value="Wairarapa">Wairarapa</option>
                  <option value="Fiordland">Fiordland</option>
                </select>
              </Form.Group>
            </Form>
            <ul className="text">
              {filteredSites
                ? filteredSites.map((eachSite) => {
                    return (
                      <Link to={`/${eachSite.assetId}`}>
                        <li key={eachSite.name} className="links">{eachSite.name}</li>
                      </Link>
                    );
                  })
                : null}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
