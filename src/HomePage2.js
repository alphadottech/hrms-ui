import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Hrmscss/homepage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers, faMoneyBillAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';



function HomePage2() {
  return (
    <>
      <Container fluid className="d-flex flex-column min-vh-100">
        <Row className="header-section bg-dark text-white py-3">
          <Col className="text-center">
            <h2 className="display-4">Welcome to the Human Resource Management System</h2>
            <p className="lead">Manage your employees and resources with ease</p>
          </Col>
        </Row>
        <Row className="body-section py-3">
          <Col>
            <h3 className="mb-4 features ">Features</h3>

            <Row>
              <Col md={6} lg={3} className="mb-4">
                <Card className="leave-card">
                  <Card.Body>
                    <div className="leave-icon">
                    <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <Card.Title className="leave-title" >Employee Management</Card.Title>
                    <Card.Text>
                      Keep track of your employees' personal and professional
                      information, manage their performance, and track their
                      training and development.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3} className="mb-4">
                <Card className="leave-card">
                  <Card.Body>
                    <div className="leave-icon">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>

                    <Card.Title className="leave-title">Attendance Management</Card.Title>
                    <Card.Text>
                      Manage your employees' attendance, including their work
                      hours, breaks, and absences, and ensure compliance with
                      labor laws and regulations.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3} className="mb-4">
                <Card className="leave-card">
                  <Card.Body>
                    <div className="leave-icon">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <Card.Title className="leave-title">Leave Management</Card.Title>
                    <Card.Text>
                      Allow your employees to request time off and manage their leave
                      balances, while ensuring adequate staffing levels and compliance with
                      company policies.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>


              <Col md={6} lg={3} className="mb-4">
                <Card className="leave-card">
                  <Card.Body>
                    <div className="leave-icon">
                    <FontAwesomeIcon icon={faMoneyBillAlt} />
                    </div>
                    <Card.Title className="leave-title">Payroll Management</Card.Title>
                    <Card.Text>
                      Streamline your payroll processes, including calculating salaries and wages, tracking employee deductions and benefits, and generating paychecks and reports.

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Row>

        </Col>
        </Row>
        <Row className="footer-section bg-dark text-white py-3 mt-auto">
          <Col className="text-center">
            <p className="mb-0">© 2023 HUMAN RESOURCE MANAGEMENT SYSTEM</p>
          </Col>
        </Row>
      </Container>
    </>
  );


}

export default HomePage2;

