import React, { useState } from "react";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Accordion data
  const accordionData = [
    {
      question: "What is the best food for my pet?",
      answer: "Choosing the best food depends on your pet's age, breed, and dietary needs. We recommend consulting with your veterinarian for personalized recommendations.",
    },
    {
      question: "How often should I feed my dog or cat?",
      answer: "The frequency of feeding depends on your pet's age, size, and activity level. Puppies and kittens need to eat more frequently than adult pets.",
    },
    {
      question: "Can I feed my pet a mix of wet and dry food?",
      answer: "Yes, mixing wet and dry food is a common practice. It can offer variety and balance in nutrients. Just make sure the total portion matches your pet's dietary needs.",
    },
    {
      question: "Is grain-free food better for my pet?",
      answer: "Not necessarily. Grain-free diets are sometimes recommended for pets with specific allergies, but it's important to consult with your vet to determine if it’s needed for your pet.",
    },
    {
      question: "How do I know if my pet has food allergies?",
      answer: "Symptoms like itching, digestive issues, or ear infections can be signs of food allergies. Visit your vet for a diagnosis and allergy tests if you suspect this issue.",
    },
  ];

  return (
    <div>
      <div className="relative min-h-[250px] place-content-center bg-[url('/man_and_dog.jpg')] bg-no-repeat bg-cover text-white">
        
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative  flex flex-col items-center justify-center h-full">
          <p className="text-center text-[2.5rem] font-bold">
            Thank You For Visiting Pet Food Expert
          </p>
          <div className="max-w-[940px] text-center mx-auto">
            Like you, we understand how difficult buying the right pet food can be. With so many options available, choosing the food that’s right for your pet can be difficult without reassurance.
          </div>
        </div>
      </div>

     
      <div className="max-w-[1200px] mx-auto mt-16 mb-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
       
        <div className="flex gap-6 items-center">
          <div className="mb-4 shrink-0">
            <img src="https://petfoodexpert.com/img/icons/icon__stop-watch.svg" alt="Easy Icon" className="mx-auto w-24 h-24"/>
          </div>
          <div>
          <h3 className="text-xl font-bold mb-2 text-start
          ">Easy</h3>
          <p className="text-gray-600 text-justify">
            Here at Pet Food Expert we make comparing pet foods as easy as possible, helping you to understand more about nutritional values, ingredients, allergens, cost, and even the social responsibility of the manufacturer.
          </p>
          </div>
        </div>

        
        <div className="flex gap-6 items-center">
          <div className="mb-4 shrink-0">
            <img src="	https://petfoodexpert.com/img/icons/icon__expert.svg" alt="Expert Testing Icon" className="mx-auto w-24 h-24"/>
          </div>
          <div>
          <h3 className="text-xl font-bold mb-2 text-start">Expert Testing</h3>
          <p className="text-gray-600 text-justify">
            Our expert nutritionists gather information from product packaging and supplier websites. Independent food testing is conducted to reveal hidden information.
          </p>
          </div>
        </div>

        
        <div className="flex gap-6 items-center">
          <div className="mb-4 shrink-0">
            <img src="https://petfoodexpert.com/img/icons/icon__no-adverts.svg" alt="Opinion Free Icon" className="mx-auto w-24 h-24"/>
          </div>
          <div>
          <h3 className="text-xl font-bold mb-2 text-start">Opinion Free</h3>
          <p className="text-gray-600 text-justify">
            To make things simple, we offer an impartial and opinion-free comparison of pet food products from over 30 top-selling providers. Start comparing foods today within minutes.
          </p>
          </div>
        </div>
      </div>

      
      <div className="mt-10 max-w-[940px] mx-auto">
        <h2 className="text-2xl font-bold text-center mb-5">Frequently Asked Questions</h2>

        
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-4 px-5 text-xl font-semibold bg-gray-100 hover:bg-gray-200"
            >
              {item.question}
            </button>
            <div
              className={`px-5 text-gray-700 bg-gray-50 transition-max-height duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-[500px] py-4" : "max-h-0"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
