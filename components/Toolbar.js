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
export default function Toolbar() {
    const [loading, setLoading] = useState(false);
    const [withZoom, setWithZoom] = useState(false);
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
      const handleLoading = () => {
        setLoading(!loading);
      };
    const handleLinks = (url) => {
        handleLoading();
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
        <div id="toolbar" className=" py-3 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
              {/* <Link className="navbar-brand" href="/"><img src="../homepage/logo_temporary_apilandscape.png" alt="apidays" className="home-logo align-self-start" /></Link> */}
                
                
                {/* <h4 className="text-white text-center py-2 text-white">
                  A comprehensive view of all stakeholders creating the
                  programmable economy
                </h4> */}
                <button
                  className="btn btn-dark-gray me-1 text-white mb-1"
                  onClick={() =>
                    handleForm("https://airtable.com/shr07pWSbRnQfnZZd")
                  }
                >
                  Add your API Tool
                </button>
                <button
                  className="btn btn-light-gray  m-0 text-company-color mb-1"
                  onClick={() => handleLinks("companies")}
                >
                  Search
                </button>
                <a
                  className="btn btn-dark-gray me-1 text-white"
                  href="../apilandscape.png"
                  download="apilandscape"
                >
                  Download the map
                </a>
                <button
                  className="btn btn-light-gray   text-company-color "
                  onClick={() => setWithZoom((prev) => !prev)}
                >
                  Zoom
                </button>
                {/* <a className="btn btn-dark-gray  text-white" href="https://drive.google.com/u/0/uc?id=1J2DdAB54QU6QuPoACqQoNv4nImFjyAdx&export=download"  download="stateofthemarket2022">Report</a> */}
                <a
                  className="btn btn-dark-gray  text-white"
                  href="https://apidays.typeform.com/to/YMTfJ3"
                  target="_blank"
                >
                  Report
                </a>
               
              <div className="mt-5">
                <h3>
                  <span className="badge bg-light text-black shadow d-none d-md-block  mt-5">
                    {totalValues.length}
                  </span>{" "}
                </h3>
                <h3 className="sm-text text-center text-white md-social-share-buttons">
                  Share
                </h3>
                <LinkedinShareButton
                  url="https://apilandscape.platformable.com/"
                  title="The API Landscape"
                  source="https://apilandscape.platformable.com/"
                  summary="The API Landscape"
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                {/* <TwitterShareButton
                  title="The API Landscape"
                  url="https://apilandscape.platformable.com"
                  via="http://apidays.global"
                  hashtags={["api", "landscape"]}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton> */}
                <EmailShareButton
                  url=""
                  title="The API Landscape"
                  subject="The API Landscape from apidays"
                  separator=" "
                  body="Get to know more about the API Landscape, visit http://apilandscape.com"
                >
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <p className="text-center sm-text text-white">
                  Last Update: {`${getDay()}}`}
                </p>
              </div>
            </div>
          </div>
    );
}
