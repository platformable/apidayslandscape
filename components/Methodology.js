import React from 'react'

export default function Methodology() {

  const handleForm = (url) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };
  return (
    <>
  
          <section className="px-2 md:px-6 lg:px-10 py-20 lg:py-24 2xl:py-32 bg-[#E1F6F8]">
            <div className="max-w-screen-lg  mx-auto">
              {/* <h3 className="text-center fw-bold my-5 text-white">
                See something you want to change?
              </h3> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <button className="change-box grid gap-y-5 btn-transition"
                onClick={() =>
                  handleForm("https://nocodb-app-agy4g.ondigitalocean.app/dashboard/#/nc/form/d0bb366e-022c-4c20-b128-dd71029d5336")
                }>
                  <div className="flex justify-center ">
                    <img
                      src="/add_API_icon2.svg"
                      alt="Add API icon"
                      className="w-[80px] h-[80px]"
                    />
                  </div>
                  <div
                    className=" text-white font-bold uppercase text-[18px]"
                    
                  >
                    Add your API tool
                  </div>
                </button>

                <button className="change-box grid gap-y-5 btn-transition"
                onClick={() =>
                  handleForm(
                    "https://airtable.com/appObH1ILShMbYp30/shrubDVNRrBRF8I0s"
                  )
                }>
                    <div className="flex justify-center">
                      <img
                        src="/report_bug_icon2.svg"
                        alt="Report bug icon"
                        className="w-[80px] h-[80px]"
                      />
                    </div>
                    {/* <p className="pt-1 text-company-color">
                      Report a bug including problems with the website or with
                      the data for a specific tool provider
                    </p> */}
                    <div
                      className=" text-white font-bold uppercase text-[18px]"
                      
                    >
                      Report a bug
                    </div>
                </button>

                <button className="change-box grid gap-y-5 btn-transition py-5"
                
                onClick={() =>
                  handleForm(
                    "https://airtable.com/appObH1ILShMbYp30/shrubDVNRrBRF8I0s"
                  )
                }
                >
                    <div className="flex justify-center">
                      <img
                        src="/new_feature_icon2.svg"
                        alt="New feature icon"
                        className="w-[80px] h-[80px]"
                      />
                    </div>
                    {/* <p className="pt-1 text-company-color">
                      Share a new feature idea, including any additional data
                      points you would like to see{" "}
                    </p> */}
                    <div
                      className=" text-white font-bold uppercase text-[18px]"
                      
                    >
                      New feature idea
                    </div>
                </button>
              </div>
            </div>
          </section>
          </>
  )
}
