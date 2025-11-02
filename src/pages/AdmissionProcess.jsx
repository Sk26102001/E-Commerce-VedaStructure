
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