import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

export default function Test({
    currentStep,
    totalSteps,
    previousPhase,
    nextPhase,
    startOver,
    formData,
    handleChange,
    handleChangeReactSelect
}) {
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 formData={formData} handleChange={handleChange} />;
            case 2:
                return <Step2 formData={formData} handleChange={handleChange} />;
            case 3:
                return (
                    <Step3 formData={formData} handleChangeReactSelect={handleChangeReactSelect} />
                );
            case 4:
                return (
                    <Step4 formData={formData} handleChangeReactSelect={handleChangeReactSelect} />
                );
            default:
                console.error('Could not show test steps.');
        }
    };

    const renderNavigation = () => {
        return (
            <Stack
                direction="horizontal"
                gap={3}
                id="navigation-menu"
                className="d-flex align-items-end justify-content-center h-25">
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
        );
    };

    return (
        <Row id="test-page" className="d-flex col-sm-11 col-lg-8 mx-auto min-vh-100">
            <Col>
                {currentStep > 0 && (
                    <Stack
                        direction="horizontal"
                        id="start-over-button"
                        className="d-flex align-items-start justify-content-end h-25">
                        <Button variant="outline-dark" onClick={() => startOver()}>
                            Aloita uudestaan
                        </Button>
                    </Stack>
                )}
                {renderStep()}
                {renderNavigation()}
            </Col>
        </Row>
    );
}
