import React, { useState } from 'react';

// Data for the FAQ section
const faqData = [
  {
    question: 'How do I protect my personal information when shopping online?',
    answer: 'Use secure websites (look for "https" in the URL), avoid public Wi-Fi for sensitive transactions, regularly update passwords, and be cautious about sharing unnecessary personal information. Additionally, consider using a virtual private network (VPN) for added security, and monitor your financial statements regularly for any unauthorized transactions. Staying vigilant and adopting secure online practices is key to protecting your personal information.',
  },
  {
    question: 'What is the difference between refurbished and new products?',
    answer: 'New products are brand new, unused, and come with a full manufacturer\'s warranty. Refurbished products have been returned, inspected, repaired if necessary, and tested to function like new. They may have minor cosmetic blemishes and typically come with a limited warranty. They are a great way to get a product at a lower price.',
  },
  {
    question: 'How can I find out about product recalls?',
    answer: 'You can check for product recalls on government websites like the Consumer Product Safety Commission (CPSC) in the US. You can also sign up for email alerts from these agencies or check the manufacturer\'s website for any recall information related to your products.',
  },
  {
    question: 'Can I cancel an order after it has been placed?',
    answer: 'Whether you can cancel an order depends on the retailer\'s policy and how quickly you act. Many retailers have a small window of time after the order is placed during which you can cancel it. Once the order has been processed or shipped, you typically cannot cancel it and will have to go through the return process.',
  },
  {
    question: 'What should I do if a product arrives damaged?',
    answer: 'If a product arrives damaged, contact the seller immediately. Take photos of the damaged product and packaging as evidence. Most sellers have a policy for handling damaged goods and will offer a replacement, refund, or repair.',
  },
  {
    question: 'How can I extend the lifespan of electronic devices?',
    answer: 'To extend the lifespan of your electronic devices, keep them clean, avoid extreme temperatures, use surge protectors, keep software updated, and handle them with care. For battery-powered devices, follow the manufacturer\'s recommendations for battery care.',
  },
  {
    question: 'Are online reviews reliable for making purchasing decisions?',
    answer: 'Online reviews can be helpful, but it\'s important to be critical. Look for trends across multiple reviews rather than focusing on a single one. Be wary of overly positive or negative reviews, and check reviews from multiple sources if possible. Verified purchase reviews are often more reliable.',
  },
  {
    question: 'How do I find the best deals and discounts when shopping online?',
    answer: 'To find the best deals, you can use price comparison websites, browser extensions that automatically apply coupons, sign up for newsletters from your favorite retailers, and shop during major sales events like Black Friday. Following brands on social media can also alert you to special promotions.',
  },
  {
    question: 'What is the return policy for most products?',
    answer: 'Return policies vary widely by retailer and product type. Always check the return policy before making a purchase. Key things to look for are the timeframe for returns, whether you get a full refund or store credit, who pays for return shipping, and if there are any restocking fees.',
  },
  {
    question: 'How can I track my online order?',
    answer: 'After you place an order, you will typically receive a confirmation email with a tracking number. You can use this number on the carrier\'s website (like UPS, FedEx, or USPS) to see the status and location of your shipment. Many retailers also provide tracking information in your account section on their website.',
  },
];

// ChevronDown Icon Component
const ChevronDown = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// ChevronUp Icon Component
const ChevronUp = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);

// Individual FAQ Item Component
const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    // Applied card styling here: background, rounding, shadow
    <div className="bg-gray-100 rounded-sm overflow-hidden">
      <button
        className="flex justify-between items-center w-full text-left py-4 px-5 focus:outline-none"
        onClick={onClick}
      >
        <h3 className={`text-base md:text-lg font-medium ${isOpen ? 'text-orange-500' : 'text-gray-800'}`}>
          {item.question}
        </h3>
        {isOpen ? <ChevronUp className="h-5 w-5 text-orange-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-5 pb-4 text-gray-600">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

// Main FAQ Component
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item is open by default

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Faq</h1>
          <p className="text-sm text-gray-500 mt-2">
            <a href="#" className="hover:text-orange-500">HOME</a> / FAQ
          </p>
        </div>
        {/* Changed the container to a flex column and added a gap */}
        <div className="max-w-4xl mx-auto flex flex-col gap-2">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// App component to render the Faq section for preview
function App() {
  return (
    <div className="font-sans">
      <Faq />
    </div>
  );
}

export default App;
