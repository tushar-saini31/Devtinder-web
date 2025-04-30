import React from "react";

const ShippingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-20 ">
      <div className="bg-amber-100 shadow-2xl rounded-2xl p-10 max-w-4xl w-full overflow-y-auto max-h-[90vh]">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Shipping & Delivery</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">1. Shipping Information</h2>
          <p className="text-gray-600">
            We offer fast and reliable shipping for all physical products. Delivery times may vary depending on the location
            and type of service selected at checkout.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">2. Shipping Methods</h2>
          <p className="text-gray-600">
            We offer various shipping options, including standard and expedited delivery. You will be able to choose your preferred
            shipping method during checkout.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">3. Shipping Costs</h2>
          <p className="text-gray-600">
            Shipping costs are calculated based on the delivery method, destination, and weight of the items in your order. You will
            see the shipping cost at checkout before completing your purchase.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">4. Delivery Times</h2>
          <p className="text-gray-600">
            Delivery times may vary based on your location and selected shipping method. Typical delivery times are as follows:
            - Standard Shipping: 5-7 business days.
            - Expedited Shipping: 2-3 business days.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">5. Order Tracking</h2>
          <p className="text-gray-600">
            Once your order has shipped, you will receive an email with tracking information so you can monitor the status of your
            delivery. You can also track your order directly on our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">6. International Shipping</h2>
          <p className="text-gray-600">
            We currently ship to select international locations. Please note that international shipments may be subject to customs
            duties, taxes, and import regulations, which are the responsibility of the recipient.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">7. Missing or Damaged Items</h2>
          <p className="text-gray-600">
            If your order is missing items or arrives damaged, please contact our customer service team within 7 days of receiving
            your shipment, and we will assist you in resolving the issue.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">8. Shipping Restrictions</h2>
          <p className="text-gray-600">
            Some items may have shipping restrictions due to size, weight, or destination. In such cases, you will be notified
            during checkout.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">9. Shipping Confirmation</h2>
          <p className="text-gray-600">
            Once your order has been processed and shipped, you will receive a shipping confirmation email with all relevant details
            regarding your order's shipment.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">10. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about shipping or delivery, please feel free to reach out to our customer support team via our
            <a href="/ContactUs" className="text-blue-600 underline"> Contact page</a>.
          </p>
        </section>

        <p className="text-center text-gray-600 mt-8 ">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ShippingPage;
