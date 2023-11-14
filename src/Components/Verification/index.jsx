import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
function Verification() {
  return (
    <section className="bg-gray-300 w-full lg:w-[40%] h-auto p-5 mx-auto">
      <div>
        <h1 className="text-red-500 text-center text-[18px] font-bold capitalize">
          Please Verify your email address and login again
        </h1>
        <Link
          className="flex justify-between w-[115px] mt-5 group mx-auto items-center"
          to="/login"
        >
          <IoIosArrowBack className="text-[16px] mt-1text-blac "></IoIosArrowBack>

          <button className="text-[16px] text-black  ">Back To Login</button>
        </Link>
      </div>
    </section>
  );
}

export default Verification;
