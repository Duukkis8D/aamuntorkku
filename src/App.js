import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import LandingPage from './components/LandingPage';
import Test from './components/Test';

import './styles/App.scss';

export default function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 5;
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
            <Container className="p-2 min-vh-100">
                <Container className="p-3 border border-primary border-3 rounded">
                    <Form>
                        {currentStep === 0 && <LandingPage nextPhase={nextPhase} />}
                        {currentStep > 0 && (
                            <Test
                                currentStep={currentStep}
                                totalSteps={totalSteps}
                                nextPhase={nextPhase}
                                previousPhase={previousPhase}
                                startOver={startOver}
                                formData={formData}
                                handleChange={handleChange}
                                handleChangeReactSelect={handleChangeReactSelect}
                            />
                        )}
                    </Form>
                </Container>
            </Container>
        </div>
    );
}
