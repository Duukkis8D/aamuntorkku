import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import LandingPage from './components/LandingPage';
import Test from './components/Test';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

export default function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 2;

    const startOver = () => {
        setCurrentStep(0);
    };

    const nextPhase = () => {
        setCurrentStep(currentStep + 1);
    };

    const previousPhase = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className="App">
            <Container className="p-2 border border-2">
                {/* Use Form component from react-bootstrap.
                 */}
                {currentStep > 0 && (
                    <Button variant="outline-dark" onClick={() => startOver()}>
                        Alkuun
                    </Button>
                )}

                {currentStep === 0 && <LandingPage nextPhase={nextPhase} />}
                {currentStep > 0 && <Test currentStep={currentStep} />}

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
                    {currentStep === totalSteps && <Button variant="success">Lähetä</Button>}
                </Stack>
            </Container>
        </div>
    );
}
