import React from "react";
import { reduceMillion } from "../helpers/functions";
import Unknown from "./Unknown";
import Link from "next/link";
export default function CompanyCardModal({
  company,
  index,
}) {
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

  return (
    <div
      className="flex flex-col px-2 md:px-4  rounded-xl bg-white"
      key={index}
    >
      <div className="card-top">
        <div className="">
          <h3 className="font-bold mb-8 text-center text-xl text-[#243672]">
            {" "}
            {company.name}
          </h3>

          <div className="card-logo flex  justify-center mb-3">
            {!company.logo ||company.logo === "" || null ? (
              <img src="/apidaysReplacementLogo.png" alt="Company default logo" className="card-logo"/>
            ) : (
              <img srcSet={`${handleImages(company.logo)} 2x`} alt={`${company?.name} logo`} />
            )}
          </div>

          <div className="company-decription mb-8">
            <p className="text-center font-medium">
              {company.description}
            </p>
          </div>

          {/* <span className="xs-text badge tex-black">{company?.url?.length>6? "find out more":""}</span> */}

          <div className="flex gap-x-2 items-center mb-3">
            <div>
              <img src="/founded_icon.svg" alt="founded icon" className="" />
            </div>
            <div>
              {" "}
              <p className="md-text m-0 p-0 text-[var(--main-blue)] font-bold">Founded in</p>
            </div>
            <div className="ml-2">
              {" "}
              <p className="font-bold p-0">
                {company.yearFounded ? `${company.yearFounded}` : "-"}
              </p>
            </div>
          </div>

          <div className="flex gap-x-2 items-center">
            <div>
              <img src="/headquarter_icon.svg" alt="headquarter icon" className="" />
            </div>
            <div>
              <p className="md-text p-0  text-[var(--main-blue)] font-bold">Headquarter</p>
            </div>
            {company.headquartersCountry && (
              <img
                src={`https://flagsapi.com/${company.headquartersCountry}/flat/64.png`}
                alt="flag icon"
                className="w-7"
              />
            )}

            <div className="">
              <p className="md-text font-bold p-0">
                {company.headquartersCity
                  ? `${company.headquartersCity}, ${company.headquartersCountry}`
                  : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* <!--cardtop--> */}
      <div className="flex flex-col gap-x-1 gap-y-2 my-4">
        <span
          className={`text-center font-bold bg-[var(--main-blue)] text-white rounded p-1 text-sm`}
        >
          {newParentCategorySlug[0]}
        </span>

        <span
          key={index}
          className={`text-center font-bold bg-[var(--main-green)] text-white rounded p-1 text-sm`}
        >
          {categories[0]}
        </span>

        <span
          key={index}
          className={`text-center font-bold bg-[#ffffff] text-[var(--main-blue)] border-2 border-[var(--main-blue)] rounded p-1 text-sm`}
        >
          {subcategories[0]}
        </span>

        <span
          key={index}
          className={`text-center font-bold bg-[#ffffff] text-[var(--main-green)] p-1 text-sm`}
        >
          {(newParentCategorySlug.length > 1 ||
            categories.length > 1 ||
            subcategories.length > 0) &&
            "AND MORE..."}
        </span>
      </div>
      {/* <!--card middle--> */}
      <div className="grid grid-cols-3 gap-x-2 mb-3">
        <div className="purpleBorder rounded-md p-2 flex flex-col items-center">
          <p className="font-bold my-2 text-[#243672]">
            {company.headcount ? company.headcount : "-"}
          </p>
          <span className="text-[#083ECB]">Headcount</span>
          <img src="/profile/headcount_icon.svg" alt="headcount icon" className="sd-icon mt-3" />
        </div>

        <div className="greenBorder rounded-md p-2 flex flex-col items-center">
          <p className="font-bold my-2 text-[#243672]">
            {company.totalFunding ? reduceMillion(company.totalFunding) : "-"}
          </p>
          <span className="text-[#083ECB]">Total Funding</span>
          <img src="/profile/total_funding_icon.svg" alt="total funding icon" className="md-icon mt-3" />
        </div>

        <div className="orangeBorder rounded-md p-2  flex flex-col items-center">
          <p className="font-bold my-2 text-[#243672]">
            {company.totalProducts || "-"}
          </p>
          <span className="text-[#083ECB]">Active products</span>
          <img
            src="/profile/active_products_icon.svg"
            alt="active products icon"
            className="xd-icon mt-3 px-2"
          />
        </div>
      </div>
      <div className="my-1 grid">
        <Link href={`/company/${company.name}`}>
          <button className="bt-transition bg-[var(--main-blue)] shadow-md px-10 py-3  text-white uppercase rounded text-center w-full">
            View complete profile
          </button>
        </Link>

        {/* <span className="text-sm text-gray">Wrong info? suggest </span> */}
      </div>
    </div>
  );
}
