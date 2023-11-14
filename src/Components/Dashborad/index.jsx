import profileimg from "../../assets/profile.png";
import { LiaHomeSolid } from "react-icons/lia";
import { BsFillChatDotsFill } from "react-icons/bs";
import { TfiBell } from "react-icons/tfi";
import { SlSettings } from "react-icons/sl";
import { VscSignOut } from "react-icons/vsc";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { PiDownloadSimpleLight } from "react-icons/pi";
import "./loading.css";
// Naviget
import { useNavigate } from "react-router-dom";
// Firebase
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import Mainpage from "../MainPage";
import { useEffect, useState, createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Verification from "../Verification";
// Cropper js
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
// Firbase Storage
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";

function Dashboard() {
  const [downloader, setDownloader] = useState(false);
  const [downloadURL, setDownloadURL] = useState("");

  // firebase Storage
  const storage = getStorage();

  const defaultSrc =
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();
  const onChange = (e) => {
    e.preventDefault();
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
    setDownloader(true);
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const storageRef = ref(storage, auth.currentUser.uid);

      uploadString(storageRef, cropData, "data_url")
        .then(() => {
          console.log("Uploaded a data_url string!");
          return getDownloadURL(storageRef);
        })

        .then((url) => {
          console.log("File available at", url);
          setDownloadURL(url);
        })
        .catch((error) => {
          console.error("Error uploading or getting download URL:", error);
        });
      setTimeout(() => {
        setProfilePopUp(false);
        setDownloader(false);
      }, 2000);
    }
  };

  const auth = getAuth();
  const data = useSelector((state) => state.userLoginInfo.userInfo);
  useEffect(() => {
    if (!data) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        setUserVerify(true);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const [userVerify, setUserVerify] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userInfo");
        dispatch({ type: "CLEAR_USER_INFO" });
        navigate("/login");
      })
      .catch((error) => {
        // Handle any errors during sign out
        console.error(error);
      });
  };

  // Profile Handler
  const [profilePopUp, setProfilePopUp] = useState(false);
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
            src={cropData ? cropData : profileimg}
            className="w-full rounded-full h-full object-cover"
            alt=""
          />
          <div className="w-full z-[99] group-hover:top-0 transition-all h-full bg-[#000000a8] absolute left-0 top-[100%] rounded-full ">
            <AiOutlineCloudUpload className="absolute text-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></AiOutlineCloudUpload>
          </div>
        </div>
        {/* Home Menu  */}
        <div className="flex justify-center ">
          <div className="bg-white p-1 rounded-xl mt-8">
            <LiaHomeSolid className=" text-[30px] text-[#5F35F5]"></LiaHomeSolid>
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
        <div className="absolute bottom-3   left-[25px]">
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
      {profilePopUp && (
        <div className="w-full bg-[#272727cc] h-fit flex justify-center items-center left-0 top-0 absolute">
          <div className="bg-white shadow-2xl w-[50%] mx-auto  p-4 rounded-lg">
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
