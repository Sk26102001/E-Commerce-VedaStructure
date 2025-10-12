// import React, { useState } from "react";
// import { Play } from "lucide-react"; // Play icon

// export default function CategoryGemsStones() {
//   const [poojaOption, setPoojaOption] = useState("No Energization");
//   const [selectedType, setSelectedType] = useState(null);
//   const [selectedMetal, setSelectedMetal] = useState("");
//   const [mainMedia, setMainMedia] = useState({
//     type: "image",
//     src: "https://imgcdn1.gempundit.com/media/catalog/product/g/e/gem-rcor-lux-japan-1-190701.jpg?imgeng=/w_600/f_webp/cmpr_20/s_7",
//   });

//   const sampleMedia = [
//     {
//       type: "image",
//       src: "https://imgcdn1.gempundit.com/media/catalog/product/g/e/gem-rcor-lux-japan-1-190701.jpg?imgeng=/w_175/f_webp/cmpr_20/s_7",
//     },
//     {
//       type: "image",
//       src: "https://imgcdn1.gempundit.com/media/catalog/product/g/e/gem-rcor-lux-japan-2-190701.jpg?imgeng=/w_175/f_webp/cmpr_20/s_7",
//     },
//     {
//       type: "image",
//       src: "https://imgcdn1.gempundit.com/media/catalog/product/g/e/gem-rcor-lux-japan-3-190701.jpg?imgeng=/w_175/f_webp/cmpr_20/s_7",
//     },
//     {
//       type: "video",
//       src: "https://cdn2.gempundit.com/skin/video/gem-rcor-lux-japan.mp4#t=2",
//     },
//   ];

//   const extraImages = [
//     {
//       src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/333/100x/loosegemstone1.png",
//       title: "Loose Gemstone",
//     },
//     {
//       src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring.png",
//       title: "Ring",
//     },
//     {
//       src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/2/100x/pendent.png",
//       title: "Pendant",
//     },
//     {
//       src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/3/100x/bracelet.png",
//       title: "Bracelet",
//     },
//   ];

//   const benefits = [
//     "Gives Courage",
//     "Cures Blood Disorders",
//     "Athletic Capabilities",
//     "Overcoming Obstacles",
//   ];

//   const weights = [
//     "-- Please Select --",
//     "7.25 ratti (6.53 carat) Rs.189,370",
//     "7.50 ratti (6.75 carat) Rs.195,750",
//     "7.75 ratti (6.98 carat) Rs.202,420",
//     "8.00 ratti (7.20 carat) Rs.208,800",
//     "8.25 ratti (7.43 carat) Rs.215,470",
//     "8.50 ratti (7.65 carat) Rs.221,850",
//     "8.75 ratti (7.88 carat) Rs.228,520",
//     "9.00 ratti (8.10 carat) Rs.234,900",
//   ];

//   const poojaOptions = [
//     "No Energization",
//     "Basic Energization (Free)",
//     "Vedic Pooja (Extra 1 Day) +Rs.1,100",
//     "Vedic Pooja (With Video) (Extra 1 Day) +Rs.2,100",
//     "Prana Pratishta Pooja (Extra 1 Day) +Rs.2,100",
//     "Prana Pratishta Pooja (With Video) (Extra 1 Day) +Rs.3,100",
//     "Prana Pratishta Pooja (Live Streaming) (Extra 3 Days) +Rs.3,500",
//   ];

//   return (
//     <div className="min-h-screen bg-white font-sans text-gray-800 p-6">
//       {/* Breadcrumb */}
//       <div className="mb-6 text-black text-lg font-semibold">
//         Home / Gemstones / Red Coral (Moonga) / Red Coral (Japanese) - Luxury
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Left: Image / Video gallery */}
//         <div>
//           {/* Main Display */}
//           <div className="w-full rounded-xl shadow-lg overflow-hidden">
//             {mainMedia.type === "image" ? (
//               <img
//                 src={mainMedia.src}
//                 alt="Main Gemstone"
//                 className="w-full rounded-xl object-cover"
//               />
//             ) : (
//               <video
//                 src={mainMedia.src}
//                 controls
//                 autoPlay
//                 loop
//                 className="w-full rounded-xl object-cover"
//               />
//             )}
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-3 mt-4">
//             {sampleMedia.map((item, i) => (
//               <div
//                 key={i}
//                 className={`relative w-20 h-16 rounded overflow-hidden border cursor-pointer group ${
//                   mainMedia.src === item.src
//                     ? "border-[#f3bd10] ring-2 ring-[#f3bd10]"
//                     : "border-gray-200"
//                 }`}
//                 onClick={() => setMainMedia(item)}
//               >
//                 {item.type === "image" ? (
//                   <img
//                     src={item.src}
//                     alt={`Sample ${i + 1}`}
//                     className="w-full h-full object-cover group-hover:opacity-80 transition"
//                   />
//                 ) : (
//                   <>
//                     <video
//                       src={item.src}
//                       muted
//                       className="w-full h-full object-cover group-hover:opacity-80 transition"
//                     />
//                     {/* ✅ Play icon overlay */}
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="bg-black/50 rounded-full p-2 group-hover:scale-110 transition-transform">
//                         <Play className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right: Product Details */}
//         <div>
//           <h1 className="text-2xl font-semibold mb-2">
//             Red Coral (Japanese) – Luxury
//           </h1>
//           <p className="text-xl font-bold text-gray-700 mb-4">
//             Rs.29,000 <span className="text-base font-normal">per carat</span>
//           </p>

//           {/* Weight */}
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Weight *</label>
//             <select className="border rounded p-2 w-full">
//               {weights.map((w, i) => (
//                 <option key={i}>{w}</option>
//               ))}
//             </select>
//           </div>

//           {/* Certification */}
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Certification *</label>
//             <select className="border rounded p-2 w-full">
//               <option>Free Lab Certificate</option>
//               <option>Premium Certificate (+Rs.500)</option>
//             </select>
//           </div>

//           {/* Pooja / Energization */}
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">
//               Pooja / Energization *
//             </label>
//             <select
//               className="border rounded p-2 w-full"
//               value={poojaOption}
//               onChange={(e) => setPoojaOption(e.target.value)}
//             >
//               {poojaOptions.map((option, i) => (
//                 <option key={i}>{option}</option>
//               ))}
//             </select>
//           </div>

//           {/* Select Type */}
//           <h2 className="mt-8 mb-2 text-lg font-bold text-black">
//             Select for Ring / Pendant / Bracelet
//           </h2>
//           <div className="h-1 w-40 bg-[#f3bd10] mb-4 rounded"></div>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
//             {extraImages.map((item, i) => (
//               <div
//                 key={i}
//                 className={`text-center cursor-pointer border rounded-lg p-2 ${
//                   selectedType === item.title
//                     ? "border-[#f3bd10] bg-yellow-50"
//                     : "border-gray-200"
//                 }`}
//                 onClick={() =>
//                   setSelectedType(
//                     item.title === "Loose Gemstone" ? null : item.title
//                   )
//                 }
//               >
//                 <img
//                   src={item.src}
//                   alt={item.title}
//                   className="w-24 h-20 mx-auto rounded object-cover"
//                 />
//                 <p className="mt-1 text-sm font-medium text-gray-800">
//                   {item.title}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Selected Type + Metal */}
//           {selectedType && (
//             <div className="mb-6 p-4 border rounded bg-gray-50">
//               <p className="mb-2 text-gray-800 font-medium">
//                 ✅ You Have Selected <b>{selectedType}</b>.{" "}
//                 <button
//                   onClick={() => setSelectedType(null)}
//                   className="ml-2 px-3 py-1 rounded font-medium text-white bg-[#f3bd10] hover:bg-[#e0a900]"
//                 >
//                   Click here to change your preference
//                 </button>
//               </p>
//               <p className="text-sm text-gray-600 mb-3">
//                 You can opt to have your gemstone in a Ring, Bracelet or a
//                 Necklace.
//               </p>

//               <label className="block mb-1 font-medium">Choose Metal *</label>
//               <select
//                 className="border rounded p-2 w-full"
//                 value={selectedMetal}
//                 onChange={(e) => setSelectedMetal(e.target.value)}
//               >
//                 <option value="">-- Please Select --</option>

//                 {(selectedType === "Ring" || selectedType === "Pendant") && (
//                   <>
//                     <option>Silver</option>
//                     <option>Panchdhatu (Brass)</option>
//                     <option>22K Yellow Gold</option>
//                     <option>18K White Gold</option>
//                     <option>18K Yellow Gold</option>
//                     <option>14K White Gold</option>
//                     <option>14K Yellow Gold</option>
//                     <option>Platinum</option>
//                   </>
//                 )}

//                 {selectedType === "Bracelet" && (
//                   <>
//                     <option>Silver</option>
//                     <option>Gold</option>
//                     <option>Leather</option>
//                   </>
//                 )}
//               </select>
//             </div>
//           )}

//           {/* Add to Cart */}
//           <button className="text-white py-3 px-6 rounded-lg font-semibold bg-[#f3bd10] hover:bg-[#e0a900]">
//             ADD TO CART
//           </button>

//           <p className="mt-3 text-sm text-gray-600">
//             Expected Dispatch Date : <b>16 OCT, 2025</b>
//           </p>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <div className="mt-12 border-t pt-6">
//         <h2 className="text-xl font-semibold mb-2">
//           PRODUCT DETAIL : Red Coral (Japanese) - Luxury
//         </h2>
//         <p className="text-gray-700 mb-4">
//           Allow our team of expert gemologists to select a Natural Luxury Red
//           Coral gemstone of Luxury Quality from our offline inventory of
//           gemstones. The selected gemstone shall be of relatively the same
//           quality as those shown in the sample photographs.
//         </p>

//         <h3 className="text-lg font-semibold mb-4">Benefits:</h3>
//         <div className="flex flex-wrap gap-6 mb-6">
//           {benefits.map((benefit, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full shadow-sm"
//             >
//               <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full font-bold text-sm">
//                 ✓
//               </span>
//               <span className="text-gray-800 font-medium">{benefit}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { Play } from "lucide-react";
import { SideBySideMagnifier } from "react-image-magnifiers";

// Magnifier library

export default function CategoryGemsStones() {
  const [poojaOption, setPoojaOption] = useState("No Energization");
  const [selectedType, setSelectedType] = useState(null);
  const [selectedMetal, setSelectedMetal] = useState("");
  const [mainMedia, setMainMedia] = useState({
    type: "image",
    src: "https://imgcdn1.gempundit.com/media/catalog/product/g/e/gem-rcor-lux-japan-1-190701.jpg?imgeng=/w_600/f_webp/cmpr_20/s_7",
  });

  const sampleMedia = [
    {
      type: "image",
      src: "https://imgcdn1.gempundit.com/media/catalog/product/g/e/gem-rcor-lux-japan-1-190701.jpg?imgeng=/w_175/f_webp/cmpr_20/s_7",
    },
    {
      type: "image",
      src: "https://imgcdn1.gempundit.com/media/catalog/product/g/e/gem-rcor-lux-japan-2-190701.jpg?imgeng=/w_175/f_webp/cmpr_20/s_7",
    },
    {
      type: "image",
      src: "https://imgcdn1.gempundit.com/media/catalog/product/g/e/gem-rcor-lux-japan-3-190701.jpg?imgeng=/w_175/f_webp/cmpr_20/s_7",
    },
    {
      type: "video",
      src: "https://cdn2.gempundit.com/skin/video/gem-rcor-lux-japan.mp4#t=2",
    },
  ];

  const extraImages = [
    {
      src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/333/100x/loosegemstone1.png",
      title: "Loose Gemstone",
    },
    {
      src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/1/100x/ring.png",
      title: "Ring",
    },
    {
      src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/2/100x/pendent.png",
      title: "Pendant",
    },
    {
      src: "https://imgcdn1.gempundit.com/media/customoptions/2352/208150/3/100x/bracelet.png",
      title: "Bracelet",
    },
  ];

  const benefits = [
    "Gives Courage",
    "Cures Blood Disorders",
    "Athletic Capabilities",
    "Overcoming Obstacles",
  ];

  const weights = [
    "-- Please Select --",
    "7.25 ratti (6.53 carat) Rs.189,370",
    "7.50 ratti (6.75 carat) Rs.195,750",
    "7.75 ratti (6.98 carat) Rs.202,420",
    "8.00 ratti (7.20 carat) Rs.208,800",
    "8.25 ratti (7.43 carat) Rs.215,470",
    "8.50 ratti (7.65 carat) Rs.221,850",
    "8.75 ratti (7.88 carat) Rs.228,520",
    "9.00 ratti (8.10 carat) Rs.234,900",
  ];

  const poojaOptions = [
    "No Energization",
    "Basic Energization (Free)",
    "Vedic Pooja (Extra 1 Day) +Rs.1,100",
    "Vedic Pooja (With Video) (Extra 1 Day) +Rs.2,100",
    "Prana Pratishta Pooja (Extra 1 Day) +Rs.2,100",
    "Prana Pratishta Pooja (With Video) (Extra 1 Day) +Rs.3,100",
    "Prana Pratishta Pooja (Live Streaming) (Extra 3 Days) +Rs.3,500",
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 p-6">
      {/* Breadcrumb */}
      <div className="mb-6 text-black text-lg font-semibold">
        Home / Gemstones / Red Coral (Moonga) / Red Coral (Japanese) - Luxury
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Image / Video gallery */}
        <div>
          {/* Main Display */}
          <div className="w-full rounded-xl shadow-lg overflow-hidden">
            {mainMedia.type === "image" ? (
              <SideBySideMagnifier
                imageSrc={mainMedia.src}
                largeImageSrc={mainMedia.src} // can be higher resolution if available
                switchSides={true}
                zoomPosition="right"
                overlayOpacity={0.5}
                className="rounded-xl w-full h-96 object-cover"
              />
            ) : (
              <video
                src={mainMedia.src}
                controls
                autoPlay
                loop
                className="w-full rounded-xl object-cover"
              />
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {sampleMedia.map((item, i) => (
              <div
                key={i}
                className={`relative w-20 h-16 rounded overflow-hidden border cursor-pointer group ${
                  mainMedia.src === item.src
                    ? "border-[#f3bd10] ring-2 ring-[#f3bd10]"
                    : "border-gray-200"
                }`}
                onClick={() => setMainMedia(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Sample ${i + 1}`}
                    className="w-full h-full object-cover group-hover:opacity-80 transition"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      muted
                      className="w-full h-full object-cover group-hover:opacity-80 transition"
                    />
                    {/* Play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-2 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">
            Red Coral (Japanese) – Luxury
          </h1>
          <p className="text-xl font-bold text-gray-700 mb-4">
            Rs.29,000 <span className="text-base font-normal">per carat</span>
          </p>

          {/* Weight */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Weight *</label>
            <select className="border rounded p-2 w-full">
              {weights.map((w, i) => (
                <option key={i}>{w}</option>
              ))}
            </select>
          </div>

          {/* Certification */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Certification *</label>
            <select className="border rounded p-2 w-full">
              <option>Free Lab Certificate</option>
              <option>Premium Certificate (+Rs.500)</option>
            </select>
          </div>

          {/* Pooja / Energization */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">
              Pooja / Energization *
            </label>
            <select
              className="border rounded p-2 w-full"
              value={poojaOption}
              onChange={(e) => setPoojaOption(e.target.value)}
            >
              {poojaOptions.map((option, i) => (
                <option key={i}>{option}</option>
              ))}
            </select>
          </div>

          {/* Select Type */}
          <h2 className="mt-8 mb-2 text-lg font-bold text-black">
            Select for Ring / Pendant / Bracelet
          </h2>
          <div className="h-1 w-40 bg-[#f3bd10] mb-4 rounded"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {extraImages.map((item, i) => (
              <div
                key={i}
                className={`text-center cursor-pointer border rounded-lg p-2 ${
                  selectedType === item.title
                    ? "border-[#f3bd10] bg-yellow-50"
                    : "border-gray-200"
                }`}
                onClick={() =>
                  setSelectedType(
                    item.title === "Loose Gemstone" ? null : item.title
                  )
                }
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-24 h-20 mx-auto rounded object-cover"
                />
                <p className="mt-1 text-sm font-medium text-gray-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Selected Type + Metal */}
          {selectedType && (
            <div className="mb-6 p-4 border rounded bg-gray-50">
              <p className="mb-2 text-gray-800 font-medium">
                ✅ You Have Selected <b>{selectedType}</b>.{" "}
                <button
                  onClick={() => setSelectedType(null)}
                  className="ml-2 px-3 py-1 rounded font-medium text-white bg-[#f3bd10] hover:bg-[#e0a900]"
                >
                  Click here to change your preference
                </button>
              </p>
              <p className="text-sm text-gray-600 mb-3">
                You can opt to have your gemstone in a Ring, Bracelet or a
                Necklace.
              </p>

              <label className="block mb-1 font-medium">Choose Metal *</label>
              <select
                className="border rounded p-2 w-full"
                value={selectedMetal}
                onChange={(e) => setSelectedMetal(e.target.value)}
              >
                <option value="">-- Please Select --</option>

                {(selectedType === "Ring" || selectedType === "Pendant") && (
                  <>
                    <option>Silver</option>
                    <option>Panchdhatu (Brass)</option>
                    <option>22K Yellow Gold</option>
                    <option>18K White Gold</option>
                    <option>18K Yellow Gold</option>
                    <option>14K White Gold</option>
                    <option>14K Yellow Gold</option>
                    <option>Platinum</option>
                  </>
                )}

                {selectedType === "Bracelet" && (
                  <>
                    <option>Silver</option>
                    <option>Gold</option>
                    <option>Leather</option>
                  </>
                )}
              </select>
            </div>
          )}

          {/* Add to Cart */}
          <button className="text-white py-3 px-6 rounded-lg font-semibold bg-[#f3bd10] hover:bg-[#e0a900]">
            ADD TO CART
          </button>

          <p className="mt-3 text-sm text-gray-600">
            Expected Dispatch Date : <b>16 OCT, 2025</b>
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-12 border-t pt-6">
        <h2 className="text-xl font-semibold mb-2">
          PRODUCT DETAIL : Red Coral (Japanese) - Luxury
        </h2>
        <p className="text-gray-700 mb-4">
          Allow our team of expert gemologists to select a Natural Luxury Red
          Coral gemstone of Luxury Quality from our offline inventory of
          gemstones. The selected gemstone shall be of relatively the same
          quality as those shown in the sample photographs.
        </p>

        <h3 className="text-lg font-semibold mb-4">Benefits:</h3>
        <div className="flex flex-wrap gap-6 mb-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full shadow-sm"
            >
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full font-bold text-sm">
                ✓
              </span>
              <span className="text-gray-800 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



