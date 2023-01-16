import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <h1>Kuinka aamuntorkku olet?</h1>
                    <h2>Tee tämä testi niin tiedät!</h2>
                    <Button variant="primary">Tee testi</Button>
                </Row>
            </Container>
        </div>
    );
}

export default App;
