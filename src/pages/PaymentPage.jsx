

import React, { useState, useEffect } from "react";
// Using supported lucide-react icons instead of external packages like react-icons/md
import { Clock, Lock, Tag, CreditCard, Banknote, Smartphone, QrCode, ClipboardList, Wallet } from 'lucide-react';

// --- Custom Success Modal Component ---
const SuccessModal = ({ amount, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
    <div className="bg-white rounded-3xl p-10 shadow-2xl max-w-sm w-full transform transition-all duration-300 scale-100 border-t-8 border-green-500">
      {/* Inline SVG for Checkmark Icon (Higher Quality) */}
      <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-3">Payment Complete!</h3>
      <p className="text-center text-gray-600 mb-8">
        Your transaction for <span className="font-bold text-green-700">₹{amount.toFixed(2)}</span> was successful.
      </p>
      <button
        onClick={onClose}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition duration-150 shadow-lg shadow-green-300/50"
      >
        Continue Shopping
      </button>
    </div>
  </div>
);

// --- Main Payment Component ---
const PaymentPage = () => {
  const paymentAmount = 99.0;
  const initialMethod = "upi-qr";
  const [selectedMethod, setSelectedMethod] = useState(initialMethod);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Payment Inputs (kept for demonstration)
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [bank, setBank] = useState("");
  const [wallet, setWallet] = useState("");
  const [timer, setTimer] = useState(600); // 10 minutes in seconds

  // Timer effect for QR/UPI
  useEffect(() => {
    // Only run interval if selected method is 'upi-qr' and timer > 0
    let interval;
    if (selectedMethod === 'upi-qr' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    // Handle timer expiration
    if (timer === 0 && selectedMethod === 'upi-qr') {
      clearInterval(interval);
      // Optional: show expiry message
    }
    return () => clearInterval(interval);
  }, [selectedMethod, timer]);

  // Format timer into MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Payment method configurations with Lucide icons
  const paymentMethods = [
    { id: "upi-qr", name: "Scan & Pay (UPI QR)", subtitle: "Instant payment via any UPI App", icon: QrCode, offers: 2 },
    { id: "upi-id", name: "UPI ID / VPA", subtitle: "Pay via UPI ID/Number", icon: Smartphone, offers: 1 },
    { id: "card", name: "Credit / Debit Card", subtitle: "Visa, MasterCard, Rupay", icon: CreditCard, offers: 0 },
    { id: "netbanking", name: "Netbanking", subtitle: "All major Indian banks", icon: Banknote, offers: 1 },
    { id: "wallet", name: "Wallet / Postpaid", subtitle: "Paytm, AmazonPay etc.", icon: Wallet, offers: 0 },
    { id: "cod", name: "Cash on Delivery", subtitle: "Pay at doorstep (charge: ₹10)", icon: ClipboardList, offers: 0 },
  ];

  // --- Validation and Formatting Functions ---

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    return digits.match(/.{1,4}/g)?.join(" ") || digits;
  };

  const validateUPI = (id) => /^[\w.-]+@[\w.-]+$/.test(id);
  const validateCardNumber = (num) => /^\d{16}$/.test(num.replace(/\s/g, ""));
  const validateExpiry = (exp) => /^(0[1-9]|1[0-2])\/?(\d{2})$/.test(exp);
  const validateCvv = (cvv) => /^\d{3,4}$/.test(cvv);
  const validateCardName = (name) => name.trim().length > 2;
  const validateBank = (b) => b !== "";
  const validateWallet = (w) => w !== "";

  // Check if the form for the selected method is valid
  const isFormValid = () => {
    switch (selectedMethod) {
      case "upi-qr":
        return timer > 0;
      case "upi-id":
        return validateUPI(upiId);
      case "card":
        return (
          validateCardNumber(cardNumber) &&
          validateExpiry(expiry) &&
          validateCvv(cvv) &&
          validateCardName(cardName)
        );
      case "netbanking":
        return validateBank(bank);
      case "wallet":
        return validateWallet(wallet);
      case "cod":
        return true;
      default:
        return false;
    }
  };

  const handlePay = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    // Simulate payment processing delay before showing success
    // In a real app, this is where you'd call your payment API
    setTimeout(() => {
      setShowSuccessModal(true);
    }, 500);
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setExpiry(value);
  };

  // Improved Input styling
  const inputClass = (valid) =>
    `w-full border-2 p-3 rounded-xl transition duration-150 text-gray-800 font-medium placeholder:text-gray-400 ${
      valid || selectedMethod === 'upi-qr' || selectedMethod === 'cod' // Don't show error state for non-form methods
        ? "border-gray-200 focus:border-orange-500"
        : "border-red-500/50 focus:border-red-500"
    } focus:outline-none focus:ring-4 focus:ring-orange-100`;

  const getFormTitle = () => {
    const method = paymentMethods.find(m => m.id === selectedMethod);
    return method ? method.name : "Select a Payment Method";
  };

  // --- Conditional Form Renderers ---

  const renderUPIQrForm = () => (
    <div className="p-6 mb-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-xl text-gray-800">Scan to Pay (₹{paymentAmount.toFixed(2)})</h3>
        <div className={`flex items-center gap-1 text-base font-bold px-3 py-1 rounded-full border ${timer > 60 ? 'bg-orange-100 text-orange-600 border-orange-300' : 'bg-red-100 text-red-600 border-red-300'} transition-colors`}>
          <Clock className="w-5 h-5" />
          <span id="payment-timer">{formatTime(timer)}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className={`p-4 bg-white border-8 border-orange-500 rounded-2xl shadow-xl transition-opacity duration-500 ${timer <= 0 ? 'opacity-40' : 'opacity-100'}`}>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=mock-veda-id@upi&am=99.00&pn=VedaStructure"
            alt="QR Code"
            className="rounded-lg w-44 h-44"
          />
        </div>

        <div className="flex-1 text-center md:text-left space-y-4">
          <p className="text-gray-600 text-sm font-medium">
            Open your preferred UPI app on your mobile device and scan the code to complete the payment instantly.
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <img src="https://checkout-static-next.razorpay.com/build/assets/images/phonepe.e101f376.svg" alt="PhonePe" className="h-8 shadow-sm rounded-md" />
            <img src="https://cdn.razorpay.com/app/googlepay.svg" alt="Google Pay" className="h-8 shadow-sm rounded-md" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="Paytm" className="h-8 shadow-sm rounded-md" />
          </div>
          {timer <= 0 && (
            <p className="mt-4 text-red-500 font-bold animate-pulse">QR Code Expired. Please select UPI ID or refresh the page.</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderUPIIdForm = () => (
    <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
      <label htmlFor="upi-id-input" className="block text-sm font-medium text-gray-600">Enter UPI ID or Number</label>
      <input
        id="upi-id-input"
        type="text"
        placeholder="e.g., example@upi or 9876543210@paytm"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        className={inputClass(validateUPI(upiId))}
      />
      {!validateUPI(upiId) && upiId.length > 0 && (
        <p className="text-red-500 text-xs">Enter a valid UPI ID (e.g., name@bankname)</p>
      )}
    </div>
  );

  const renderCardForm = () => (
    <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
      <label className="block text-sm font-medium text-gray-600">Card Details</label>

      <input
        type="text"
        placeholder="Card Number (XXXX XXXX XXXX XXXX)"
        value={cardNumber}
        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
        maxLength="19" // 16 digits + 3 spaces
        className={inputClass(validateCardNumber(cardNumber))}
      />
      {!validateCardNumber(cardNumber) && cardNumber.replace(/\s/g, "").length >= 12 && (
        <p className="text-red-500 text-xs">Card number must be 16 digits.</p>
      )}

      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleExpiryChange}
            maxLength="5"
            className={inputClass(validateExpiry(expiry))}
          />
          {!validateExpiry(expiry) && expiry.length > 0 && (
            <p className="text-red-500 text-xs mt-1">Valid expiry is MM/YY (e.g., 12/26)</p>
          )}
        </div>
        <div className="w-1/3">
          <input
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))} // Ensure only digits
            maxLength="4"
            className={inputClass(validateCvv(cvv))}
          />
          {!validateCvv(cvv) && cvv.length > 0 && (
            <p className="text-red-500 text-xs mt-1">CVV must be 3 or 4 digits</p>
          )}
        </div>
      </div>

      <input
        type="text"
        placeholder="Name on Card"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        className={inputClass(validateCardName(cardName))}
      />
      {!validateCardName(cardName) && cardName.length > 0 && (
        <p className="text-red-500 text-xs">Card holder name is required</p>
      )}
    </div>
  );

  const renderNetbankingForm = () => (
    <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
      <label htmlFor="bank-select" className="block text-sm font-medium text-gray-600">Select Bank</label>
      <select
        id="bank-select"
        value={bank}
        onChange={(e) => setBank(e.target.value)}
        className={inputClass(validateBank(bank))}
      >
        <option value="">-- Select Your Bank --</option>
        <option value="HDFC">HDFC Bank</option>
        <option value="ICICI">ICICI Bank</option>
        <option value="SBI">State Bank of India (SBI)</option>
        <option value="Axis">Axis Bank</option>
        <option value="Other">Other Bank</option>
      </select>
      {!validateBank(bank) && bank === "" && (
        <p className="text-red-500 text-xs mt-1">Please select a bank to proceed</p>
      )}
    </div>
  );

  const renderWalletForm = () => (
    <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
      <label htmlFor="wallet-select" className="block text-sm font-medium text-gray-600">Select Wallet</label>
      <select
        id="wallet-select"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        className={inputClass(validateWallet(wallet))}
      >
        <option value="">-- Select Your Wallet --</option>
        <option value="Paytm">Paytm</option>
        <option value="AmazonPay">Amazon Pay</option>
        <option value="PhonePe">PhonePe Wallet</option>
        <option value="JioMoney">JioMoney</option>
      </select>
      {!validateWallet(wallet) && wallet === "" && (
        <p className="text-red-500 text-xs mt-1">Please select a wallet to proceed</p>
      )}
    </div>
  );

  const renderCodForm = () => (
    <div className="bg-white rounded-xl p-6 shadow-lg text-center space-y-4 border-2 border-dashed border-gray-300">
      <p className="text-2xl font-bold text-gray-800">Cash on Delivery</p>
      <p className="text-gray-700 text-base">
        Final payable amount: <span className="font-extrabold text-orange-600">₹{(paymentAmount + 10).toFixed(2)}</span>
      </p>
      <p className="text-sm text-gray-500">
        (Includes a non-refundable **₹10 COD convenience charge**.)
        You will pay this amount in cash when your order is delivered.
      </p>
    </div>
  );

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case "upi-qr":
        return renderUPIQrForm();
      case "upi-id":
        return renderUPIIdForm();
      case "card":
        return renderCardForm();
      case "netbanking":
        return renderNetbankingForm();
      case "wallet":
        return renderWalletForm();
      case "cod":
        return renderCodForm();
      default:
        return <p className="text-center p-8 text-gray-500">Please select a payment method from the list.</p>;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      {showSuccessModal && <SuccessModal amount={paymentAmount} onClose={() => setShowSuccessModal(false)} />}
      
      {/* Increased max-width for better spacing */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden min-h-[85vh]">
        
        {/* ===== Left Section (Order Summary - 40% Width) ===== */}
        <div className="bg-gradient-to-br from-yellow-400 to-amber-500 text-white w-full lg:w-2/5 p-8 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center gap-4 mb-10">
              <img
                src="https://www.vedastructure.in/front/img/veda.png"
                alt="Veda Structure Logo"
                className="w-12 h-12 object-cover rounded-xl bg-white p-1 shadow-lg"
              />
              <div>
                <h1 className="font-extrabold text-2xl tracking-wider">SECURE CHECKOUT</h1>
                <p className="text-sm text-orange-200">Veda Structure Payment Gateway</p>
              </div>
            </div>

            {/* Total Amount Box */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20 shadow-xl">
              <p className="text-white/80 text-sm mb-2 font-medium">Total Amount Due</p>
              <p className="text-5xl font-black text-white">₹{paymentAmount.toFixed(2)}</p>
            </div>

            {/* Order Details */}
            <h2 className="text-xl font-bold border-b border-orange-400 pb-3 mb-4">Order Summary</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span>Order ID</span>
                <span className="font-semibold text-white/90">#VDS-928374</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Email</span>
                <span className="text-white/80">user@example.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Phone</span>
                <span className="font-semibold text-white/90">+91 62079 45708</span>
              </div>
            </div>
          </div>

          {/* Footer Security */}
          <div className="mt-12 text-xs text-orange-200 flex justify-between items-center p-3 bg-white/10 rounded-lg">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-white" />
              <span className="font-medium">100% Secure Payment</span>
            </div>
            <span className="font-medium">Powered by Razorpay</span>
          </div>
        </div>

        {/* ===== Right Section (Methods & Form - 60% Width) ===== */}
        <div className="w-full lg:w-3/5 p-8 bg-gray-50 flex flex-col">

          {/* Payment Method Selector Tabs */}
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Choose Payment Method</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 overflow-x-auto pb-4 mb-6">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => {
                    setSelectedMethod(method.id);
                    if (method.id === 'upi-qr') setTimer(600);
                  }}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl text-center border-2 transition-all duration-300 h-24 min-w-[120px] ${
                    selectedMethod === method.id
                      ? "bg-orange-50 border-orange-500 shadow-lg scale-[1.03]"
                      : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-md"
                  }`}
                >
                  <IconComponent className={`h-6 w-6 mb-1 ${selectedMethod === method.id ? 'text-orange-600' : 'text-gray-500'}`} />
                  <p className="font-semibold text-sm text-gray-800 truncate">{method.name}</p>
                  {method.offers > 0 && (
                    <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 rounded-full absolute top-1 right-1">
                      {method.offers} Offer{method.offers > 1 ? 's' : ''}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Offer Banner */}
          <div className="bg-orange-100 text-orange-800 border-l-4 border-orange-500 rounded-lg p-4 mb-6 text-sm font-medium flex items-center gap-3 shadow-md">
            <Tag className="w-5 h-5 flex-shrink-0" />
            <p>
              <span className="font-bold">Deal Alert:</span> Get up to ₹50 cashback on Netbanking using select banks.
            </p>
          </div>

          {/* Form Content Area */}
          <form onSubmit={handlePay} className="flex-grow flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-700 border-b pb-2">{getFormTitle()} Details</h3>
              {renderPaymentForm()}
            </div>
            
            {/* Universal Pay Button and Footer */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`w-full py-4 rounded-xl font-extrabold text-white text-lg tracking-wide transition duration-300 shadow-xl transform hover:scale-[1.005] active:scale-[0.99] ${
                  isFormValid()
                    ? "bg-orange-600 hover:bg-orange-700 shadow-orange-500/50"
                    : "bg-gray-400 cursor-not-allowed shadow-gray-300/50"
                }`}
              >
                {selectedMethod === "cod" ? "Confirm Order (₹10 Extra)" : `Pay ₹${paymentAmount.toFixed(2)} Now`}
              </button>
              
              <p className="mt-3 text-xs text-center text-gray-500">
                Secured payment. By paying, you agree to the Terms & Conditions.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
