import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Loader from "./Loader";
import { useRouter } from "next/router";
import { subcategoriesDescriptions } from "../utils/categoriesAndSubcategories";
import Image from "next/image";

export default function SubcategoryContainer({
  handleCompany,
  subcategory,
  filteredSubcategory,
  withZoom,
  index
}) {
  const router = useRouter();
  const handleImages = (url) => {
    if (url.includes("https://drive.google.com")) {
      return `https://drive.google.com/thumbnail?id=${
        url.split("/d/").pop().split("/view?usp=sharing")[0]
      }`;
    } else {
      return url;
    }
  };

  function getSubcategoryDescription(obj, subcategory) {
    // console.log("homepagesubcategory", obj[subcategory.name]?.[0]);
    const search = obj[subcategory.name]?.[0]?.description;
    return search;
  }

  /* console.log(Object.keys(subcategoriesDescriptions)); */
  return (
    <div id="subcategory" className="bg-white flex-grow-1  flex-shrink-0 py-2" key={index}>
      {/* {data <= 0 && <Loader />} */}
      <h6
        className="text-center sm-text px-2 font-bold text-[#083ECB] tracking-wide leading-normal mt-1 mb-2"
        data-tip={getSubcategoryDescription(
          subcategoriesDescriptions,
          subcategory.name
        )}
        data-for="subcategory-tooltip"
      >
        {subcategory.name} 
        <span className="opacity-80">{' '}
        ({filteredSubcategory.length})
          </span>
      </h6>

      {/* <div className=""> */}
      <div className="flex flex-wrap gap-1 px-2">
        {filteredSubcategory
          ? filteredSubcategory.map((row, index) => {
              return (
                <div
                  href="https://nextjs.org/docs"
                  className="max-h-[48px] cursor-pointer  mb-0  mt-0 "
                  key={index}
                  onClick={() => handleCompany(row)}
                >
                  <div
                    
                    data-tip={row.name}
                    data-for="companyName-tooltip"
                    className={
                      !withZoom
                        ? "landscape-img border "
                        : "homepage-landscape-img border "
                    }
                  >
                    {row.logo === "" || row.logo === null ? (
                      <img
                        src={`/apidaysReplacementLogo.png`}
                        alt=""
                        className=""
                        // width={34.4}
                        // height={34.4}
                      />
                    ) : (
                      <img
                        srcSet={`${handleImages(row.logo)}`}
                        alt=""
                        className=""
                        // width={34.4}
                        // height={34.4}
                      />
                    )}
                  </div>
                  {!withZoom ? (
                    <p className="index-company-text text-center mt-1">
                      {row.name.substr(0, 10)}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              );
            })
          : "no data"}
      </div>
      {/* </div> */}
      {/* MODAL */}

      {/* MODAL */}
    </div>
  );
}
