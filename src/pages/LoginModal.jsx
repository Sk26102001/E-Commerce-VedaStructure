// // src/components/LoginModal.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import LoginPage from "../pages/LoginPage";

// export default function LoginModal({ onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="relative bg-white rounded-2xl shadow-lg max-w-lg w-full p-4"
//       >
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
//         >
//           ✕
//         </button>

//         {/* Reuse your login form */}
//         <LoginPage isModal />
//       </motion.div>
//     </div>
//   );
// }
