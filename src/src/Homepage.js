import { Container, Row, Col } from "react-bootstrap";
import './App.css';
const HRMSHomepage = () => {
    return (
        <>
            <Container fluid className="d-flex flex-column min-vh-100">
             
                <Row className="header-section bg-dark text-white py-3">
                    <Col className="text-center">
                        <h2>Welcome to the Human Resource Management System</h2>
                        <p>Manage your employees and resources with ease</p>
                    </Col>
                </Row>
            
                  <Row className="body-section py-5">
                    <Col>
                        <h3>Features</h3>
                        <ol>
                            <li>Employee Management</li>
                            <li>Attendance Management</li>
                            <li>Leave Management</li>
                            <li>Payroll Management</li>
                        </ol>
                    </Col>
                </Row>
                <Row className="footer-section bg-dark text-white py-3 mt-auto">
                    <Col className="text-center">
                        <p>Copyright © HUMAN RESOURCE MANAGEMENT SYSTEM</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HRMSHomepage;

