import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const defaultFaqs = [
  {
    question: "How long does software development take?",
    answer: "We cannot possibly answer this question precisely because there are projects finished in 2 to 3 weeks, but there are also tasks that take several years to complete.\n\nTo provide you with a precise answer, we have to evaluate the project complexity and the work scope. Knowing this information, we can provide you with the estimated time frame."
  },
  {
    question: "How much will the Lvivity developers' work cost?",
    answer: "In our company, we pay our employees based on hourly rates, depending on the technology utilized and the experience level of the specialists involved in the project."
  },
  {
    question: "What information do you need from me to start work?",
    answer: "Share the details of your project – like scope, timeframes, or business challenges you'd like to solve."
  },
  {
    question: "Do you provide product support services after the app development is complete?",
    answer: "Yes, we are always glad to provide technical support and service the apps we have developed. We can also further develop your software product if you need to implement new features or integrate third-party services."
  }
];

const FAQsSection = () => {
  // Static content without admin panel dependency
  const title = "Do you have any questions?";
  const subtitle = "Most common questions about software/app development and the answers to them. If you can't find what you're looking for then feel free to ask us directly.";
  const button_text = "Contact us";
  const faqs = defaultFaqs;
  return (
    <section className="bg-gradient-to-b from-[#221F4D] to-[#221f4d] py-24">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        {/* Contact Button */}
        <div className="text-center pb-12">
          <button className="bg-white text-[#35327d] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            {button_text}
          </button>
        </div>

        {/* Accordion Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Accordion.Root type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="backdrop-blur-sm overflow-hidden bg-[#35327d] rounded"
              >
                <Accordion.Header className="w-full ">
                  <Accordion.Trigger className=" w-full px-6 py-4 text-left flex items-center justify-between bg-[#35327d] text-white transition-colors group">
                    <span className="text-white font-medium text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className="w-5 h-5 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" 
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 my-4 text-gray-300 leading-relaxed border-l-4 border-[#fff] ml-6">
                  {faq.answer.split('\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className={pIndex > 0 ? 'mt-2' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>

        
      </div>
    </section>
  );
};

export default FAQsSection;