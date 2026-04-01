import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';

const ModelsCard = ({ model, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const badgeStyles = {
    "Best Seller": "bg-[#FEF3C6] text-[#BB4D00]",
    "Popular": "bg-[#E1E7FF] text-[#9514FA]",
    "New": "bg-[#DBFCE7] text-[#0A883E]",
  };

  const handleSubsScription = () => {
    const isFound = carts.find((item) => item.id === model.id);
    if (isFound) {
      toast.error("Product already in cart!");
      return;
    }
    setIsSubscribed(true);
    setCarts([...carts, model]);
    toast.success("Product added to cart!");
  };

  return (
    
    <div className="relative shadow-xl rounded-[24px] md:rounded-3xl border border-zinc-100 bg-white p-6 md:p-8 transition-all hover:shadow-2xl hover:-translate-y-1">
      
      {model.badge && (
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold ${badgeStyles[model.badge] || "bg-zinc-100"}`}>
          {model.badge}
        </div>
      )}

      {/* Icon Section */}
      <div className="flex justify-start items-center mb-6">
        <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100 shadow-sm">
          <img className="h-8 w-8 md:h-10 md:w-10 object-contain" src={model.icon} alt={model.name} />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900">{model.name}</h2>
        <p className="text-zinc-500 text-sm leading-relaxed min-h-[40px] md:min-h-0">{model.description}</p>

        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl font-bold text-zinc-900">${model.price}</span>
          <span className="text-zinc-400 text-sm font-medium">/{model.billingCycle || 'Mo'}</span>
        </div>

        <ul className="space-y-3 pt-2">
          {model.features?.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-zinc-600">
              <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> 
              <span className="text-sm md:text-[15px] font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleSubsScription}
          className={`w-full py-4 mt-4 rounded-2xl font-bold text-base text-white transition-all active:scale-95 shadow-lg ${
            isSubscribed 
              ? "bg-green-500 cursor-default" 
              : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:brightness-110 cursor-pointer"
          }`}
        >
          {isSubscribed ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelsCard;