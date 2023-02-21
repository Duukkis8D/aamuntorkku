import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

export default function Step2({ formData, handleChange }) {
    return (
        <Row id="step-2-page" className="h-50">
            <Col>
                <Form.Group>
                    <Form.Label htmlFor="step2RadioButton" className="h1">
                        Tarvitsetko herätyskellon lisäksi myös jonkun elävän olennon tökkimään sinut
                        hereille?
                    </Form.Label>
                    <Form.Check
                        type="radio"
                        name="step2RadioButton"
                        id="step2RadioButtonNo"
                        label="ei"
                        value="ei"
                        onChange={(event) => handleChange('step2RadioButton', event.target.value)}
                        checked={formData.step2RadioButton === 'ei'}
                    />
                    <Form.Check
                        type="radio"
                        name="step2RadioButton"
                        id="step2RadioButtonYes"
                        label="kyllä"
                        value="kyllä"
                        onChange={(event) => handleChange('step2RadioButton', event.target.value)}
                        checked={formData.step2RadioButton === 'kyllä'}
                    />
                </Form.Group>
            </Col>
        </Row>
    );
}
