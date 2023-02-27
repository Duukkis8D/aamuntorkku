import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import GenericSelect from './GenericSelect';

const options = [
    {
        value: 'jesUlkonaOn',
        label: 'Jes, ulkona on vielä pimeää. Nousen nyt ylös eli taidan olla energisempi kuin aurinko!'
    },
    { value: 'oijoiLinnut', label: 'Oijoi! Linnut alkoivat laulaa. Kukakohan siellä visertää?' },
    { value: 'jalkaniEivät', label: 'Jalkani eivät liiku, kuka auttaisi minut ylös?' }
];

export default function Step3({ formData, handleChangeReactSelect }) {
    return (
        <Row id="step-3-page" className="h-50">
            <Col>
                <Form.Group>
                    <Form.Label htmlFor="step3ReactSelect" className="h1">
                        Mikä seuraavista vaihtoehdoista kuvaa parhaiten tilannetta, jossa makaat
                        sängyssä ja olisi aika nousta ylös?
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
