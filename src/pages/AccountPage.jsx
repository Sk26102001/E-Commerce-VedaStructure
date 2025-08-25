
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoArrowBackOutline } from "react-icons/io5";

// Toast component
function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <div className={`${bgColor} text-white px-4 py-3 rounded shadow-lg fixed top-5 right-5 animate-slideIn`}>
      {message}
    </div>
  );
}

// Confirmation Modal
function ConfirmModal({ show, title, message, onConfirm, onCancel }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-96 p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{message}</p>
        <div className="flex justify-end gap-4">
          <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={onConfirm} className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

function AccountPage() {
  const [activeTab, setActiveTab] = useState("My Profile");
  const [toast, setToast] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState({ show: false, index: null });
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBack, setShowBack] = useState(false);

  // Dummy wishlist data
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Wireless Headphones", price: 2999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNs9qKJ1667dUHoBlD9ZSksd2NEXqApGyGxw&s" },
    { id: 2, name: "Smart Watch", price: 4999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVWwYcDGXnN3gm0kj-kcLbYN42q1b0lSLaQ&s" },
    { id: 3, name: "Gaming Mouse", price: 1999, image: "https://images.meesho.com/images/products/388602283/94ceg_512.webp?width=512" },
  ]);

  // Dummy orders data
  const [orders, setOrders] = useState([
    { id: 101, product: "Bluetooth Speaker", price: 1599, status: "Delivered", date: "2025-08-22", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/mobile-tablet-speaker/d/d/y/por-1327-portronics-original-imahe4kzcdhdeuvt.jpeg?q=70" },
    { id: 102, product: "Laptop Sleeve", price: 899, status: "Shipped", date: "2025-08-20", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/bag/e/d/g/27-laptop-sleeve-case-15-6-16-inch-bag-with-back-strap-40-original-imahbjcydsx4t6w9.jpeg?q=70" },
    { id: 103, product: "Wireless Keyboard", price: 2499, status: "Processing", date: "2025-08-18", image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/c/z/-original-imahafshasnhfjvd.jpeg?q=70" },
  ]);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [addresses, setAddresses] = useState([]);

  const [newAddress, setNewAddress] = useState({
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    altMobile: "",
    type: "Home",
  });

  const [profileImage, setProfileImage] = useState("https://www.w3schools.com/howto/img_avatar.png");
  const [addingAddress, setAddingAddress] = useState(false);

  const showToast = (message, type = "success") => setToast({ message, type });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (window.innerWidth < 768) setShowBack(true);
    setSidebarOpen(false);
  };

  const handleBack = () => {
    setShowBack(false);
    setActiveTab("My Profile");
  };

  const handleLogout = () => personalInfo.firstName && setShowLogoutModal(true);

  const confirmLogout = () => {
    setPersonalInfo({ firstName: "", lastName: "", email: "", phone: "", gender: "" });
    setAddresses([]);
    setNewAddress({ name: "", mobile: "", pincode: "", locality: "", address: "", city: "", state: "", landmark: "", altMobile: "", type: "Home" });
    setProfileImage("https://via.placeholder.com/60");
    setActiveTab("My Profile");
    setShowLogoutModal(false);
    showToast("You have been logged out!");
    setShowBack(false);
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

const handleAddAddress = () => {
  // Check if at least one required field is filled
  if (!newAddress.name && !newAddress.mobile && !newAddress.address) {
    showToast("Please fill in the address before saving!", "error");
    return;
  }

  setAddresses((prev) => [...prev, newAddress]);
  setNewAddress({
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    altMobile: "",
    type: "Home",
  });
  setAddingAddress(false);
  showToast("Address added successfully!");
};


  const handleCancelAddress = () => {
    setNewAddress({ name: "", mobile: "", pincode: "", locality: "", address: "", city: "", state: "", landmark: "", altMobile: "", type: "Home" });
    setAddingAddress(false);
  };

  const handleDeleteAddress = (idx) => setShowDeleteModal({ show: true, index: idx });

  const confirmDeleteAddress = () => {
    setAddresses(addresses.filter((_, i) => i !== showDeleteModal.index));
    setShowDeleteModal({ show: false, index: null });
    showToast("Address deleted successfully!");
  };

  const removeFromWishlist = (id) => setWishlist(wishlist.filter((item) => item.id !== id));

  const renderContent = () => {
    switch (activeTab) {
      case "My Profile":
        return (
          <div className="space-y-6">
            {showBack && window.innerWidth < 768 && (
              <button onClick={handleBack} className="flex items-center gap-2 text-blue-600 mb-4">
                <IoArrowBackOutline size={20} /> Back
              </button>
            )}
            <div className="p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center bg-white">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <label className="cursor-pointer">
                  <img src={profileImage} alt="Profile" className="w-14 h-14 rounded-full border-2 border-orange-500" />
                  <input type="file" accept="image/*" className="hidden" onChange={handleProfileChange} />
                </label>
                <div>
                  <h3 className="font-semibold text-lg">{personalInfo.firstName} {personalInfo.lastName}</h3>
                  <p className="text-gray-500">My Profile</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">Personal Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-4">
                {["firstName", "lastName", "email", "phone"].map((f) => (
                  <div key={f}>
                    <p className="text-sm text-gray-500 capitalize">{f}</p>
                    <input
                      type={f === "email" ? "email" : "text"}
                      name={f}
                      value={personalInfo[f]}
                      onChange={handlePersonalChange}
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                ))}
                <div>
                  <p className="text-sm text-gray-500">Gender</p>
                  <select name="gender" value={personalInfo.gender} onChange={handlePersonalChange} className="w-full border border-gray-300 rounded p-2">
                    <option value="">Select</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
        
                  </select>
                </div>
              </div>
              <button onClick={() => showToast("Personal Info Saved!")} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Save
              </button>
            </div>
          </div>
        );

      case "Address":
        return (
          <div className="space-y-4">
            {!addingAddress && (
              <button onClick={() => setAddingAddress(true)} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Add New Address
              </button>
            )}

            {addingAddress && (
              <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
                <h4 className="font-semibold text-lg">New Address</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["name","mobile","pincode","locality","address","city","state","landmark","altMobile"].map((field) => (
                    <div key={field}>
                      <p className="text-sm text-gray-500 capitalize">{field}</p>
                      <input
                        type="text"
                        name={field}
                        value={newAddress[field]}
                        onChange={handleNewAddressChange}
                        className="w-full border border-gray-300 rounded p-2"
                      />
                    </div>
                  ))}
                  <div>
                    <p className="text-sm text-gray-500">Address Type</p>
                    <select name="type" value={newAddress.type} onChange={handleNewAddressChange} className="w-full border border-gray-300 rounded p-2">
                      <option value="Home">Home</option>
                      <option value="Work">Work</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 mt-2">
                  <button onClick={handleAddAddress} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
                  <button onClick={handleCancelAddress} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Cancel</button>
                </div>
              </div>
            )}


            {addresses.map((addr, idx) => (
  <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-xl border border-gray-200 transition-all duration-300 space-y-2 relative">
    <div className="flex justify-between items-center">
      <p className="font-semibold text-lg">
        {addr.name && addr.name} <span className="text-sm text-gray-500">({addr.type})</span>
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setNewAddress(addr);
            setAddingAddress(true);
            setAddresses(addresses.filter((_, i) => i !== idx));
          }}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-all text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteAddress(idx)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all text-sm"
        >
          Delete
        </button>
      </div>
    </div>

    {/* Render only if values exist */}
    {addr.address && (
      <p className="text-gray-700">{addr.address}{addr.locality && `, ${addr.locality}`}</p>
    )}
    {(addr.city || addr.state || addr.pincode) && (
      <p className="text-gray-700">{addr.city}{addr.state && `, ${addr.state}`} {addr.pincode && `- ${addr.pincode}`}</p>
    )}
    {addr.landmark && <p className="text-gray-700">Landmark: {addr.landmark}</p>}
    {addr.altMobile && <p className="text-gray-700">Alt Mobile: {addr.altMobile}</p>}
  </div>
))}

          </div>
        );

      case "Wishlist":
        return (
          <div className="space-y-4">
            {wishlist.length > 0 ? wishlist.map((p) => (
              <div key={p.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <img src={p.image} alt={p.name} className="w-20 h-20 object-contain rounded" />
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-red-600 font-bold">₹{p.price.toLocaleString()}</p>
                  </div>
                </div>
                <button onClick={() => removeFromWishlist(p.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all">Remove</button>
              </div>
            )) : (
              <p className="bg-white p-4 rounded-lg shadow-md text-center text-gray-500">Your Wishlist is empty.</p>
            )}
          </div>
        );

     case "My Orders":
  return (
    <div className="space-y-4">
      {orders.length > 0 ? orders.map((o) => (
        <div 
          key={o.id} 
          className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <img 
              src={o.image} 
              alt={o.product} 
              className="w-20 h-20 object-contain rounded" 
            />
            <div>
              <h3 className="font-semibold">{o.product}</h3>
              <p className="text-gray-600">Ordered on: {o.date}</p>
              <p 
                className={`font-bold ${o.status === "Delivered" ? "text-green-600" : "text-yellow-600"}`}
              >
                Status: {o.status}
              </p>
              <p className="text-red-600 font-bold">
                ₹{o.price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )) : (
        <p className="bg-white p-4 rounded-lg shadow-md text-center text-gray-500">
          You have no orders yet.
        </p>
      )}
    </div>
  );

default:
  return null;

    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col md:flex-row relative">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <ConfirmModal show={showLogoutModal} title="Logout Confirmation" message="Are you sure you want to logout?" onConfirm={confirmLogout} onCancel={() => setShowLogoutModal(false)} />
      <ConfirmModal show={showDeleteModal.show} title="Delete Address" message="Are you sure you want to delete this address?" onConfirm={confirmDeleteAddress} onCancel={() => setShowDeleteModal({ show: false, index: null })} />

      {/* Sidebar */}
      <aside className={`bg-white shadow-md p-6 md:w-64 flex-shrink-0 transition-transform duration-300 fixed md:relative z-20 h-full md:h-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="flex items-center space-x-3 mb-8">
          <label className="cursor-pointer">
            <img src={profileImage} alt="Profile" className="w-12 h-12 rounded-full border-2 border-orange-600" />
            <input type="file" className="hidden" onChange={handleProfileChange} />
          </label>
          <div className="hidden md:block">
            <h3 className="font-semibold">{personalInfo.firstName} {personalInfo.lastName}</h3>
            <p className="text-sm text-gray-500">{personalInfo.gender}</p>
          </div>
        </div>
 
        <nav className="space-y-3">
  {["My Profile", "Address", "Wishlist", "My Orders"].map((tab) => (
    <button
      key={tab}
      onClick={() => handleTabClick(tab)}
      className={`w-full text-left px-4 py-2 rounded-md text-xl ${
        activeTab === tab
          ? "bg-blue-500 text-white"
          : "hover:bg-gray-200 "
      }`}
    >
      {tab}
    </button>
  ))}
  
<button
  onClick={handleLogout}
  disabled={!personalInfo.firstName}
  className={`flex justify-center text-xl py-2 w-full mt-8 rounded-md transition-colors duration-200 ${
    personalInfo.firstName
      ? "bg-yellow-400 hover:bg-yellow-500 text-white cursor-pointer"
      : "bg-gray-300 text-gray-600 cursor-not-allowed"
  }`}
>


    Logout
  </button>
</nav>

      </aside>

      {/* Mobile Menu */}
      <div className="md:hidden p-4 flex justify-between items-center bg-white shadow-md">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-blue-600">
          <RxHamburgerMenu size={24} />
        </button>
        <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full border-2 border-orange-600" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-start p-4 md:p-8">
        <div className="w-full max-w-5xl">{renderContent()}</div>
      </main>
    </div>
  );
}

export default AccountPage;