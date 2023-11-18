import profileimg from "../../assets/profile.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import regimg from "../../assets/regimg.jpg";
import loading from "../../assets/loading.gif";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

// firebase
import { getDatabase, ref, set } from "firebase/database";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

function Registration() {
  const auth = getAuth();
  const db = getDatabase();

  // Navigate
  const navigate = useNavigate();

  // Signin loading
  const [signinloading, isSigninloading] = useState(false);

  // firbase
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setPasswordInputType(showPassword ? "password" : "text");
  };

  const validateEmail = (email) => {
    // A simple regex pattern for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // A simple password strength check (you can customize this as needed)
    return password.length >= 8; // Require at least 8 characters
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Oops! You forgot to enter your name";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "You must enter a valid email to proceed";
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password should be at least 8 characters long";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const { name, email, password } = formData;
      // The form is valid, you can submit it
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: profileimg,
          }).then(() => {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                setSuccess(true);
                isSigninloading(true);
                setFormData({
                  name: "",
                  email: "",
                  password: "",
                });

                setTimeout(() => {
                  setSuccess(false);
                  navigate("/login");
                }, 3000);
              })
              .catch((error) => {
                const errorMessage = error.code;
                if (errorMessage.includes("auth/email-already-in-use")) {
                  setErrors({ ...newErrors, usedmail: "email-already used" });
                }
              });
          });
          set(ref(db, "users/" + user.user.uid), {
            username: name,
            email: email,
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <section className=" h-fit">
      <div className="max-w-container mx-auto">
        <div className="flex-none lg:flex">
          <div className="w-full lg:w-6/12 p-2 md:pl-14 flex items-center lg:mb-0 mb-10">
            <div className="md:mx-auto mx-auto w-full">
              <h1 className="text-[#11175D] font-nunito text-[24px] md:text-[34px] font-bold">
                Get started with easily register
              </h1>
              <p className="font-nunito font-normal text-base md:text-[20px] text-[#B6ACAC]">
                Free register <span className="text-[#808080]">and</span> you
                can enjoy it
              </p>
              {/* Full Name */}
              <div className="w-full lg:w-[470px] relative mt-10">
                <label className="text-[#444984] absolute w-fit bg-white px-2 left-5 top-[-12px]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="john smith"
                  className="border-[#CACBD6] border-2 w-full py-[20px] rounded-lg px-5 outline-none bg-transparent"
                />
                {errors.name && <span>{errors.name}</span>}
              </div>
              {/* Email Address */}
              <div className="w-full lg:w-[470px] relative mt-10">
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
                {errors.usedmail && <span>{errors.usedmail}</span>}
              </div>
              {/* Password */}
              <div className="w-full lg:w-[470px] relative mt-10">
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
              <div className=" w-100 lg:w-[470px] mt-5">
                {success && (
                  <p className="bg-green-500 transition-all text-white px-5 py-2 flex justify-between my-4 rounded-sm items-center">
                    Registration Successful. Please verify your email address.
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        setSuccess(false);
                      }}
                    >
                      x
                    </span>
                  </p>
                )}
                <button
                  onClick={handleFormSubmit}
                  className=" bg-[#5F35F5] text-white w-full py-4 rounded-full font-nunito font-bold text-[20px] cursor-pointer"
                >
                  {signinloading ? (
                    <span className="flex justify-center items-center">
                      Loading...
                      <img className="w-[35px]" src={loading} alt="" />
                    </span>
                  ) : (
                    <span>Sign up</span>
                  )}
                </button>
              </div>
              <div className="md:w-[470px] mt-3 text-center">
                <p className="font-opensans text-[#03014C] text-base">
                  Already have an account ?
                  <span className="text-[#EA6C00] font-bold cursor-pointer">
                    <Link to={"/login"}>Sign In</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <img
              src={regimg}
              className="w-full h-[100vh] object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
