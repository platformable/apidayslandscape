import React from "react";
import ReactTooltip from "react-tooltip";
import Loader from "./Loader";

export default function homepageSubcategory({handleCompany,subcategoryName,filteredCategory}) {
  return (
    <>
      <h6 className="text-center sm-text py-2">{subcategoryName}({filteredCategory.length})</h6>
      <div className="homeCards d-flex justify-content-center px-2">
        {filteredCategory
          ? filteredCategory.map((row, index) => {
          /*   console.log("row.logo",index +'-'+row.logo) */
              return (
                <div
                  href="https://nextjs.org/docs"
                  className="landscape-card mb-3"
                  key={index}
                >
                  <div onClick={() => handleCompany(row)} data-tip={row.name} className="landscape-img">
                   {row.logo === "" || null ? <img src={`../apidaysReplacementLogo.png`} alt=""  className=""/> : <img srcset={`${row.logo} 2x`} alt="" className="img-fluid" /> }
                  </div>
                </div>
              );
            })
          : "no data"}

      </div>
    </>
  );
}
