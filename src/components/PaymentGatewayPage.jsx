// import { useState } from "react";
// import { AiOutlineDownload } from "react-icons/ai";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { FiCalendar } from "react-icons/fi";
// import { BiCodeAlt } from "react-icons/bi";
// import { SiPhp } from "react-icons/si";

// const PaymentGatewayPage = () => {
//   // ------------------ Image Gallery ------------------
//   const images = [
//     "/images/main.jpg",
//     "/images/image2.jpg",
//     "/images/image3.jpg",
//     "/images/image4.jpg",
//     "/images/image5.jpg",
//     "/images/image6.jpg",
//   ];

//   const [mainImage, setMainImage] = useState(images[0]);
//   const [isFullScreen, setIsFullScreen] = useState(false);

//   // ------------------ Pricing Data ------------------
//   const pricingTabs = {
//     annual: {
//       oldPrice: "$179.95",
//       price: "$134.96",
//       cycle: "Annually",
//       includes: [
//         "Instant 7-Day Free Access",
//         "Access To Multi-Level Tech Support",
//         "Free Module Updates",
//         "Priority Feature Consideration",
//         "One-Click Upgrade To Open Source Version",
//         "Access To Premium Offers",
//         "Free Dev License On Request",
//       ],
//     },

//     monthly: {
//       oldPrice: "$24.95",
//       price: "$19.95",
//       cycle: "Monthly",
//       includes: [
//         "Free Updates Included",
//         "Basic Customer Support",
//         "7-Day Free Access",
//         "Monthly Bug Fixes",
//         "Standard Security Patches",
//         "Email Support",
//         "Access To Knowledgebase",
//       ],
//     },

//     opensource: {
//       oldPrice: "$499.00",
//       price: "$349.00",
//       cycle: "Lifetime Access",
//       includes: [
//         "Full Source Code Included",
//         "Lifetime Free Updates",
//         "Priority Technical Support",
//         "Unlimited Domain Usage",
//         "Advanced Customization Access",
//         "Security Upgrade Protection",
//         "Premium Developer Tools",
//       ],
//     },

//     additionalservices: {
//       oldPrice: "$499.00",
//       price: "$349.00",
//       cycle: "One-Time Service",
//       includes: [
//         "Installation Service",
//         "Full Module Setup",
//         "Environment Optimization",
//         "Free Bug Fixing for 30 Days",
//         "Migration Support",
//         "Performance Tuning",
//         "Free Consultation Call",
//       ],
//     },
//   };

//   const [activePrice, setActivePrice] = useState("annual");

//   // ------------------ Bottom Tabs ------------------
//   const [activeBottom, setActiveBottom] = useState("features");

//   return (
//     <div className="w-full bg-[#0B1643] text-white font-sans">

//       {/* ----------- TOP SECTION ----------- */}
//       <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-7  md:gap-14 overflow-hidden">


//         {/* LEFT: Image Section */}
//         <div className="col-span-3 mb-10 md:mb-1">

//           {/* Main Image */}
//           <img
//             src={mainImage}
//             className="w-full h-auto rounded-lg cursor-pointer object-contain"
//             alt="Main"
//             onClick={() => setIsFullScreen(true)}
//           />

//           {/* Thumbnails */}
//           <div className="flex gap-3 md:gap-1 mt-4 flex-wrap">

//             {images.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt="thumb"
//                 onClick={() => setMainImage(img)}
//                 className={`w-16 h-20 sm:w-20 sm:h-26 rounded-md cursor-pointer border ${
//                   mainImage === img ? "border-green-500" : "border-white/20"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Info Section */}
//         <div className="col-span-4">
//           <p className="text-sm opacity-75">
//             WHMCS / Extension Modules / Payments & Billing
//           </p>

//           <h1 className="text-3xl font-bold mt-1">
//             Payment Gateway Charges For WHMCS
//           </h1>

//           {/* Icons */}
//           <div className="flex items-center gap-4 mt-1 text-sm opacity-90 flex-wrap">
//             <span className="flex items-center gap-1">⭐⭐⭐⭐⭐</span>
//             <span className="flex items-center gap-1"><AiOutlineDownload /> 6352 times</span>
//             <span className="flex items-center gap-1"><IoMdNotificationsOutline /> v3.0.0</span>
//             <span className="flex items-center gap-1"><FiCalendar /> Dec 3rd, 2025</span>
//             <span className="flex items-center gap-1"><BiCodeAlt /> WHMCS v8.1</span>
//             <span className="flex items-center gap-1"><SiPhp /> PHP 8.3</span>
//           </div>

//           {/* Pricing Tabs */}
//           <div className="flex gap-3 mt-6 flex-wrap">

//             {["monthly", "annual", "opensource", "additionalservices"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActivePrice(tab)}
//                 className={`pr-8 py-2 rounded-md text-sm whitespace-normal break-words text-left ${
//     activePrice === tab ? "text-orange-500 font-bold" : ""
//                 }`}
//               >
//                 {tab === "opensource"
//                   ? "Open Source Version"
//                   : tab === "additionalservices"
//                   ? "Additional Services"
//                   : tab.charAt(0).toUpperCase() + tab.slice(1) + " License"}
//               </button>
//             ))}
//           </div>

//           {/* Pricing Card */}
//           <div className="relative mt-4">

//             {/* Arrow */}
//             <div className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none">
//               <span className="text-white text-4xl font-bold">^</span>
//             </div>

//             <div className="bg-white text-black p-6 rounded shadow-lg relative">

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                 {/* Price */}
//                 <div>
//                   <p className="text-gray-600 text-sm font-semibold">PRICE</p>

//                   <p className="line-through text-gray-500 text-lg">
//                     {pricingTabs[activePrice].oldPrice}
//                   </p>

//                   <h2 className="text-4xl sm:text-4xl text-orange-600 mt-1">

//                     {pricingTabs[activePrice].price}
//                   </h2>

//                   <p className="mt-1 text-gray-600">
//                     {pricingTabs[activePrice].cycle}
//                   </p>

//                   <button className="w-full bg-green-600 text-white py-3 rounded mt-4">
//                     Order Now
//                   </button>

//                   <button className="w-full bg-white text-black py-3 rounded mt-4 border border-gray-400 text-gray-600">
//                     Add To Cart
//                   </button>
//                 </div>

//                 {/* Includes */}
//                 <div>
//                   <h3 className="font-semibold mb-2 text-green-400">INCLUDES</h3>

//                   <ul className="text-sm space-y-3">
//                     {pricingTabs[activePrice].includes.map((item, idx) => (
//                       <li key={idx} className="flex gap-3">
//                         <span className="text-green-400">✓</span> <span className="text-gray-500">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ----------- Bottom Tabs ----------- */}
//       <div className="bg-white text-black py-10 px-4 mt-10">
//         <div className="max-w-6xl mx-auto">

//           {/* Tabs */}
//           <div className="flex gap-8 border-b pb-2">
//             {["features", "changelog", "reviews"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveBottom(tab)}
//                 className={`pb-2 text-lg ${
//                   activeBottom === tab
//                     ? "border-b-2 border-blue-600 font-semibold"
//                     : "text-gray-500"
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* Detail Card */}
//           <div className="mt-6 bg-gray-100 p-6 rounded-xl shadow-md">

//             {activeBottom === "features" && (
//               <div>
//                 <h2 className="text-2xl font-semibold mb-3">Module Features</h2>
//                 <ul className="list-disc ml-5 space-y-2 text-gray-700">
//                   <li>Set percentage-based charges</li>
//                   <li>Set fixed-amount charges</li>
//                   <li>Exclude specific clients</li>
//                   <li>Gateway-level configuration with advanced filters</li>
//                   <li>Admin-only visibility control</li>
//                   <li>Multi-currency support</li>
//                   <li>Optimized for WHMCS latest version</li>
//                 </ul>
//               </div>
//             )}

//             {activeBottom === "changelog" && (
//               <div>
//                 <h2 className="text-2xl font-semibold mb-3">Changelog History</h2>

//                 <div className="space-y-4 text-gray-700">
//                   <div>
//                     <h3 className="font-bold text-lg">v3.0.0 — December 2025</h3>
//                     <ul className="list-disc ml-5">
//                       <li>New user interface redesign</li>
//                       <li>Added multi-currency fee rules</li>
//                       <li>Added client exclusion system</li>
//                       <li>Improved fee calculation engine</li>
//                     </ul>
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-lg">v2.5.1 — August 2025</h3>
//                     <ul className="list-disc ml-5">
//                       <li>Security improvements</li>
//                       <li>Minor bug fixes</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeBottom === "reviews" && (
//               <div>
//                 <h2 className="text-xl font-semibold mb-3">User Reviews</h2>
//                 <p className="text-gray-700">
//                   ⭐⭐⭐⭐⭐ Excellent module! Works perfectly and support is great.
//                 </p>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>

//       {/* ----------------- FULL SCREEN IMAGE ----------------- */}
//       {isFullScreen && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">

//           {/* Close Button */}
//           <button
//             onClick={() => setIsFullScreen(false)}
//             className="absolute top-5 right-5 text-white text-4xl font-bold z-50"
//           >
//             &times;
//           </button>

//           {/* Full Image */}
//           <img
//             src={mainImage}
//             alt="Full Screen"
//             className="max-w-full max-h-full object-contain rounded"
//           />
//         </div>
//       )}

//     </div>
//   );
// };

// export default PaymentGatewayPage;

import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { SiPhp } from "react-icons/si";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs , FreeMode, Mousewheel , Autoplay} from "swiper/modules";

const PaymentGatewayPage = () => {
  const images = [
    "/images/main.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activePrice, setActivePrice] = useState("annual");
  const [activeBottom, setActiveBottom] = useState("features");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const pricingTabs = {
    annual: {
      oldPrice: "$179.95",
      price: "$134.96",
      cycle: "Annually",
      includes: [
        "Instant 7-Day Free Access",
        "Access To Multi-Level Tech Support",
        "Free Module Updates",
        "Priority Feature Consideration",
        "One-Click Upgrade To Open Source Version",
        "Access To Premium Offers",
        "Free Dev License On Request",
      ],
    },
    monthly: {
      oldPrice: "$24.95",
      price: "$19.95",
      cycle: "Monthly",
      includes: [
        "Free Updates Included",
        "Basic Customer Support",
        "7-Day Free Access",
        "Monthly Bug Fixes",
        "Standard Security Patches",
        "Email Support",
        "Access To Knowledgebase",
      ],
    },
    opensource: {
      oldPrice: "$499.00",
      price: "$349.00",
      cycle: "Lifetime Access",
      includes: [
        "Full Source Code Included",
        "Lifetime Free Updates",
        "Priority Technical Support",
        "Unlimited Domain Usage",
        "Advanced Customization Access",
        "Security Upgrade Protection",
        "Premium Developer Tools",
      ],
    },
    additionalservices: {
      oldPrice: "$499.00",
      price: "$349.00",
      cycle: "One-Time Service",
      includes: [
        "Installation Service",
        "Full Module Setup",
        "Environment Optimization",
        "Free Bug Fixing for 30 Days",
        "Migration Support",
        "Performance Tuning",
        "Free Consultation Call",
      ],
    },
  };

  return (
    <div className="w-full bg-[#0B1643] text-white font-sans">
      {/* ----------- TOP SECTION ----------- */}
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-7 md:gap-14 overflow-hidden">

        {/* LEFT: Image Section (Swiper) */}
        <div className="col-span-3 mb-10 md:mb-1">
  {/* -------- MAIN IMAGE WITH THUMBNAILS (HOME PAGE) -------- */}
<div className="cursor-pointer" onClick={() => setIsFullScreen(true)}>
  {/* Main Swiper (single image or autoplay slider) */}
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 2000 }}
    loop={true}
    className="rounded-lg"
  >
    {images.map((img, idx) => (
      <SwiperSlide key={idx}>
        <img
          src={img}
          className="w-full h-auto object-contain rounded-lg"
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Thumbnails Under Main Image (scrollable horizontally) */}
  <Swiper
    slidesPerView={5}
    spaceBetween={10}
    freeMode={true}
    mousewheel={{ forceToAxis: true, sensitivity: 1 }}
    modules={[FreeMode, Mousewheel]}
    className="h-20 mt-3"
  >
    {images.map((img, i) => (
      <SwiperSlide key={i}>
        <img
          src={img}
          className="w-full h-full object-cover rounded"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>


        </div>

        {/* RIGHT: Info Section */}
        <div className="col-span-4">
          <p className="text-sm opacity-75">
            WHMCS / Extension Modules / Payments & Billing
          </p>

          <h1 className="text-3xl font-bold mt-1">
            Payment Gateway Charges For WHMCS
          </h1>

          {/* Icons */}
          <div className="flex items-center gap-4 mt-1 text-sm opacity-90 flex-wrap">
            <span className="flex items-center gap-1">⭐⭐⭐⭐⭐</span>
            <span className="flex items-center gap-1"><AiOutlineDownload /> 6352 times</span>
            <span className="flex items-center gap-1"><IoMdNotificationsOutline /> v3.0.0</span>
            <span className="flex items-center gap-1"><FiCalendar /> Dec 3rd, 2025</span>
            <span className="flex items-center gap-1"><BiCodeAlt /> WHMCS v8.1</span>
            <span className="flex items-center gap-1"><SiPhp /> PHP 8.3</span>
          </div>

          {/* Pricing Tabs */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {["monthly", "annual", "opensource", "additionalservices"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActivePrice(tab)}
                className={`pr-8 py-2 rounded-md text-sm whitespace-normal break-words text-left ${
                  activePrice === tab ? "text-orange-500 font-bold" : ""
                }`}
              >
                {tab === "opensource"
                  ? "Open Source Version"
                  : tab === "additionalservices"
                  ? "Additional Services"
                  : tab.charAt(0).toUpperCase() + tab.slice(1) + " License"}
              </button>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="relative mt-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none">
              <span className="text-white text-4xl font-bold">^</span>
            </div>

            <div className="bg-white text-black p-6 rounded shadow-lg relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Price */}
                <div>
                  <p className="text-gray-600 text-sm font-semibold">PRICE</p>
                  <p className="line-through text-gray-500 text-lg">{pricingTabs[activePrice].oldPrice}</p>
                  <h2 className="text-4xl sm:text-4xl text-orange-600 mt-1">{pricingTabs[activePrice].price}</h2>
                  <p className="mt-1 text-gray-600">{pricingTabs[activePrice].cycle}</p>

                  <button className="w-full bg-green-600 text-white py-3 rounded mt-4">Order Now</button>
                  <button className="w-full bg-white text-black py-3 rounded mt-4 border border-gray-400 text-gray-600">Add To Cart</button>
                </div>

                {/* Includes */}
                <div>
                  <h3 className="font-semibold mb-2 text-green-400">INCLUDES</h3>
                  <ul className="text-sm space-y-3">
                    {pricingTabs[activePrice].includes.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-green-400">✓</span> <span className="text-gray-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------- Bottom Tabs ----------- */}
      <div className="bg-white text-black py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8 border-b pb-2">
            {["features", "changelog", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveBottom(tab)}
                className={`pb-2 text-lg ${activeBottom === tab ? "border-b-2 border-blue-600 font-semibold" : "text-gray-500"}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-6 bg-gray-100 p-6 rounded-xl shadow-md">
            {activeBottom === "features" && (
              <div>
                <h2 className="text-2xl font-semibold mb-3">Module Features</h2>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li>Set percentage-based charges</li>
                  <li>Set fixed-amount charges</li>
                  <li>Exclude specific clients</li>
                  <li>Gateway-level configuration with advanced filters</li>
                  <li>Admin-only visibility control</li>
                  <li>Multi-currency support</li>
                  <li>Optimized for WHMCS latest version</li>
                </ul>
              </div>
            )}

            {activeBottom === "changelog" && (
              <div>
                <h2 className="text-2xl font-semibold mb-3">Changelog History</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-bold text-lg">v3.0.0 — December 2025</h3>
                    <ul className="list-disc ml-5">
                      <li>New user interface redesign</li>
                      <li>Added multi-currency fee rules</li>
                      <li>Added client exclusion system</li>
                      <li>Improved fee calculation engine</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">v2.5.1 — August 2025</h3>
                    <ul className="list-disc ml-5">
                      <li>Security improvements</li>
                      <li>Minor bug fixes</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeBottom === "reviews" && (
              <div>
                <h2 className="text-xl font-semibold mb-3">User Reviews</h2>
                <p className="text-gray-700">⭐⭐⭐⭐⭐ Excellent module! Works perfectly and support is great.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ----------------- FULL SCREEN SWIPER GALLERY ----------------- */}
{isFullScreen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md">
    {/* Close Button */}
    <button
      onClick={() => setIsFullScreen(false)}
      className="absolute top-5 right-5 text-white text-4xl font-bold z-50"
    >
      &times;
    </button>

    <div className="w-11/12 max-w-4xl">
      {/* Main Large Swiper */}
      <Swiper
  modules={[Navigation, Thumbs, Mousewheel]}
  navigation
  thumbs={{ swiper: thumbsSwiper }}
  mousewheel={{
    forceToAxis: true,
    sensitivity: 1,
  }}
  className="rounded-lg mb-4"
>

        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-full h-auto object-contain rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Scrollable Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Mousewheel]}
        slidesPerView={6}
        spaceBetween={10}
        freeMode={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
        watchSlidesProgress
        className="h-20 mt-4"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Thumb ${idx}`}
              className="h-full w-full object-cover rounded cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)}

    </div>
  );
};

export default PaymentGatewayPage;
