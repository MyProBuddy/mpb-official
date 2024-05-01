import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h4 className="text-3xl font-semibold mb-6 text-[#FF8F40] text-center" style={{
                  background: "linear-gradient(to right, #f57114, #5e2591)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Privacy Policy</h4>
      <div className="shadow-md rounded-lg p-6 prose max-w-3xl mx-auto">
        <p className="text-lg mb-4 text-justify text-white">
          Please read these Privacy Policies carefully before using our website.
        </p>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-justify text-[#5F248E] mb-2">1. Information Collection:</h2>
          <p className='text-justify text-white'>
          We may collect personal information from you when you use our website or services, such as your name, email address, and payment details. We use this information to provide our services to you and to improve and personalize your experience. We are committed to protecting your privacy and will not sell, distribute, or lease your personal information to third parties unless required by law.

          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">2. Data Security</h2>
          <p className='text-justify text-white'>
          We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.


          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">3. Cookies</h2>
          <p className='text-justify text-white'>
          We may use cookies and similar technologies to collect information about your usage of our website and to improve the quality of our services. You can choose to accept or decline cookies through your browser settings, but please note that disabling cookies may affect your ability to access certain features of our website.


          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#5F248E] mb-2">4. Third-Party Links</h2>
          <p className='text-justify text-white'>
          Our website may contain links to third-party websites or services that are not owned or controlled by MyProBuddy. We are not responsible for the privacy practices or content of these third-party websites or services, and we encourage you to review the privacy policies of any third parties before providing them with your personal information.
          </p>
        </div>
        <p className="text-sm text-darkmode-light mt-8">
          These Privacy Policies were last updated on April 18, 2024.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
