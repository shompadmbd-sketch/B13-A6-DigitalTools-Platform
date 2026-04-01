import React from 'react';

const Workflow = () => {
    return (
        <section className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-16 md:py-24 lg:py-32 mt-10 md:mt-20">
            <div className="container mx-auto text-center px-4 sm:px-6 md:px-12 lg:px-20">
                {/* Text Content */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-white text-[28px] sm:text-[36px] md:text-[48px] font-extrabold mb-6 leading-tight">
                        Ready to Transform Your Workflow?
                    </h2>
                    <p className="text-white text-[15px] sm:text-[16px] md:text-[18px] font-normal opacity-90 leading-relaxed max-w-2xl mx-auto">
                        Join thousands of professionals who are already using Digitools to work smarter. 
                        <br className="hidden md:block"/> Start your free trial today.
                    </p>
                </div>

              
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-10 md:pt-12">
                    
                    <button className="w-full sm:w-auto bg-white hover:scale-105 active:scale-95 transition-all px-10 py-4 rounded-full font-bold shadow-xl text-[16px] cursor-pointer">
                        <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                            Explore Products
                        </span>
                    </button>

                    <button className="w-full sm:w-auto hover:bg-white/10 hover:scale-105 active:scale-95 transition-all px-10 py-4 rounded-full font-bold text-[16px] shadow-lg border-2 border-white cursor-pointer text-white">
                        Watch Demo
                    </button>

                </div>

               
                <div className="mt-8 md:mt-10">
                    <p className="text-white/80 text-[13px] sm:text-[14px] md:text-[16px] font-medium tracking-wide">
                        14-day free trial <span className="mx-1 opacity-50">•</span> No credit card required <span className="mx-1 opacity-50">•</span> Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Workflow;