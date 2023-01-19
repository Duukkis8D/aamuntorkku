import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function LandingPage({ nextPhase }) {
    return (
        <Row className="d-flex align-items-center text-center viewport-height-100">
            <Col>
                <h1 className="mb-5">Kuinka aamuntorkku olet?</h1>
                <p className="mb-3">Tee tämä testi niin tiedät!</p>
                <Button variant="primary" onClick={() => nextPhase()}>
                    Tee testi
                </Button>
            </Col>
        </Row>
    );
}
