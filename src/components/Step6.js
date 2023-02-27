import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

export default function Step6({ formData, handleChange }) {
    return (
        <Row id="step-6-page" className="h-50">
            <Col>
                <Form.Group>
                    <Form.Label htmlFor="step6RadioButton" className="h1">
                        Kuinka paljon olet myöhässä töistä?
                    </Form.Label>
                    <Form.Check
                        type="radio"
                        name="step6RadioButton"
                        id="step6RadioButton0"
                        label="0 min"
                        value="0"
                        onChange={(event) => handleChange('step6RadioButton', event.target.value)}
                        checked={formData.step6RadioButton === '0'}
                    />
                    <Form.Check
                        type="radio"
                        name="step6RadioButton"
                        id="step6RadioButton1"
                        label="5 min"
                        value="5"
                        onChange={(event) => handleChange('step6RadioButton', event.target.value)}
                        checked={formData.step6RadioButton === '5'}
                    />
                    <Form.Check
                        type="radio"
                        name="step6RadioButton"
                        id="step6RadioButton2"
                        label="15 min"
                        value="15"
                        onChange={(event) => handleChange('step6RadioButton', event.target.value)}
                        checked={formData.step6RadioButton === '15'}
                    />
                    <Form.Check
                        type="radio"
                        name="step6RadioButton"
                        id="step6RadioButton3"
                        label="30 min"
                        value="30"
                        onChange={(event) => handleChange('step6RadioButton', event.target.value)}
                        checked={formData.step6RadioButton === '30'}
                    />
                    <Form.Check
                        type="radio"
                        name="step6RadioButton"
                        id="step6RadioButton4"
                        label="yli 30 min"
                        value="yli 30 min"
                        onChange={(event) => handleChange('step6RadioButton', event.target.value)}
                        checked={formData.step6RadioButton === 'yli 30 min'}
                    />
                </Form.Group>
            </Col>
        </Row>
    );
}
