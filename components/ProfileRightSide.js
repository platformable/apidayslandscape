import Link from "next/link";
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
  console.log(selectedCompany)

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
            <span className="font-semibold my-2 ">{headcount}</span>
          ) : (
            <span className="font-semibold my-2 "> - </span>
          )}
          <span className="font-semibold text-sm ">Headcount</span>

          <img
            src="../../apilandscape_headcount_80x50_companies card.png"
            alt=""
            className="xd-icon"
          />
        </div>

        <div className="profile-stats-card">
          
          <span className="font-semibold my-2 ">
            {handleScore(womanInManagement, nonWhitePeopleInManagement)}
          </span>
          <span className="font-semibold text-sm">
            Diversity Scoress
          </span>
          <img
            src="../../apilandscape_diversity_spot_80x50.png"
            alt=""
            className="xd-icon"
          />
        </div>

        <div className="profile-stats-card">
          
          {womanInManagement ? (
            <span className="font-semibold my-2 ">{womanInManagement}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">
            Women in management?
          </span>
          <img
            src="../../apilandscape__women_in_management_50x55.png"
            alt=""
            className="sd-icon"
          />
        </div>

        <div className="profile-stats-card">
          
          {nonWhitePeopleInManagement ? (
            <span className="font-semibold my-2 ">{nonWhitePeopleInManagement}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">
            Diverse management?
          </span>
          <img
            src="../../apilandscape__diverse_management_50x55.png"
            alt=""
            className="sd-icon"
          />
        </div>
      </section>


      <section
        id="second-row"
        className="save-section profile-row profile-row-3"
      >
        <div className="profile-stats-card">
              <span className="font-semibold my-2">{stage ? stage : "-"}</span>
            <span className="font-semibold text-sm">Stage (Seed, A, B, C)</span>

        </div>{" "}
        <div className="profile-stats-card">
          {totalFunding ? (
              <span className="font-semibold">{reduceNumber(totalFunding)}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Total Funding</span>

          <img
            src="../../apilandscape_total_funding__60x45.png"
            alt=""
            className="md-icon "
          />
        </div>
        <div className="profile-stats-card">

          {lastFundingDate ? (
              <span className="font-semibold text-sm">{lastFundingDate}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm ">Last funding date</span>

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
              <span className="font-semibold">{ipoDate}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">
            IPO Date
          </span>
          <img
            src="../../apilandscape_IPO_date__60x45.png"
            alt=""
            className="md-icon"
          />
        </div>

        <div className="profile-stats-card">
          
          {moneyRaisedAtIpo ? (
              <span className="font-semibold">{moneyRaisedAtIpo}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm text-center">
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
              <span className="font-semibold ">{valuationAtIpo}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">
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
            <span className="font-semiboldtext-center ">{acquisitions}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">
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
                <span className="font-semibold text-center ">{totalProductsActive}</span>
            ) : (
                <Unknown />
            )}
            <span className="font-semibold text-sm">
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
                <span className="font-semibold text-center ">{patentsGranted}</span>
                ) : (
                <Unknown />
                )}
            <span className="font-semibold text-sm">
              Patents Granted
            </span>
            <img
              src="../../apilandscape_patents_granted_60x50.png"
              alt=""
              className="sd-icon"
            />
        
        </div>
        <div className="profile-stats-card">
        {patentsGranted ? (
                <span className="font-semibold text-center ">{patentsGranted}</span>
                ) : (
                <Unknown />
                )}
            <span className="font-semibold text-sm">
              Pricing Model
            </span>
            <img
              src="../../apilandscape_patents_granted_60x50.png"
              alt=""
              className="sd-icon"
            />
        </div>
        
        <div className="profile-stats-card">
            <Link href="#">
                <button className="font-semibold text-sm mt-3 p-2 shadow bg-[#F5F9FF] shadow-md rounded-md ">
                Pricing page
                </button>
            </Link>
            <img
              src="../../apilandscape_patents_granted_60x50.png"
              alt=""
              className="sd-icon"
            />
        </div>

      </section>
      

      <section id="fifth-row" className="save-section profile-stats-card text-left">
        <div className="flex justify-start">
            <span className="font-semibold ">Check the content addressing:</span>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <li className="rounded p-2 shadhow"></li>
          <li className="rounded p-2 shadhow"></li>
          <li className="rounded p-2 shadhow"></li>
          <li className="rounded p-2 shadhow"></li>
        </ul>
      </section>


      <section id="sixt-row" className="save-section profile-row profile-row-2">
        <div className="profile-stats-card">
          <div className="flex gap-3 items-center w-full">
            <img
              src="../../apilandscape_known_standards_used_integrated_60x50.png"
              alt=""
              className="xd-icon"
            />
            <span className="font-semibold text-sm">
              Known standards used/integrated
            </span>
          </div>{" "}
          {/* features-top */}
          <span className="font-semiboldtext-center md-text">Coming Soon</span>
        </div>

        <div className="profile-stats-card">
          <div className="flex gap-3 items-center w-full">
            <img
              src="../../apilandscape_privacy_specific_features_60x50.png"
              alt=""
              className="xd-icon"
            />
            <span className="font-semibold text-sm">
              Privacy specific features included
            </span>
          </div>{" "}
          {/* features-top */}
          {privacySpecificFeaturesIncluded ? (
            <span className="font-semiboldtext-sm p-3">{privacySpecificFeaturesIncluded}</span>
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
          <div className="flex gap-3 items-center w-full">
            <img
              src="../../apilandscape__known_partnerships_API_45x45.png"
              alt=""
              className="md-icon"
            />
            <span className="font-semibold text-sm">
              Known partnerships 
              (API industry)
            </span>
          </div>
          <div className="known-partnership-logo d-flex flex-wrap align-items-center ">
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
          <div className="flex gap-3 items-center w-full">
            <img
              src="../../apilandscape__known_partnerships_no_API_45x45.png"
              alt=""
              className="md-icon"
            />
            <span className="font-semibold text-sm">
              Known partnerships 
              (Non-API industry)
            </span>
          </div>
          <div className="">
            {knownPartnershipsNonApi ? (
              knownPartnershipsNonApi.split(",").map((partner, index) => {
                return (
                  <>
                    <span className="font-semiboldtext-sm my-2  me-1">{partner}</span>
                  </>
                );
              })
            ) : (
              <Unknown />
            )}
            {/* <span className="font-semibold bg-secondary m-1">Royale Oceaninc Super Yatchs</span> */}
          </div>{" "}
          {/* known-partnership-logo */}
        </div>
      </section>

      
    </div>
  );
}
