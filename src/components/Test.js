import Step1 from './Step1';
import Step2 from './Step2';

export default function Test({ currentStep }) {
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            default:
                console.error('Could not show test steps.');
        }
    };

    return renderStep();
}
