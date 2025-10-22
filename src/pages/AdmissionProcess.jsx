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
//       <IdCard className="w-6 h-6 text-orange-500" /> Basic Contact Details
//     </h4>
//     <p className="text-gray-600 mb-6 text-center">
//       Please provide your primary contact information.
//     </p>

//     {/* Simulated Form Fields - No changes needed here, existing focus styles are okay */}
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

// const Step2Form = ({ onNext, onPrev }) => (
//   <motion.div
//     initial={{ x: 100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     exit={{ x: -100, opacity: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center justify-center gap-3">
//       <FileText className="w-6 h-6 text-orange-500" /> Experience & Goals
//     </h4>
//     <p className="text-gray-600 mb-6 text-center">
//       Help us tailor the experience by telling us about your background and goals.
//     </p>

//     {/* Simulated Form Fields - UPDATED FOCUS STYLES */}
//     <div className="space-y-4 max-w-md mx-auto">
//       <select
//         className="w-full p-3 border border-gray-300 rounded-lg 
//                    focus:ring-yellow-400 focus:border-orange-500 focus:ring-2 outline-none 
//                    appearance-none bg-white transition duration-200"
//       >
//         <option value="">Select Your Experience Level...</option>
//         <option>Beginner (No prior knowledge)</option>
//         <option>Intermediate (Read a few books)</option>
//         <option>Advanced (Practicing professionally)</option>
//       </select>
//       <textarea
//         placeholder="Why do you want to learn (e.g., self-improvement, professional career, helping others)?"
//         rows="3"
//         className="w-full p-3 border border-gray-300 rounded-lg 
//                    focus:ring-yellow-400 focus:border-orange-500 focus:ring-2 outline-none 
//                    transition duration-200"
//       />
//     </div>

//     <div className="mt-8 flex justify-center gap-4">
//       <button
//         onClick={onPrev}
//         className="px-6 py-3 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition"
//       >
//         &larr; Back
//       </button>
//       <button
//         onClick={onNext}
//         className="flex items-center gap-2 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition shadow-lg transform hover:scale-[1.02]"
//       >
//         Final Review & Submit <ArrowRight className="w-5 h-5" />
//       </button>
//     </div>
//   </motion.div>
// );

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
//                     {/* Adjusted line to cover correctly between elements */}
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

// =============================================================
// 1. MODAL COMPONENT (Final Pop-up) - NO CHANGES
// =============================================================
const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full text-center border-t-8 border-orange-500"
      >
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
          Application Submitted Successfully!
        </h3>
        <p className="text-xl text-gray-600 mb-6">
          Thank you for your interest in our course.
        </p>
        <div className="p-4 bg-orange-100 border-l-4 border-orange-500 rounded-lg">
          <p className="text-lg font-semibold text-gray-800">
            Our **Admission Team will contact you** shortly (within 24 hours) to
            confirm your details and finalize your enrollment.
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

// =============================================================
// 2. FORM STEP COMPONENTS (Simulated Inputs)
// =============================================================

const Step1Form = ({ onNext }) => (
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center justify-center gap-3">
      <IdCard className="w-6 h-6 text-orange-500" /> Basic Contact Details
    </h4>
    <p className="text-gray-600 mb-6 text-center">
      Please provide your primary contact information.
    </p>

    {/* Simulated Form Fields */}
    <div className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
        required
      />
    </div>

    <button
      onClick={onNext}
      className="mt-8 flex items-center gap-2 mx-auto px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition shadow-lg transform hover:scale-[1.02]"
    >
      Next: Educational Background <ArrowRight className="w-5 h-5" />
    </button>
  </motion.div>
);

const Step2Form = ({ onNext, onPrev }) => {
  const [experience, setExperience] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const experienceOptions = [
    { value: "beginner", label: "Beginner (No prior knowledge)" },
    { value: "intermediate", label: "Intermediate (Read a few texts)" },
    { value: "advanced", label: "Advanced (Practicing professionally)" },
  ];

  const handleSelect = (value) => {
    setExperience(value);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center justify-center gap-3">
        <FileText className="w-6 h-6 text-orange-500" /> Experience & Goals
      </h4>
      <p className="text-gray-600 mb-6 text-center">
        Help us tailor the experience by telling us about your background and goals.
      </p>

      {/* Custom Dropdown Simulation */}
      <div className="space-y-4 max-w-md mx-auto relative">
        <label className="block text-gray-700 font-medium mb-1">Select Your Experience Level:</label>
        
        {/* DROPDOWN CONTAINER: This ensures the options list is positioned relative to the button */}
        <div className="relative"> 
            {/* Dropdown Button */}
            <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-left font-semibold
                        focus:border-orange-500 focus:outline-none focus:shadow-xl focus:shadow-orange-200 
                        hover:border-orange-400 transition duration-200 flex justify-between items-center"
            >
            {experience
                ? experienceOptions.find((o) => o.value === experience)?.label
                : "Select Your Experience Level..."}
            <ArrowRight
                className={`w-4 h-4 text-gray-500 transform transition-transform ${
                isDropdownOpen ? "rotate-90" : "rotate-0"
                }`}
            />
            </button>

            {/* Dropdown Options List - NOW POSITIONED DIRECTLY BELOW THE BUTTON */}
            <AnimatePresence>
            {isDropdownOpen && (
                <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                // Key change: absolute inset-x-0 top-[100%] to place it directly below the button
                className="absolute top-[100%] inset-x-0 bg-white border border-gray-300 rounded-lg shadow-xl z-20 max-h-48 overflow-y-auto"
                >
                {experienceOptions.map((option) => (
                    <div
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`p-3 cursor-pointer text-gray-800 transition duration-150
                        ${
                        experience === option.value
                            ? 'bg-orange-500 text-white'
                            : 'hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white' // Gradient hover
                        }`}
                    >
                    {option.label}
                    </div>
                ))}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
        
        {/* Textarea */}
        <textarea
          placeholder="Why do you want to learn (e.g., self-improvement, professional career, helping others)?"
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg 
                      focus:border-orange-500 focus:outline-none focus:shadow-xl focus:shadow-orange-200 
                      transition duration-200"
        />
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={onPrev}
          className="px-6 py-3 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          &larr; Back
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition shadow-lg transform hover:scale-[1.02]"
        >
          Final Review & Submit <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

const Step3Review = ({ onSubmit, onPrev }) => (
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center justify-center gap-3">
      <SearchCheck className="w-6 h-6 text-orange-500" /> Review & Final
      Submission
    </h4>
    <p className="text-gray-600 mb-8 text-center">
      You're almost there! Click 'Confirm' to send your application to our team.
    </p>

    <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200 max-w-md mx-auto text-left shadow-inner">
      <p className="font-extrabold text-lg text-gray-800 mb-2 flex items-center gap-2">
        <Zap className="w-5 h-5 text-orange-600" /> Important Note:
      </p>
      <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
        <li>
          Enrollment is **not confirmed** until our team finalizes the details.
        </li>
        <li>
          Expect a **personal call** or email within the next 24 hours to discuss
          course structure and fee payment.
        </li>
        <li>Please ensure your provided phone number is correct.</li>
      </ul>
    </div>

    <div className="mt-10 flex justify-center gap-4">
      <button
        onClick={onPrev}
        className="px-6 py-3 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition"
      >
        &larr; Back to Edit
      </button>
      <button
        onClick={onSubmit}
        className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-extrabold rounded-lg hover:bg-green-700 transition shadow-xl transform hover:scale-[1.05]"
      >
        Confirm & Send Application!
      </button>
    </div>
  </motion.div>
);

// =============================================================
// 3. STEP TRACKER COMPONENT (The Visual Improvement)
// =============================================================

const STEPS = [
    { step: 1, name: "Contact & Info", icon: IdCard },
    { step: 2, name: "Goals & Experience", icon: FileText },
    { step: 3, name: "Review & Submit", icon: SearchCheck },
];

const StepTracker = ({ currentStep }) => (
    <div className="relative flex justify-between items-start mb-10 pt-4 px-4">
        {STEPS.map((s, index) => {
            const isActive = s.step === currentStep;
            const isComplete = s.step < currentStep;

            return (
                <React.Fragment key={s.step}>
                    {/* The Connecting Line (Before the step) */}
                    {index > 0 && (
                        <div 
                            className={`absolute top-1/2 left-0 -translate-y-1/2 h-1 ${isComplete ? 'bg-green-500' : 'bg-gray-300'} transition-colors duration-500`} 
                            style={{ 
                                left: `${(index * (100 / STEPS.length)) - (50 / STEPS.length)}%`, // Adjust position dynamically
                                width: `${100 / STEPS.length}%`, // Each line covers one segment
                                zIndex: 0
                            }}
                        />
                    )}

                    {/* Step Icon and Label */}
                    <div 
                        className={`flex flex-col items-center w-1/3 z-10 transition-all duration-300 ${isActive ? 'scale-105' : 'opacity-80'}`}
                    >
                        {/* Circle - UPDATED TEXT COLOR TO YELLOW-100 */}
                        <div 
                            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-2 shadow-lg 
                              ${isActive 
                                ? 'bg-orange-500 text-yellow-100 ring-4 ring-orange-200' // Active step: Orange background, Yellow text
                                : isComplete 
                                ? 'bg-green-500 text-white' // Complete step: Green background, White text
                                : 'bg-gray-200 text-gray-500' // Incomplete step: Gray background, Gray text
                              }`}
                        >
                            {isComplete ? (
                                <CheckCircle2 className="w-6 h-6" />
                            ) : (
                                s.step
                            )}
                        </div>
                        
                        {/* Step Name */}
                        <span 
                            className={`text-sm font-semibold text-center mt-1 transition-colors 
                              ${isActive ? 'text-orange-600' : 'text-gray-700'}`}
                        >
                            {s.name}
                        </span>
                    </div>
                </React.Fragment>
            );
        })}
    </div>
);


// =============================================================
// 4. MAIN MULTI-STEP FORM COMPONENT (Integrated) - NO CHANGES
// =============================================================

const AdmissionProcessForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);
    const handleSubmit = () => setIsModalOpen(true);

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1Form key="step1" onNext={nextStep} />;
            case 2:
                return <Step2Form key="step2" onNext={nextStep} onPrev={prevStep} />;
            case 3:
                return (
                    <Step3Review key="step3" onSubmit={handleSubmit} onPrev={prevStep} />
                );
            default:
                return <div className="text-center p-8">Error: Invalid Step</div>;
        }
    };

    return (
        <div className="bg-white p-6 md:p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto border-t-8 border-orange-600">
            
            {/* The Visual Step Tracker (1, 2, 3) */}
            <StepTracker currentStep={currentStep} />
            
            {/* The Dynamic Form Content */}
            <div className="relative min-h-[400px] flex items-start justify-center pt-8">
                <AnimatePresence mode="wait">
                    {renderStep()}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                <ContactModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </AnimatePresence>
        </div>
    );
};


// =============================================================
// 5. EXPORT WRAPPER COMPONENT - NO CHANGES
// =============================================================

const AdmissionProcess = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 font-sans py-12">
            <section className="py-10">
                <div className="text-center max-w-4xl mx-auto px-6 mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                        Secure Your Spot:{" "}
                        <span className="text-orange-600">3-Step Application</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Complete the application form below. It's fast, easy, and leads
                        directly to your cosmic journey!
                    </p>
                </div>

                <AdmissionProcessForm />
            </section>
        </div>
    );
};

export default AdmissionProcess;