import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import snoozeLogo from '../images/snooze.png';

export default function LandingPage({ nextPhase }) {
    return (
        <Row id="landing-page" className="d-flex align-items-center text-center min-vh-100">
            <Col>
                <img src={snoozeLogo} width="100px" className="mb-4" />
                <h1 className="mb-5">Kuinka aamuntorkku olet?</h1>
                <p className="mb-3">Tee tämä testi niin tiedät!</p>
                <Button variant="primary" onClick={() => nextPhase()}>
                    Tee testi
                </Button>
            </Col>
        </Row>
    );
}
