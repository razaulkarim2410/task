import React from "react";
import PaymentGatewayPages from "./PaymentGatewayPages";
import Slaider from "./Slaider";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0373CE] via-[#066CC6] to-[#024F9E] p-6 md:p-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-7  md:gap-10 items-start">

        {/* LEFT (col-span-3) */}
        <div className="col-span-3 pb-10">
          <Slaider />
        </div>

        {/* RIGHT (col-span-4) */}
        <div className="col-span-4">
          <PaymentGatewayPages />
        </div>

      </div>
    </div>
  );
}
