import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { useRouter } from "next/router";
import { subcategoriesDescriptions } from "../utils/categoriesAndSubcategories";

export default function SubcategoryContainer({
  handleCompany,
  subcategory,
  filteredSubcategory,
  withZoom,
  index,
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
    <div
      id="subcategory"
      className="bg-white flex-grow  px-4  py-2"
      key={index}
    >
      {/* {data <= 0 && <Loader />} */}
      <header className="flex gap-3">
        <h4 className="sm-text font-bold text-[#083ECB] tracking-wide leading-normal mt-1 mb-2 block text-left">
          {subcategory.name}
          <span className="opacity-80"> ({filteredSubcategory.length})</span>
        </h4>
        <div
          className="cursor-pointer bg-blue-500 rounded-full text-sm text-white w-5 h-5 grid place-content-center"
          data-tooltip-content={
            subcategory.description || "No description provided"
          }
          data-tooltip-id="subcategory-tooltip"
        >
          ?
        </div>
      </header>
      {/* <div className=""> */}
      <div className="flex flex-wrap gap-1 ">
        {filteredSubcategory
          ? filteredSubcategory.map((row, index) => {
              return (
                <div
                  href="https://nextjs.org/docs"
                  className="max-h-[48px] cursor-pointer mb-0  mt-0 "
                  key={index}
                  onClick={() => handleCompany(row)}
                  data-tooltip-content={row.name}
                  data-tooltip-id="companyName-tooltip"
                >
                  {/* <div
                   
                    className={
                      !withZoom
                        ? "landscape-img border "
                        : "homepage-landscape-img border "
                    }
                  > */}
                    {row.logo === "" || row.logo === null ? (
                      <img
                        src={`/apidaysReplacementLogo.png`}
                        srcset="https://res.cloudinary.com/platformable/image/upload/v1700497226/apilandscape/api_landscape_logo_zd3nba.svg"
                        alt=""
                        className=""
                        width={34.4}
                        height={34.4}
                      />
                    ) : (
                      <img
                        src={row.logo}
                        alt=""
                        className={
                          !withZoom
                            ? "w-8 h-8 object-contain border "
                            : "homepage-landscape-img border "
                        }
                        // width={34.4}
                        // height={34.4}
                      />
                    )}
                  {/* </div> */}
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
