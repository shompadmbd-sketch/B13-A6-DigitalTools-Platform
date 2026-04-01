import React from 'react';

const Counter = () => {
    return (
        <div>
            <div className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-12 md:py-20 mt-[40px]">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-[200px]">
                    
                 
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 items-center text-white text-center">
                        
                     
                        <div className="flex flex-col items-center justify-center p-6 md:p-8">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">50K+</h2>
                            <p className="mt-3 text-white/80 text-[20px] md:text-[24px] font-medium">Active Users</p>
                        </div>

                        
                        <div className="flex flex-col items-center justify-center p-6 md:p-8">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">200+</h2>
                            <p className="mt-3 text-white/80 text-[20px] md:text-[24px] font-medium">Premium Tools</p>
                        </div>

                     
                        <div className="flex flex-col items-center justify-center p-6 md:p-8">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">4.9</h2>
                            <p className="mt-3 text-white/80 text-[20px] md:text-[24px] font-medium">Rating</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;