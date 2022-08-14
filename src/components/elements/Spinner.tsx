import React from "react";

interface SpinnerProps {
  className?: string;
}
const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center space-x-2 animate-bounce ${className}`}
    >
      <div className='w-5 h-5 bg-[#323cf0] rounded-full'></div>
      <div className='w-5 h-5 bg-black rounded-full'></div>
      <div className='w-5 h-5 bg-[#4c54ee] rounded-full'></div>
    </div>
  );
};

export default Spinner;
