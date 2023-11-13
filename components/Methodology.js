import React from 'react'

export default function Methodology() {

  const handleForm = (url) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };
  return (
    <>
    {/* <section className="methodology py-5 bg-white">
            <div className="container">
              <div className="methodology-title d-flex justify-content-center align-items-center my-5">
                <img
                  src="../methodology_icon.png"
                  alt=""
                  className=" mx-2 xd-icon"
                />

                <h3 className="fw-bold text-center mx-2 text-company-color">
                  Methodology
                </h3>
              </div>
              <div className="row d-flex align-items-center bg-light rounded shadow py-5 my-2 px-3">
                <div className="col-md-3 ">
                  <img src="../logo_dark.png" alt="" />
                </div>
                <div className="col-md-9 ">
                  <p className="mt-3 text-company-color">
                    Our dataset has been built on 3 years of apidays industry
                    analysis and data collection. APIs are at the core of all
                    digital ecosystems and infrastructures. APIs make it
                    possible for businesses, governments, non-profits,
                    researchers and media to build digital solutions at scale
                    and in partnership with a wide variety of stakeholders. It
                    is essential to be able to review the dynamism and breadth
                    of the API industry, but it is challenging to find data that
                    captures all of the work being done by various players. This
                    API Landscape aims to capture all of the tools available
                    that enable digital ecosystem expansion and to give insights
                    into the dynamism and growth of APIs around the world and
                    across all industries.
                  </p>
                </div>
              </div>

              <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                <div className="col-md-3 d-flex align-items-center">
                  <img src="../about-icon1.png" alt="" className="xd-icon" />
                  <h5 className="ms-3 fw-bold text-company-color">
                    Industry <br />
                    categorisations
                  </h5>
                </div>
                <div className="col-md-9 ">
                  <p className="mt-3 text-company-color">
                    We have categorised API tool providers into their
                    predominant function, however, at times, tools have been
                    allocated to more than one category when their feature range
                    is sufficiently diverse
                  </p>
                </div>
              </div>

              <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                <div className="col-md-3 d-flex align-items-center">
                  <img src="../about-icon2.png" alt="" className="xd-icon" />
                  <h5 className="ms-3 fw-bold text-company-color">
                    Why isn’t my tool listed?
                  </h5>
                </div>
                <div className="col-md-9 ">
                  <p className="mt-3 text-company-color">
                    We aim to be comprehensive in our list of all tools. Please
                    complete our form to{" "}
                    <a
                      href="https://airtable.com/shr07pWSbRnQfnZZd"
                      className="m-0 badge bg-dark-orange text-white rounded"
                      target="_blank"
                    >
                      add your tool
                    </a>{" "}
                    to our catalogue
                  </p>
                </div>
              </div>

              <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                <div className="col-md-3 d-flex align-items-center">
                  <img src="../about-icon3.png" alt="" className="xd-icon" />
                  <h5 className="ms-3  fw-bold text-company-color">
                    Where does the data come from?
                  </h5>
                </div>
                <div className="col-md-9 ">
                  <p className="mt-3 text-company-color">
                    We manually check each API tool provider at least once
                    annually and we collect data on blog posts, positions vacant
                    and new feature development on a quarterly basis. We also
                    confirm data against industry leading datasets including
                    Crunchbase, LinkedIn, Clearbit and API Evangelist.
                  </p>
                </div>
              </div>
            </div>
          </section>  */}

          <section className="pb-24 pt-14 bg-[var(--dark-blue)] ">
            <div className="max-w-screen-lg mx-auto">
              {/* <h3 className="text-center fw-bold my-5 text-white">
                See something you want to change?
              </h3> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="change-box grid gap-y-5">
                  <div className="flex justify-center ">
                    <img
                      src="../about-btn1.png"
                      alt=""
                      className="w-[80px] h-[80px]"
                    />
                  </div>
                  <button
                    className="btn-about text-white font-bold uppercase text-[18px]"
                    onClick={() =>
                      handleForm("https://airtable.com/shr07pWSbRnQfnZZd")
                    }
                  >
                    Add your API tool
                  </button>
                </div>

                <div className="change-box grid gap-y-5">
                    <div className="flex justify-center">
                      <img
                        src="../about-btn2.png"
                        alt=""
                        className="w-[80px] h-[80px]"
                      />
                    </div>
                    {/* <p className="pt-1 text-company-color">
                      Report a bug including problems with the website or with
                      the data for a specific tool provider
                    </p> */}
                    <button
                      className="btn-about text-white font-bold uppercase text-[18px]"
                      onClick={() =>
                        handleForm(
                          "https://airtable.com/appURuyaoJN8JyTMv/shrZv8zH54LDpDq8i"
                        )
                      }
                    >
                      Report a bug
                    </button>
                </div>

                <div className="change-box grid gap-y-5">
                    <div className="flex justify-center">
                      <img
                        src="../about-btn3.png"
                        alt=""
                        className="w-[80px] h-[80px]"
                      />
                    </div>
                    {/* <p className="pt-1 text-company-color">
                      Share a new feature idea, including any additional data
                      points you would like to see{" "}
                    </p> */}
                    <button
                      className="btn-about text-white font-bold uppercase text-[18px]"
                      onClick={() =>
                        handleForm(
                          "https://airtable.com/appURuyaoJN8JyTMv/shrZv8zH54LDpDq8i"
                        )
                      }
                    >
                      New feature idea
                    </button>
                </div>
              </div>
            </div>
          </section>
          </>
  )
}
