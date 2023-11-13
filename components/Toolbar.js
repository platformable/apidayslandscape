import { useState } from "react";
import Link from "next/link";
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
  return (
    <div id="toolbar" className=" py-3 container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2">
        <button
          className="btn btn-dark-gray  text-white  self-start"
          onClick={() => handleForm("https://airtable.com/shr07pWSbRnQfnZZd")}
        >
          Add your API Tool
        </button>
        <button
          className="btn btn-light-gray  text-company-color self-start"
          onClick={() => handleLinks("companies")}
        >
          Search
        </button>
        <a
          className="btn m-0 bg-primary  text-white self-start"
          href="../apilandscape.png"
          download="apilandscape"
        >
          Download the map
        </a>
        <button
          className="btn m-0 bg-warning   text-company-color self-start"
          onClick={() => setWithZoom((prev) => !prev)}
        >
          Zoom
        </button>
        {/* <a className="btn btn-dark-gray  text-white" href="https://drive.google.com/u/0/uc?id=1J2DdAB54QU6QuPoACqQoNv4nImFjyAdx&export=download"  download="stateofthemarket2022">Report</a> */}
        <a
          className="btn m-0 bg-primary   text-white self-start"
          href="https://apidays.typeform.com/to/YMTfJ3"
          target="_blank"
        >
          Report
        </a>
<div>

<div className="flex gap-x-5">
          <h3>
            <span className="badge bg-light text-black shadow d-none d-md-block p-10">
              {totalValues.length}
            </span>{" "}
          </h3>

          <LinkedinShareButton
            url="https://apilandscape.platformable.com/"
            title="The API Landscape"
            source="https://apilandscape.platformable.com/"
            summary="The API Landscape"
          >
            <LinkedinIcon size={44} round={true} />
          </LinkedinShareButton>

          <EmailShareButton
            url=""
            title="The API Landscape"
            subject="The API Landscape from apidays"
            separator=" "
            body="Get to know more about the API Landscape, visit http://apilandscape.com"
          >
            <EmailIcon size={44} round={true} />
          </EmailShareButton>
        </div>

        <p className="text-white text-[12px] mt-2 font-bold">Last Update: {new Date().toLocaleDateString('en-US',{day:'numeric',month:'long',year:'numeric'})}</p>
   
</div>
        
      </div>
     
    </div>
  );
}
