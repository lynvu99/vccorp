import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-wrapper bg-center bg-no-repeat bg-contain relative">
      {/* Desktop/PC Version */}
      <div className="h-full relative text-white rounded-lg overflow-hidden shadow-lg">
        <div className=" desktop flex">
          <div className="description h-120 lg:h-120  md:h-120 sm:h-100 w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center absolute inset-y-0 right-0 md:right-8 lg:right-40 xl:right-80 md:right-8 sm:right-0 lg:top-48 md:top-52 sm:top-64 z-10">
            <p className="fs-28">
              Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá
              đơn giản. Tôi biết những người yêu mến tôi là vì sự chân thật và
              giản dị.
            </p>
            <div className="mt-auto">
              <h2 className="text-doctor fs-28 font-bold">THU QUỲNH</h2>
              <p className="text-white/80 mt-3 fs-18">Bác sĩ</p>
            </div>
          </div>
        </div>
        <div className=" mobile flex">
          <div className="description h-40 flex flex-col justify-center absolute bottom-8 ml-8 z-10">
            <p className="fs-16">
              Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá
              đơn giản. Tôi biết những người yêu mến tôi là vì sự chân thật và
              giản dị.
            </p>
            <div className="mt-auto">
              <h2 className="text-doctor fs-14 font-bold">THU QUỲNH</h2>
              <p className="text-white/80 mt-3 fs-12">Bác sĩ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
    </div>
  );
}

export default App;
