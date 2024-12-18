import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { useRouter } from "next/router";
import { subcategoriesDescriptions } from "../utils/categoriesAndSubcategories";
import Image from "next/image";
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
      className="bg-white flex-grow rounded-md px-4  py-2"
      key={index}
    >
      {/* {data <= 0 && <Loader />} */}
      <header className="flex gap-3">
        <h4 className="sm-text font-bold text-[var(--main-blue)] tracking-wide leading-normal mt-1 mb-2 block text-left">
          {subcategory.name}
          <span className=""> ({filteredSubcategory.length})</span>
        </h4>
        <div
          className="cursor-pointer bg-[var(--tooltip-bg)] rounded-full text-sm w-5 h-5 grid place-content-center"
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
                  className="entity-wrapper max-h-[48px] cursor-pointer mb-0  mt-0 "
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
                    {!row.logo || row.logo === "" || row.logo === null ? (
                      <img
                        src={`/apidaysReplacementLogo.png`}
                        //srcset="https://res.cloudinary.com/platformable/image/upload/v1700497226/apilandscape/api_landscape_logo_zd3nba.svg"
                        alt="Company default logo"
                        className="border aspect-square object-contain "
                        width={34.4}
                        height={34.4}
                      />
                    ) : (
                      <img
                        src={row.logo}
                        alt={`${row.name} company`}
                        className={
                          !withZoom
                            ? "object-contain border aspect-square object-contain "
                            : "homepage-landscape-img border aspect-square object-contain "
                        }
                        width={34.4}
                        height={34.4}
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