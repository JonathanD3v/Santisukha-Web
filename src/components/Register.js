// import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import bg_img from "../assets/images/welcome_bg.jpg";
// import Input from "../utils/Input";
// import { FiCreditCard, FiKey, FiPhoneCall, FiUserPlus } from "react-icons/fi";
// import toast from "react-hot-toast";
// import { encodeData, postMethod } from "../services";
// import { REGISTER_API, SEND_OTP_API } from "../services/api";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [pass, setPass] = useState("");
//   const [conPass, setConPass] = useState("");
//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("m_g_a");
//     if (token) {
//       navigate("/");
//     }
//   }, []);

//   const getOtp = async () => {
//     return await postMethod(SEND_OTP_API, { phone, sms: "send" }).then(
//       (res) => {
//         if (res?.status === "success") {
//           return res?.message;
//         } else {
//           throw new Error(res?.message);
//         }
//       }
//     );
//   };

//   const getOtpHandler = async () => {
//     if (!phone) {
//       toast.error("Please enter a phone");
//       return;
//     }
//     toast.promise(getOtp(), {
//       loading: "Loading...",
//       success: (message) => message,
//       error: (error) => error?.toString(),
//     });
//   };

//   const register = async () => {
//     const data = {
//       name,
//       phone,
//       password: pass,
//       password_confirmation: conPass,
//       otp,
//       bank_name: "YOURLAND",
//     };
//     return await postMethod(REGISTER_API, data).then((res) => {
//       if (res?.status === "success") {
//         localStorage.setItem("m_g_a", encodeData(res?.data));
//         navigate("/");
//         return res?.message;
//       } else {
//         throw new Error(res?.message);
//       }
//     });
//   };

//   const registerHandler = async (e) => {
//     e.preventDefault();
//     if (!name) {
//       toast.error("Please enter a name");
//       return;
//     }
//     if (!phone) {
//       toast.error("Please enter a phone");
//       return;
//     }
//     if (!pass) {
//       toast.error("Please enter a password");
//       return;
//     }
//     if (pass !== conPass) {
//       toast.error("Confirm password does not match.");
//       return;
//     }
//     if (!otp) {
//       toast.error("Please enter otp code");
//       return;
//     }
//     if (otp.length !== 6) {
//       toast.error("OTP must be 6 digits");
//       return;
//     }
//     toast.promise(register(), {
//       loading: "Loading...",
//       success: (message) => message,
//       error: (error) => error?.toString(),
//     });
//   };
//   return (
//     <div
//       style={{
//         background: `url(${bg_img}) no-repeat fixed`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Header />
//       <div className="max-w-[95%] lg:max-w-[1080px] min-h-[65vh] mx-auto py-10">
//         <p className="text-3xl text-center text-white font-semibold mb-5">
//           Sign Up Here!
//         </p>
//         <div className="max-w-[460px] mx-auto border border-white rounded-xl mb-5 backdrop-blur-sm shadow-md p-5">
//           <form onSubmit={registerHandler}>
//             <Input
//               value={name}
//               event={(e) => setName(e.target.value)}
//               type={"text"}
//               icon={<FiUserPlus />}
//               label={"Username"}
//               placeholder="Enter username"
//             />
//             <Input
//               value={phone}
//               event={(e) => setPhone(e.target.value)}
//               type={"text"}
//               icon={<FiPhoneCall />}
//               label={"Phone"}
//               placeholder="Enter phone"
//               otp_event={() => getOtpHandler()}
//             />
//             <Input
//               value={otp}
//               event={(e) => setOtp(e.target.value)}
//               type={"text"}
//               icon={<FiCreditCard />}
//               label={"OTP"}
//               placeholder="Enter OTP"
//             />
//             <Input
//               value={pass}
//               event={(e) => setPass(e.target.value)}
//               type={"password"}
//               icon={<FiKey />}
//               label={"Password"}
//               placeholder="Enter password"
//             />
//             <Input
//               value={conPass}
//               event={(e) => setConPass(e.target.value)}
//               type={"password"}
//               icon={<FiKey />}
//               label={"Confirm Password"}
//               placeholder="Enter confirm password"
//             />
//             <button
//               type="submit"
//               className="w-full py-2 bg-green-700 font-semibold rounded-lg text-white"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
