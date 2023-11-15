import React from "react";

import { useRouter } from "next/router";
import Unknown from "./Unknown";
export default function CompanyCardModal({ company, index, loading, handleRoute,selectedEntity }) {
  const handleCompany = (company) => {
    router.push(`/company/${company.name}`);
  };

  const reduceNumber = (total) => {
    let result;
    if (total.length >= 7) {
      result = `$${total.slice(0, 1)}M`;
    }

    if (total.length >= 8) {
      result = `$${total.slice(0, 2)}M`;
    }

    if (total.length >= 9) {
      result = `$${total.slice(0, 3)}M`;
    }
    if (total.length >= 10) {
      result = `$${total.slice(0, 4)}M`;
    }

    return result;
  };

  const handleScore = (wm, dm) => {
    let score = "-";
    if (wm === "Yes" && dm === "Yes") {
      score = "A+";
    }

    if (wm === "Yes" && dm === "No") {
      score = "A";
    }
    if (wm === "No" && dm === "Yes") {
      score = "A";
    }

    if (wm === "No" && dm === "No") {
      score = "-";
    }

    return score;
  };

  const newParentCategorySlug = [...new Set(company?.cluster?.split(","))];
  const categories = [...new Set(company?.category?.split(","))];
  const subcategories = [...new Set(company?.subcategory?.split(","))];

  const handleImages = (url) => {
    if (url?.includes("https://drive.google.com")) {
      return `https://drive.google.com/thumbnail?id=${
        url.split("d/").pop().split("/view?usp=sharing")[0]
      }`;
    } else {
      return url;
    }
  };

  const router = useRouter();
  return (
    <div className="company-card bg-white" key={index}>
      <div className="card-top">
        <div className="">
          <h3 className="fw-bold text-company-color text-center text-[#243672]">
            {" "}
            {company.name}
          </h3>

          <div className="card-logo flex justify-center">
            {company.logo === "" || null ? (
              <img
                src={`../../../apidaysReplacementLogo.png`}
                alt=""
                
              />
            ) : (
              <img
                srcSet={`${handleImages(company.logo)} 2x`}
                alt=""
                
                
              />
            )}
          </div>

          <div className="company-decription my-3">
            <p className=" text-[#243672]">{company.description}</p>
          </div>

          {/* <span className="xs-text badge tex-black">{company?.url?.length>6? "find out more":""}</span> */}

          <div className="flex gap-x-5 items-center mb-3">
            <div>
              <img src="/founded_icon.svg" alt="" className="" />
            </div>
            <div>
              {" "}
              <p className="md-text m-0 p-0 text-[#083ECB]">Founded</p>
            </div>
            <div>
              {" "}
              <p className="font-bold  m-0 p-0 text-[#243672]">
                {company.yearFounded ? `${company.yearFounded}` : "-"}
              </p>
            </div>
          </div>

          <div className="flex gap-x-5 items-center">
            <div>
              <img src="/headquarter_icon.svg" alt="" className="" />
            </div>
            <div>
              {" "}
              <p className="md-text m-0 p-0  text-[#083ECB]">Founded</p>
            </div>
            <div>
              {" "}
              <p className="md-text font-bold  m-0 p-0 text-[#243672]">
                {company.headquartersCity},{company.headquartersCountry}
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* <!--cardtop--> */}
      <div className="card-middle mt-2">
        {newParentCategorySlug?.map((cluster, index) => {
          return (
            <span
              className={`text-center bg-[#98BDFF] my-1 text-[#083ECB] d-block border-[#F69902] orangeBorder`}
            >
              {cluster}
            </span>
          );
        })}

        {categories?.map((category, index) => {
          return (
            <span
              key={index}
              className={`text-center bg-[#E6EFFF] my-1 text-[#083ECB] d-block orangeBorder`}
            >
              {category}
            </span>
          );
        })}

        {subcategories?.map((subcategory, index) => {
          return (
            <span
              key={index}
              className={`text-center bg-[#ffffff] my-1 text-[#083ECB] d-block orangeBorder`}
            >
              {subcategory}
            </span>
          );
        })}
      </div>
      {/* <!--card middle--> */}
      <div className="grid grid-cols-3 gap-x-2 my-3">
        <div className="greenBorder rounded-md p-2 flex flex-col items-center">
          
          <p className="font-bold my-2 text-[#243672]">
            {company.headcount ? company.headcount : "-"}
          </p>
          <span className="text-[#083ECB]">Headcount</span>
          <img
            src="/headcount_icon.svg"
            alt=""
            className="sd-icon mt-3"
          />
        </div>

        <div className="purpleBorder rounded-md p-2 flex flex-col items-center">
          
          <p className="font-bold my-2 text-[#243672]">
            {company.totalFunding ? reduceNumber(company.totalFunding) : "-"}
          </p>
          <span className="text-[#083ECB]">Total Funding</span>
          <img
            src="/total funding_icon.svg"
            alt=""
            className="md-icon mt-3"
          />
        </div>

        <div className="orangeBorder rounded-md p-2  flex flex-col items-center">
          
          <p className="font-bold my-2 text-[#243672]">
            {handleScore(
              company.womanInManagement,
              company.nonWhitePeopleInManagement
            )}
          </p>
          <span className="text-[#083ECB]">Active products</span>
          <img
            src="/active products_icon.svg"
            alt=""
            className="xd-icon mt-3 px-2"
          />
        </div>
      </div>

      <div className="my-1 grid">
    
        <button
         onClick={()=>handleRoute(selectedEntity)}
          className="bg-[#083ECB] shadow-md px-10 py-3  text-white uppercase rounded text-center"
        >
         View complete profile
        </button>
        {/* <span className="text-sm text-gray">Wrong info? suggest </span> */}
      </div>
    </div>
  );
}
