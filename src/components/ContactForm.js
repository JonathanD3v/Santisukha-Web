// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import bg_img from "../assets/images/welcome_bg.jpg";
// import Input from "../utils/Input";
// import { FiMail, FiPhoneCall, FiUserCheck } from "react-icons/fi";
// import toast from "react-hot-toast";
// import { decodeData, postMethod } from "../services";
// import { CONTACT_API } from "../services/api";
// import { useNavigate } from "react-router-dom";

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [description, setDescription] = useState("");
//   const navigate = useNavigate();

//   const submit = async () => {
//     const token = decodeData(localStorage.getItem("m_g_a"));
//     return await postMethod(CONTACT_API, {
//       name,
//       phone,
//       email,
//       remark: description,
//     }, token.token).then((res) => {
//       if (res?.status === "success") {
//         navigate("/");
//         return res.message;
//       } else {
//         throw new Error((res?.field ?? '') + ' ' + res.message);
//       }
//     });
//   };

//   const submitForm = async (e) => {
//     e.preventDefault();
//     if (!name) {
//       toast.error("Please enter your business name.");
//       return;
//     }
//     if (!phone) {
//       toast.error("Please enter a phone.");
//       return;
//     }
//     if (!email) {
//       toast.error("Please enter a email address.");
//       return;
//     }
//     if (!description) {
//       toast.error("Please enter a description.");
//       return;
//     }
//     toast.promise(submit(), {
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
//           Contact Form!
//         </p>
//         <div className="max-w-[460px] mx-auto border border-white rounded-xl mb-5 backdrop-blur-sm shadow-md p-5">
//           <form onSubmit={submitForm}>
//             <Input
//               value={name}
//               event={(e) => setName(e.target.value)}
//               type={"text"}
//               icon={<FiUserCheck />}
//               label={"Business Name"}
//               placeholder="Enter business name"
//             />
//             <Input
//               value={email}
//               event={(e) => setEmail(e.target.value)}
//               type={"email"}
//               icon={<FiMail />}
//               label={"Email"}
//               placeholder="Enter email"
//             />
//             <Input
//               value={phone}
//               event={(e) => setPhone(e.target.value)}
//               type={"text"}
//               icon={<FiPhoneCall />}
//               label={"Phone"}
//               placeholder="Enter phone"
//             />
//             <p className="text-white text-sm">Description</p>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full rounded-md p-3 mb-3"
//               placeholder="Enter your description"
//               rows={4}
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
