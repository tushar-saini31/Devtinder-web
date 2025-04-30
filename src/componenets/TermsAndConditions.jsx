import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-20 ">
      <div className="bg-amber-100 shadow-2xl rounded-2xl p-10 max-w-4xl w-full overflow-y-auto max-h-[90vh]">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Terms & Conditions</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2  text-gray-800">1. Introduction</h2>
          <p className=" text-gray-600">
            Welcome to Devlopstinder. By accessing or using our website, you agree to be bound by these terms and conditions. 
            If you do not agree with any part of these terms, you must not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2  text-gray-800">2. Payments and Billing</h2>
          <p className=" text-gray-600">
            All payments made through Razorpay are secure. By making a payment, you agree to pay all applicable charges and taxes.
            Devlopstinder reserves the right to change pricing at any time without prior notice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2  text-gray-800">3. Cancellation and Refund</h2>
          <p className=" text-gray-600">
            Once a payment is made, cancellation requests will be handled on a case-by-case basis. 
            Refunds, if applicable, will be processed within 7-10 business days as per Razorpay policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2  text-gray-800">4. Shipping and Delivery</h2>
          <p className=" text-gray-600">
            Since Devlopstinder provides digital services, there are no physical deliveries. 
            Service access details will be shared via email or your account dashboard after payment confirmation.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2  text-gray-800">5. User Conduct</h2>
          <p className=" text-gray-600"> 
            You agree to use the website and services only for lawful purposes. Any unauthorized or illegal use is strictly prohibited and may lead to termination of services without notice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2  text-gray-800">6. Intellectual Property</h2>
          <p className=" text-gray-600">
            All content, including logos, text, graphics, and images on Devlopstinder, is the property of Devlopstinder and is protected by copyright laws.
            Unauthorized use is strictly prohibited.
          </p>
        </section>

        <section className="mb-6"> 
          <h2 className="text-2xl font-semibold mb-2  text-gray-800">7. Privacy Policy</h2>
          <p className=" text-gray-600">
            Your privacy is important to us. Please refer to our <a href="/PrivacyPolicy" className="text-blue-600 underline">Privacy Policy</a> page for information on how we collect, use, and protect your personal data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2  text-gray-800">8. Limitation of Liability</h2>
          <p className=" text-gray-600">
            Devlopstinder will not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2  text-gray-800">9. Changes to Terms</h2>
          <p className=" text-gray-600">
            We reserve the right to update or modify these terms at any time without prior notice.
            Continued use of the services constitutes acceptance of those changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2  text-gray-800">10. Contact Us</h2>
          <p className=" text-gray-600">
            If you have any questions or concerns about these Terms & Conditions, feel free to contact us via our <a href="/ContactUs" className="text-blue-600 underline">Contact page</a>.
          </p>
        </section>

        <p className="text-center text-gray-600 mt-8 ">
          © {new Date().getFullYear()} Devlopstinder. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
