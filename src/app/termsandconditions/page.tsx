import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h4 className="text-3xl font-semibold mb-6 text-[#FF8F40] text-center" style={{
                  background: "linear-gradient(to right, #f57114, #5e2591)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Terms and Conditions</h4>
      <div className="shadow-md rounded-lg p-6 prose max-w-3xl mx-auto">
        <p className="text-lg mb-4 text-white text-justify">
          Please read these terms and conditions carefully before using our website.
        </p>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-justify text-[#5F248E] mb-2">1. Acceptance of Terms:</h2>
          <p className='text-justify text-white'>
          Your access to and use of this website, as well as any services provided by MyProBuddy, are conditioned upon your acceptance and compliance with these terms and conditions. By accessing this website and using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">2. User Responsibilities</h2>
          <p className='text-justify text-white'>
          You agree to use our website and services for lawful purposes only and to comply with all applicable laws, regulations, and guidelines. You further agree not to engage in any conduct that may disrupt or interfere with the operation of our website or services.

          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">3. Intellectual Property</h2>
          <p className='text-justify text-white'>
          All content and materials provided on this website, including but not limited to text, graphics, logos, images, and software, are the property of MyProBuddy or its licensors and are protected by copyright and other intellectual property laws. You are granted a limited, non-exclusive, and non-transferable license to access and use the content and materials for personal and non-commercial purposes only.

          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">4. Limitation of Liability</h2>
          <p className='text-justify text-white'>
          MyProBuddy shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our website or services, including but not limited to any errors or omissions in any content or materials, any unauthorized access to or use of our servers, and any interruption or cessation of our services.
          </p>
        </div>
        <p className="text-sm text-darkmode-light mt-8">
          These Terms and Conditions were last updated on April 18, 2024.
        </p>
        <footer className="mt-8">
        <div className="bg-gray-200 py-4 px-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-left">
            <div className='my-2 text-left'>
              <p className="text-sm text-gray-600">Address:</p>
              <p className="text-sm text-gray-800">C5 Jains Ansruta, Valluvar kottam high <br/>road, Nungambakkam, chennai, Tamil Nadu 600034.</p>
            </div>
            <div className='my-2 text-left'>
              <p className="text-sm text-gray-600 text-bold">Contact Info:</p>
              <p className="text-sm text-gray-800">Phone: +91 9952237700 <br/>Email: reachus@myprobuddy.com</p>
              {/* <p className="text-sm text-gray-800">Email: reachus@myprobuddy.com</p> */}
            </div>
          </div>
        </div>
      </footer>
      </div>
      
    </div>
  );
}

export default TermsAndConditionsPage;
