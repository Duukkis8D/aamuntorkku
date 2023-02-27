import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

export default function Step5({ formData, handleChange }) {
    return (
        <Row id="step-5-page" className="h-50">
            <Col>
                <Form.Group>
                    <Form.Label htmlFor="step5RadioButton" className="h1">
                        Kuinka paljon ehdit juoda tee- tai kahvikupistasi, joka jäi eteisen
                        kenkähyllylle kenkiä pukiessasi?
                    </Form.Label>
                    <Form.Check
                        type="radio"
                        name="step5RadioButton"
                        id="step5RadioButton0"
                        label="100 %"
                        value="100"
                        onChange={(event) => handleChange('step5RadioButton', event.target.value)}
                        checked={formData.step5RadioButton === '100'}
                    />
                    <Form.Check
                        type="radio"
                        name="step5RadioButton"
                        id="step5RadioButton1"
                        label="75 %"
                        value="75"
                        onChange={(event) => handleChange('step5RadioButton', event.target.value)}
                        checked={formData.step5RadioButton === '75'}
                    />
                    <Form.Check
                        type="radio"
                        name="step5RadioButton"
                        id="step5RadioButton2"
                        label="50 %"
                        value="50"
                        onChange={(event) => handleChange('step5RadioButton', event.target.value)}
                        checked={formData.step5RadioButton === '50'}
                    />
                    <Form.Check
                        type="radio"
                        name="step5RadioButton"
                        id="step5RadioButton3"
                        label="25 %"
                        value="25"
                        onChange={(event) => handleChange('step5RadioButton', event.target.value)}
                        checked={formData.step5RadioButton === '25'}
                    />
                    <Form.Check
                        type="radio"
                        name="step5RadioButton"
                        id="step5RadioButton4"
                        label="0 %"
                        value="0"
                        onChange={(event) => handleChange('step5RadioButton', event.target.value)}
                        checked={formData.step5RadioButton === '0'}
                    />
                </Form.Group>
            </Col>
        </Row>
    );
}
