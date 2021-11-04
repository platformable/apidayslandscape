import React from "react";
import ReactTooltip from "react-tooltip";

export default function LandscapeSubcategory({handleCompany,subcategoryName,filteredCategory}) {
  return (
    <>
      <h6 className="text-center sm-text py-2">{subcategoryName}</h6>
      <div className="homeCards px-2">
        {filteredCategory
          ? filteredCategory.map((row, index) => {
              return (
                <div
                  href="https://nextjs.org/docs"
                  className="landscape-card mb-3"
                  key={index}
                >
                  <div onClick={() => handleCompany(row)} data-tip={row.name}>
                    
                    <img src={row.logo} alt="" />
                    <p className="xs-text">{row.name}</p>
                  </div>
                </div>
              );
            })
          : "no data"}
      </div>
    </>
  );
}
