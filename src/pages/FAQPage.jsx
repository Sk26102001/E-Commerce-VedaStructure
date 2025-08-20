
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Veda Structure and what services does it offer?",
    answer:
      "Veda Structure is a spiritual platform offering astrology consultations, online puja services, temple rituals in Varanasi, Rudraksha & gemstones, Vedic products, and spiritual courses.",
  },
  {
    question: "How do I book a puja through Veda Structure?",
    answer:
      "You can easily book a puja by selecting the desired service, entering your details, and confirming the booking. Our dedicated priests will perform the puja authentically on your behalf.",
  },
  {
    question: "Are the pujas performed authentically as per Vedic traditions?",
    answer:
      "Yes, all pujas are conducted by certified Vedic priests with strict adherence to authentic Vedic rituals, mantras, and traditions.",
  },
  {
    question: "Can I get my horoscope prepared or analyzed?",
    answer:
      "Yes, we provide personalized horoscope predictions and detailed chart analysis based on your date, time, and place of birth by expert astrologers.",
  },
  {
    question: "Do you provide guidance for choosing the right Rudraksha or gemstone?",
    answer:
      "Absolutely. Our astrologers and Vedic experts guide you to select the right Rudraksha or gemstone according to your planetary positions and requirements.",
  },
  {
    question: "Are the Rudraksha & gemstones authentic?",
    answer:
      "Yes, we only provide 100% original, lab-certified Rudraksha and gemstones sourced ethically, ensuring purity and spiritual benefits.",
  },
  {
    question: "Do you ship Vedic products internationally?",
    answer:
      "Yes, we deliver Rudraksha, gemstones, and Vedic products across India and internationally with safe and secure packaging.",
  },
  {
    question: "What types of online courses are available?",
    answer:
      "We offer online courses in astrology, Vedic scriptures, mantra chanting, meditation practices, and spiritual living to deepen your knowledge.",
  },
  {
    question: "Can I consult an astrologer online?",
    answer:
      "Yes, we provide live online astrology consultations via video call, phone, or chat for personalized guidance and remedies.",
  },
  {
    question: "How do I contact Veda Structure for support?",
    answer:
      "You can reach our support team via the contact form on our website or through WhatsApp/phone for assistance with bookings, consultations, and orders.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="max-w-3xl w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Frequently Asked Questions
        </h2>
        {/* Orange underline */}
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-gray-600 mb-8">
          Find answers to common questions about our services and spiritual offerings
        </p>

        {/* Scrollable FAQ List */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-100 rounded-lg">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Answer with animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 px-6 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
