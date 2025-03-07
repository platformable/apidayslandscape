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
import APISCounter from "./APISCounter";
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
    <div id="toolbar" className="pt-14 pb-8 ">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 font-semibold">
        <button
          className="rounded bg-[var(--main-blue)] text-white  self-start h-14 shadow-md uppercase btn-transition"
          onClick={() => handleForm("https://nocodb-app-agy4g.ondigitalocean.app/dashboard/#/nc/form/d0bb366e-022c-4c20-b128-dd71029d5336")}
        >
          Add your API Tool
        </button>
        <button
          className="rounded bg-[var(--main-blue)] text-white  self-start h-14 shadow-md uppercase btn-transition"
          onClick={() => handleLinks("companies")}
        >
          Search
        </button>
        <button
          className="rounded m-0  bg-[var(--main-blue)]  self-start h-14 text-white uppercase btn-transition"
          onClick={() => setWithZoom((prev) => !prev)}
        >
          Zoom
        </button>
        <a
          className="rounded bg-[var(--main-green)] text-white self-start h-14 shadow-md uppercase flex items-center justify-center btn-transition"
          href="/API_Landscape_2024.png"
          download="apilandscape2024.png"
          target="_blank"
        >
          Download the map
        </a>
       
        {/* <a className="btn btn-dark-gray  text-white" href="https://drive.google.com/u/0/uc?id=1J2DdAB54QU6QuPoACqQoNv4nImFjyAdx&export=download"  download="stateofthemarket2022">Report</a> */}
        <Link href="/report"
          className=" m-0 bg-[var(--main-green)] uppercase text-white self-start h-14 rounded shadow-md btn-transition"
        /*   target="_blank" */
          /* onClick={() => handleForm("https://apidays.typeform.com/to/YMTfJ3?typeform-source=www.apidays.global")} */
        >
          Report
        </Link>
        <div>
          <div className="flex gap-x-2">
            <APISCounter count={totalValues?.length}/>
            <LinkedinShareButton
              url="apilandscape.apiscene.io"
              title="The API Landscape"
              source="apilandscape.apiscene.io"
              summary="The API Landscape"
              
            >
              <LinkedinIcon size={60} round={true} bgStyle={{fill:"var(--main-blue)"}} />
            </LinkedinShareButton>
            <EmailShareButton
              url=""
              title="send email"
              subject="The API Landscape from apidays"
              separator=" "
              body="Get to know more about the API Landscape, visit https://www.apilandscape.apiscene.io"
              
            >
              <EmailIcon size={60} round={true} bgStyle={{fill:"var(--main-blue)"}}/>
            </EmailShareButton>
          </div>

          <p className="text-[var(--main-blue)] text-[12px] mt-2 font-bold">
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
