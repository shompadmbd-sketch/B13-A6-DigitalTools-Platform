import React from 'react';
import BannerImage from '../../assets/banner.png';
import CircleImg from '../../assets/circle.png';
import PlayImg from '../../assets/play.png'

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden mt-20 mb-20 sm:mt-15 md:mt-36 lg:mt-10">

            {/* Container: Desktop padding original rakha hoyeche */}
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 px-4 md:px-8 lg:px-12 xl:px-[230px] min-[1556px]:px-[250px] w-full">

                {/* Left Content */}
                <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">

                    <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-[#E1E7FF] text-sm px-5 py-2 rounded-full">
                        <span><img src={CircleImg} alt="" /></span> 
                        <span className="font-medium text-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                            New: AI-Powered Tools Available
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-[60px] font-extrabold leading-[1.1666666666666667] text-[#101727]">
                        Supercharge Your
                        
                        {/* Br Logic: Tablet/Mobile e 2 line hobe, Desktop (1010px+) e ek line thakbe */}
                        <br className="block min-[1010px]:hidden" />
                        <span className="">
                            {" "}Digital Workflow
                        </span>
                    </h1>

                    <p className="text-[18px] text-[#627382] font-normal max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:brightness-110 active:scale-95 transition-all px-8 py-3 rounded-full font-semibold text-lg shadow-xl shadow-[#7427F8]/40 flex items-center gap-3 group text-[#FFFFFF] cursor-pointer">
                            Explore Products
                        </button>  

                        <button className="relative p-[1px] rounded-full overflow-hidden transition-all shadow-xl shadow-[#7427F8]/40 group flex items-center justify-center cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"></div>
                            <div className="relative bg-white px-8 py-3 rounded-full flex items-center gap-3 w-full h-full group-hover:bg-transparent transition-all">
                                <span><img src={PlayImg} alt="Play" /></span>
                                <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold text-lg group-hover:text-white">
                                    Watch Demo
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Image: Spacing fix for medium desktop */}
                <div className="relative flex justify-center lg:justify-end sm:mt-10 lg:mt-0">
                    <div className="relative">
                        <img
                            /* Desktop height original (h-130), 1300-1555 range e overlap rukhte responsive h kora hoyeche */
                            className="relative h-auto lg:h-[400px] min-[1300px]:max-[1555px]:h-[380px] min-[1556px]:h-130 w-full object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                            src={BannerImage}
                            alt="AI Models Banner"
                        /> 
                    </div>
                </div>

            </div>
        </div> 
    );
};

export default Banner;