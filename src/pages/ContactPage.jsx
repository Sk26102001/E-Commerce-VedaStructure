import { Mail, Phone, MapPin, Twitter, Facebook, Youtube, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-10 px-8 py-12 bg-white">
        
        {/* Left Side - Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Connect With Us</h2>
          <p className="text-gray-600 mb-8">
            Have questions or ready to begin your spiritual journey? Reach out to schedule a session 
            or learn more about how we can help guide your path.
          </p>

          {/* Location */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-400 text-white p-3 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Location</h4>
              <p className="text-gray-600">
                123 Spiritual Center, Vedic Lane, New Delhi, India - 110001
              </p>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-400 text-white p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Mobile</h4>
              <p className="text-gray-600">+91 123 456 7890</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-400 text-white p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Email</h4>
              <p className="text-gray-600">info@vedastructure.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 text-white p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Social Media</h4>
              <div className="flex gap-3">
                <a href="#" className="p-2 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-white">
                  <Twitter size={18} />
                </a>
                <a href="#" className="p-2 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-white">
                  <Facebook size={18} />
                </a>
                <a href="#" className="p-2 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-white">
                  <Youtube size={18} />
                </a>
                <a href="#" className="p-2 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-white">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-3 rounded-md font-semibold hover:bg-yellow-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}