import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LandingPage from './components/LandingPage';
import Test from './components/Test';

import './styles/App.scss';

export default function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 3;
    const [formData, setFormData] = useState({});

    const startOver = () => {
        setCurrentStep(0);
    };

    const nextPhase = () => {
        setCurrentStep(currentStep + 1);
    };

    const previousPhase = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeReactSelect = (optionName, optionComponent) => {
        setFormData({
            ...formData,
            [optionName]: { label: optionComponent.label, value: optionComponent.value }
        });
    };

    return (
        <div className="App">
            <Container className="p-2 border border-2">
                <Form>
                    {currentStep > 0 && (
                        <Button variant="outline-dark" onClick={() => startOver()}>
                            Aloita uudestaan
                        </Button>
                    )}

                    {currentStep === 0 && <LandingPage nextPhase={nextPhase} />}
                    {currentStep > 0 && (
                        <Test
                            currentStep={currentStep}
                            formData={formData}
                            handleChange={handleChange}
                            handleChangeReactSelect={handleChangeReactSelect}
                        />
                    )}

                    <Stack direction="horizontal" gap={3}>
                        {currentStep > 1 && (
                            <Button variant="secondary" onClick={() => previousPhase()}>
                                Edellinen
                            </Button>
                        )}
                        {currentStep >= 1 && currentStep < totalSteps && (
                            <Button variant="primary" onClick={() => nextPhase()}>
                                Seuraava
                            </Button>
                        )}
                        {currentStep === totalSteps && (
                            <Button variant="success" type="submit">
                                Lähetä
                            </Button>
                        )}
                    </Stack>
                </Form>
            </Container>
        </div>
    );
}
