
import React from "react";
import { Mail, Phone, MapPin, Twitter, Facebook, Youtube, Linkedin } from "lucide-react";

// Social Media Data for cleaner rendering
const socialLinks = [
    { icon: Twitter, href: "#", color: "text-blue-400", hoverBg: "hover:bg-blue-400", name: "Twitter" },
    { icon: Facebook, href: "#", color: "text-blue-600", hoverBg: "hover:bg-blue-600", name: "Facebook" },
    { icon: Youtube, href: "#", color: "text-red-600", hoverBg: "hover:bg-red-600", name: "Youtube" },
    { icon: Linkedin, href: "#", color: "text-blue-700", hoverBg: "hover:bg-blue-700", name: "LinkedIn" },
];

// Helper component for Contact Info Blocks
const ContactInfoBlock = ({ Icon, title, content }) => (
    <div className="flex items-start gap-4 p-4 border-l-4 border-yellow-500 bg-gray-50 rounded-xl transition-transform duration-200 hover:shadow-lg hover:scale-[1.01]">
        <div className="bg-yellow-500 text-white p-3 rounded-full shadow-md flex-shrink-0">
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h4 className="font-bold text-lg text-gray-900">{title}</h4>
            <p className="text-gray-600 text-sm">{content}</p>
        </div>
    </div>
);

// Helper component for Form Inputs
const FormInput = ({ type = "text", placeholder, label, required = false, rows }) => (
    <div className="space-y-1">
        {label && (
            <label className="text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
        )}
        {rows ? (
            <textarea
                rows={rows}
                placeholder={placeholder}
                required={required}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500 transition duration-150 outline-none resize-none"
            ></textarea>
        ) : (
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500 transition duration-150 outline-none"
            />
        )}
    </div>
);

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4 sm:p-8">
            <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden">

                {/* --- Header / Introduction Section --- */}
                <div className="text-center p-8 md:p-12 bg-yellow-50 border-b-4 border-yellow-500">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We're here to answer your questions and guide you on your journey. 
                        Fill out the form below or connect with us directly.
                    </p>
                </div>
                
                {/* --- Main Content: Info, Map, and Form --- */}
                <div className="grid lg:grid-cols-3 gap-8 p-6 md:p-10 lg:p-16">
                    
                    {/* ===== Left Column (Contact Info & Map) - Takes 2/3 space on large screens */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Contact Details Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <ContactInfoBlock
                                Icon={MapPin}
                                title="Our Location"
                                content="123 Spiritual Center, Vedic Lane, New Delhi, India - 110001"
                            />
                            <ContactInfoBlock
                                Icon={Mail}
                                title="Email Us"
                                content="info@vedastructure.com"
                            />
                            <ContactInfoBlock
                                Icon={Phone}
                                title="Call or WhatsApp"
                                content="+91 123 456 7890 (Mon-Fri, 9am - 5pm IST)"
                            />
                            {/* Social Media Block */}
                            <div className="p-4 rounded-xl bg-white space-y-3 border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-lg text-gray-900">Follow Us</h4>
                                <p className="text-sm text-gray-600">Connect with us across our social channels.</p>
                                <div className="flex gap-3 pt-1">
                                    {socialLinks.map((link, index) => {
                                        const Icon = link.icon;
                                        return (
                                            <a 
                                                key={index} 
                                                href={link.href} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className={`p-3 rounded-full border border-gray-200 ${link.color} transition duration-200 ${link.hoverBg} hover:text-white transform hover:scale-110 shadow-md`}
                                                aria-label={`Follow us on ${link.name}`}
                                            >
                                                <Icon size={20} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                            <h3 className="text-xl font-bold p-4 bg-gray-100 border-b text-gray-800">Find Us on the Map</h3>
                            <div style={{ height: '350px' }}>
                                {/* Using a standard map embed placeholder */}
                                <iframe
                                    src="https://maps.google.com/maps?q=New%20Delhi%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    
                    {/* ===== Right Column (Contact Form) - Takes 1/3 space on large screens */}
                    <div className="lg:col-span-1 bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 h-fit lg:sticky lg:top-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                        <form className="space-y-5">
                            <FormInput label="Full Name" placeholder="Your Name" required />
                            <FormInput label="Email Address" type="email" placeholder="you@example.com" required />
                            <FormInput label="Subject" placeholder="What is your query about?" required />
                            <FormInput label="Message" placeholder="Type your detailed message here..." required rows={6} />
                            
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-xl font-extrabold text-lg hover:bg-yellow-600 transition duration-200 shadow-lg shadow-yellow-300/50 transform hover:scale-[1.005] active:scale-[0.99] mt-6"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
