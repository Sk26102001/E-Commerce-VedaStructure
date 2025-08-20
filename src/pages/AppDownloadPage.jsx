import { motion } from "framer-motion";

export default function AppDownloadPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-10">
      {/* Yellow Section */}
      <div className="w-full bg-yellow-400 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8">
        {/* Left Content */}
        <div className="max-w-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
          <p className="mb-6 text-black">
            Take your spiritual journey with you wherever you go. Our mobile app
            offers a seamless experience with exclusive features to enhance your
            connection with divine energies.
          </p>
          <ul className="space-y-3 text-black font-medium">
            <li>✔ Get daily panchang updates and personalized horoscope</li>
            <li>✔ Book pujas and track your order status in real-time</li>
            <li>✔ Access exclusive meditation and chanting audios</li>
            <li>✔ Set reminders for important spiritual dates and events</li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <img
              src="https://www.vedastructure.in/front/img/app.png"
              alt="App Store"
              className="h-12"
            />
            <img
              src="https://www.vedastructure.in/front/img/google.png"
              alt="Google Play"
              className="h-12"
            />
          </div>
        </div>

        {/* Phone Images with Animation */}
        <div className="relative flex gap-8 mt-10 md:mt-0">
          {/* First Phone (Bounce Up) */}
          <motion.img
            src="https://www.vedastructure.in/front/img/app-1.png"
            alt="Phone 1"
            className="w-48 md:w-56 rounded-2xl shadow-2xl"
            animate={{ y: [-20, 0, -20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Second Phone (Bounce Down) */}
          <motion.img
            src="https://www.vedastructure.in/front/img/app-1.png"
            alt="Phone 2"
            className="w-48 md:w-56 rounded-2xl shadow-2xl"
            animate={{ y: [20, 0, 20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

    </div>
  );
}
