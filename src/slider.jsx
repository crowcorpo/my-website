
import burger1 from "./assets/burger1.jpg";
import burger2 from "./assets/escanore.jpg";
import burger3 from "./assets/boi3.webp";


import { useState, useEffect, useRef } from "react";

function Slider() {
  const images = [burger1, burger2, burger3];
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null); // لتخزين الـ interval

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
    resetTimer();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    resetTimer();
  };

  // إعادة تشغيل المؤقت عند الضغط على الزر
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  // عند تحميل المكوّن، نبدأ المؤقت
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timerRef.current); // تنظيف عند unmount
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <img key={i} src={src}  />
        ))}
      </div>

      <button className="btn prev" onClick={prev}>❮</button>
      <button className="btn next" onClick={next}>❯</button>
    </div>
  );
}

export default Slider;
