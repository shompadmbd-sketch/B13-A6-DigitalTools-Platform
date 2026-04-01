import React from 'react';

const Premium = () => {
    return (
        <div className="mx-auto text-center mt-16 mb-8 md:mt-24 lg:mt-30 px-4">
            
            <h1 className="text-[#101727] text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-tight">
                Premium Digital Tools
            </h1>

            <p className="text-sm md:text-[16px] font-normal text-[#627382] mt-4 max-w-2xl mx-auto">
                Choose from our curated collection of premium digital products designed 
                <br className="hidden md:block" /> 
                {" "}to boost your productivity and creativity.
            </p>
        </div>
    );
};

export default Premium;