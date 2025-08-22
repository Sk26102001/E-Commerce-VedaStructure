// import React, { useState } from "react";

// export default function ProfilePage() {
//   const [form, setForm] = useState({
//     firstName: "Sushant",
//     lastName: "Kumar",
//     email: "sushant@example.com",
//     gender: "Male",
//     mobile: "+91 9876543210",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-72 bg-white shadow-md p-6">
//         {/* User Info */}
//         <div className="flex items-center gap-4 mb-6">
//           <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xl font-bold">
//             {form.firstName[0]}
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Hello,</p>
//             <h3 className="text-lg font-semibold">{form.firstName} {form.lastName}</h3>
//           </div>
//         </div>

//         {/* Sidebar Menu */}
//         <ul className="space-y-4 text-gray-700">
//           <li className="font-semibold">My Orders</li>
//           <li className="font-semibold">Account Settings</li>
//           <ul className="ml-4 space-y-2 text-sm">
//             <li className="text-blue-600">Profile Information</li>
//             <li>Manage Addresses</li>
//             <li>PAN Card Information</li>
//           </ul>
//           <li className="font-semibold">Payments</li>
//           <ul className="ml-4 space-y-2 text-sm">
//             <li>Gift Cards</li>
//             <li>Saved UPI</li>
//             <li>Saved Cards</li>
//           </ul>
//           <li className="font-semibold">My Stuff</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-white m-6 p-8 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-6 border-b pb-2">Personal Information</h2>

//         {/* Form */}
//         <form className="space-y-6">
//           {/* First + Last Name */}
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 className="w-full mt-2 border rounded-lg p-3"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 className="w-full mt-2 border rounded-lg p-3"
//               />
//             </div>
//           </div>

//           {/* Gender */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Your Gender</label>
//             <div className="flex gap-6">
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={form.gender === "Male"}
//                   onChange={handleChange}
//                 />{" "}
//                 Male
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={form.gender === "Female"}
//                   onChange={handleChange}
//                 />{" "}
//                 Female
//               </label>
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full mt-2 border rounded-lg p-3"
//             />
//           </div>

//           {/* Mobile */}
//           <div>
//             <label className="block text-sm font-medium">Mobile Number</label>
//             <input
//               type="text"
//               name="mobile"
//               value={form.mobile}
//               onChange={handleChange}
//               className="w-full mt-2 border rounded-lg p-3"
//             />
//           </div>

//           {/* Save Button */}
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//           >
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from "react";

// export default function UserProfilePage() {
//   // State to track active section
//   const [activeSection, setActiveSection] = useState("profile");

//   // Sidebar items
//   const menuItems = [
//     { id: "profile", label: "My Profile" },
//     { id: "orders", label: "My Orders" },
//     { id: "settings", label: "Settings" },
//     { id: "help", label: "Help & Support" },
//     { id: "logout", label: "Logout" },
//   ];

//   // Render section content
//   const renderSection = () => {
//     switch (activeSection) {
//       case "profile":
//         return (
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
//             <p>Name: Sushant Kumar</p>
//             <p>Email: sushant@example.com</p>
//             <p>Phone: +91-9876543210</p>
//           </div>
//         );
//       case "orders":
//         return (
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
//             <ul className="space-y-2">
//               <li className="p-3 border rounded-md">Order #101 - Delivered</li>
//               <li className="p-3 border rounded-md">Order #102 - In Transit</li>
//               <li className="p-3 border rounded-md">Order #103 - Cancelled</li>
//             </ul>
//           </div>
//         );
//       case "settings":
//         return (
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Settings</h2>
//             <p>Change password, update address, and more...</p>
//           </div>
//         );
//       case "help":
//         return (
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Help & Support</h2>
//             <p>Contact support at support@example.com</p>
//           </div>
//         );
//       case "logout":
//         return (
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">You have logged out!</h2>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-md p-6">
//         <h1 className="text-xl font-bold mb-6">User Dashboard</h1>
//         <ul className="space-y-3">
//           {menuItems.map((item) => (
//             <li key={item.id}>
//               <button
//                 className={`w-full text-left px-4 py-2 rounded-md ${
//                   activeSection === item.id
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 hover:bg-gray-300"
//                 }`}
//                 onClick={() => setActiveSection(item.id)}
//               >
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-8">{renderSection()}</div>
//     </div>
//   );
// }



// import React, { useState } from "react";

// export default function UserProfilePage() {
//   const [activeSection, setActiveSection] = useState("profile");
//   const [form, setForm] = useState({
//     firstName: "Sushant",
//     lastName: "Kumar",
//     gender: "Male",
//     email: "binak792@gmail.com",
//     mobile: "+916207945708",
//   });

//   const [editField, setEditField] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     setEditField("");
//     alert("Details updated successfully!");
//   };

//   // Sidebar menu items
//   const menuItems = [
//     { id: "orders", label: "My Orders" },
//     { id: "profile", label: "Profile Information" },
//     { id: "addresses", label: "Manage Addresses" },
//     { id: "pan", label: "PAN Card Information" },
//     { id: "payments", label: "Payments" },
//   ];

//   const renderSection = () => {
//     switch (activeSection) {
//       case "profile":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-xl font-bold mb-4">
//               Personal Information{" "}
//               {editField ? (
//                 <button
//                   onClick={handleSave}
//                   className="text-blue-600 ml-2 text-sm"
//                 >
//                   Save
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => setEditField("all")}
//                   className="text-blue-600 ml-2 text-sm"
//                 >
//                   Edit
//                 </button>
//               )}
//             </h2>

//             {/* First & Last Name */}
//             <div className="flex gap-4 mb-4">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 disabled={editField !== "all"}
//                 className={`border p-2 rounded w-1/2 ${
//                   editField !== "all" && "bg-gray-100"
//                 }`}
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 disabled={editField !== "all"}
//                 className={`border p-2 rounded w-1/2 ${
//                   editField !== "all" && "bg-gray-100"
//                 }`}
//               />
//             </div>

//             {/* Gender */}
//             <div className="mb-4">
//               <label className="block mb-2">Your Gender</label>
//               <div className="flex gap-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Male"
//                     checked={form.gender === "Male"}
//                     onChange={handleChange}
//                     disabled={editField !== "all"}
//                   />{" "}
//                   Male
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="gender"
//                     value="Female"
//                     checked={form.gender === "Female"}
//                     onChange={handleChange}
//                     disabled={editField !== "all"}
//                   />{" "}
//                   Female
//                 </label>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="mb-4">
//               <h3 className="font-semibold">
//                 Email Address{" "}
//                 {editField !== "email" ? (
//                   <button
//                     onClick={() => setEditField("email")}
//                     className="text-blue-600 ml-2 text-sm"
//                   >
//                     Edit
//                   </button>
//                 ) : (
//                   <button
//                     onClick={handleSave}
//                     className="text-blue-600 ml-2 text-sm"
//                   >
//                     Save
//                   </button>
//                 )}
//               </h3>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 disabled={editField !== "email"}
//                 className={`border p-2 rounded w-full mt-2 ${
//                   editField !== "email" && "bg-gray-100"
//                 }`}
//               />
//             </div>

//             {/* Mobile */}
//             <div>
//               <h3 className="font-semibold">
//                 Mobile Number{" "}
//                 {editField !== "mobile" ? (
//                   <button
//                     onClick={() => setEditField("mobile")}
//                     className="text-white ml-2 text-base bg-blue-500 rounded py-1 px-2 "
//                   >
//                     Edit
//                   </button>
//                 ) : (
//                   <button
//                     onClick={handleSave}"text-blue-600 ml-2 text-sm"
//                   >
//                     Save
//                   </button>
//                 )}
//               </h3>
//               <input
//                 type="text"
//                 name="mobile"
//                 value={form.mobile}
//                 onChange={handleChange}
//                 disabled={editField !== "mobile"}
//                 className={`border p-2 rounded w-full mt-2 ${
//                   editField !== "mobile" && "bg-gray-100"
//                 }`}
//               />
//             </div>
//           </div>
//         );

//       case "orders":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-xl font-bold mb-4">My Orders</h2>
//             <ul className="space-y-3">
//               <li className="p-3 border rounded">Order #101 - Delivered</li>
//               <li className="p-3 border rounded">Order #102 - In Transit</li>
//               <li className="p-3 border rounded">Order #103 - Cancelled</li>
//             </ul>
//           </div>
//         );

//       case "addresses":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-xl font-bold mb-4">Manage Addresses</h2>
//             <p>No addresses saved yet.</p>
//           </div>
//         );

//       case "pan":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-xl font-bold mb-4">PAN Card Information</h2>
//             <p>PAN details not provided.</p>
//           </div>
//         );

//       case "payments":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-xl font-bold mb-4">Payments</h2>
//             <p>Saved UPI, Cards, and Gift Cards will appear here.</p>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-72 bg-white shadow-md p-6">
//         <div className="flex items-center mb-6">
//           <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">
//             SK
//           </div>
//           <div className="ml-3">
//             <p className="font-semibold">Hello,</p>
//             <p>{form.firstName} {form.lastName}</p>
//           </div>
//         </div>

//         <h3 className="text-gray-500 text-sm font-bold mb-2">ACCOUNT SETTINGS</h3>
//         <ul className="space-y-2">
//           {menuItems.map((item) => (
//             <li key={item.id}>
//               <button
//                 onClick={() => setActiveSection(item.id)}
//                 className={`w-full text-left px-4 py-2 rounded-md ${
//                   activeSection === item.id
//                     ? "bg-blue-500 text-white"
//                     : "hover:bg-gray-200"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-8">{renderSection()}</div>
//     </div>
//   );
// }
