import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Container>
                <Row className="d-flex align-items-center viewPortHeight100">
                    <Col>
                        <h1>Kuinka aamuntorkku olet?</h1>
                        <p>Tee tämä testi niin tiedät!</p>
                        <Button variant="primary">Tee testi</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
