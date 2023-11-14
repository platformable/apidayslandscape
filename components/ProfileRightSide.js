import Unknown from "./Unknown";
export default function ProfileRightSide({
  selectedCompany,
  handleImages,
  handleScore,
  reduceThounsand,
  reduceNumber,
}) {
  const {
    name,
    logo,
    url,
    description,
    category,
    subcategory,
    yearFounded,
    founderNames,
    headquartersCountry,
    headquartersCity,
    crunchbase,
    linkedin,
    github,
    twitter,
    developerPortal,
    estimatedRevenueRange,
    numbersOfCustomers,
    headcount,
    nonWhitePeopleInManagement,
    womanInManagement,
    numberOfPositionsVacantInPastYear,
    totalNumberOfNewProducFeaturesInLastYear,
    totalProductsActive,
    patentsGranted,
    acquisitions,
    activeTechCount,
    itSpend,
    acquiredBy,
    privacyBreaches,
    top5Investors,
    stage,
    totalFunding,
    lastFundingDate,
    numberLeadOfLeadInvestors,
    numberOfInvestors,
    acquisitionPrice,
    acquisitionType,
    ipoDate,
    moneyRaisedAtIpo,
    valuationAtIpo,
    industryGroups,
    knownPartnershipsNonApi,
    knownPartnershipsApi,
    apidays2018,
    apidays2019,
    apidays2020,
    apidays2021,
    logoApiIndustry,
    privacySpecificFeaturesIncluded,
    blogQ12021,
    blogQ22021,
    blogQ32021,
    blogQ42021,
    openSource,
  } = selectedCompany;

  const handleColors = () => {
    const arr = [
      "industries-working-1",
      "industries-working-2",
      "industries-working-3",
      "industries-working-4",
      "industries-working-5",
      "industries-working-6",
      "industries-working-7",
      "industries-working-8",
      "industries-working-9",
      "industries-working-10",
      "industries-working-11",
    ];
    const color = Math.floor(Math.random() * arr.length);
    const selectedColor = arr[color];
    return selectedColor;
  };

  return (
    <div className="profile-right-side grid gap-y-5">
      <section
        id="first-row"
        className="save-section profile-row profile-row-4"
      >
        <div className="profile-stats-card">
          {headcount ? (
            <span className="fw-bold my-2 px-2">{headcount}</span>
          ) : (
            <span className="fw-bold my-2 px-2"> - </span>
          )}
          <span className=" m-0 px-2 sm-text ">Headscount</span>

          <img
            src="../../apilandscape_headcount_80x50_companies card.png"
            alt=""
            className="xd-icon my-1 px-2"
          />
        </div>

        <div className="profile-stats-card">
          
          <h6 className="fw-bold my-2 px-2">
            {handleScore(womanInManagement, nonWhitePeopleInManagement)}
          </h6>
          <span className=" m-0 px-2 sm-text">
            Diversity Scoress
          </span>
          <img
            src="../../apilandscape_diversity_spot_80x50.png"
            alt=""
            className="xd-icon my-1 px-2"
          />
        </div>

        <div className="profile-stats-card">
          
          {womanInManagement ? (
            <h6 className="fw-bold my-2 px-2">{womanInManagement}</h6>
          ) : (
            <Unknown />
          )}
          <span className=" m-0 px-2 sm-text">
            Women in management?
          </span>
          <img
            src="../../apilandscape__women_in_management_50x55.png"
            alt=""
            className="sd-icon my-1 px-2"
          />
        </div>

        <div className="profile-stats-card">
          
          {nonWhitePeopleInManagement ? (
            <h6 className="fw-bold my-2 px-2">{nonWhitePeopleInManagement}</h6>
          ) : (
            <Unknown />
          )}
          <span className=" m-0 px-2 sm-text">
            Diverse management?
          </span>
          <img
            src="../../apilandscape__diverse_management_50x55.png"
            alt=""
            className="sd-icon my-1 px-2"
          />
        </div>
      </section>


      <section
        id="second-row"
        className="save-section profile-row profile-row-3"
      >
        <div className="profile-stats-card">
            <h6>
              <span className="">{stage ? stage : "-"}</span>
            </h6>
            <span className=" m-0 px-2 sm-text mb-3">Stage (Seed, A, B, C)</span>

        </div>{" "}
        <div className="profile-stats-card">
          {totalFunding ? (
            <h6>
              <span className="">{reduceNumber(totalFunding)}</span>
            </h6>
          ) : (
            <Unknown />
          )}
          <span className=" m-0 px-2 sm-text mb-3">Total Funding</span>

          <img
            src="../../apilandscape_total_funding__60x45.png"
            alt=""
            className="md-icon "
          />
        </div>
        <div className="profile-stats-card">

          {lastFundingDate ? (
            <h6>
              <span className=" sm-text">{lastFundingDate}</span>
            </h6>
          ) : (
            <Unknown />
          )}
          <span className=" m-0 px-2 sm-text mb-3 ">Last funding date</span>

          <img
            src="../../apilandscape_last_funding_date__60x45.png"
            alt=""
            className="md-icon"
          />
        </div>
      </section>


      <section
        id="third-row"
        className="save-section profile-row profile-row-4"
      >
        <div className="profile-stats-card">
          
          {ipoDate ? (
            <h6>
              <span className="badge  fw-bold">{ipoDate}</span>
            </h6>
          ) : (
            <Unknown />
          )}
          <span className=" m-0 px-2 sm-text">
            IPO <br /> Date
          </span>
          <img
            src="../../apilandscape_IPO_date__60x45.png"
            alt=""
            className="md-icon"
          />
        </div>

        <div className="profile-stats-card">
          
          {moneyRaisedAtIpo ? (
            <h6>
              <span className="badge  text-black">{moneyRaisedAtIpo}</span>
            </h6>
          ) : (
            <Unknown />
          )}
          <span className=" m-0 px-2 sm-text text-center">
            Money Raised at IPO
          </span>
          <img
            src="../../apilandscape_money_raised_at_IPO_60x45.png"
            alt=""
            className="md-icon"
          />
        </div>

        <div className="profile-stats-card">
          
          {valuationAtIpo ? (
            <h6>
              <span className="badge fw-bold">{valuationAtIpo}</span>
            </h6>
          ) : (
            <Unknown />
          )}
          <span className=" m-0 px-2 sm-text">
            Valuation at IPO
          </span>
          <img
            src="../../apilandscape_valuation_at_IPO_60x45.png"
            alt=""
            className="md-icon"
          />
        </div>

        <div className="profile-stats-card">
          {acquisitions ? (
            <h6 className="text-center fw-bold">{acquisitions}</h6>
          ) : (
            <Unknown />
          )}
          <span className=" m-0 px-2 sm-text">
            Acquisition (of other entities)
          </span>
          <img
            src="../../apilandscape_acquisitions_60x50.png"
            alt=""
            className="sd-icon"
          />
          
        </div>
      </section>


      <section
        id="fourth-row"
        className="save-section profile-row profile-row-4"
      >
        <div className="profile-stats-card">
          
            {totalProductsActive ? (
                <h6 className="text-center fw-bold">{totalProductsActive}</h6>
            ) : (
                <Unknown />
            )}
            <span className=" m-0 px-2 sm-text">
                Active products
            </span>
            <img
                src="../../apilandscape_active_products_60x50.png"
                alt=""
                className="sd-icon"
            />
        </div>{" "}
        
        <div className="profile-stats-card">
           
            {patentsGranted ? (
                <h6 className="text-center fw-bold">{patentsGranted}</h6>
                ) : (
                <Unknown />
                )}
            <span className=" m-0 px-2 sm-text">
              Patents Granted
            </span>
            <img
              src="../../apilandscape_patents_granted_60x50.png"
              alt=""
              className="sd-icon"
            />
        
        </div>
        <div className="profile-stats-card">Princing model</div>
        
        <div className="profile-stats-card">
          {/* /link */}
          Pricing page
        </div>

      </section>
      

      <section id="fifth-row" className="save-section profile-stats-card">
        <span>Check the content addressing:</span>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <li className="rounded p-2 shadhow"></li>
          <li className="rounded p-2 shadhow"></li>
          <li className="rounded p-2 shadhow"></li>
          <li className="rounded p-2 shadhow"></li>
        </ul>
      </section>


      <section id="sixt-row" className="save-section profile-row profile-row-2">
        <div className="profile-stats-card">
          <div className="flex items-center">
            <img
              src="../../apilandscape_known_standards_used_integrated_60x50.png"
              alt=""
              className="xd-icon"
            />
            <span className=" m-0 px-2 sm-text">
              Known standards used/integrated
            </span>
          </div>{" "}
          {/* features-top */}
          <span className="text-center md-text">Coming Soon</span>
        </div>

        <div className="profile-stats-card">
          <div className="flex items-center">
            <img
              src="../../apilandscape_privacy_specific_features_60x50.png"
              alt=""
              className="xd-icon"
            />
            <span className=" m-0 px-2 sm-text">
              Privacy specific features included
            </span>
          </div>{" "}
          {/* features-top */}
          {privacySpecificFeaturesIncluded ? (
            <span className="sm-text p-3">{privacySpecificFeaturesIncluded}</span>
          ) : (
            <Unknown />
          )}
        </div>

      </section>


      <section
        id="seventh-row"
        className="save-section profile-row profile-row-2"
      >
        <div className="profile-stats-card">
          <div className="known-partnership-container d-flex ">
            <img
              src="../../apilandscape__known_partnerships_API_45x45.png"
              alt=""
              className="md-icon"
            />
            <span className=" m-0 px-2 sm-text">
              Known partnerships <br />
              (API industry)
            </span>
          </div>
          <div className="known-partnership-logo d-flex flex-wrap align-items-center  ms-2">
            {logoApiIndustry ? (
              logoApiIndustry.split(",").map((logo, index) => {
                return (
                  <div className="partnertship-logo">
                    <img src={handleImages(logo)} className="img-fluid me-1" />
                  </div>
                );
              })
            ) : (
              <Unknown />
            )}
          </div>{" "}
          {/* known-partnership-logo */}
        </div>
        <div className="profile-stats-card">
          <div className="known-partnership-container d-flex ">
            <img
              src="../../apilandscape__known_partnerships_no_API_45x45.png"
              alt=""
              className="md-icon"
            />
            <span className=" m-0 px-2 sm-text">
              Known partnerships <br />
              (Non-API industry)
            </span>
          </div>
          <div className="known-partnership-logo  text-center flex-grow-1 ms-2">
            {knownPartnershipsNonApi ? (
              knownPartnershipsNonApi.split(",").map((partner, index) => {
                return (
                  <>
                    <span className="sm-text my-2 fw-bold me-1">{partner}</span>
                  </>
                );
              })
            ) : (
              <Unknown />
            )}
            {/* <span className="badge bg-secondary m-1">Royale Oceaninc Super Yatchs</span> */}
          </div>{" "}
          {/* known-partnership-logo */}
        </div>
      </section>


      <div className="update-company d-flex justify-content-center bg-gray my-5">
        <a
          href="https://platformable.typeform.com/to/KDwe0Tbk"
          target="_blank"
          className="btn bg-company-orange-color text-white mx-0"
        >
          Update company data
        </a>
        {/* <span className="text-sm text-gray">Wrong info? suggest </span> */}
      </div>
    </div>
  );
}
