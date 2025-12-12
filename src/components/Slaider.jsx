import { useState, useEffect } from "react";

export default function Slaider() {
  const images = [
    { id: 1, src: "/images/main.jpg" },
    { id: 2, src: "/images/image2.jpg" },
    { id: 3, src: "/images/image3.jpg" },
    { id: 4, src: "/images/image4.jpg" },
    { id: 5, src: "/images/image5.jpg" },
    { id: 6, src: "/images/image6.jpg" },
    // { id: 7, src: "/images/image7.jpg" },
    // { id: 8, src: "/images/image8.jpg" },
    // { id: 9, src: "/images/image9.jpg" },
    // { id: 10, src: "/images/image10.jpg" },
  ];

  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  // === Mouse Wheel Control ===
  useEffect(() => {
    if (!open) return;

    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        setActive((prev) => (prev + 1) % images.length);
      } else if (e.deltaY < 0) {
        setActive((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => window.removeEventListener("wheel", handleWheel);
  }, [open]);

  return (
    <div className="w-full bg-gradient-to-br from-lime-400 to-lime-500  shadow-2xl overflow-hidden">

      {/* MAIN IMAGE WITH OVERLAY THUMBNAILS (same as fullscreen modal) */}
<div className="relative w-full  flex justify-center">

  {/* MAIN IMAGE */}
  <div
    className="w-[100%] md:w-[100%]  cursor-pointer   overflow-hidden shadow-xl  "
    onClick={() => setOpen(true)}
  >
    <img
      src={images[active].src}
      className="w-full h-[300px] md:h-[460px] object-cover "
    />
  </div>

  {/* OVERLAY THUMBNAILS LAYER */}
  <div className="absolute bottom-0 left-0 right-0 flex justify-center ">
    <div className="w-[100%] md:w-[100%] bg-black/10 backdrop-blur-sx p-1  grid grid-cols-6 md:grid-cols-6 gap-3">

      {images.map((img, index) => (
        <div
          key={img.id}
          onClick={() => setActive(index)}
          className={`h-14 md:h-16  overflow-hidden cursor-pointer transition-all
            ${active === index ? "ring-2 ring-white scale-105" : "opacity-60 hover:opacity-100"}`}
        >
          <img src={img.src} className="w-full h-full object-cover" />
        </div>
      ))}

    </div>
  </div>
</div>


      {/* FULLSCREEN MODAL with OVERLAY THUMBNAILS */}
      {open && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-xs flex justify-center items-center z-50">

          {/* === FULL WIDTH MAIN IMAGE === */}
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src={images[active].src}
              className="max-h-[95%] max-w-[95%]  object-contain"
            />

            {/* === OVERLAY THUMBNAILS LAYER === */}
            <div className="absolute bottom-4 left-0 right-0 mx-auto w-[95%]">
              <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3  bg-white/2 backdrop-blur-sx ">
                {images.map((img, index) => (
                  <div
                    key={img.id}
                    onClick={() => setActive(index)}
                    className={`h-20  overflow-hidden cursor-pointer transition-all 
                      ${active === index ? "ring-2 ring-white scale-105" : "opacity-70 hover:opacity-100"}`}
                  >
                    <img src={img.src} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 text-white backdrop-blur-xl px-4 py-2 rounded-lg text-lg"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
