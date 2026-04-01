import React from 'react';
import UsserImg from '../assets/user.png';
import PackageImg from '../assets/package.png';
import RocketImg from '../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className="mx-auto text-center px-4">
            {/* Header Section: Responsive margin top */}
            <div className="mt-12 md:mt-24 lg:mt-30"> 
                <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#101727] mb-4 leading-tight">
                    Get Started in 3 Steps
                </h2>
                
                <p className="text-[15px] md:text-[16px] font-normal text-[#627382] mb-2 max-w-2xl mx-auto">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            {/* Cards Container */}
            <div className="max-w-[1200px] mx-auto py-10 lg:py-20"> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 justify-items-center">
                    
                    {/* Step 01 */}
                    <div className="card bg-white border border-[#F1F1F1] rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group 
                        w-full max-w-[380px] lg:h-[380px] flex flex-col justify-center min-h-[340px] p-6 lg:p-0">
                        
                        <div className="absolute top-5 right-5 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex items-center justify-center font-bold text-[14px] z-10 border-4 border-white shadow-sm">
                            01
                        </div>
                        
                        <figure className="pt-6 lg:pt-14 flex justify-center">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center bg-[#F2F2F2]">
                                <img className="w-8 h-8 lg:w-10 lg:h-10" src={UsserImg} alt="User" />
                            </div>
                        </figure>

                        <div className="card-body items-center text-center px-2 lg:pb-10">
                            <h2 className="card-title text-[22px] lg:text-[24px] font-bold text-[#101727] mb-2">Create Account</h2>
                            <p className="text-[#627382] text-[15px] lg:text-[16px] font-normal leading-relaxed">
                                Sign up for free in seconds. No credit card <br className="hidden lg:block"/> required to get started.
                            </p>
                        </div>
                    </div>

                    {/* Step 02 */}
                    <div className="card bg-white border border-[#F1F1F1] rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group 
                        w-full max-w-[380px] lg:h-[380px] flex flex-col justify-center min-h-[340px] p-6 lg:p-0">
                        
                        <div className="absolute top-5 right-5 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex items-center justify-center font-bold text-[14px] z-10 border-4 border-white shadow-sm">
                            02
                        </div>
                        
                        <figure className="pt-6 lg:pt-14 flex justify-center">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center bg-[#F2F2F2]">
                                <img className="w-8 h-8 lg:w-10 lg:h-10" src={PackageImg} alt="Package" />
                            </div>
                        </figure>

                        <div className="card-body items-center text-center px-2 lg:pb-10">
                            <h2 className="card-title text-[22px] lg:text-[24px] font-bold text-[#101727] mb-2">Choose Products</h2>
                            <p className="text-[#627382] text-[15px] lg:text-[16px] font-normal leading-relaxed">
                                Browse our catalog and select the tools <br className="hidden lg:block"/> that fit your needs perfectly.
                            </p>
                        </div>
                    </div>

                    {/* Step 03 */}
                    <div className="card bg-white border border-[#F1F1F1] rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group 
                        w-full max-w-[380px] lg:h-[380px] flex flex-col justify-center min-h-[340px] p-6 lg:p-0">
                        
                        <div className="absolute top-5 right-5 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full flex items-center justify-center font-bold text-[14px] z-10 border-4 border-white shadow-sm">
                            03
                        </div>
                        
                        <figure className="pt-6 lg:pt-14 flex justify-center">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center bg-[#F2F2F2]">
                                <img className="w-8 h-8 lg:w-10 lg:h-10" src={RocketImg} alt="Rocket" />
                            </div>
                        </figure>

                        <div className="card-body items-center text-center px-2 lg:pb-10">
                            <h2 className="card-title text-[22px] lg:text-[24px] font-bold text-[#101727] mb-2">Start Creating</h2>
                            <p className="text-[#627382] text-[15px] lg:text-[16px] font-normal leading-relaxed">
                                Download and start using your premium <br className="hidden lg:block"/> tools immediately without delay.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetStarted;