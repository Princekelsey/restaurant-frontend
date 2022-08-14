import React from "react";
import ConfirmaWindow from "./components/elements/ConfirmaWindow";
import Entrance from "./container/Entrance";

const App = () => {
  return (
    <div className=' w-[1000px] mx-auto my-10 flex justify-center'>
      <ConfirmaWindow />
      <Entrance />
    </div>
  );
};

export default App;
