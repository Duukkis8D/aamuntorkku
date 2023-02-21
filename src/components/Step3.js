import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import GenericSelect from './GenericSelect';

const options = [
    { value: 'testi1', label: 'testi 1' },
    { value: 'testi2', label: 'testi 2' },
    { value: 'testi3', label: 'testi 3' }
];

export default function Step3({ formData, handleChangeReactSelect }) {
    return (
        <Row id="step-3-page" className="h-50">
            <Col>
                <Form.Group>
                    <Form.Label htmlFor="step3ReactSelect" className="h1">
                        Mikä seuraavista vaihtoehdoista kuvaa parhaiten tilannetta, jossa makaat
                        sängyssä ja mietit ylös nousemista?
                    </Form.Label>
                    <GenericSelect
                        name="step3ReactSelect"
                        placeholder="Valitse yksi"
                        options={options}
                        defaultValue={formData.step3ReactSelect}
                        onChange={(selectOption) =>
                            handleChangeReactSelect('step3ReactSelect', selectOption)
                        }></GenericSelect>
                </Form.Group>
            </Col>
        </Row>
    );
}
