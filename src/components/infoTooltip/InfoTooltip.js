import React from "react";
import camera from "../../images/info-tooltip/camera.svg";

function InfoTooltip({ isOpen, onClose, title }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""} }`}>
      <div className="popup__container popup__container_info-tooltip">
        <button
          className="popup__close-btn popup__close-btn_info-tooltip"
          type="button"
          onClick={onClose}
        ></button>

        <h3 className="popup__title popup__title_info-tooltip">{title}</h3>

        <div className="popup__contact-container popup__contact-container_info-tooltip">
          <img
            className="info-tooltip__image"
            src={camera}
            alt="Camera"
          />
        </div>
      </div>
    </div>
  );
}
export default InfoTooltip;
