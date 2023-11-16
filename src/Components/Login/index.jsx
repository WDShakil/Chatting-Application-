import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../assets/login.jpg";
import loading2 from "../../assets/loading2.gif";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../../slices/userslice";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Facebook Login
  const FacebookProvider = new FacebookAuthProvider();
  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);
  const [forgetPasswordSuccess, setForgetPasswordSuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setPasswordInputType(showPassword ? "password" : "text");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "You must enter a valid email";
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const auth = getAuth();
      const { email, password } = formData;

      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          // Signed in
          localStorage.setItem("userInfo", JSON.stringify(userLoginInfo(user)));
          dispatch(userLoginInfo(user));
          console.log(user);
          setLoading(true);

          setTimeout(() => {
            navigate("/dashboard");
            setLoading(false);
          }, 3000);
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage.includes("auth/invalid-login-credentials")) {
            setErrors({
              ...newErrors,
              datanotfounderror: "Unauthorized access ",
            });
          }
        });
      // Email Password signin end
    }
  };
  const handleFacebookLogin = () => {
    signInWithPopup(auth, FacebookProvider)
      .then(() => {
        // Signed in
        setLoading(true);
        setTimeout(() => {
          navigate("/dashboard");
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  // Handle Google Signin
  const handleGoogleSignin = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(() => {
        setLoading(true);
        setTimeout(() => {
          navigate("/dashboard");
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  // Handle Forget Password
  const handleForgetPassword = () => {
    setForgetPasswordModal(true);
  };

  const passwordResetSubmit = () => {
    const { email } = formData;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setForgetPasswordSuccess(true);
        setForgetPasswordModal(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return (
    <section className="h-fit ">
      <div className="max-w-container mx-auto relative">
        <div className="flex-none lg:flex">
          <div className="w-full lg:w-6/12 p-2 md:pl-14 lg:mb-0 mb-10 flex items-center">
            <div className="md:mx-auto mx-auto w-full">
              <h1 className="text-[#11175D] font-nunito text-[24px] md:text-[34px] font-bold">
                Login to your account!
              </h1>
              <div className="my-5 flex justify-between md:w-[470px]">
                <button
                  onClick={handleGoogleSignin}
                  className="flex border-2 cursor-pointer rounded-md justify-center items-center gap-2 py-3 px-16 border-[#CACBD6]"
                >
                  <FcGoogle /> Google
                </button>
                <button
                  onClick={handleFacebookLogin}
                  className="flex cursor-pointer border-2 rounded-md justify-center items-center gap-2 py-3 px-16 border-[#CACBD6]"
                >
                  <GrFacebook className="text-[#5F35F5]" /> Facebook
                </button>
              </div>
              {/* Email Address */}
              <div className="md:w-[470px] relative mt-10">
                <label className="text-[#444984] absolute w-fit bg-white px-2 left-5 top-[-12px]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  className="border-[#CACBD6] border-2 w-full py-[20px] rounded-lg px-5 outline-none bg-transparent"
                />
                {errors.email && <span>{errors.email}</span>}
                {errors.datanotfounderror && (
                  <span>{errors.datanotfounderror}</span>
                )}
              </div>
              {/* Password */}
              <div className="md:w-[470px] relative mt-10">
                <label className="text-[#444984] absolute w-fit bg-white px-2 left-5 top-[-12px]">
                  Password
                </label>
                <input
                  type={passwordInputType}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="********"
                  className="border-[#CACBD6] border-2 w-full py-[20px] rounded-lg px-5 outline-none bg-transparent"
                />
                {errors.password && <span>{errors.password}</span>}
                <p onClick={handleForgetPassword} className="cursor-pointer">
                  Forget Password
                </p>
                {showPassword ? (
                  <RxEyeOpen
                    onClick={togglePasswordVisibility}
                    className="absolute right-5 top-[25px] cursor-pointer"
                  />
                ) : (
                  <RxEyeClosed
                    onClick={togglePasswordVisibility}
                    className="absolute right-5 top-[25px] cursor-pointer"
                  />
                )}
              </div>
              <div className=" w-100 md:w-[470px] mt-5">
                <button
                  onClick={handleFormSubmit}
                  className="bg-[#5F35F5]  text-white w-full py-4 rounded-full font-nunito font-bold text-[20px]"
                >
                  {loading ? (
                    <div className="flex justify-center items-center">
                      Loading <img className="w-[35px]" src={loading2} alt="" />
                    </div>
                  ) : (
                    <span>Login to Continue </span>
                  )}
                </button>
              </div>
              <div className="md:w-[470px] mt-3 text-center">
                <p className="font-opensans text-[#03014C] text-base">
                  Don’t have an account ?
                  <span className="text-[#EA6C00] font-bold cursor-pointer">
                    <Link to={"/"}>Sign up</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-fullmd:w-6/12">
            <img
              src={loginimg}
              className="w-full object-cover  h-screen"
              alt=""
            />
          </div>
        </div>
        {/* Forget Modal  */}
        {forgetPasswordModal && (
          <div className="flex justify-center items-center backdrop-blur bg-gradient-to-r from-[#aea1104d] to-[#3ebc6400]  w-full h-screen absolute left-0 top-0">
            <div className="w-[95%] md:w-2/5 shadow-xl h-auto p-5 rounded-md bg-white">
              <h2 className="text-[25px] font-bold capitalize">
                Enter Your Email
              </h2>
              {/* Email Address */}
              <div className="md:w-full relative mt-10">
                <label className="text-[#444984] absolute w-fit bg-white px-2 left-5 top-[-12px]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  className="border-[#CACBD6] border-2 w-full py-[20px] rounded-lg px-5 outline-none bg-transparent"
                />
                {errors.email && <span>{errors.email}</span>}
                {errors.datanotfounderror && (
                  <span>{errors.datanotfounderror}</span>
                )}
              </div>
              <div className="mt-3 flex justify-between">
                <button
                  onClick={() => {
                    setForgetPasswordModal(false);
                  }}
                  className="flex justify-between items-center py-2 pl-4 pr-7 bg-black font-bold text-lg uppercase text-white rounded-sm"
                >
                  <IoIosArrowBack className="text-[20px] mr-3"></IoIosArrowBack>
                  back
                </button>
                <button
                  onClick={passwordResetSubmit}
                  className="py-2 px-7 active:bg-blue-500 bg-blue-600 font-bold text-lg uppercase text-white rounded-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Forget password success Modal  */}
        {forgetPasswordSuccess && (
          <div className="flex justify-center items-center bg-white  w-full h-screen absolute left-0 top-0">
            <div className="w-[95%] md:w-2/5 h-auto p-5 rounded-md bg-white border-2 border-[#f4f4f4] text-center shadow-md ">
              <h1 className="font-bold text-[25px] capitalize text-green-600">
                password reset successful
              </h1>
              <p className="capitalize text-base font-nunito text-gray-600">
                please check your inbox and set a new password
              </p>
              <div
                onClick={() => {
                  setForgetPasswordSuccess(false);
                  setForgetPasswordModal(false);
                }}
                className="flex justify-between w-[115px] mt-5 group mx-auto items-center"
              >
                <IoIosArrowBack className="text-[16px] mt-1 group-hover:text-black text-gray-600 "></IoIosArrowBack>

                <button className="text-[16px] group-hover:text-black text-gray-600 ">
                  Back To Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;
