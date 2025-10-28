
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   CheckCircle2,
//   FileText,
//   IdCard,
//   SearchCheck,
//   ArrowRight,
//   Zap,
// } from "lucide-react";

// // =============================================================
// // 1. MODAL COMPONENT (Final Pop-up) - NO CHANGES
// // =============================================================
// const ContactModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.8 }}
//         className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full text-center border-t-8 border-orange-500"
//       >
//         <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
//         <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
//           Application Submitted Successfully!
//         </h3>
//         <p className="text-xl text-gray-600 mb-6">
//           Thank you for your interest in our course.
//         </p>
//         <div className="p-4 bg-orange-100 border-l-4 border-orange-500 rounded-lg">
//           <p className="text-lg font-semibold text-gray-800">
//             Our **Admission Team will contact you** shortly (within 24 hours) to
//             confirm your details and finalize your enrollment.
//           </p>
//         </div>
//         <button
//           onClick={onClose}
//           className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
//         >
//           Close
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// // =============================================================
// // 2. FORM STEP COMPONENTS (Simulated Inputs)
// // =============================================================

// const Step1Form = ({ onNext }) => (
//   <motion.div
//     initial={{ x: 100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     exit={{ x: -100, opacity: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center justify-center gap-3">
//       <IdCard className="w-6 h-6 text-orange-500" /> Enquire Now
//     </h4>
//     <p className="text-gray-600 mb-6 text-center">
//       Please provide your primary contact information.
//     </p>

//     {/* Simulated Form Fields */}
//     <div className="space-y-4 max-w-md mx-auto">
//       <input
//         type="text"
//         placeholder="Full Name"
//         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
//         required
//       />
//       <input
//         type="email"
//         placeholder="Email Address"
//         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
//         required
//       />
//       <input
//         type="tel"
//         placeholder="Phone Number"
//         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
//         required
//       />
//     </div>

//     <button
//       onClick={onNext}
//       className="mt-8 flex items-center gap-2 mx-auto px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition shadow-lg transform hover:scale-[1.02]"
//     >
//       Next: Educational Background <ArrowRight className="w-5 h-5" />
//     </button>
//   </motion.div>
// );

// const Step2Form = ({ onNext, onPrev }) => {
//   const [experience, setExperience] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const experienceOptions = [
//     { value: "beginner", label: "Beginner (No prior knowledge)" },
//     { value: "intermediate", label: "Intermediate (Read a few texts)" },
//     { value: "advanced", label: "Advanced (Practicing professionally)" },
//   ];

//   const handleSelect = (value) => {
//     setExperience(value);
//     setIsDropdownOpen(false); // Close dropdown after selection
//   };

//   return (
//     <motion.div
//       initial={{ x: 100, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       exit={{ x: -100, opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center justify-center gap-3">
//         <FileText className="w-6 h-6 text-orange-500" /> Experience & Goals
//       </h4>
//       <p className="text-gray-600 mb-6 text-center">
//         Help us tailor the experience by telling us about your background and goals.
//       </p>

//       {/* Custom Dropdown Simulation */}
//       <div className="space-y-4 max-w-md mx-auto relative">
//         <label className="block text-gray-700 font-medium mb-1">Select Your Experience Level:</label>
        
//         {/* DROPDOWN CONTAINER: This ensures the options list is positioned relative to the button */}
//         <div className="relative"> 
//             {/* Dropdown Button */}
//             <button
//             type="button"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             className="w-full p-3 border border-gray-300 rounded-lg bg-white text-left font-semibold
//                         focus:border-orange-500 focus:outline-none focus:shadow-xl focus:shadow-orange-200 
//                         hover:border-orange-400 transition duration-200 flex justify-between items-center"
//             >
//             {experience
//                 ? experienceOptions.find((o) => o.value === experience)?.label
//                 : "Select Your Experience Level..."}
//             <ArrowRight
//                 className={`w-4 h-4 text-gray-500 transform transition-transform ${
//                 isDropdownOpen ? "rotate-90" : "rotate-0"
//                 }`}
//             />
//             </button>

//             {/* Dropdown Options List - NOW POSITIONED DIRECTLY BELOW THE BUTTON */}
//             <AnimatePresence>
//             {isDropdownOpen && (
//                 <motion.div
//                 initial={{ opacity: 0, y: -5 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -5 }}
//                 transition={{ duration: 0.2 }}
//                 // Key change: absolute inset-x-0 top-[100%] to place it directly below the button
//                 className="absolute top-[100%] inset-x-0 bg-white border border-gray-300 rounded-lg shadow-xl z-20 max-h-48 overflow-y-auto"
//                 >
//                 {experienceOptions.map((option) => (
//                     <div
//                     key={option.value}
//                     onClick={() => handleSelect(option.value)}
//                     className={`p-3 cursor-pointer text-gray-800 transition duration-150
//                         ${
//                         experience === option.value
//                             ? 'bg-orange-500 text-white'
//                             : 'hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white' // Gradient hover
//                         }`}
//                     >
//                     {option.label}
//                     </div>
//                 ))}
//                 </motion.div>
//             )}
//             </AnimatePresence>
//         </div>
        
//         {/* Textarea */}
//         <textarea
//           placeholder="Why do you want to learn (e.g., self-improvement, professional career, helping others)?"
//           rows="3"
//           className="w-full p-3 border border-gray-300 rounded-lg 
//                       focus:border-orange-500 focus:outline-none focus:shadow-xl focus:shadow-orange-200 
//                       transition duration-200"
//         />
//       </div>

//       <div className="mt-8 flex justify-center gap-4">
//         <button
//           onClick={onPrev}
//           className="px-6 py-3 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition"
//         >
//           &larr; Back
//         </button>
//         <button
//           onClick={onNext}
//           className="flex items-center gap-2 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition shadow-lg transform hover:scale-[1.02]"
//         >
//           Final Review & Submit <ArrowRight className="w-5 h-5" />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// const Step3Review = ({ onSubmit, onPrev }) => (
//   <motion.div
//     initial={{ x: 100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     exit={{ x: -100, opacity: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center justify-center gap-3">
//       <SearchCheck className="w-6 h-6 text-orange-500" /> Review & Final
//       Submission
//     </h4>
//     <p className="text-gray-600 mb-8 text-center">
//       You're almost there! Click 'Confirm' to send your application to our team.
//     </p>

//     <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200 max-w-md mx-auto text-left shadow-inner">
//       <p className="font-extrabold text-lg text-gray-800 mb-2 flex items-center gap-2">
//         <Zap className="w-5 h-5 text-orange-600" /> Important Note:
//       </p>
//       <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
//         <li>
//           Enrollment is **not confirmed** until our team finalizes the details.
//         </li>
//         <li>
//           Expect a **personal call** or email within the next 24 hours to discuss
//           course structure and fee payment.
//         </li>
//         <li>Please ensure your provided phone number is correct.</li>
//       </ul>
//     </div>

//     <div className="mt-10 flex justify-center gap-4">
//       <button
//         onClick={onPrev}
//         className="px-6 py-3 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition"
//       >
//         &larr; Back to Edit
//       </button>
//       <button
//         onClick={onSubmit}
//         className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-extrabold rounded-lg hover:bg-green-700 transition shadow-xl transform hover:scale-[1.05]"
//       >
//         Confirm & Send Application!
//       </button>
//     </div>
//   </motion.div>
// );

// // =============================================================
// // 3. STEP TRACKER COMPONENT (The Visual Improvement)
// // =============================================================

// const STEPS = [
//     { step: 1, name: "Contact & Info", icon: IdCard },
//     { step: 2, name: "Goals & Experience", icon: FileText },
//     { step: 3, name: "Review & Submit", icon: SearchCheck },
// ];

// const StepTracker = ({ currentStep }) => (
//     <div className="relative flex justify-between items-start mb-10 pt-4 px-4">
//         {STEPS.map((s, index) => {
//             const isActive = s.step === currentStep;
//             const isComplete = s.step < currentStep;

//             return (
//                 <React.Fragment key={s.step}>
//                     {/* The Connecting Line (Before the step) */}
//                     {index > 0 && (
//                         <div 
//                             className={`absolute top-1/2 left-0 -translate-y-1/2 h-1 ${isComplete ? 'bg-green-500' : 'bg-gray-300'} transition-colors duration-500`} 
//                             style={{ 
//                                 left: `${(index * (100 / STEPS.length)) - (50 / STEPS.length)}%`, // Adjust position dynamically
//                                 width: `${100 / STEPS.length}%`, // Each line covers one segment
//                                 zIndex: 0
//                             }}
//                         />
//                     )}

//                     {/* Step Icon and Label */}
//                     <div 
//                         className={`flex flex-col items-center w-1/3 z-10 transition-all duration-300 ${isActive ? 'scale-105' : 'opacity-80'}`}
//                     >
//                         {/* Circle - UPDATED TEXT COLOR TO YELLOW-100 */}
//                         <div 
//                             className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-2 shadow-lg 
//                               ${isActive 
//                                 ? 'bg-orange-500 text-yellow-100 ring-4 ring-orange-200' // Active step: Orange background, Yellow text
//                                 : isComplete 
//                                 ? 'bg-green-500 text-white' // Complete step: Green background, White text
//                                 : 'bg-gray-200 text-gray-500' // Incomplete step: Gray background, Gray text
//                               }`}
//                         >
//                             {isComplete ? (
//                                 <CheckCircle2 className="w-6 h-6" />
//                             ) : (
//                                 s.step
//                             )}
//                         </div>
                        
//                         {/* Step Name */}
//                         <span 
//                             className={`text-sm font-semibold text-center mt-1 transition-colors 
//                               ${isActive ? 'text-orange-600' : 'text-gray-700'}`}
//                         >
//                             {s.name}
//                         </span>
//                     </div>
//                 </React.Fragment>
//             );
//         })}
//     </div>
// );


// // =============================================================
// // 4. MAIN MULTI-STEP FORM COMPONENT (Integrated) - NO CHANGES
// // =============================================================

// const AdmissionProcessForm = () => {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const nextStep = () => setCurrentStep((prev) => prev + 1);
//     const prevStep = () => setCurrentStep((prev) => prev - 1);
//     const handleSubmit = () => setIsModalOpen(true);

//     const renderStep = () => {
//         switch (currentStep) {
//             case 1:
//                 return <Step1Form key="step1" onNext={nextStep} />;
//             case 2:
//                 return <Step2Form key="step2" onNext={nextStep} onPrev={prevStep} />;
//             case 3:
//                 return (
//                     <Step3Review key="step3" onSubmit={handleSubmit} onPrev={prevStep} />
//                 );
//             default:
//                 return <div className="text-center p-8">Error: Invalid Step</div>;
//         }
//     };

//     return (
//         <div className="bg-white p-6 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto border-t-8 border-orange-600">
            
//             {/* The Visual Step Tracker (1, 2, 3) */}
//             <StepTracker currentStep={currentStep} />
            
//             {/* The Dynamic Form Content */}
//             <div className="relative min-h-[400px] flex items-start justify-center pt-8">
//                 <AnimatePresence mode="wait">
//                     {renderStep()}
//                 </AnimatePresence>
//             </div>

//             <AnimatePresence>
//                 <ContactModal
//                     isOpen={isModalOpen}
//                     onClose={() => setIsModalOpen(false)}
//                 />
//             </AnimatePresence>
//         </div>
//     );
// };


// // =============================================================
// // 5. EXPORT WRAPPER COMPONENT - NO CHANGES
// // =============================================================

// const AdmissionProcess = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 font-sans py-12">
//             <section className="py-10">
//                 <div className="text-center max-w-4xl mx-auto px-6 mb-12">
//                     <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
//                         Secure Your Spot:{" "}
//                         <span className="text-orange-600">3-Step Application</span>
//                     </h2>
//                     <p className="text-xl text-gray-600">
//                         Complete the application form below. It's fast, easy, and leads
//                         directly to your cosmic journey!
//                     </p>
//                 </div>

//                 <AdmissionProcessForm />
//             </section>
//         </div>
//     );
// };

// export default AdmissionProcess;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   CheckCircle2,
//   FileText,
//   IdCard,
//   SearchCheck,
//   ArrowRight,
//   Zap,
// } from "lucide-react";

// // ✅ SUCCESS MODAL
// const ContactModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md text-center border-t-8 border-orange-500"
//       >
//         <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-3" />
//         <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//           Application Submitted Successfully!
//         </h3>
//         <p className="text-gray-600 mb-4 text-sm sm:text-base">
//           Thank you for your interest in our course. Our team will reach out
//           within 24 hours to confirm your enrollment.
//         </p>
//         <button
//           onClick={onClose}
//           className="mt-4 px-6 py-2 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition w-full sm:w-auto"
//         >
//           Close
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// // ✅ STEP 1 FORM
// const Step1Form = ({ onNext }) => (
//   <motion.div
//     initial={{ x: 100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     exit={{ x: -100, opacity: 0 }}
//     transition={{ duration: 0.4 }}
//     className="w-full"
//   >
//     <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2">
//       <IdCard className="w-6 h-6 text-orange-500" /> Enquire Now
//     </h4>
//     <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
//       Please provide your primary contact information.
//     </p>

//     <div className="space-y-4 max-w-md mx-auto w-full">
//       <input
//         type="text"
//         placeholder="Full Name"
//         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition text-sm sm:text-base"
//       />
//       <input
//         type="email"
//         placeholder="Email Address"
//         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition text-sm sm:text-base"
//       />
//       <input
//         type="tel"
//         placeholder="Phone Number"
//         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition text-sm sm:text-base"
//       />
//     </div>

//     <button
//       onClick={onNext}
//       className="mt-6 flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition shadow-md text-sm sm:text-base"
//     >
//       Next: Educational Background <ArrowRight className="w-4 h-4" />
//     </button>
//   </motion.div>
// );

// // ✅ STEP 2 FORM
// const Step2Form = ({ onNext, onPrev }) => {
//   const [experience, setExperience] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const experienceOptions = [
//     { value: "beginner", label: "Beginner (No prior knowledge)" },
//     { value: "intermediate", label: "Intermediate (Some knowledge)" },
//     { value: "advanced", label: "Advanced (Practicing professionally)" },
//   ];

//   return (
//     <motion.div
//       initial={{ x: 100, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       exit={{ x: -100, opacity: 0 }}
//       transition={{ duration: 0.4 }}
//       className="w-full"
//     >
//       <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2">
//         <FileText className="w-6 h-6 text-orange-500" /> Experience & Goals
//       </h4>
//       <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
//         Help us tailor the experience by telling us about your background.
//       </p>

//       <div className="space-y-4 max-w-md mx-auto relative w-full">
//         <button
//           type="button"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           className="w-full p-3 border border-gray-300 rounded-lg bg-white text-left font-semibold text-sm sm:text-base flex justify-between items-center focus:border-orange-500"
//         >
//           {experience
//             ? experienceOptions.find((o) => o.value === experience)?.label
//             : "Select Your Experience Level"}
//           <ArrowRight
//             className={`w-4 h-4 text-gray-500 transform transition-transform ${
//               isDropdownOpen ? "rotate-90" : "rotate-0"
//             }`}
//           />
//         </button>

//         <AnimatePresence>
//           {isDropdownOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -5 }}
//               transition={{ duration: 0.2 }}
//               className="absolute top-[105%] inset-x-0 bg-white border border-gray-300 rounded-lg shadow-xl z-20"
//             >
//               {experienceOptions.map((option) => (
//                 <div
//                   key={option.value}
//                   onClick={() => {
//                     setExperience(option.value);
//                     setIsDropdownOpen(false);
//                   }}
//                   className={`p-3 cursor-pointer text-gray-800 text-sm sm:text-base transition ${
//                     experience === option.value
//                       ? "bg-orange-500 text-white"
//                       : "hover:bg-orange-100"
//                   }`}
//                 >
//                   {option.label}
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <textarea
//           placeholder="Why do you want to learn?"
//           rows="3"
//           className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-200 transition text-sm sm:text-base"
//         />
//       </div>

//       <div className="mt-6 flex justify-center gap-3 flex-wrap">
//         <button
//           onClick={onPrev}
//           className="px-5 py-2 sm:px-6 sm:py-3 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 text-sm sm:text-base"
//         >
//           ← Back
//         </button>
//         <button
//           onClick={onNext}
//           className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition text-sm sm:text-base"
//         >
//           Final Review <ArrowRight className="w-4 h-4" />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// // ✅ STEP 3 FORM
// const Step3Review = ({ onSubmit, onPrev }) => (
//   <motion.div
//     initial={{ x: 100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     exit={{ x: -100, opacity: 0 }}
//     transition={{ duration: 0.4 }}
//     className="w-full"
//   >
//     <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2">
//       <SearchCheck className="w-6 h-6 text-orange-500" /> Review & Submit
//     </h4>
//     <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
//       You're almost there! Click confirm to submit your application.
//     </p>

//     <div className="bg-orange-50 p-4 sm:p-6 rounded-lg border border-orange-200 max-w-md mx-auto text-left shadow-inner">
//       <p className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm sm:text-base">
//         <Zap className="w-5 h-5 text-orange-600" /> Important Notes:
//       </p>
//       <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
//         <li>Enrollment is not confirmed until our team contacts you.</li>
//         <li>Expect a call or email within 24 hours.</li>
//       </ul>
//     </div>

//     <div className="mt-6 flex justify-center gap-3 flex-wrap">
//       <button
//         onClick={onPrev}
//         className="px-5 py-2 sm:px-6 sm:py-3 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 text-sm sm:text-base"
//       >
//         ← Back
//       </button>
//       <button
//         onClick={onSubmit}
//         className="px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 text-sm sm:text-base"
//       >
//         Confirm & Send
//       </button>
//     </div>
//   </motion.div>
// );

// // ✅ STEP TRACKER
// const STEPS = [
//   { step: 1, name: "Contact", icon: IdCard },
//   { step: 2, name: "Goals", icon: FileText },
//   { step: 3, name: "Review", icon: SearchCheck },
// ];

// const StepTracker = ({ currentStep }) => (
//   <div className="flex justify-between items-center mb-8 max-w-md mx-auto w-full px-2">
//     {STEPS.map((s) => (
//       <div key={s.step} className="flex flex-col items-center text-center">
//         <div
//           className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold ${
//             s.step < currentStep
//               ? "bg-green-500 text-white"
//               : s.step === currentStep
//               ? "bg-orange-500 text-white"
//               : "bg-gray-200 text-gray-500"
//           }`}
//         >
//           {s.step < currentStep ? <CheckCircle2 className="w-5 h-5" /> : s.step}
//         </div>
//         <span
//           className={`text-xs sm:text-sm mt-1 ${
//             s.step === currentStep ? "text-orange-600" : "text-gray-700"
//           }`}
//         >
//           {s.name}
//         </span>
//       </div>
//     ))}
//   </div>
// );

// // ✅ MAIN FORM WRAPPER
// const AdmissionProcessForm = () => {
//   const [step, setStep] = useState(1);
//   const [modalOpen, setModalOpen] = useState(false);
//   return (
//     <div className="bg-white p-5 sm:p-8 rounded-xl shadow-xl max-w-3xl mx-auto border-t-8 border-orange-600">
//       <StepTracker currentStep={step} />
//       <div className="min-h-[350px] flex justify-center">
//         <AnimatePresence mode="wait">
//           {step === 1 && <Step1Form onNext={() => setStep(2)} />}
//           {step === 2 && (
//             <Step2Form onNext={() => setStep(3)} onPrev={() => setStep(1)} />
//           )}
//           {step === 3 && (
//             <Step3Review
//               onPrev={() => setStep(2)}
//               onSubmit={() => setModalOpen(true)}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//       <AnimatePresence>
//         <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
//       </AnimatePresence>
//     </div>
//   );
// };

// // ✅ MAIN PAGE
// const AdmissionProcess = () => (
//   <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-10">
//     <div className="text-center px-4 mb-10">
//       <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 text-gray-900">
//         Secure Your Spot:{" "}
//         <span className="text-orange-600">3-Step Application</span>
//       </h2>
//       <p className="text-base sm:text-xl text-gray-600">
//         Complete the form below — it's quick, simple, and guides you to your
//         cosmic journey!
//       </p>
//     </div>
//     <AdmissionProcessForm />
//   </div>
// );

// export default AdmissionProcess;






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   CheckCircle2,
//   FileText,
//   IdCard,
//   SearchCheck,
//   ArrowRight,
//   Zap,
// } from "lucide-react";

// // ===============================
// // ✅ SUCCESS MODAL
// // ===============================
// const ContactModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
//         animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//         exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
//         transition={{ type: "spring", stiffness: 100, damping: 12 }}
//         className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md text-center border-t-8 border-orange-500"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring", stiffness: 200 }}
//         >
//           <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-3" />
//         </motion.div>

//         <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//           Application Submitted Successfully!
//         </h3>
//         <p className="text-gray-600 mb-4 text-sm sm:text-base">
//           Thank you for your interest in our course. Our team will reach out
//           within 24 hours to confirm your enrollment.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={onClose}
//           className="mt-4 px-6 py-2 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition w-full sm:w-auto"
//         >
//           Close
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// // ===============================
// // ✅ REUSABLE ANIMATION VARIANTS
// // ===============================
// const pageVariants = {
//   initial: { opacity: 0, scale: 0.95, y: 50 },
//   animate: { opacity: 1, scale: 1, y: 0 },
//   exit: { opacity: 0, scale: 0.95, y: -50 },
// };

// // ===============================
// // ✅ STEP 1 FORM
// // ===============================
// const Step1Form = ({ onNext }) => (
//   <motion.div
//     variants={pageVariants}
//     initial="initial"
//     animate="animate"
//     exit="exit"
//     transition={{ type: "spring", duration: 0.5 }}
//     className="w-full"
//   >
//     <motion.h4
//       initial={{ y: -10, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.1 }}
//       className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2"
//     >
//       <IdCard className="w-6 h-6 text-orange-500" /> Enquire Now
//     </motion.h4>

//     <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
//       Please provide your primary contact information.
//     </p>

//     <motion.div
//       className="space-y-4 max-w-md mx-auto w-full"
//       initial="hidden"
//       animate="visible"
//       variants={{
//         hidden: { opacity: 0 },
//         visible: {
//           opacity: 1,
//           transition: { staggerChildren: 0.1 },
//         },
//       }}
//     >
//       {["Full Name", "Email Address", "Phone Number"].map((placeholder, i) => (
//         <motion.input
//           key={i}
//           type={placeholder.includes("Email") ? "email" : "text"}
//           placeholder={placeholder}
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition text-sm sm:text-base"
//         />
//       ))}
//     </motion.div>

//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onNext}
//       className="mt-6 flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition shadow-md text-sm sm:text-base"
//     >
//       Next: Educational Background <ArrowRight className="w-4 h-4" />
//     </motion.button>
//   </motion.div>
// );

// // ===============================
// // ✅ STEP 2 FORM
// // ===============================
// const Step2Form = ({ onNext, onPrev }) => {
//   const [experience, setExperience] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const experienceOptions = [
//     { value: "beginner", label: "Beginner (No prior knowledge)" },
//     { value: "intermediate", label: "Intermediate (Some knowledge)" },
//     { value: "advanced", label: "Advanced (Practicing professionally)" },
//   ];

//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{ type: "spring", duration: 0.5 }}
//       className="w-full"
//     >
//       <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2">
//         <FileText className="w-6 h-6 text-orange-500" /> Experience & Goals
//       </h4>
//       <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
//         Help us tailor the experience by telling us about your background.
//       </p>

//       <div className="space-y-4 max-w-md mx-auto relative w-full">
//         <motion.button
//           type="button"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           whileHover={{ scale: 1.02 }}
//           className="w-full p-3 border border-gray-300 rounded-lg bg-white text-left font-semibold text-sm sm:text-base flex justify-between items-center focus:border-orange-500"
//         >
//           {experience
//             ? experienceOptions.find((o) => o.value === experience)?.label
//             : "Select Your Experience Level"}
//           <ArrowRight
//             className={`w-4 h-4 text-gray-500 transform transition-transform ${
//               isDropdownOpen ? "rotate-90" : "rotate-0"
//             }`}
//           />
//         </motion.button>

//         <AnimatePresence>
//           {isDropdownOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -5 }}
//               transition={{ duration: 0.2 }}
//               className="absolute top-[105%] inset-x-0 bg-white border border-gray-300 rounded-lg shadow-xl z-20"
//             >
//               {experienceOptions.map((option) => (
//                 <div
//                   key={option.value}
//                   onClick={() => {
//                     setExperience(option.value);
//                     setIsDropdownOpen(false);
//                   }}
//                   className={`p-3 cursor-pointer text-gray-800 text-sm sm:text-base transition ${
//                     experience === option.value
//                       ? "bg-orange-500 text-white"
//                       : "hover:bg-orange-100"
//                   }`}
//                 >
//                   {option.label}
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <motion.textarea
//           whileFocus={{ scale: 1.02 }}
//           placeholder="Why do you want to learn?"
//           rows="3"
//           className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-200 transition text-sm sm:text-base"
//         />
//       </div>

//       <div className="mt-6 flex justify-center gap-3 flex-wrap">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={onPrev}
//           className="px-5 py-2 sm:px-6 sm:py-3 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 text-sm sm:text-base"
//         >
//           ← Back
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={onNext}
//           className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition text-sm sm:text-base"
//         >
//           Final Review <ArrowRight className="w-4 h-4" />
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// // ===============================
// // ✅ STEP 3 FORM
// // ===============================
// const Step3Review = ({ onSubmit, onPrev }) => (
//   <motion.div
//     variants={pageVariants}
//     initial="initial"
//     animate="animate"
//     exit="exit"
//     transition={{ type: "spring", duration: 0.5 }}
//     className="w-full"
//   >
//     <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2">
//       <SearchCheck className="w-6 h-6 text-orange-500" /> Review & Submit
//     </h4>
//     <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
//       You're almost there! Click confirm to submit your application.
//     </p>

//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.4 }}
//       className="bg-orange-50 p-4 sm:p-6 rounded-lg border border-orange-200 max-w-md mx-auto text-left shadow-inner"
//     >
//       <p className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm sm:text-base">
//         <Zap className="w-5 h-5 text-orange-600" /> Important Notes:
//       </p>
//       <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
//         <li>Enrollment is not confirmed until our team contacts you.</li>
//         <li>Expect a call or email within 24 hours.</li>
//       </ul>
//     </motion.div>

//     <div className="mt-6 flex justify-center gap-3 flex-wrap">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         onClick={onPrev}
//         className="px-5 py-2 sm:px-6 sm:py-3 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 text-sm sm:text-base"
//       >
//         ← Back
//       </motion.button>
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={onSubmit}
//         className="px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 text-sm sm:text-base"
//       >
//         Confirm & Send
//       </motion.button>
//     </div>
//   </motion.div>
// );

// // ===============================
// // ✅ STEP TRACKER
// // ===============================
// const STEPS = [
//   { step: 1, name: "Contact", icon: IdCard },
//   { step: 2, name: "Goals", icon: FileText },
//   { step: 3, name: "Review", icon: SearchCheck },
// ];

// const StepTracker = ({ currentStep }) => (
//   <div className="flex justify-between items-center mb-8 max-w-md mx-auto w-full px-2">
//     {STEPS.map((s) => (
//       <motion.div
//         key={s.step}
//         className="flex flex-col items-center text-center"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 150, damping: 10 }}
//       >
//         <div
//           className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold shadow-md ${
//             s.step < currentStep
//               ? "bg-green-500 text-white"
//               : s.step === currentStep
//               ? "bg-orange-500 text-white"
//               : "bg-gray-200 text-gray-500"
//           }`}
//         >
//           {s.step < currentStep ? <CheckCircle2 className="w-5 h-5" /> : s.step}
//         </div>
//         <span
//           className={`text-xs sm:text-sm mt-1 ${
//             s.step === currentStep ? "text-orange-600" : "text-gray-700"
//           }`}
//         >
//           {s.name}
//         </span>
//       </motion.div>
//     ))}
//   </div>
// );

// // ===============================
// // ✅ MAIN FORM WRAPPER
// // ===============================
// const AdmissionProcessForm = () => {
//   const [step, setStep] = useState(1);
//   const [modalOpen, setModalOpen] = useState(false);
//   return (
//     <div className="bg-white p-5 sm:p-8 rounded-xl shadow-xl max-w-3xl mx-auto border-t-8 border-orange-600">
//       <StepTracker currentStep={step} />
//       <div className="min-h-[350px] flex justify-center">
//         <AnimatePresence mode="wait">
//           {step === 1 && <Step1Form onNext={() => setStep(2)} />}
//           {step === 2 && (
//             <Step2Form onNext={() => setStep(3)} onPrev={() => setStep(1)} />
//           )}
//           {step === 3 && (
//             <Step3Review
//               onPrev={() => setStep(2)}
//               onSubmit={() => setModalOpen(true)}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//       <AnimatePresence>
//         <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
//       </AnimatePresence>
//     </div>
//   );
// };

// // ===============================
// // ✅ MAIN PAGE
// // ===============================
// const AdmissionProcess = () => (
//   <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-10">
//     <div className="text-center px-4 mb-10">
//       <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 text-gray-900">
//         Secure Your Spot:{" "}
//         <span className="text-orange-600">3-Step Application</span>
//       </h2>
//       <p className="text-base sm:text-xl text-gray-600">
//         Complete the form below — it's quick, simple, and guides you to your
//         cosmic journey!
//       </p>
//     </div>
//     <AdmissionProcessForm />
//   </div>
// );

// export default AdmissionProcess;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   CheckCircle2,
//   FileText,
//   IdCard,
//   SearchCheck,
//   ArrowRight,
//   Zap,
// } from "lucide-react";

// // ===============================
// // ✅ SUCCESS MODAL (Retained)
// // ===============================
// const ContactModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
//         animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//         exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
//         transition={{ type: "spring", stiffness: 100, damping: 12 }}
//         className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md text-center border-t-8 border-orange-500"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring", stiffness: 200 }}
//         >
//           <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-3" />
//         </motion.div>

//         <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//           Application Submitted Successfully!
//         </h3>
//         <p className="text-gray-600 mb-4 text-sm sm:text-base">
//           Thank you for your interest in our course. Our team will reach out
//           within 24 hours to confirm your enrollment.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={onClose}
//           className="mt-4 px-6 py-2 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition w-full sm:w-auto"
//         >
//           Close
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// // ===============================
// // ✅ REUSABLE ANIMATION VARIANTS (Retained)
// // ===============================
// const pageVariants = {
//   initial: { opacity: 0, scale: 0.95, y: 50 },
//   animate: { opacity: 1, scale: 1, y: 0 },
//   exit: { opacity: 0, scale: 0.95, y: -50 },
// };

// // ===============================
// // ✅ STEP 1 FORM (Optimized)
// // ===============================
// const Step1Form = ({ onNext }) => (
//   <motion.div
//     variants={pageVariants}
//     initial="initial"
//     animate="animate"
//     exit="exit"
//     transition={{ type: "spring", duration: 0.5 }}
//     className="w-full"
//   >
//     <motion.h4
//       initial={{ y: -10, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.1 }}
//       className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2" // Reduced font size on small screens
//     >
//       <IdCard className="w-5 h-5 text-orange-500" /> Enquire Now
//     </motion.h4>

//     <p className="text-gray-600 mb-6 text-center text-xs sm:text-sm">
//       Please provide your primary contact information.
//     </p>

//     <motion.div
//       className="space-y-3 max-w-xs mx-auto w-full" // Reduced max-width and space-y for compactness
//       initial="hidden"
//       animate="visible"
//       variants={{
//         hidden: { opacity: 0 },
//         visible: {
//           opacity: 1,
//           transition: { staggerChildren: 0.1 },
//         },
//       }}
//     >
//       {["Full Name", "Email Address", "Phone Number"].map((placeholder, i) => (
//         <motion.input
//           key={i}
//           type={placeholder.includes("Email") ? "email" : "text"}
//           placeholder={placeholder}
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition text-sm" // Reduced padding and standardized text-sm
//         />
//       ))}
//     </motion.div>

//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onNext}
//       className="mt-5 flex items-center justify-center gap-2 mx-auto px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition shadow-md text-sm" // Reduced padding and margin
//     >
//       Next: Educational Background <ArrowRight className="w-4 h-4" />
//     </motion.button>
//   </motion.div>
// );

// // ===============================
// // ✅ STEP 2 FORM (Optimized)
// // ===============================
// const Step2Form = ({ onNext, onPrev }) => {
//   const [experience, setExperience] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const experienceOptions = [
//     { value: "beginner", label: "Beginner (No prior knowledge)" },
//     { value: "intermediate", label: "Intermediate (Some knowledge)" },
//     { value: "advanced", label: "Advanced (Practicing professionally)" },
//   ];

//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{ type: "spring", duration: 0.5 }}
//       className="w-full"
//     >
//       <h4 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2"> {/* Reduced font size on small screens */}
//         <FileText className="w-5 h-5 text-orange-500" /> Experience & Goals
//       </h4>
//       <p className="text-gray-600 mb-6 text-center text-xs sm:text-sm">
//         Help us tailor the experience by telling us about your background.
//       </p>

//       <div className="space-y-3 max-w-xs  mx-auto relative md:max-w-xl"> {/* Reduced max-width and space-y for compactness */}
//         <motion.button
//           type="button"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           whileHover={{ scale: 1.02 }}
//           className="md:max-w-xl p-2 border border-gray-300 rounded-lg bg-white text-left font-semibold text-sm flex justify-between items-center focus:border-orange-500" // Reduced padding
//         >
//           {experience
//             ? experienceOptions.find((o) => o.value === experience)?.label
//             : "Select Your Experience Level"}
//           <ArrowRight
//             className={`w-4 h-4 text-gray-500 transform transition-transform ${
//               isDropdownOpen ? "rotate-90" : "rotate-0"
//             }`}
//           />
//         </motion.button>

//         <AnimatePresence>
//           {isDropdownOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -5 }}
//               transition={{ duration: 0.2 }}
//               className="absolute top-[105%] inset-x-0 bg-white border border-gray-300 rounded-lg shadow-xl z-20"
//             >
//               {experienceOptions.map((option) => (
//                 <div
//                   key={option.value}
//                   onClick={() => {
//                     setExperience(option.value);
//                     setIsDropdownOpen(false);
//                   }}
//                   className={`p-2 cursor-pointer text-gray-800 text-sm transition ${ // Reduced padding
//                     experience === option.value
//                       ? "bg-orange-500 text-white"
//                       : "hover:bg-orange-100"
//                   }`}
//                 >
//                   {option.label}
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <motion.textarea
//           whileFocus={{ scale: 1.02 }}
//           placeholder="Why do you want to learn?"
//           rows="3"
//           className="w-full p-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-200 transition text-sm" // Reduced padding
//         />
//       </div>

//       <div className="mt-5 flex justify-center gap-3 flex-wrap"> {/* Reduced margin-top */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={onPrev}
//           className="px-4 py-2 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 text-sm" // Reduced padding and standardized text-sm
//         >
//           ← Back
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={onNext}
//           className="flex items-center gap-2 px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition text-sm" // Reduced padding
//         >
//           Final Review <ArrowRight className="w-4 h-4" />
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// // ===============================
// // ✅ STEP 3 FORM (Optimized)
// // ===============================
// const Step3Review = ({ onSubmit, onPrev }) => (
//   <motion.div
//     variants={pageVariants}
//     initial="initial"
//     animate="animate"
//     exit="exit"
//     transition={{ type: "spring", duration: 0.5 }}
//     className="w-full"
//   >
//     <h4 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2"> {/* Reduced font size on small screens */}
//       <SearchCheck className="w-5 h-5 text-orange-500" /> Review & Submit
//     </h4>
//     <p className="text-gray-600 mb-6 text-center text-xs sm:text-sm">
//       You're almost there! Click confirm to submit your application.
//     </p>

//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.4 }}
//       className="bg-orange-50 p-4 rounded-lg border border-orange-200 max-w-xs mx-auto text-left shadow-inner" // Reduced padding and max-width
//     >
//       <p className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm">
//         <Zap className="w-4 h-4 text-orange-600" /> Important Notes:
//       </p>
//       <ul className="list-disc list-inside text-gray-700 text-xs space-y-1"> {/* Reduced font size */}
//         <li>Enrollment is not confirmed until our team contacts you.</li>
//         <li>Expect a call or email within 24 hours.</li>
//       </ul>
//     </motion.div>

//     <div className="mt-5 flex justify-center gap-3 flex-wrap"> {/* Reduced margin-top */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         onClick={onPrev}
//         className="px-4 py-2 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 text-sm" // Reduced padding
//       >
//         ← Back
//       </motion.button>
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={onSubmit}
//         className="px-5 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 text-sm" // Reduced padding
//       >
//         Confirm & Send
//       </motion.button>
//     </div>
//   </motion.div>
// );

// // ===============================
// // ✅ STEP TRACKER (Optimized)
// // ===============================
// const STEPS = [
//   { step: 1, name: "Contact", icon: IdCard },
//   { step: 2, name: "Goals", icon: FileText },
//   { step: 3, name: "Review", icon: SearchCheck },
// ];

// const StepTracker = ({ currentStep }) => (
//   <div className="flex justify-between items-center mb-6 max-w-sm sm:max-w-md mx-auto w-full px-1"> {/* Reduced margin-bottom, max-width, and padding-x */}
//     {STEPS.map((s) => (
//       <motion.div
//         key={s.step}
//         className="flex flex-col items-center text-center"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 150, damping: 10 }}
//       >
//         <div
//           className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold shadow-md text-sm ${ // Reduced size of circles
//             s.step < currentStep
//               ? "bg-green-500 text-white"
//               : s.step === currentStep
//               ? "bg-orange-500 text-white"
//               : "bg-gray-200 text-gray-500"
//           }`}
//         >
//           {s.step < currentStep ? <CheckCircle2 className="w-4 h-4" /> : s.step}
//         </div>
//         <span
//           className={`text-xs mt-1 ${ // Standardized text size to text-xs
//             s.step === currentStep ? "text-orange-600" : "text-gray-700"
//           }`}
//         >
//           {s.name}
//         </span>
//       </motion.div>
//     ))}
//   </div>
// );

// // ===============================
// // ✅ MAIN FORM WRAPPER (Optimized)
// // ===============================
// const AdmissionProcessForm = () => {
//   const [step, setStep] = useState(1);
//   const [modalOpen, setModalOpen] = useState(false);
//   return (
//     <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl max-w-lg sm:max-w-sm  mx-auto border-t-8 border-orange-600"> {/* Reduced padding and max-width */}
//       <StepTracker currentStep={step} />
//       <div className="min-h-[350px] flex justify-center">
//         <AnimatePresence mode="wait">
//           {step === 1 && <Step1Form onNext={() => setStep(2)} />}
//           {step === 2 && (
//             <Step2Form onNext={() => setStep(3)} onPrev={() => setStep(1)} />
//           )}
//           {step === 3 && (
//             <Step3Review
//               onPrev={() => setStep(2)}
//               onSubmit={() => setModalOpen(true)}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//       <AnimatePresence>
//         <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
//       </AnimatePresence>
//     </div>
//   );
// };

// // ===============================
// // ✅ MAIN PAGE (Retained)
// // ===============================
// const AdmissionProcess = () => (
//   <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-10">
//     <div className="text-center px-4 mb-10">
//       <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 text-gray-900">
//         Secure Your Spot:{" "}
//         <span className="text-orange-600">3-Step Application</span>
//       </h2>
//       <p className="text-base sm:text-xl text-gray-600">
//         Complete the form below — it's quick, simple, and guides you to your
//         cosmic journey!
//       </p>
//     </div>
//     <AdmissionProcessForm />
//   </div>
// );

// export default AdmissionProcess;












// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   CheckCircle2,
//   FileText,
//   IdCard,
//   SearchCheck,
//   ArrowRight,
//   Zap,
// } from "lucide-react";

// // ===============================
// // ✅ SUCCESS MODAL (Optimized for mobile view)
// // ===============================
// const ContactModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
//         animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//         exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
//         transition={{ type: "spring", stiffness: 100, damping: 12 }}
//         // 🗑️ CHANGE: Reduced max-w-sm to max-w-xs for a smaller modal on all screens
//         className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-xs text-center border-t-8 border-orange-500"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring", stiffness: 200 }}
//         >
//           <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-3" /> {/* 🗑️ CHANGE: Smaller icon */}
//         </motion.div>

//         <h3 className="text-xl font-bold text-gray-900 mb-2"> {/* 🗑️ CHANGE: Reduced font size */}
//           Application Submitted!
//         </h3>
//         <p className="text-gray-600 mb-4 text-sm"> {/* 🗑️ CHANGE: Smaller text */}
//           Thank you! Our team will reach out within 24 hours.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={onClose}
//           className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition w-full text-sm" // 🗑️ CHANGE: Smaller padding and text
//         >
//           Close
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// // ===============================
// // ✅ REUSABLE ANIMATION VARIANTS (Retained)
// // ===============================
// const pageVariants = {
//   initial: { opacity: 0, scale: 0.95, y: 50 },
//   animate: { opacity: 1, scale: 1, y: 0 },
//   exit: { opacity: 0, scale: 0.95, y: -50 },
// };

// // ===============================
// // ✅ STEP 1 FORM (Mobile Optimized)
// // ===============================
// const Step1Form = ({ onNext }) => (
//   <motion.div
//     variants={pageVariants}
//     initial="initial"
//     animate="animate"
//     exit="exit"
//     transition={{ type: "spring", duration: 0.5 }}
//     className="w-full"
//   >
//     <motion.h4
//       initial={{ y: -10, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.1 }}
//       className="text-xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2" // 🗑️ CHANGE: Fixed size to text-xl (mobile size)
//     >
//       <IdCard className="w-5 h-5 text-orange-500" /> Enquire Now
//     </motion.h4>

//     <p className="text-gray-600 mb-6 text-center text-sm"> {/* 🗑️ CHANGE: Fixed size to text-sm */}
//       Please provide your primary contact information.
//     </p>

//     <motion.div
//       className="space-y-3 max-w-xs mx-auto w-full" // 🗑️ CHANGE: Use max-w-xs to constrain input width
//       initial="hidden"
//       animate="visible"
//       variants={{
//         hidden: { opacity: 0 },
//         visible: {
//           opacity: 1,
//           transition: { staggerChildren: 0.1 },
//         },
//       }}
//     >
//       {["Full Name", "Email Address", "Phone Number"].map((placeholder, i) => (
//         <motion.input
//           key={i}
//           type={placeholder.includes("Email") ? "email" : "text"}
//           placeholder={placeholder}
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition text-sm" // 🗑️ CHANGE: Reduced padding p-2 and standardized text-sm
//         />
//       ))}
//     </motion.div>

//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onNext}
//       className="mt-5 flex items-center justify-center gap-2 mx-auto px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition shadow-md text-sm" // 🗑️ CHANGE: Reduced padding and margin
//     >
//       Next: Educational Background <ArrowRight className="w-4 h-4" />
//     </motion.button>
//   </motion.div>
// );

// // ===============================
// // ✅ STEP 2 FORM (Mobile Optimized)
// // ===============================
// const Step2Form = ({ onNext, onPrev }) => {
//   const [experience, setExperience] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const experienceOptions = [
//     { value: "beginner", label: "Beginner (No prior knowledge)" },
//     { value: "intermediate", label: "Intermediate (Some knowledge)" },
//     { value: "advanced", label: "Advanced (Practicing professionally)" },
//   ];

//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{ type: "spring", duration: 0.5 }}
//       className="w-full"
//     >
//       <h4 className="text-xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2"> {/* 🗑️ CHANGE: Fixed size to text-xl */}
//         <FileText className="w-5 h-5 text-orange-500" /> Experience & Goals
//       </h4>
//       <p className="text-gray-600 mb-6 text-center text-sm"> {/* 🗑️ CHANGE: Fixed size to text-sm */}
//         Help us tailor the experience by telling us about your background.
//       </p>

//       <div className="space-y-3 max-w-xs mx-auto relative"> {/* 🗑️ CHANGE: Use max-w-xs to constrain input width */}
//         <motion.button
//           type="button"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           whileHover={{ scale: 1.02 }}
//           className="w-full p-2 border border-gray-300 rounded-lg bg-white text-left font-semibold text-sm flex justify-between items-center focus:border-orange-500" // 🗑️ CHANGE: Reduced padding and fixed text-sm
//         >
//           {experience
//             ? experienceOptions.find((o) => o.value === experience)?.label
//             : "Select Your Experience Level"}
//           <ArrowRight
//             className={`w-4 h-4 text-gray-500 transform transition-transform ${
//               isDropdownOpen ? "rotate-90" : "rotate-0"
//             }`}
//           />
//         </motion.button>

//         <AnimatePresence>
//           {isDropdownOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -5 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -5 }}
//               transition={{ duration: 0.2 }}
//               className="absolute top-[105%] inset-x-0 bg-white border border-gray-300 rounded-lg shadow-xl z-20"
//             >
//               {experienceOptions.map((option) => (
//                 <div
//                   key={option.value}
//                   onClick={() => {
//                     setExperience(option.value);
//                     setIsDropdownOpen(false);
//                   }}
//                   className={`p-2 cursor-pointer text-gray-800 text-sm transition ${ // 🗑️ CHANGE: Reduced padding and fixed text-sm
//                     experience === option.value
//                       ? "bg-orange-500 text-white"
//                       : "hover:bg-orange-100"
//                   }`}
//                 >
//                   {option.label}
//                 </div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <motion.textarea
//           whileFocus={{ scale: 1.02 }}
//           placeholder="Why do you want to learn?"
//           rows="3"
//           className="w-full p-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-200 transition text-sm" // 🗑️ CHANGE: Reduced padding and fixed text-sm
//         />
//       </div>

//       <div className="mt-5 flex justify-center gap-3 flex-wrap"> {/* 🗑️ CHANGE: Reduced margin-top */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={onPrev}
//           className="px-4 py-2 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 text-sm" // 🗑️ CHANGE: Reduced padding and fixed text-sm
//         >
//           ← Back
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           onClick={onNext}
//           className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition text-sm" // 🗑️ CHANGE: Reduced padding
//         >
//           Final Review <ArrowRight className="w-4 h-4" />
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// // ===============================
// // ✅ STEP 3 FORM (Mobile Optimized)
// // ===============================
// const Step3Review = ({ onSubmit, onPrev }) => (
//   <motion.div
//     variants={pageVariants}
//     initial="initial"
//     animate="animate"
//     exit="exit"
//     transition={{ type: "spring", duration: 0.5 }}
//     className="w-full"
//   >
//     <h4 className="text-xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2"> {/* 🗑️ CHANGE: Fixed size to text-xl */}
//       <SearchCheck className="w-5 h-5 text-orange-500" /> Review & Submit
//     </h4>
//     <p className="text-gray-600 mb-6 text-center text-sm"> {/* 🗑️ CHANGE: Fixed size to text-sm */}
//       You're almost there! Click confirm to submit your application.
//     </p>

//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.4 }}
//       className="bg-orange-50 p-3 rounded-lg border border-orange-200 max-w-xs mx-auto text-left shadow-inner" // 🗑️ CHANGE: Reduced padding p-3 and set max-w-xs
//     >
//       <p className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm"> {/* 🗑️ CHANGE: Fixed text-sm */}
//         <Zap className="w-4 h-4 text-orange-600" /> Important Notes:
//       </p>
//       <ul className="list-disc list-inside text-gray-700 text-xs space-y-1"> {/* 🗑️ CHANGE: Fixed text-xs */}
//         <li>Enrollment is not confirmed until our team contacts you.</li>
//         <li>Expect a call or email within 24 hours.</li>
//       </ul>
//     </motion.div>

//     <div className="mt-5 flex justify-center gap-3 flex-wrap"> {/* 🗑️ CHANGE: Reduced margin-top */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         onClick={onPrev}
//         className="px-4 py-2 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 text-sm" // 🗑️ CHANGE: Reduced padding
//       >
//         ← Back
//       </motion.button>
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={onSubmit}
//         className="px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 text-sm" // 🗑️ CHANGE: Reduced padding
//       >
//         Confirm & Send
//       </motion.button>
//     </div>
//   </motion.div>
// );

// // ===============================
// // ✅ STEP TRACKER (Mobile Optimized)
// // ===============================
// const STEPS = [
//   { step: 1, name: "Contact", icon: IdCard },
//   { step: 2, name: "Goals", icon: FileText },
//   { step: 3, name: "Review", icon: SearchCheck },
// ];

// const StepTracker = ({ currentStep }) => (
//   // 🗑️ CHANGE: Reduced max-w-xs and removed all padding-x
//   <div className="flex justify-between items-center mb-6 max-w-xs mx-auto w-full"> 
//     {STEPS.map((s) => (
//       <motion.div
//         key={s.step}
//         className="flex flex-col items-center text-center"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 150, damping: 10 }}
//       >
//         <div
//           // 🗑️ CHANGE: Reduced size of circles to w-8 h-8
//           className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-md ${ 
//             s.step < currentStep
//               ? "bg-green-500 text-white"
//               : s.step === currentStep
//               ? "bg-orange-500 text-white"
//               : "bg-gray-200 text-gray-500"
//           }`}
//         >
//           {s.step < currentStep ? <CheckCircle2 className="w-3 h-3" /> : s.step} {/* 🗑️ CHANGE: Smaller icon */}
//         </div>
//         <span
//           className={`text-xs mt-1 ${ // 🗑️ CHANGE: Standardized text size to text-xs
//             s.step === currentStep ? "text-orange-600" : "text-gray-700"
//           }`}
//         >
//           {s.name}
//         </span>
//       </motion.div>
//     ))}
//   </div>
// );

// // ===============================
// // ✅ MAIN FORM WRAPPER (Mobile Optimized)
// // ===============================
// const AdmissionProcessForm = () => {
//   const [step, setStep] = useState(1);
//   const [modalOpen, setModalOpen] = useState(false);
//   return (
//     // 🗑️ **MAJOR CHANGE:** Set max-w-sm for the card overall, and reduced padding to p-4
//     // This constrains the card width for mobile and tablet views.
//     <div className="mt-12 bg-white p-4 rounded-xl shadow-xl max-w-sm mx-auto border-t-8 border-orange-600"> 
//       <StepTracker currentStep={step} />
//       {/* 🗑️ CHANGE: Minimized min-height for compactness */}
//       <div className="min-h-[300px] flex justify-center"> 
//         <AnimatePresence mode="wait">
//           {step === 1 && <Step1Form onNext={() => setStep(2)} />}
//           {step === 2 && (
//             <Step2Form onNext={() => setStep(3)} onPrev={() => setStep(1)} />
//           )}
//           {step === 3 && (
//             <Step3Review
//               onPrev={() => setStep(2)}
//               onSubmit={() => setModalOpen(true)}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//       <AnimatePresence>
//         <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
//       </AnimatePresence>
//     </div>
//   );
// };

// // ===============================
// // ✅ MAIN PAGE (Optimized)
// // ===============================
// const AdmissionProcess = () => (
//   <div className=" bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-10"> {/* 🗑️ CHANGE: Reduced vertical padding to py-6 */}
//     <div className="text-center px-4 mb-6"> {/* 🗑️ CHANGE: Reduced margin-bottom to mb-6 */}
//       {/* 🗑️ CHANGE: Fixed header size to text-3xl for better mobile fit */}
//       <h2 className="text-3xl font-extrabold mb-2 text-gray-900"> 
//         Secure Your Spot:{" "}
//         <span className="text-orange-600">3-Step Application</span>
//       </h2>
//       <p className="text-base text-gray-600"> {/* 🗑️ CHANGE: Fixed text size to text-base */}
//         Complete the form below — it's quick, simple, and guides you to your
//         cosmic journey!
//       </p>
//     </div>
//     <AdmissionProcessForm />
//   </div>
// );

// export default AdmissionProcess;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  IdCard,
  SearchCheck,
  ArrowRight,
  Zap,
} from "lucide-react";

// ===============================
// ✅ SUCCESS MODAL (Retained)
// ===============================
const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-xs text-center border-t-8 border-orange-500"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-3" />
        </motion.div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Application Submitted!
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          Thank you! Our team will reach out within 24 hours.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition w-full text-sm"
        >
          Close
        </motion.button>
      </motion.div>
    </div>
  );
};

// ===============================
// ✅ REUSABLE ANIMATION VARIANTS (Retained)
// ===============================
const pageVariants = {
  initial: { opacity: 0, scale: 0.95, y: 50 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -50 },
};

// ===============================
// ✅ STEP 1 FORM (Input Width Updated)
// ===============================
const Step1Form = ({ onNext, formData, setFormData }) => {
  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.emailAddress.trim() !== "" &&
    formData.phoneNumber.trim() !== "";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", duration: 0.5 }}
      className="w-full"
    >
      <motion.h4
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2"
      >
        <IdCard className="w-5 h-5 text-orange-500" /> **Enquire Now**
      </motion.h4>

      <p className="text-gray-600 mb-6 text-center text-sm">
        Please provide your primary contact information.
      </p>

      <motion.div
        // 🚀 IMPROVED: Inputs scale up on larger screens
        className="space-y-3 w-full max-w-xs mx-auto md:max-w-md lg:max-w-lg" 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {[
          { name: "fullName", placeholder: "Full Name", type: "text" },
          { name: "emailAddress", placeholder: "Email Address", type: "email" },
          { name: "phoneNumber", placeholder: "Phone Number", type: "tel" },
        ].map((field, i) => (
          <motion.input
            key={i}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleInputChange}
            required
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition text-base"
          />
        ))}
      </motion.div>

      <motion.button
        whileHover={{ scale: isFormValid ? 1.05 : 1 }}
        whileTap={{ scale: isFormValid ? 0.95 : 1 }}
        onClick={isFormValid ? onNext : undefined}
        disabled={!isFormValid}
        className={`mt-5 flex items-center justify-center gap-2 mx-auto px-6 py-2 font-semibold rounded-lg transition shadow-md text-base ${
          isFormValid
            ? "bg-orange-500 text-white hover:bg-orange-600 cursor-pointer"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Next: Educational Background <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

// ===============================
// ✅ STEP 2 FORM (Input Width Updated)
// ===============================
const Step2Form = ({ onNext, onPrev, formData, setFormData }) => {
  const experienceOptions = [
    { value: "beginner", label: "Beginner (No prior knowledge)" },
    { value: "intermediate", label: "Intermediate (Some knowledge)" },
    { value: "advanced", label: "Advanced (Practicing professionally)" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (value) => {
    setFormData({ ...formData, experience: value });
    setIsDropdownOpen(false);
  };

  const handleGoalsChange = (e) => {
    setFormData({ ...formData, learningGoals: e.target.value });
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", duration: 0.5 }}
      className="w-full"
    >
      <h4 className="text-xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2">
        <FileText className="w-5 h-5 text-orange-500" /> **Experience & Goals**
      </h4>
      <p className="text-gray-600 mb-6 text-center text-sm">
        Help us tailor the experience by telling us about your background.
      </p>

      {/* 🚀 IMPROVED: Inputs scale up on larger screens */}
      <div className="space-y-3 w-full max-w-xs mx-auto relative md:max-w-md lg:max-w-lg">
        <motion.button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          whileHover={{ scale: 1.02 }}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-left font-semibold text-base flex justify-between items-center focus:border-orange-500"
        >
          {formData.experience
            ? experienceOptions.find((o) => o.value === formData.experience)?.label
            : "Select Your Experience Level"}
          <ArrowRight
            className={`w-4 h-4 text-gray-500 transform transition-transform ${
              isDropdownOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </motion.button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[110%] inset-x-0 bg-white border border-gray-300 rounded-lg shadow-xl z-20"
            >
              {experienceOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`p-3 cursor-pointer text-gray-800 text-base transition ${
                    formData.experience === option.value
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-100"
                  }`}
                >
                  {option.label}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          placeholder="Why do you want to learn? (Your goals)"
          rows="3"
          value={formData.learningGoals}
          onChange={handleGoalsChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-200 transition text-base"
        />
      </div>

      <div className="mt-5 flex justify-center gap-3 flex-wrap">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onPrev}
          className="px-6 py-2 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 text-base"
        >
          ← Back
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onNext}
          className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition text-base"
        >
          Final Review <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

// ===============================
// ✅ STEP 3 FORM (Updated review size)
// ===============================
const Step3Review = ({ onSubmit, onPrev, formData }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ type: "spring", duration: 0.5 }}
    className="w-full"
  >
    <h4 className="text-xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2">
      <SearchCheck className="w-5 h-5 text-orange-500" /> **Review & Submit**
    </h4>
    <p className="text-gray-600 mb-6 text-center text-sm">
      **Please verify your details below** and click confirm to submit your application.
    </p>

    {/* 🚀 IMPROVED: Review section now scales with the rest of the form */}
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-4 rounded-lg border border-orange-200 max-w-xs mx-auto text-left shadow-lg mb-5 space-y-2 md:max-w-md lg:max-w-lg"
    >
        <p className="text-sm font-semibold text-gray-800 border-b pb-1">Your Details:</p>
        <p className="text-xs text-gray-700"><span className="font-medium">Name:</span> {formData.fullName}</p>
        <p className="text-xs text-gray-700"><span className="font-medium">Email:</span> {formData.emailAddress}</p>
        <p className="text-xs text-gray-700"><span className="font-medium">Phone:</span> {formData.phoneNumber}</p>
        <p className="text-xs text-gray-700"><span className="font-medium">Level:</span> {formData.experience || 'Not specified'}</p>
        <p className="text-xs text-gray-700"><span className="font-medium">Goals:</span> {formData.learningGoals.substring(0, 50)}...</p>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-orange-50 p-3 rounded-lg border border-orange-200 max-w-xs mx-auto text-left shadow-inner"
    >
      <p className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm">
        <Zap className="w-4 h-4 text-orange-600" /> Important Notes:
      </p>
      <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
        <li>Enrollment is not confirmed until our team contacts you.</li>
        <li>Expect a call or email within 24 hours.</li>
      </ul>
    </motion.div>

    <div className="mt-5 flex justify-center gap-3 flex-wrap">
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={onPrev}
        className="px-6 py-2 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 text-base"
      >
        ← Back
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSubmit}
        className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 text-base"
      >
        Confirm & Send
      </motion.button>
    </div>
  </motion.div>
);

// ===============================
// ✅ STEP TRACKER (Retained)
// ===============================
const STEPS = [
  { step: 1, name: "Contact", icon: IdCard },
  { step: 2, name: "Goals", icon: FileText },
  { step: 3, name: "Review", icon: SearchCheck },
];

const StepTracker = ({ currentStep }) => (
  // 🚀 IMPROVED: Tracker scales up with the form wrapper
  <div className="flex justify-between items-center mb-6 max-w-xs mx-auto w-full md:max-w-md lg:max-w-lg">
    {STEPS.map((s) => (
      <motion.div
        key={s.step}
        className="flex flex-col items-center text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-md ${
            s.step < currentStep
              ? "bg-green-500 text-white"
              : s.step === currentStep
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          {s.step < currentStep ? <CheckCircle2 className="w-3 h-3" /> : s.step}
        </div>
        <span
          className={`text-xs mt-1 ${
            s.step === currentStep ? "text-orange-600" : "text-gray-700"
          }`}
        >
          {s.name}
        </span>
      </motion.div>
    ))}
  </div>
);

// ===============================
// ✅ MAIN FORM WRAPPER (Updated Max-Width)
// ===============================
const AdmissionProcessForm = () => {
  const [step, setStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    experience: "",
    learningGoals: "",
  });
  
  const handleStep1Next = () => {
    // Validation is handled in Step1Form component, but we ensure it here too
    if (formData.fullName && formData.emailAddress && formData.phoneNumber) {
      setStep(2);
    }
  }

  return (
    // 🚀 IMPROVED: Using max-w-xs for small screens, scaling up for a better look.
    <div className="mt-12 bg-white p-6 rounded-xl shadow-2xl mx-auto border-t-8 border-orange-600 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <StepTracker currentStep={step} />
      {/* Set responsive min-height for the form content area */}
      <div className="min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex justify-center">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <Step1Form 
                onNext={handleStep1Next} 
                formData={formData} 
                setFormData={setFormData} 
            />
          )}
          {step === 2 && (
            <Step2Form
              onNext={() => setStep(3)}
              onPrev={() => setStep(1)}
              formData={formData} 
              setFormData={setFormData}
            />
          )}
          {step === 3 && (
            <Step3Review
              onPrev={() => setStep(2)}
              onSubmit={() => setModalOpen(true)}
              formData={formData}
            />
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </AnimatePresence>
    </div>
  );
};

// ===============================
// ✅ MAIN PAGE (Guaranteed Side Spacing)
// ===============================
const AdmissionProcess = () => (
  // 💥 KEY FIX: Added px-4 to the outermost container to ensure side margins on all screens.
  <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 py-10 px-4"> 
    <div className="text-center mb-6">
      <h2 className="text-3xl font-extrabold mb-2 text-gray-900">
        Secure Your Spot:{" "}
        <span className="text-orange-600">3-Step Application</span>
      </h2>
      <p className="text-base text-gray-600">
        Complete the form below — it's quick, simple, and guides you to your
        cosmic journey!
      </p>
    </div>
    <AdmissionProcessForm />
  </div>
);

export default AdmissionProcess;