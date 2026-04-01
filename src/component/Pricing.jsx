import React from 'react';

const Pricing = () => {
    return (
        <div className="mx-auto text-center bg-white pb-12 md:pb-20">
            {/* Header Section */}
            <div className="px-4 text-center mt-10 sm:mt-16 lg:mt-24">
                <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] font-extrabold text-[#101727] leading-tight">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-[14px] sm:text-[16px] font-normal text-[#627382] mt-3 max-w-[600px] mx-auto">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            {/* Pricing Cards Container */}
            <div className="container mx-auto px-4 sm:px-6 mt-16 lg:mt-24"> 
               
              
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-[1200px] mx-auto">

                    {/* Starter Plan */}
                    <div className="flex flex-col h-full bg-[#F2F2F2] border border-[#EDEDED] shadow-sm rounded-[24px] p-8 md:p-10 text-left transition-transform hover:scale-[1.02]">
                        <div className="mb-4">
                            <h2 className="text-[24px] font-bold text-[#101727] mb-1">Starter</h2>
                            <p className="text-[#627382] text-base font-normal">Perfect for getting started</p>
                        </div>
                        <div className="mb-8">
                            <div className="flex items-baseline text-[#101727]">
                                <span className="text-[40px] font-extrabold leading-none">$0</span>
                                <span className="text-xl font-normal text-[#627382] ml-1">/Month</span>
                            </div>
                        </div>
                        
                        {/* flex-grow list-কে বলবে বাকি খালি জায়গা দখল করতে, ফলে বাটন নিচে থাকবে */}
                        <ul className="space-y-4 mb-10 text-[#627382] flex-grow">
                            {["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"].map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#30B868] flex-shrink-0 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-[16px] font-medium leading-tight">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <button className="w-full py-4 px-6 rounded-full font-bold text-lg text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:brightness-110 transition-all cursor-pointer shadow-md active:scale-95">
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro Plan (Highlighted) */}
                    <div className="relative flex flex-col h-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border border-[#8B3DFF] shadow-xl rounded-[24px] p-8 md:p-10 text-left transition-transform hover:scale-[1.05] z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <span className="bg-[#FEF3C6] text-[#BB4D00] px-5 py-2 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                                Most Popular
                            </span>
                        </div>
                        <div className="mb-4 text-white">
                            <h2 className="text-[24px] font-bold mb-1">Pro</h2>
                            <p className="text-purple-100 text-base opacity-90 font-normal">Best for professionals</p>
                        </div>
                        <div className="mb-8 text-white">
                            <div className="flex items-baseline">
                                <span className="text-[40px] font-extrabold leading-none">$29</span>
                                <span className="text-xl font-normal opacity-80 ml-1">/Month</span>
                            </div>
                        </div>
                        
                        <ul className="space-y-4 mb-10 text-white flex-grow">
                            {["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"].map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-[16px] font-medium opacity-95 leading-tight">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <button className="w-full py-4 px-6 rounded-full font-bold text-lg bg-white hover:bg-gray-50 transition-all cursor-pointer border border-gray-100 shadow-sm active:scale-95">
                            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                                Start Pro Trial
                            </span>
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="flex flex-col h-full bg-[#F2F2F2] border border-[#EDEDED] shadow-sm rounded-[24px] p-8 md:p-10 text-left transition-transform hover:scale-[1.02]">
                        <div className="mb-4">
                            <h2 className="text-[24px] font-bold text-[#101727] mb-1">Enterprise</h2>
                            <p className="text-[#627382] text-base font-normal">For teams and businesses</p>
                        </div>
                        <div className="mb-8">
                            <div className="flex items-baseline text-[#101727]">
                                <span className="text-[40px] font-extrabold leading-none">$99</span>
                                <span className="text-xl font-normal text-[#627382] ml-1">/Month</span>
                            </div>
                        </div>
                        
                        <ul className="space-y-4 mb-10 text-[#627382] flex-grow">
                            {["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"].map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#30B868] flex-shrink-0 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-[16px] font-medium leading-tight">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <button className="w-full py-4 px-6 rounded-full font-bold text-lg text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:brightness-110 transition-all cursor-pointer shadow-md active:scale-95">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;