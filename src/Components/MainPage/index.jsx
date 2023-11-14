import gropup1 from "../../assets/groupimg.png";
import gropup2 from "../../assets/group2.png";
import gropup3 from "../../assets/group3.png";
import { FiSearch } from "react-icons/fi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
function Mainpage() {
  return (
    <div className="w-[1300px] flex flex-wrap justify-between px-5 h-full ">
      {/* First Part  */}
      <div className="w-full md:w-1/2 lg:w-[30%]  h-auto">
        {/* Search Bar  */}
        <div className="justify-between items-center bg-white rounded-md shadow-md  flex w-full p-2">
          <div className="w-[5%] p-1">
            <FiSearch></FiSearch>
          </div>
          <input
            className="w-[85%] outline-none p-1"
            type="search"
            placeholder="Search"
          />
          <button className="w-[5%]">
            <PiDotsThreeVerticalBold className="text-[#5F35F5]"></PiDotsThreeVerticalBold>
          </button>
        </div>
        {/* Search Bar End  */}
        <div className=" shadow-lg p-3 rounded-lg w-full">
          {/* Group Title  */}
          <div className="flex w-full justify-between items-center h-fit mt-4 ">
            <h2 className="font-opensans font-bold text-[20px]">Groups List</h2>
            <button className="">
              <PiDotsThreeVerticalBold className="text-[#5F35F5] text-[18px]"></PiDotsThreeVerticalBold>
            </button>
          </div>
          {/* Title End  */}

          {/* Group item 1 */}
          <div className="flex justify-between items-center py-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup1}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Reunion
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Join
            </button>
          </div>
          {/* Group item 2 */}
          <div className="flex justify-between items-center py-2  mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup2}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Forever
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Good to see you.
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Join
            </button>
          </div>
          {/* Group item 3 */}
          <div className="flex justify-between items-center py-2  mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Crazy Cousins
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  What plans today?{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Second Part  */}

      <div className="w-full md:w-1/2 lg:w-[30%]  h-auto">
        <div className=" shadow-lg p-3 rounded-lg w-full">
          {/* Group Title  */}
          <div className="flex w-full justify-between items-center h-fit mt-4 ">
            <h2 className="font-opensans font-bold text-[20px]">Friends</h2>
            <button className="">
              <PiDotsThreeVerticalBold className="text-[#5F35F5] text-[18px]"></PiDotsThreeVerticalBold>
            </button>
          </div>
          {/* Title End  */}

          {/* Group item 1 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup1}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Reunion
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Chat
            </button>
          </div>
          {/* Group item 2 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup2}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Forever
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Good to see you.
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Chat
            </button>
          </div>
          {/* Group item 3 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Crazy Cousins
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  What plans today?{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Chat
            </button>
          </div>
          {/* Group item 4 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Crazy Cousins
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  What plans today?{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Chat
            </button>
          </div>
        </div>
      </div>
      {/* Third Part  */}

      <div className="w-full md:w-1/2 lg:w-[30%]  h-auto">
        <div className=" shadow-lg p-3 rounded-lg w-full">
          {/* Group Title  */}
          <div className="flex w-full justify-between items-center h-fit mt-4 ">
            <h2 className="font-opensans font-bold text-[20px]">User List</h2>
            <button className="">
              <PiDotsThreeVerticalBold className="text-[#5F35F5] text-[18px]"></PiDotsThreeVerticalBold>
            </button>
          </div>
          {/* Title End  */}

          {/* Group item 1 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup1}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Reunion
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Add
            </button>
          </div>
          {/* Group item 2 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup2}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Forever
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Good to see you.
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Add
            </button>
          </div>
          {/* Group item 3 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Crazy Cousins
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  What plans today?{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Add
            </button>
          </div>
          {/* Group item 4 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Crazy Cousins
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  What plans today?{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Add
            </button>
          </div>
        </div>
      </div>
      {/* Fourth Part  */}

      <div className="w-full md:w-1/2 lg:w-[30%]  h-auto">
        <div className=" shadow-lg p-3 rounded-lg w-full">
          {/* Group Title  */}
          <div className="flex w-full justify-between items-center h-fit mt-4 ">
            <h2 className="font-opensans font-bold text-[20px]">
              Friend Request
            </h2>
            <button className="">
              <PiDotsThreeVerticalBold className="text-[#5F35F5] text-[18px]"></PiDotsThreeVerticalBold>
            </button>
          </div>
          {/* Title End  */}

          {/* Group item 1 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup1}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Kiran{" "}
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-5 py-1 rounded-md">
              Accept
            </button>
          </div>
          {/* Group item 2 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup2}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Forever
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Good to see you.
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-5 py-1 rounded-md">
              Accept
            </button>
          </div>
          {/* Group item 3 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Swathi
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  From UK
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-5 py-1 rounded-md">
              Accept
            </button>
          </div>
          {/* Group item 4 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Raghav
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  What plans today?{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-5 py-1 rounded-md">
              Accept
            </button>
          </div>
        </div>
      </div>
      {/* Fivth Part  */}

      <div className="w-full md:w-1/2 lg:w-[30%]  h-auto">
        <div className=" shadow-lg p-3 rounded-lg w-full">
          {/* Group Title  */}
          <div className="flex w-full justify-between items-center h-fit mt-4 ">
            <h2 className="font-opensans font-bold text-[20px]">My Groups</h2>
            <button className="">
              <PiDotsThreeVerticalBold className="text-[#5F35F5] text-[18px]"></PiDotsThreeVerticalBold>
            </button>
          </div>
          {/* Title End  */}

          {/* Group item 1 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup1}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Reunion
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Chat
            </button>
          </div>
          {/* Group item 2 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup2}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Forever
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Good to see you.
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Chat
            </button>
          </div>
          {/* Group item 3 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Crazy Cousins
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  What plans today?{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Chat
            </button>
          </div>
          {/* Group item 4 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Crazy Cousins
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  What plans today?{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-7 py-1 rounded-md">
              Chat
            </button>
          </div>
        </div>
      </div>
      {/* six Part  */}

      <div className="w-full md:w-1/2 lg:w-[30%]  h-auto">
        <div className=" shadow-lg p-3 rounded-lg w-full">
          {/* Group Title  */}
          <div className="flex w-full justify-between items-center h-fit mt-4 ">
            <h2 className="font-opensans font-bold text-[20px]">
              Blocked Users
            </h2>
            <button className="">
              <PiDotsThreeVerticalBold className="text-[#5F35F5] text-[18px]"></PiDotsThreeVerticalBold>
            </button>
          </div>
          {/* Title End  */}

          {/* Group item 1 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup1}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Reunion
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-5 capitalize py-1 rounded-md">
              unblock
            </button>
          </div>
          {/* Group item 2 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup2}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Friends Forever
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  Good to see you.
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-5 capitalize py-1 rounded-md">
              unblock
            </button>
          </div>
          {/* Group item 3 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Crazy Cousins
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  What plans today?{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-5 capitalize py-1 rounded-md">
              unblock
            </button>
          </div>
          {/* Group item 4 */}
          <div className="flex justify-between items-center py-2 border-b-2 mt-4">
            <div className="flex gap-3">
              {/* Group Profile picture  */}
              <div className="w-[40x] h-[40px] rounded-full">
                <img
                  src={gropup3}
                  className="w-[40px] h-[40px] object-cover"
                  alt=""
                />
              </div>
              {/* Group Name  */}
              <div>
                <h3 className="font-nunito font-semibold text-lg leading-3">
                  Crazy Cousins
                </h3>
                <p className="font-opensans text-[#797979] text-[14px] font-medium leading-6">
                  What plans today?{" "}
                </p>
              </div>
            </div>
            <button className="bg-[#5F35F5] text-white font-semibold px-5 capitalize py-1 rounded-md">
              unblock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
