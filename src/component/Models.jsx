import { use } from "react";
import ModelsCard from "./ModelsCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);

  return (
    
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {models.map((model) => (
          <ModelsCard key={model.id} model={model} carts={carts} setCarts={setCarts}/>
        ))}
      </div>
    </div>
  );
};

export default Models;