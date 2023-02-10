import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default function Test({ currentStep, formData, handleChange, handleChangeReactSelect }) {
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

    return renderStep();
}
