import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-20 ">
      <div className="bg-amber-100 shadow-2xl rounded-2xl p-10 max-w-4xl w-full overflow-y-auto max-h-[90vh]">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to Devlopstinder. We value your privacy and are committed to protecting your personal information. This Privacy Policy
            explains how we collect, use, and safeguard your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">2. Information We Collect</h2>
          <p className="text-gray-600">
            We collect personal information when you interact with our website and services. This may include your name, email address, 
            billing information, and other details necessary for providing our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">3. How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the information we collect to provide, maintain, and improve our services, process payments, communicate with you,
            and personalize your experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">4. Sharing Your Information</h2>
          <p className="text-gray-600">
            We do not sell or rent your personal information to third parties. However, we may share your data with trusted partners
            who assist us in providing services, as long as they agree to keep this information confidential.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">5. Data Security</h2>
          <p className="text-gray-600">
            We implement a variety of security measures to ensure the protection of your personal data. These measures include encryption,
            access control, and regular monitoring.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">6. Cookies</h2>
          <p className="text-gray-600">
            We use cookies to enhance user experience and analyze site usage. Cookies are small files stored on your device that help us
            provide a more personalized experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">7. Third-Party Links</h2>
          <p className="text-gray-600">
            Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those
            sites. We encourage you to review their privacy policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">8. Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, correct, or delete your personal information. If you wish to exercise any of these rights,
            please contact us through our <a href="/ContactUs" className="text-blue-600 underline">Contact page</a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">9. Changes to the Privacy Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will
            be updated accordingly. Continued use of our services after such updates constitutes your acceptance of the new policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">10. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns about this Privacy Policy, please contact us via our <a href="/ContactUs" className="text-blue-600 underline">Contact page</a>.
          </p>
        </section>

        <p className="text-center text-gray-600 mt-8 ">
          © {new Date().getFullYear()} Devlopstinder. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
