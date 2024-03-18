import { useEffect, useRef, useState } from 'react';
import Select from 'react-select';



const SignupModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 1; // Adjusted to match the total number of steps

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne nextStep={nextStep} />;

      default:
        return null;
    }
  };

  const getStepName = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return "Signup";

      default:
        return "Unknown Step";
    }
  };

  return (
    <div className="absolute top-12 md:top-0 bottom-0  left-0 right-0 flex items-center justify-center bg-transparent bg-opacity-80 px-4">
      <div className="bg-[#2d2d2d] border-gray-600 w-full max-w-[900px] h-[680px] md:h-[700px] p-4 rounded-xl shadow-lg flex flex-col overflow-x-auto">
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 cursor-pointer"
            onClick={onClose}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="flex justify-center text-white">
          <h2 className="text-2xl mb-4">
            {getStepName(step)} {step}/{totalSteps}
          </h2>
        </div>
        {renderStep()}
        <div className="flex justify-center mt-auto">
          {step !== 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded inline-flex items-center mr-2"
            >
              Back
            </button>
          )}
          {step !== totalSteps ? (
            <button
              onClick={nextStep}
              className="bg-[#21c55e] hover:bg-[#388153] hover:duration-300 text-white font-bold py-2 px-6 rounded inline-flex items-center"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-[#21c55e] hover:bg-[#388153] text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>


  );
};







const StepOne = ({ nextStep }) => {
  const [activeButton, setActiveButton] = useState('creator');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  // Text explanations for Creator and Client
  const creatorText = "Creators are individuals or entities that produce content, such as writers, artists, designers, or developers. They are responsible for generating original work.";
  const clientText = "Clients are individuals or organizations that seek services or products from creators. They may commission work, purchase licenses, or collaborate with creators to fulfill their needs.";

  // Determine which text to display based on activeButton state
  const activeText = activeButton === 'creator' ? creatorText : clientText;

  return (
    <div className='grid grid-cols-12 gap-4 mt-5 '>
      <div className='col-span-12 px-2'>
        <h2 className='text-lg text-white text-center'>Tell us about you – are you a</h2>
        <div className="flex justify-center mt-5">
          <div className="flex justify-center  w-full md:w-[800px] ">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-full space-x-2">
              <button
                onClick={() => handleButtonClick('creator')}
                className={`px-3 py-3 rounded-full font-[400] text-lg w-32 text-[#fff] transition duration-300 ${activeButton === 'creator' ? 'bg-[#22c55e] text-[#fff]' : 'bg-transparent text-[#fff]'}`}
              >
                Creator
              </button>
              <button
                onClick={() => handleButtonClick('client')}
                className={`px-3 py-3 rounded-full font-[400] text-lg w-32 text-[#fff] transition duration-300 ${activeButton === 'client' ? 'bg-[#22c55e] text-[#fff]' : 'bg-transparent text-[#fff]'}`}
              >
                Client
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-12'>
        <div className='py-2 px-2 relative mt-2'>
          <p className="text-white">{activeText}</p>
        </div>
      </div>
    </div>
  );
};





export default SignupModal;
