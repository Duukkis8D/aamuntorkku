import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import GenericSelect from './GenericSelect';

const options = [
    {
        value: 'hypinSeinille',
        label: 'Hypin seinille ja huudan: Kuka on päättänyt, ettei töihin voi mennä jo kuudeksi!'
    },
    {
        value: 'tanssinHuoneesta',
        label: 'Tanssin huoneesta toiseen lempikappalettani hyräillen.'
    },
    {
        value: 'välilläTulee',
        label: 'Välillä tulee jotain energiapurkauksia, jotka pistää raajoihin liikettä ja voitelee ajattelurajapintaa, mutta sitten alankin keittämään kahvia teelehdistä.'
    },
    {
        value: 'seOnSellainen',
        label: 'Se on sellainen sopiva tasapaino laahustamisen ja ryömimisen välillä.'
    },
    {
        value: 'kylläSePitkälti',
        label: 'Kyllä se pitkälti nelinkontin menee sängystä ulko-ovelle asti.'
    }
];

export default function Step4({ formData, handleChangeReactSelect }) {
    return (
        <Row id="step-4-page" className="h-50">
            <Col>
                <Form.Group>
                    <Form.Label htmlFor="step4ReactSelect" className="h1">
                        Mikä seuraavista vaihtoehdoista kuvaa parhaiten liikettäsi aamuaskareissasi?
                    </Form.Label>
                    <GenericSelect
                        name="step4ReactSelect"
                        placeholder="Valitse yksi"
                        options={options}
                        defaultValue={formData.step4ReactSelect}
                        onChange={(selectOption) =>
                            handleChangeReactSelect('step4ReactSelect', selectOption)
                        }></GenericSelect>
                </Form.Group>
            </Col>
        </Row>
    );
}
