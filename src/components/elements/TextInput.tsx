import React from "react";

interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  hasError?: boolean;
  errorMessage?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  hasError,
  errorMessage,
  className,
  ...rest
}) => {
  return (
    <div className='w-full'>
      <input
        className={`w-full rounded-none p-2 border-[#848484] border-2 placeholder:text-[#6f6f6f] focus:outline-0  ${
          hasError
            ? "border-[#dd1313]"
            : "border-[#848484] focus:border-[#323cf0]"
        } ${className}`}
        {...rest}
      />
      {hasError && errorMessage && (
        <span className='text-[#dd1313]'>{errorMessage}</span>
      )}
    </div>
  );
};

export default TextInput;
