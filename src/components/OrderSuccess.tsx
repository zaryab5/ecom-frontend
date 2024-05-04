import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (

      <div >
        <div className="bg-white p-6 fixed  top-[20%] left-[50%] w-[80vw] lg:w-auto translate-x-[-50%]     mx-auto z-50">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Order Placed Successfully!
            </h3>
            <p className="text-gray-600 my-2 mx-5">
              Thank you for completing your online order.
            </p>
            <p> Have a great day! </p>
            <div className="py-10 text-center">
              <Link
                to={'/'}
                className="px-12 bg-secondary-3 hover:bg-rose-400  text-white font-semibold py-3"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden w-[100vw] h-full fixed bg-black/50 z-10 top-0 left-0"></div>

      </div>
    
  );
};

export default OrderSuccess;
