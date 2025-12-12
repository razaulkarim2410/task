// import React, { useState } from 'react';

// export default function WHMCSPricingCard() {
//   const [activeTab, setActiveTab] = useState('annual');

//   const tabs = [
//     { id: 'monthly', label: 'Monthly License' },
//     { id: 'annual', label: 'Annual License' },
//     { id: 'opensource', label: 'Open Source Version' },
//     { id: 'additional', label: 'Additional Services' }
//   ];

//   const features = [
//     'Instant 7-Day Free Access',
//     'Access To Multi-Level Tech Support',
//     'Free Module Updates',
//     'Priority Feature Consideration',
//     'One-Click Upgrade To Open Source Version',
//     'Access To Premium Offers',
//     'Free Dev License On Request'
//   ];

//   return (
//     <div className="p-4 md:p-8"> 
//       {/* ⛔ bg remove করা হয়েছে */}
//       {/* ⛔ min-h-screen remove করা হয়েছে */}

//       <div className="max-w-6xl mx-auto">

//         {/* Breadcrumb */}
//         <div className="text-gray-600 text-sm mb-4">
//           WHMCS / Extension Modules / Payments & Billing
//         </div>

//         {/* Header */}
//         <div className="mb-6">
//           <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
//             Payment Gateway Charges For WHMCS
//           </h1>

//           {/* Rating Section */}
//           <div className="flex flex-wrap items-center gap-4 text-gray-700 text-xs md:text-sm">
//             <div className="flex items-center gap-1">
//               {[...Array(5)].map((_, i) => (
//                 <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
//                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                 </svg>
//               ))}
//             </div>
//             <div className="flex items-center gap-2">📥 6358 times</div>
//             <div>⚙️ v3.0.0</div>
//             <div>📅 Dec 3rd, 2025</div>
//             <div>💻 WHMCS V8.13</div>
//             <div>🔧 PHP 8.3</div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-4 py-2 font-semibold transition-all text-sm ${
//                 activeTab === tab.id
//                   ? 'bg-white text-blue-700 rounded-t-lg shadow'
//                   : 'text-gray-700 border-b-2 border-transparent hover:border-gray-300'
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Pricing Card */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl">

//           <div className="grid md:grid-cols-2">

//             {/* Left Price Side */}
//             <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
//               <div className="text-xs text-gray-500 uppercase mb-1">PRICE</div>
//               <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">$179.95</div>
//               <div className="text-gray-500 mb-4">Annually</div>

//               <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md mb-3">
//                 Order Now
//               </button>

//               <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-md">
//                 Add To Cart
//               </button>
//             </div>

//             {/* Right Features */}
//             <div className="p-6 relative">

//               {/* Ribbon */}
//               <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-6 py-1 transform rotate-45 origin-top-right translate-x-6 translate-y-3 shadow-lg">
//                 SAVE $21.45/YEAR
//               </div>

//               {/* Small Tabs */}
//               <div className="flex gap-4 mb-4 border-b border-gray-200">
//                 <button className="pb-2 text-green-600 font-semibold border-b-2 border-green-600 text-xs">
//                   INCLUDES
//                 </button>
//                 <button className="pb-2 text-gray-400 font-semibold text-xs">
//                   30-DAY GUARANTEE
//                 </button>
//               </div>

//               {/* Features */}
//               <div className="space-y-2">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
//                       viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                         d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span className="text-gray-700 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-6 bg-gray-50 rounded-lg p-6 text-gray-800 shadow">
//           <h2 className="text-lg font-semibold mb-3">What's Included?</h2>

//           <div className="grid md:grid-cols-2 gap-4 text-sm">
//             <div>
//               <h3 className="font-semibold mb-2">✨ Premium Features</h3>
//               <ul className="space-y-1">
//                 <li>• Multi-currency support</li>
//                 <li>• Automatic invoice generation</li>
//                 <li>• Real-time payment tracking</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-2">🛡️ Security & Support</h3>
//               <ul className="space-y-1">
//                 <li>• PCI DSS compliant</li>
//                 <li>• 24/7 technical support</li>
//                 <li>• Regular security updates</li>
//               </ul>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { SiPhp } from "react-icons/si";

export default function PaymentGatewayPages() {
  const [activePrice, setActivePrice] = useState("annual");
  const [activeBottom, setActiveBottom] = useState("features");

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
    <div className="col-span-4 text-white">
      <p className="text-sm opacity-75">WHMCS / Extension Modules / Payments & Billing</p>

      <h1 className="text-3xl font-bold mt-1">Payment Gateway Charges For WHMCS</h1>

      <div className="flex items-center gap-4 mt-1 text-sm opacity-90 flex-wrap">
        <span>⭐⭐⭐⭐⭐</span>
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
            className={`pr-8 py-2 rounded-md text-sm text-left ${
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
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="text-white text-4xl font-bold">^</span>
        </div>

        <div className="bg-white text-black p-6  shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Price */}
            <div>
              <p className="text-gray-600 text-sm font-semibold">PRICE</p>
              <p className="line-through text-gray-500 text-lg">{pricingTabs[activePrice].oldPrice}</p>
              <h2 className="text-4xl text-orange-600 mt-1">{pricingTabs[activePrice].price}</h2>
              <p className="mt-1 text-gray-600">{pricingTabs[activePrice].cycle}</p>

              <button className="w-full bg-green-600 text-white py-3 rounded mt-4">Order Now</button>
              <button className="w-full bg-white text-black py-3 rounded mt-4 border border-gray-400 text-gray-600">
                Add To Cart
              </button>
            </div>

            {/* Includes */}
            <div>
              <h3 className="font-semibold mb-2 text-green-400">INCLUDES</h3>
              <ul className="text-sm space-y-3">
                {pricingTabs[activePrice].includes.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
