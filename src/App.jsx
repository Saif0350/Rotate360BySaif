import React from "react";
import Rotate from "./comps/Rotate";
import img0 from "./assets/iphone0.jpg";
import img1 from "./assets/iphone1.jpg";
import img2 from "./assets/iphone2.jpg";
import img3 from "./assets/iphone3.jpg";
import img4 from "./assets/iphone4.jpg";
import img5 from "./assets/iphone5.jpg";

const App = () => {
  const images = [img0, img1, img2, img3, img4, img5];

  return (
    <>
      <div className="text-lg text-center font-bold text-[40px] py-3 italic">
        360 Rotate is done Afroz
      </div>

      <div className="App flex justify-center items-center mt-4">
        <Rotate images={images} />
      </div>
    </>
  );
};

export default App;
