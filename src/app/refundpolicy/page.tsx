import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h4 className="text-3xl font-semibold mb-6 text-[#FF8F40] text-center" style={{
                  background: "linear-gradient(to right, #f57114, #5e2591)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Refund Policy</h4>
      <div className="shadow-md rounded-lg p-6 prose max-w-3xl mx-auto">
        <p className="text-lg mb-4 text-justify text-white">
          Please read these Refund Policy before using our website.
        </p>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-justify text-[#5F248E] mb-2">1. Eligibility for Refund:</h2>
          <p className='text-justify text-white'>
          If you are found to be ineligible for our grant report service, you may be entitled to a full refund of any fees paid for the service. Eligibility for a refund will be determined based on the criteria specified in our grant report service agreement.



          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">2. Refund Process</h2>
          <p className='text-justify text-white'>
          To request a refund, please contact us within 24 hours of receiving notification of your eligibility status. Refunds will be issued to the original payment method used for the purchase within a reasonable timeframe. Please note that refunds may be subject to processing fees or other charges as outlined in our refund 


          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">3. Exceptions</h2>
          <p className='text-justify text-white'>
          Please note that our refund policy only applies to our grant report service and does not cover any other services or products offered by MyProBuddy. Additionally, refunds may not be available in certain circumstances, such as if you have violated any of our terms and conditions or if the service has already been provided to you.




          </p>
        </div>
        
        <p className="text-sm text-darkmode-light mt-8">
          These Refund Policies were last updated on April 18, 2024.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
