import { toast } from "react-toastify";
import { CiShoppingCart } from 'react-icons/ci';

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Item deleted!");
  };

  return (
    
    <div className="w-full max-w-[1200px] mx-auto bg-[#F2F2F2] rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 p-6 md:p-12 flex flex-col justify-between min-h-[400px] mt-10">
      
      {/* Header Section */}
      <div>
        <h1 className="text-2xl md:text-[32px] text-[#101727] font-bold mb-6 md:mb-8">Your Cart</h1>

        {carts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <CiShoppingCart className="text-5xl md:text-6xl text-gray-300" />
            <p className="text-xl md:text-2xl p-5 text-gray-400">Cart is empty</p>
          </div>
        ) : (
          /* custom-scrollbar overflow handle korbe */
          <div className="space-y-4 max-h-[300px] md:max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between bg-[#F9FAFC] rounded-xl md:rounded-2xl p-4 md:p-5"
                key={item.id}
              >
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-2xl shadow-sm border border-gray-50 flex-shrink-0">
                    <img
                      className="h-6 w-6 md:h-8 md:w-8 object-contain"
                      src={item.icon}
                      alt={item.name}
                    />
                  </div>

                  <div className="flex flex-col">
                    <h2 className="text-base md:text-[20px] font-bold text-[#101727] truncate max-w-[120px] md:max-w-none">
                      {item.name}
                    </h2>
                    <p className="text-sm md:text-[16px] font-medium text-[#627382]">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(item)}
                  className="text-[#25065D] text-sm md:text-[16px] font-bold hover:opacity-80 transition-opacity flex-shrink-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      
      {carts.length > 0 && (
        <div className="mt-8 md:mt-auto">
          <div className="flex justify-between items-center mb-6 px-1">
            <div className="text-[#627382] text-base md:text-[18px] font-medium">Total:</div>
            <div className="text-[#101727] font-bold text-2xl md:text-[32px]">${totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="w-full py-4 md:py-5 rounded-xl md:rounded-[20px] font-bold text-base md:text-[18px] text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:brightness-110 transition-all 
            shadow-lg active:scale-[0.98] cursor-pointer"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;