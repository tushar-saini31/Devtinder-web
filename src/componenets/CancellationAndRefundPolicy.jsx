import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-20 ">
      <div className="bg-amber-100 shadow-2xl rounded-2xl p-10 max-w-4xl w-full overflow-y-auto max-h-[90vh]">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Cancellation Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">1. Introduction</h2>
          <p className="text-gray-600">
            Thank you for choosing Devlopstinder. We understand that sometimes plans change. This Cancellation Policy outlines the terms
            and conditions under which cancellations can be made for our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">2. Eligibility for Cancellation</h2>
          <p className="text-gray-600">
            You are eligible for cancellation of your order under certain conditions. The following criteria apply:
            <ul className="list-disc pl-5">
              <li>Cancellation requests must be submitted within 48 hours of placing the order.</li>
              <li>Services not yet delivered are eligible for cancellation.</li>
              <li>Some promotional services or items may not be eligible for cancellation.</li>
            </ul>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">3. How to Cancel</h2>
          <p className="text-gray-600">
            To cancel your order, please follow these steps:
            <ol className="list-decimal pl-5">
              <li>Log into your account on our website.</li>
              <li>Go to your order history and find the order you wish to cancel.</li>
              <li>Click on the "Cancel" button next to the order.</li>
              <li>Follow the prompts to confirm your cancellation request.</li>
            </ol>
            Alternatively, you can contact our customer support team for assistance in cancelling your order.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">4. Refund Policy</h2>
          <p className="text-gray-600">
            If your cancellation is approved, the refund will be processed based on the original payment method. Please allow 7-10
            business days for the refund to reflect in your account.
            <br />
            Note: Refunds may not be available for certain services that have already been delivered or used.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">5. Non-Refundable Items</h2>
          <p className="text-gray-600">
            Some items or services may be non-refundable under specific circumstances, including:
            <ul className="list-disc pl-5">
              <li>Services already delivered or completed.</li>
              <li>Items marked as non-refundable at the time of purchase.</li>
            </ul>
            Please check the details of your order before submitting a cancellation request.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">6. Timeframe for Cancellations</h2>
          <p className="text-gray-600">
            Cancellations must be made within 48 hours of placing the order. Requests submitted after this time may not be eligible for
            a refund, depending on the status of the service or item.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">7. Special Cases</h2>
          <p className="text-gray-600">
            In some exceptional cases, such as technical issues or service disruptions, we may allow cancellations outside of the
            standard timeframe. Please contact customer support for assistance with these cases.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">8. Changes to the Cancellation Policy</h2>
          <p className="text-gray-600">
            We may update this cancellation policy from time to time. Any changes will be posted on this page, and the effective date
            will be updated accordingly. Please review the policy periodically to stay informed.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">9. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns about cancellations, please feel free to contact our customer service team via our
            <a href="/ContactUs" className="text-blue-600 underline"> Contact page</a>.
          </p>
        </section>

        <p className="text-center text-gray-600 mt-8 ">
          © {new Date().getFullYear()} Devlopstinder. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CancellationPolicy;
