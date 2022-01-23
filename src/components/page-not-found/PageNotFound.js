import React from "react";
import page_not_found from "../../images/page-not-found/page-not-found.png";
function PageNotFound() {

  return (
    <div className="page-not-found">
      <img
        className="page-not-found__image"
        src={page_not_found}
        alt="Логотип 'VideoFor'"
      />
    </div>
  );
}
export default PageNotFound;
