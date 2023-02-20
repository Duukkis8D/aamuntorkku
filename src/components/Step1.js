import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

export default function Step1() {
    return (
        <Row id="step-1-page" className="h-50">
            <Col>
                <Form.Group>
                    <Form.Label htmlFor="step1RadioButton" className="h1">
                        Kuinka monta herätyskelloa tarvitset herätäksesi?
                    </Form.Label>

                    <Form.Check
                        type="radio"
                        name="step1RadioButton"
                        id="step1RadioButton1"
                        label="1"
                    />
                    <Form.Check
                        type="radio"
                        name="step1RadioButton"
                        id="step1RadioButton2"
                        label="2"
                    />
                    <Form.Check
                        type="radio"
                        name="step1RadioButton"
                        id="step1RadioButton3"
                        label="3 tai enemmän"
                    />
                </Form.Group>
            </Col>
        </Row>
    );
}
