


// import React, { useState } from "react";
// import { MdOutlineAccessTime } from "react-icons/md";

// export default function PaymentPage() {
//   const [selectedMethod, setSelectedMethod] = useState("upi-qr"); // default show QR

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
//       <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden h-[90vh]">
        
//         {/* ===== Left Section ===== */}
//         <div className="bg-gradient-to-r from-yellow-500 to-orange-300 text-white w-full md:w-1/4 p-6 flex flex-col justify-between">
//           <div>
//             {/* Logo & Business Info */}
//             <div className="flex items-center gap-3 mb-6">
//               <img
//                 src="https://www.vedastructure.in/front/img/veda.png"
//                 alt="logo"
//                 className="w-12 h-12 object-contain rounded-full bg-white p-1"
//               />
//               <div>
//                 <h1 className="font-bold text-lg">Veda Structure</h1>
//                 <p className="text-xs text-gray-300">
//                   Razorpay Trusted Business
//                 </p>
//               </div>
//             </div>

//             {/* Price Summary */}
//             <div className="bg-white text-black rounded-xl p-4 mb-6">
//               <p className="text-gray-500 text-sm">Price Summary</p>
//               <p className="text-3xl font-bold">₹99</p>
//             </div>

//             {/* Phone Number */}
//             <div className="bg-white text-black rounded-xl p-3 mb-4">
//               Using as <span className="font-semibold">+91 62079 45708</span>
//             </div>

//             {/* Offers */}
//             <div className="bg-white text-black rounded-xl p-3">
//               Offers on UPI, Card and more
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="mt-8 text-xs text-gray-300">
//             Secured by <span className="font-semibold">Razorpay</span>
//           </div>
//         </div>

//         {/* ===== Middle Section (Recommended with images) ===== */}
//         <div className="w-full md:w-1/4 bg-gray-50 p-6 border-r">
//           <h2 className="text-lg font-bold mb-4">Recommended</h2>

//           <div className="space-y-4">
//             {/* UPI */}
//             <div
//               onClick={() => setSelectedMethod("upi-id")}
//               className={`bg-white rounded-lg p-3 shadow hover:shadow-md cursor-pointer flex items-center gap-3 ${
//                 selectedMethod === "upi-id" && "ring-2 ring-orange-400"
//               }`}
//             >
//               <img
//                 src="https://cdn.razorpay.com/app/googlepay.svg"
//                 alt="UPI"
//                 className="h-6"
//               />
//               <div>
//                 <p className="font-medium text-sm">UPI</p>
//                 <p className="text-xs text-gray-500">Pay via UPI ID</p>
//               </div>
//             </div>

//             {/* Card */}
//             <div className="bg-white rounded-lg p-3 shadow hover:shadow-md cursor-pointer flex items-center gap-3">
//               <img
//                 src="https://cdn.iconscout.com/icon/free/png-256/free-visa-3-226460.png"
//                 alt="Card"
//                 className="h-6"
//               />
//               <div>
//                 <p className="font-medium text-sm">Credit/Debit Card</p>
//                 <p className="text-xs text-gray-500">Visa, MasterCard, Rupay</p>
//               </div>
//             </div>

//             {/* Netbanking */}
//             <div className="bg-white rounded-lg p-3 shadow hover:shadow-md cursor-pointer flex items-center gap-3">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
//                 alt="Netbanking"
//                 className="h-6"
//               />
//               <div>
//                 <p className="font-medium text-sm">Netbanking</p>
//                 <p className="text-xs text-gray-500">All major banks</p>
//               </div>
//             </div>

//             {/* Wallet */}
//             <div className="bg-white rounded-lg p-3 shadow hover:shadow-md cursor-pointer flex items-center gap-3">
//               <img
//                 src="https://cdn.razorpay.com/app/amazonpay.svg"
//                 alt="Wallet"
//                 className="h-6"
//               />
//               <div>
//                 <p className="font-medium text-sm">Wallet</p>
//                 <p className="text-xs text-gray-500">Paytm, AmazonPay etc.</p>
//               </div>
//             </div>

//             {/* Pay Later */}
//             <div className="bg-white rounded-lg p-3 shadow hover:shadow-md cursor-pointer flex items-center gap-3">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//                 alt="Pay Later"
//                 className="h-6"
//               />
//               <div>
//                 <p className="font-medium text-sm">Pay Later</p>
//                 <p className="text-xs text-gray-500">Get now, pay later</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===== Right Section ===== */}
//         <div className="w-full md:w-2/4 p-6 bg-gray-50">
//           <h2 className="text-lg font-bold mb-4">
//             {selectedMethod === "upi-id" ? "Pay with UPI ID" : "UPI Payment"}
//           </h2>

//           {/* Offers Banner */}
//           <div className="bg-yellow-100 text-yellow-800 rounded-lg p-3 mb-4 text-sm font-medium">
//             🎉 Flat ₹20 cashback on first UPI payment!
//           </div>

//           {/* Show QR (default) */}
//           {selectedMethod === "upi-qr" && (
//             <div className="bg-white rounded-xl p-4 mb-6">
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="font-semibold text-sm text-gray-700">UPI QR</h3>
//                 <div className="flex items-center gap-1 text-gray-500 text-sm">
//                   <MdOutlineAccessTime />
//                   10:54
//                 </div>
//               </div>

//               <div className="flex items-center gap-6">
//                 <img
//                   src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=upi://pay?pa=example@upi"
//                   alt="QR Code"
//                   className="rounded-md"
//                 />
//                 <div className="flex-1">
//                   <p className="text-gray-600 text-sm mb-3">
//                     Scan the QR using any UPI App
//                   </p>
//                   <div className="flex gap-3">
//                     <img
//                       src="https://checkout-static-next.razorpay.com/build/assets/images/phonepe.e101f376.svg"
//                       alt="PhonePe"
//                       className="h-8"
//                     />
//                     <img
//                       src="https://cdn.razorpay.com/app/googlepay.svg"
//                       alt="Google Pay"
//                       className="h-8"
//                     />
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png"
//                       alt="Paytm"
//                       className="h-8"
//                     />
//                     <img
//                       src="https://cdn.razorpay.com/app/amazonpay.svg"
//                       alt="Amazon Pay"
//                       className="h-8"
//                     />
//                   </div>
//                   <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
//                     2 Offers
//                   </span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Show UPI ID input when clicked */}
//           {selectedMethod === "upi-id" && (
//             <div className="bg-white rounded-xl p-6 shadow">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Enter UPI ID
//               </label>
//               <input
//                 type="text"
//                 placeholder="example@upi"
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold">
//                 Pay Now
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }







import React, { useState } from "react";
import { MdOutlineAccessTime } from "react-icons/md";

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("upi-qr");

  // Payment Inputs
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [bank, setBank] = useState("");
  const [wallet, setWallet] = useState("");

  // Validation functions
  const validateUPI = (id) => /^[\w.-]+@[\w.-]+$/.test(id);
  const validateCardNumber = (num) => /^\d{16}$/.test(num.replace(/\s/g, ""));
  const validateExpiry = (exp) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(exp);
  const validateCvv = (cvv) => /^\d{3,4}$/.test(cvv);
  const validateCardName = (name) => name.trim().length > 0;
  const validateBank = (b) => b !== "";
  const validateWallet = (w) => w !== "";

  // Check if the form for the selected method is valid
  const isFormValid = () => {
    switch (selectedMethod) {
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

  const handlePay = () => {
    if (!isFormValid()) return;
    alert("Payment/Order Successful!");
  };

  // Common input classes with error handling
  const inputClass = (valid) =>
    `w-full border p-2 rounded ${
      valid ? "border-gray-300" : "border-red-500"
    } focus:outline-none focus:ring-2 focus:ring-orange-400`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden h-[90vh]">
        {/* ===== Left Section ===== */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-300 text-white w-full md:w-1/4 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://www.vedastructure.in/front/img/veda.png"
                alt="logo"
                className="w-12 h-12 object-contain rounded-full bg-white p-1"
              />
              <div>
                <h1 className="font-bold text-lg">Veda Structure</h1>
                <p className="text-xs text-gray-300">Razorpay Trusted Business</p>
              </div>
            </div>

            <div className="bg-white text-black rounded-xl p-4 mb-6">
              <p className="text-gray-500 text-sm">Price Summary</p>
              <p className="text-3xl font-bold">₹99</p>
            </div>

            <div className="bg-white text-black rounded-xl p-3 mb-4">
              Using as <span className="font-semibold">+91 62079 45708</span>
            </div>

            <div className="bg-white text-black rounded-xl p-3">
              Offers on UPI, Card and more
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-300">
            Secured by <span className="font-semibold">Razorpay</span>
          </div>
        </div>

        {/* ===== Middle Section (Methods) ===== */}
        <div className="w-full md:w-1/4 bg-gray-50 p-6 border-r overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Recommended</h2>
          <div className="space-y-4">
            {["upi-id", "card", "netbanking", "wallet", "cod"].map((method) => (
              <div
                key={method}
                onClick={() => setSelectedMethod(method)}
                className={`bg-white rounded-lg p-3 shadow hover:shadow-md cursor-pointer flex items-center gap-3 ${
                  selectedMethod === method && "ring-2 ring-orange-400"
                }`}
              >
                <img
                  src={
                    method === "upi-id"
                      ? "https://cdn.razorpay.com/app/googlepay.svg"
                      : method === "card"
                      ? "https://cdn.iconscout.com/icon/free/png-256/free-visa-3-226460.png"
                      : method === "netbanking"
                      ? "https://cdn-icons-png.flaticon.com/512/633/633611.png"
                      : method === "wallet"
                      ? "https://cdn.razorpay.com/app/amazonpay.svg"
                      : "https://cdn-icons-png.flaticon.com/512/2331/2331947.png"
                  }
                  alt={method}
                  className="h-6"
                />
                <div>
                  <p className="font-medium text-sm">
                    {method === "upi-id"
                      ? "UPI"
                      : method === "card"
                      ? "Credit/Debit Card"
                      : method === "netbanking"
                      ? "Netbanking"
                      : method === "wallet"
                      ? "Wallet"
                      : "Cash on Delivery"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {method === "upi-id"
                      ? "Pay via UPI ID"
                      : method === "card"
                      ? "Visa, MasterCard, Rupay"
                      : method === "netbanking"
                      ? "All major banks"
                      : method === "wallet"
                      ? "Paytm, AmazonPay etc."
                      : "Pay at doorstep"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Right Section (Form) ===== */}
        <div className="w-full md:w-2/4 p-6 bg-gray-50 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">
            {selectedMethod === "upi-id"
              ? "Pay with UPI ID"
              : selectedMethod === "card"
              ? "Pay with Card"
              : selectedMethod === "netbanking"
              ? "Pay with Netbanking"
              : selectedMethod === "wallet"
              ? "Pay with Wallet"
              : "Cash on Delivery"}
          </h2>

          {/* Offer Banner */}
          <div className="bg-yellow-100 text-yellow-800 rounded-lg p-3 mb-4 text-sm font-medium">
            🎉 Special Offer available for this method!
          </div>

 {/* Show QR (default) */}
          {selectedMethod === "upi-qr" && (
            <div className="bg-white rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-sm text-gray-700">UPI QR</h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <MdOutlineAccessTime />
                  10:54
                </div>
              </div>

              <div className="flex items-center gap-6">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=upi://pay?pa=example@upi"
                  alt="QR Code"
                  className="rounded-md"
                />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-3">
                    Scan the QR using any UPI App
                  </p>
                  <div className="flex gap-3">
                    <img
                      src="https://checkout-static-next.razorpay.com/build/assets/images/phonepe.e101f376.svg"
                      alt="PhonePe"
                      className="h-8"
                    />
                    <img
                      src="https://cdn.razorpay.com/app/googlepay.svg"
                      alt="Google Pay"
                      className="h-8"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png"
                      alt="Paytm"
                      className="h-8"
                    />
                    <img
                      src="https://cdn.razorpay.com/app/amazonpay.svg"
                      alt="Amazon Pay"
                      className="h-8"
                    />
                  </div>
                  <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    2 Offers
                  </span>
                </div>
              </div>
            </div>
          )}



          {/* Payment Forms */}
          {selectedMethod === "upi-id" && (
            <div className="bg-white rounded-xl p-6 shadow space-y-3">
                 <label className="block text-sm font-medium text-gray-700 mb-2">Pay with UPI ID / Number
</label>
              <input
                type="text"
                placeholder="example@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className={inputClass(validateUPI(upiId))}
              />
              {!validateUPI(upiId) && upiId.length > 0 && (
                <p className="text-red-500 text-xs">Enter a valid UPI ID</p>
              )}
              <button
                disabled={!validateUPI(upiId)}
                onClick={handlePay}
                className={`mt-4 w-full py-2 rounded-lg font-semibold text-white ${
                  validateUPI(upiId)
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Pay Now
              </button>
            </div>
          )}

          {selectedMethod === "card" && (
            <div className="bg-white rounded-xl p-6 shadow space-y-3">
                                 <label className="block text-sm font-medium text-gray-700 mb-2">Add a new card
</label>
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className={inputClass(validateCardNumber(cardNumber))}
              />
              {!validateCardNumber(cardNumber) && cardNumber.length > 0 && (
                <p className="text-red-500 text-xs">Enter a valid 16-digit card number</p>
              )}

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className={inputClass(validateExpiry(expiry))}
                />
                {!validateExpiry(expiry) && expiry.length > 0 && (
                  <p className="text-red-500 text-xs">Enter a valid expiry MM/YY</p>
                )}
                <input
                  type="text"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className={inputClass(validateCvv(cvv))}
                />
                {!validateCvv(cvv) && cvv.length > 0 && (
                  <p className="text-red-500 text-xs">Enter a valid CVV</p>
                )}
              </div>

              <input
                type="text"
                placeholder="Enter name of card holder"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className={inputClass(validateCardName(cardName))}
              />
              {!validateCardName(cardName) && cardName.length > 0 && (
                <p className="text-red-500 text-xs">Card holder name cannot be empty</p>
              )}
  

              <button
                disabled={!isFormValid()}
                onClick={handlePay}
                className={`w-full py-2 rounded-lg font-semibold text-white ${
                  isFormValid() ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Pay Now
              </button>
            </div>
          )}

          {selectedMethod === "netbanking" && (
            <div className="bg-white rounded-xl p-6 shadow space-y-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Bank</label>
              <select
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className={inputClass(validateBank(bank))}
              >
                <option value="">--Select--</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
                <option>SBI</option>
                <option>Axis Bank</option>
              </select>
              {!validateBank(bank) && bank !== "" && (
                <p className="text-red-500 text-xs">Please select a bank</p>
              )}
              <button
                disabled={!validateBank(bank)}
                onClick={handlePay}
                className={`w-full py-2 rounded-lg font-semibold text-white ${
                  validateBank(bank) ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          )}

          {selectedMethod === "wallet" && (
            <div className="bg-white rounded-xl p-6 shadow space-y-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Wallet</label>
              <select
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                className={inputClass(validateWallet(wallet))}
              >
                <option value="">--Select--</option>
                <option>Paytm</option>
                <option>Amazon Pay</option>
                <option>PhonePe</option>
              </select>
              {!validateWallet(wallet) && wallet !== "" && (
                <p className="text-red-500 text-xs">Please select a wallet</p>
              )}
              <button
                disabled={!validateWallet(wallet)}
                onClick={handlePay}
                className={`w-full py-2 rounded-lg font-semibold text-white ${
                  validateWallet(wallet) ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Pay Now
              </button>
            </div>
          )}

          {selectedMethod === "cod" && (
            <div className="bg-white rounded-xl p-6 shadow text-center space-y-4">
              <p className="text-gray-700 text-sm">
                You can pay <span className="font-bold">₹99</span> in cash when your order is delivered.
              </p>
              <button
                onClick={handlePay}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold"
              >
                Confirm Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



