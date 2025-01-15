/*
import React from "react";

const PaymentMethod: React.FC = () => {
  return (
    <div className="flex justify-between items-center mt-8">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Payment method</h2>
        <p className="text-gray-700">Visa •••• 4242</p>
        <p className="text-blue-500 text-sm">
          Visa ending in 4242, expires 12/24
        </p>
      </div>
      <button
        onClick={() => alert("Updating payment method...")}
        className="px-4 py-2 text-sm font-medium text-white bg-gray-400 rounded-lg hover:bg-gray-700"
      >
        Update
      </button>
    </div>
  );
};

export default PaymentMethod;
*/

/*
import React, { useState } from "react";

const PaymentMethod: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardNumber, setCardNumber] = useState("4242");
  const [expiry, setExpiry] = useState("12/24");

  const handleSave = () => {
    // Simulate saving the payment method
    alert("Payment method updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="mt-8">
      {isEditing ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Update Payment Method
          </h2>
          <div className="flex flex-col gap-4">
            <label className="block">
              <span className="text-gray-700">Credit Card Number</span>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="4242 4242 4242 4242"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-gray-700">MM / YY</span>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="12/24"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-4 flex justify-end gap-4">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Payment method
            </h2>
            <p className="text-gray-700">Visa •••• {cardNumber}</p>
            <p className="text-blue-500 text-sm">
              Visa ending in {cardNumber}, expires {expiry}
            </p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-400 rounded-lg hover:bg-gray-700"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
*/

/*
import React, { useState } from "react";

const PaymentMethod: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardNumber, setCardNumber] = useState("4242");
  const [expiry, setExpiry] = useState("12/24");
  const [cvc, setCvc] = useState("123");

  const handleSave = () => {
    // Simulate saving the payment method
    alert("Payment method updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="mt-8">
      {isEditing ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Update Payment Method
          </h2>
          <div className="flex flex-col gap-4">
            {/* Credit Card Number =/}
            <label className="block">
              <span className="text-gray-700">Credit Card Number</span>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="4242 4242 4242 4242"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </label>

            {/* Expiry Date =/}
            <label className="block">
              <span className="text-gray-700">MM / YY</span>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="12/24"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </label>

            {/* CVC =/}
            <label className="block">
              <span className="text-gray-700">CVC</span>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </label>
          </div>

          {/* Save and Cancel Buttons =/}
          <div className="mt-4 flex justify-end gap-4">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          {/* Display Payment Information =/}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Payment method
            </h2>
            <p className="text-gray-700">Visa •••• {cardNumber}</p>
            <p className="text-blue-500 text-sm">
              Visa ending in {cardNumber}, expires {expiry}
            </p>
          </div>

          {/* Update Button =/}
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-400 rounded-lg hover:bg-gray-700"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
*/

import React, { useState } from "react";

const PaymentMethod: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardNumber, setCardNumber] = useState("4242424242424242");
  const [expiry, setExpiry] = useState("12/24");
  const [cvc, setCvc] = useState("123");

  const formatCardNumber = (value: string) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, "");

    // Add a space after every 4 digits
    return (
      digitsOnly
        .match(/.{1,4}/g) // Split into chunks of 4
        ?.join(" ") || ""
    );
  };

  const handleCardNumberChange = (value: string) => {
    setCardNumber(value.replace(/\s/g, "")); // Store the number without spaces
  };

  const getHiddenCardNumber = () => {
    return `•••• •••• •••• ${cardNumber.slice(-4)}`;
  };

  const handleSave = () => {
    // Simulate saving the payment method
    alert("Payment method updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="mt-8">
      {isEditing ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Update Payment Method
          </h2>
          <div className="flex flex-col gap-4">
            {/* Credit Card Number */}
            <label className="block">
              <span className="text-gray-700">Credit Card Number</span>
              <input
                type="text"
                maxLength={19} // Maximum length includes spaces (16 digits + 3 spaces)
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="1234 5678 9012 3456"
                value={formatCardNumber(cardNumber)}
                onChange={(e) => handleCardNumberChange(e.target.value)}
              />
            </label>

            {/* Expiry Date */}
            <label className="block">
              <span className="text-gray-700">MM / YY</span>
              <input
                type="text"
                maxLength={5} // Maximum length for MM/YY format
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="12/24"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </label>

            {/* CVC */}
            <label className="block">
              <span className="text-gray-700">CVC</span>
              <input
                type="text"
                maxLength={3}
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </label>
          </div>

          {/* Save and Cancel Buttons */}
          <div className="mt-4 flex justify-end gap-4">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          {/* Display Payment Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Payment method
            </h2>
            <p className="text-gray-700">Visa {getHiddenCardNumber()}</p>
            <p className="text-blue-500 text-sm">
              Visa ending in {cardNumber.slice(-4)}, expires {expiry}
            </p>
          </div>

          {/* Update Button */}
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-400 rounded-lg hover:bg-gray-700"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
