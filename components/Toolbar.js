import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
export default function Toolbar({ setLoading, setWithZoom, data }) {
  const totalValues = data.values.filter(
    (items) =>
      items.parentCategorySlug !== "API Standards/Protocols" &&
      items.parentCategorySlug !== "Media/Associations"
  );
  const handleForm = (url) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  const handleLinks = (url) => {
    setLoading((prev) => !prev);
    router.push(`/${url}`);
  };

  const getDay = (date) => {
    const lastUpdate = new Date();

    return lastUpdate.toLocaleString("default", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  };





  const router = useRouter();
  return (
    <div id="toolbar" className="pt-14 pb-8 container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 font-semibold">
        <button
          className="rounded bg-[var(--main-blue)] text-white  self-start h-14 shadow-md uppercase"
          onClick={() => handleForm("https://airtable.com/shr07pWSbRnQfnZZd")}
        >
          Add your API Tool
        </button>
        <button
          className="rounded bg-[var(--main-blue)] text-white  self-start h-14 shadow-md uppercase"
          onClick={() => handleLinks("companies")}
        >
          Search
        </button>
        <button
          className="rounded m-0  bg-[var(--main-blue)]  self-start h-14 text-white uppercase"
          onClick={() => setWithZoom((prev) => !prev)}
        >
          Zoom
        </button>
        <button
          className="rounded bg-[var(--orange)] text-white  self-start h-14 shadow-md uppercase"
          href="../apilandscape.png"
          download="apilandscape"
        >
          Download the map
        </button>
       
        {/* <a className="btn btn-dark-gray  text-white" href="https://drive.google.com/u/0/uc?id=1J2DdAB54QU6QuPoACqQoNv4nImFjyAdx&export=download"  download="stateofthemarket2022">Report</a> */}
        <button
          className=" m-0 bg-[var(--orange)] uppercase text-white self-start h-14 rounded shadow-md"
          target="_blank"
          onClick={() => handleForm("https://apidays.typeform.com/to/YMTfJ3")}
        >
          Report
        </button>
        <div>
          <div className="flex gap-x-2">
            <button className=" bg-light text-black shadow d-none d-md-block px-4 rounded font-bold h-14 text-xl">
              {totalValues.length}
            </button>{" "}
            <LinkedinShareButton
              url="https://apilandscape.platformable.com/"
              title="The API Landscape"
              source="https://apilandscape.platformable.com/"
              summary="The API Landscape"
              
            >
              <LinkedinIcon size={60} round={true} bgStyle={{fill:"#1060FF"}} />
            </LinkedinShareButton>
            <EmailShareButton
              url=""
              title="The API Landscape"
              subject="The API Landscape from apidays"
              separator=" "
              body="Get to know more about the API Landscape, visit http://apilandscape.com"
              
            >
              <EmailIcon size={60} round={true} bgStyle={{fill:"#1060FF"}}/>
            </EmailShareButton>
          </div>

          <p className="text-white text-[12px] mt-2 font-bold">
            Last Update:{" "}
            {new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
