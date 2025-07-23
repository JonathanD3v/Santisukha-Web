// import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import bg_img from "../assets/images/welcome_bg.jpg";
// import Input from "../utils/Input";
// import { FiKey, FiUserPlus } from "react-icons/fi";
// import { encodeData, postMethod } from "../services";
// import { LOGIN_API } from "../services/api";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// export default function Signin() {
//   const [name, setName] = useState("");
//   const [pass, setPass] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("m_g_a");
//     if (token) {
//       navigate("/");
//     }
//   }, []);

//   const login = async () => {
//     const data = {
//       name,
//       password: pass,
//       device_name: "null",
//       browser_name: "null",
//     };
//     return await postMethod(LOGIN_API, data).then((res) => {
//       if (res?.status === "success") {
//         localStorage.setItem("m_g_a", encodeData(res?.data));
//         navigate("/");
//         return res.message;
//       } else {
//         throw new Error(res.message);
//       }
//     });
//   };

//   const makeLogin = async (e) => {
//     e.preventDefault();
//     if (!name) {
//       toast.error("Please enter a name");
//       return;
//     }
//     if (!pass) {
//       toast.error("Please enter a password");
//       return;
//     }
//     toast.promise(login(), {
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
//           Sign In Here!
//         </p>
//         <div className="max-w-[460px] mx-auto border border-white rounded-xl mb-5 backdrop-blur-sm shadow-md p-5">
//           <form onSubmit={makeLogin}>
//             <Input
//               value={name}
//               event={(e) => setName(e.target.value)}
//               type={"text"}
//               icon={<FiUserPlus />}
//               label={"Username"}
//               placeholder="Enter username"
//             />
//             <Input
//               value={pass}
//               event={(e) => setPass(e.target.value)}
//               type={"password"}
//               icon={<FiKey />}
//               label={"Password"}
//               placeholder="Enter password"
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
