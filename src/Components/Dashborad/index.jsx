import profileimg from "../../assets/profile.png";
import { LiaHomeSolid } from "react-icons/lia";
import { BsFillChatDotsFill } from "react-icons/bs";
import { TfiBell } from "react-icons/tfi";
import { SlSettings } from "react-icons/sl";
import { VscSignOut } from "react-icons/vsc";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Cropper from "react-cropper";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";

import "./loading.css";
import "cropperjs/dist/cropper.css";

// Firebase
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState, createRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Verification from "../Verification";
import Mainpage from "../MainPage";
import { userLoginInfo } from "../../slices/userslice";

// Firbase Storage

function Dashboard() {
  const auth = getAuth();

  const [userVerify, setUserVerify] = useState(false);
  const [downloader, setDownloader] = useState(false);
  const [cropData, setCropData] = useState(null);
  const [profilePopUp, setProfilePopUp] = useState(false);

  const [downloadURL, setDownloadURL] = useState("");
  const [image, setImage] = useState(profileimg);

  // firebase Storage
  const storage = getStorage();
  const cropperRef = createRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    console.log(e.dataTransfer);
    let files;

    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const storageRef = ref(storage, auth.currentUser.uid);

      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());

      uploadString(storageRef, cropData, "data_url")
        .then(() => {
          return getDownloadURL(storageRef);
        })
        .then((url) => {
          setDownloadURL(url);
          setProfilePopUp(false);
        })
        .catch((error) => {
          console.error("Error uploading or getting download URL:", error);
        });
    }
    setDownloader(true);
  };

  useEffect(() => {
    updateProfile(auth.currentUser, {
      photoURL: downloadURL,
    });
  }, [downloadURL]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user.emailVerified) {
        localStorage.setItem("userInfo", JSON.stringify(userLoginInfo(user)));
        dispatch(userLoginInfo(user));
        setUserVerify(true);
      }
    });
  }, [auth]);

  const data = useSelector((state) => state.userLoginInfo.userInfo);
  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [data]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userInfo");
        dispatch(userLoginInfo(null));
        navigate("/login");
      })
      .catch((error) => {
        // Handle any errors during sign out
        console.error(error);
      });
  };

  // Profile Handler
  const handleProfilePopUp = () => {
    setProfilePopUp(true);
  };

  return (
    <section className="min-h-screen w-full p-5 relative flex ">
      {/* Menu Bar  */}
      <div className="w-[90px] min-h-screen bg-[#5F35F5] rounded-lg pt-4 relative">
        {/* User Profile  */}
        <div
          onClick={handleProfilePopUp}
          className="relative rounded-full  group bg-white w-[50px] h-[50px] cursor-pointer mx-auto group overflow-hidden"
        >
          <img
            src={data.photoURL ? data.photoURL : image}
            className="w-full rounded-full h-full object-cover"
            alt=""
          />
          <div className="w-full z-[99] group-hover:top-0 transition-all h-full bg-[#000000a8] absolute left-0 top-[100%] rounded-full ">
            <AiOutlineCloudUpload className="absolute text-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></AiOutlineCloudUpload>
          </div>
        </div>
        <div className="mt-2">
          <h2 className="font-bold text-white text-[12px] text-center">
            {data.displayName}
          </h2>
        </div>
        {/* Home Menu  */}
        <div className="flex justify-center items-center relative mt-8 w-full overflow-hidden">
          <div className="before:content-[''] before:absolute before:right-0 before:z-[2] before:top-0 before:bg-[#5F35F5] before:rounded-l-md before:w-1 before:h-full after:bg-white py-3 after:rounded-l-md  w-full after:content-[''] after:top-0 after:left-[12px] after:w-full after:h-full after:absolute z-[1]">
            {/* Background styling for LiaHomeSolid icon */}
            <LiaHomeSolid className="text-[30px] mx-auto text-[#5F35F5] relative z-[2]"></LiaHomeSolid>
          </div>
        </div>

        {/* Chate Menu  */}
        <div className="flex justify-center ">
          <div className=" p-1 rounded-xl mt-8 relative">
            <BsFillChatDotsFill className=" text-[30px] text-white"></BsFillChatDotsFill>
            <span className="absolute top-0 right-[-5px] bg-red-600 text-white rounded-full text-[10px] px-1">
              41
            </span>
          </div>
        </div>
        {/* Notification menu  */}
        <div className="flex justify-center  ">
          <div className=" p-1 rounded-xl mt-8 relative">
            <TfiBell className=" text-[30px] text-white"></TfiBell>
          </div>
        </div>
        {/* Settings Menu  */}
        <div className="flex justify-center ">
          <div className=" p-1 rounded-xl mt-8 ">
            <SlSettings className=" text-[30px] text-white"></SlSettings>
          </div>
        </div>
        {/* Logout menu  */}
        <div className="absolute bottom-3 left-[50%] translate-x-[-50%]">
          <div
            className="flex justify-center cursor-pointer"
            onClick={handleLogout}
          >
            <div className=" p-1 rounded-xl ">
              <VscSignOut className=" text-[30px] text-white"></VscSignOut>
            </div>
          </div>
        </div>
      </div>
      {/* Menu bar end  */}
      {userVerify ? <Mainpage></Mainpage> : <Verification></Verification>}
      {/* profile upload pop up  */}
      {profilePopUp && (
        <div className="w-full bg-[#272727cc] h-full flex justify-center items-center left-0 top-0 absolute">
          <div className="bg-white shadow-2xl w-[95%] lg:w-[50%] mx-auto  p-4 rounded-lg">
            <div className="flex justify-between items-center py-2">
              <h2 className=" text-black  text-xl font-bold ">
                Upload Your Profile
              </h2>
              <div className="w-[50px] h-[50px] rounded-full img-preview overflow-hidden object-cover"></div>
            </div>
            <div className="w-full bg-green-100 border-2 h-auto">
              <Cropper
                ref={cropperRef}
                zoomTo={0.1}
                initialAspectRatio={1}
                preview=".img-preview"
                src={image}
                viewMode={1}
                minCropBoxHeight={5}
                minCropBoxWidth={5}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                guides={true}
              />
            </div>
            <input
              onChange={onChange}
              type="file"
              className="w-full py-3 mt-4"
            />

            <div className="mt-4 w-full flex justify-between">
              <button
                onClick={() => {
                  setProfilePopUp(false);
                }}
                className="bg-red-500 text-white h-11 px-10"
              >
                Cancel
              </button>
              <div className="flex justify-normal items-center">
                <button
                  onClick={getCropData}
                  className="active:scale-[0.9] flex justify-between gap-2 items-center bg-green-500 text-white h-11 px-7"
                >
                  Upload
                  {downloader && (
                    <div className="cssload-container">
                      <div className="cssload-speeding-wheel"></div>
                    </div>
                  )}
                </button>
                <button
                  onClick={downloadURL}
                  className=" bg-[#2eb861]  text-white h-11 px-3"
                >
                  <PiDownloadSimpleLight></PiDownloadSimpleLight>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dashboard;
