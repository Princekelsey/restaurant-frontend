import React from "react";
import cls from "classnames";

export const ModalHeader: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export const ModalFooter: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export const ModalBody: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

interface ModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  className,
  isOpen,
  children,
  ...rest
}) => {
  const overlayCls = cls(
    "fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-20",
    {
      hidden: !isOpen,
    }
  );

  const modalCls = cls(
    "fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded-none p-[20px] space-y-5 drop-shadow w-[558px] h-[430px] bg-white",
    {
      hidden: !isOpen,
    }
  );

  return (
    <>
      {/* <!-- Overlay element --> */}
      <div id='overlay' className={overlayCls} />

      <div className={modalCls} id='dialog' {...rest}>
        {children}
      </div>
    </>
  );
};
