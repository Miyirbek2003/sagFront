import React from "react";

export default function Succes({ setFormS, formS }) {
  setTimeout(() => {
    setFormS(!formS);
  }, 2000);
  return (
    <div className="modal-main glass">
      <div className="modal glass-modal">
        <div className="modal-content">
          <div className="success-animation">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
