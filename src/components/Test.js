import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

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
            default:
                console.error('Could not show test steps.');
        }
    };

    const renderNavigation = () => {
        return (
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
        );
    };

    return (
        <>
            {currentStep > 0 && (
                <Button variant="outline-dark" onClick={() => startOver()}>
                    Aloita uudestaan
                </Button>
            )}
            {renderStep()}
            {renderNavigation()}
        </>
    );
}
