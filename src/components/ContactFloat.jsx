import React, { forwardRef } from "react";

const ContactFloat = forwardRef((props, ref) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:arman3ditz@gmail.com";
  };

  return (
    <div
      ref={ref}
      onClick={handleEmailClick}
      role="button"
      tabIndex={0}
      className="contRegBtn fixed bottom-[10px] right-[-10px]
                 px-[12px] py-[6px]
                 rounded-full z-50
                 bg-black text-white cursor-pointer
                 transition-transform duration-300 hover:scale-110"
    >
      arman3ditz@gmail.com
    </div>
  );
});

export default ContactFloat;
