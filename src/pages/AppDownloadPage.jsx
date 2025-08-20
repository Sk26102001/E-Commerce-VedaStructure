
import { motion } from "framer-motion";

export default function AppDownloadPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-10">
      {/* Yellow Section */}
      <div className="w-full bg-yellow-400 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 lg:p-12">
        
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Download Our Mobile App
          </h2>
          <p className="mb-6 text-black text-sm sm:text-base lg:text-lg">
            Take your spiritual journey with you wherever you go. Our mobile app
            offers a seamless experience with exclusive features to enhance your
            connection with divine energies.
          </p>
          <ul className="space-y-2 sm:space-y-3 text-black font-medium text-sm sm:text-base">
            <li>✔ Get daily panchang updates and personalized horoscope</li>
            <li>✔ Book pujas and track your order status in real-time</li>
            <li>✔ Access exclusive meditation and chanting audios</li>
            <li>✔ Set reminders for important spiritual dates and events</li>
          </ul>

          {/* App Store Buttons */}
          <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-6">
            <img
              src="https://www.vedastructure.in/front/img/app.png"
              alt="App Store"
              className="h-10 sm:h-12 lg:h-14"
            />
            <img
              src="https://www.vedastructure.in/front/img/google.png"
              alt="Google Play"
              className="h-10 sm:h-12 lg:h-14"
            />
          </div>
        </div>

        {/* Phone Images with Animation */}
        <div className="relative flex gap-4 sm:gap-8 mt-8 md:mt-0">
          {/* First Phone (Bounce Up) */}
          <motion.img
            src="https://www.vedastructure.in/front/img/app-1.png"
            alt="Phone 1"
            className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-2xl shadow-2xl"
            animate={{ y: [-20, 0, -20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Second Phone (Bounce Down) */}
          <motion.img
            src="https://www.vedastructure.in/front/img/app-1.png"
            alt="Phone 2"
            className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-2xl shadow-2xl"
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
