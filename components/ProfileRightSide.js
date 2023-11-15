import Link from "next/link";
import Unknown from "./Unknown";
import styles from "../styles/Profilepage.module.css";


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
    knownStandardsUsed,
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
  console.log(selectedCompany);

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
  const textFormat = 'text-[#243672] text-lg'

  return (
    <div className="profile-right-side grid gap-y-5 text-[var(--dark-blue)] my-5">
      <section
        id="first-row"
        className="save-section profile-row profile-row-4"
      >
        <div className="profile-stats-card">
          {headcount ? (
            <span className={`${textFormat} font-semibold my-2`}>{headcount}</span>
          ) : (
            <span className={`${textFormat} font-semibold my-2`}> - </span>
          )}
          <span className="font-semibold text-sm ">Headcount</span>

          <img src="/profile/headcount_icon.svg" alt="icon" className="" />
        </div>

        <div className="profile-stats-card">
          <span className={`${textFormat} font-semibold my-2`}>
            {handleScore(womanInManagement, nonWhitePeopleInManagement)}
          </span>
          <span className="font-semibold text-sm">Diversity Scoress</span>
          <img src="/profile/diversity_score_icon.svg" alt="icon" className="" />
        </div>

        <div className="profile-stats-card">
          {womanInManagement ? (
            <span className={`${textFormat} font-semibold my-2`}>{womanInManagement}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Women in management?</span>
          <img src="/profile/women_icon.svg" alt="icon" className="" />
        </div>

        <div className="profile-stats-card">
          {nonWhitePeopleInManagement ? (
            <span className={`${textFormat} font-semibold my-2`}>
              {nonWhitePeopleInManagement}
            </span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Diverse management?</span>
          <img src="/profile/diverse_icon.svg" alt="icon" className="" />
        </div>
      </section>

      <section
        id="second-row"
        className="save-section profile-row profile-row-3"
      >
        <div className="profile-stats-card">
          {totalFunding ? (
            <span className={`${textFormat} font-semibold my-2`}>{reduceNumber(totalFunding)}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Total Funding</span>

          <img src="/profile/total_funding_icon.svg" alt="icon" className=" " />
        </div>

        <div className="profile-stats-card">
          <span className={`${textFormat} font-semibold my-2`}>{stage ? stage : "-"}</span>
          <span className="font-semibold text-sm">Stage (Seed, A, B, C)</span>
          <img src="/profile/stage_icon.svg" alt="icon" className="" />
        </div>
        
        <div className="profile-stats-card">
          {lastFundingDate ? (
            <span className={`${textFormat} font-semibold my-2`}>{lastFundingDate}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm ">Last funding date</span>

          <img src="/profile/last_funding_icon.svg" alt="icon" className="" />
        </div>
      </section>

      <section
        id="third-row"
        className="save-section profile-row profile-row-4"
      >
        <div className="profile-stats-card">
          {ipoDate ? (
            <span className={`${textFormat} font-semibold my-2`}>{ipoDate}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">IPO Date</span>
          <img src="/profile/IPODate_icon.svg" alt="icon" className="ml-3" />
        </div>

        <div className="profile-stats-card">
          {moneyRaisedAtIpo ? (
            <span className={`${textFormat} font-semibold my-2`}>{moneyRaisedAtIpo}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm text-center">
            Money Raised at IPO
          </span>
          <img src="/profile/money_raised_icon.svg" alt="icon" className="" />
        </div>

        <div className="profile-stats-card">
          {valuationAtIpo ? (
            <span className="font-semiboldmy-2 ">{valuationAtIpo}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Valuation at IPO</span>
          <img src="/profile/valuation_IPO_icon.svg" alt="icon" className="" />
        </div>

        <div className="profile-stats-card">
          {acquisitions ? (
            <span className={`${textFormat} font-semibold my-2`}>{acquisitions}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">
            Acquisition (of other entities)
          </span>
          <img src="/profile/acquisition_icon.svg" alt="icon" className="" />
        </div>
      </section>

      <section
        id="fourth-row"
        className="save-section profile-row profile-row-4"
      >
        <div className="profile-stats-card">
          {totalProductsActive ? (
            <span className={`${textFormat} font-semibold my-2`}>
              {totalProductsActive}
            </span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Active products</span>
          <img src="/profile/active_products_icon.svg" alt="icon" className="" />
        </div>{" "}
        <div className="profile-stats-card">
          {patentsGranted ? (
            <span className={`${textFormat} font-semibold my-2`}>{patentsGranted}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Patents Granted</span>
          <img src="/profile/patents_icon.svg" alt="icon" className="" />
        </div>
        <div className="profile-stats-card">
          {patentsGranted ? (
            <span className={`${textFormat} font-semibold my-2`}>{patentsGranted}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Pricing Model</span>
          <img src="/profile/pricing_icon.svg" alt="icon" className="" />
        </div>
        <div className="profile-stats-card">
          <Link href="#">
            <button className="font-semibold text-sm mt-3 px-4 py-3 shadow bg-[#F5F9FF] shadow-md rounded-md ">
              Pricing page
            </button>
          </Link>
          <img src="/profile/pricing_page_icon.svg" alt="icon" className="" />
        </div>
      </section>

      <section
        id="fifth-row"
        className="save-section profile-stats-card text-left px-4"
      >
        <div className="text-left text-sm w-full font-semibold">
          Check the content addressing:
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 2xl:gap-8 w-full my-2">
          <button className="font-semibold py-2 px-1 md:px-2 xl:px-3 shadow bg-[#F5F9FF] shadow-md rounded-md flex items-center gap-2 md:gap-3">
            <img src="/profile/banking_icon.svg" alt="icon" />
            <span className="text-sm">Banking/Finance</span>
          </button>
          <button className="font-semibold py-2 px-1 md:px-2 xl:px-3 shadow bg-[#F5F9FF] shadow-md rounded-md flex items-center gap-2 md:gap-3">
            <img src="/profile/health_sector_icon.svg" alt="icon" />
            <span className="text-sm">Health Sector</span>
          </button>
          <button className="font-semibold py-2 px-1 md:px-2 xl:px-3 shadow bg-[#F5F9FF] shadow-md rounded-md flex items-center gap-2 md:gap-3">
            <img src="/profile/government_icon.svg" alt="icon" />
            <span className="text-sm">Government</span>
          </button>
          <button className="font-semibold py-2 px-1 md:px-2 xl:px-3 shadow bg-[#F5F9FF] shadow-md rounded-md flex items-center gap-2 md:gap-3">
            <img src="/profile/sustainability_icon.svg" alt="icon" />
            <span className="text-sm">Sustainability</span>
          </button>
        </div>
      </section>

      <section id="sixt-row" className="save-section profile-row profile-row-2">
        <div className="profile-stats-card">
          <div className="flex gap-3 items-center w-full">
            <img src="/profile/known_standards_icon.svg" alt="icon" className="" />
            <span className="font-semibold text-sm">
              Known standards used/integrated
            </span>
          </div>{" "}
          {/* features-top */}
          <span className="font-semibold text-center md-text">
            {knownStandardsUsed ? (
              <span className={`${textFormat} font-semibold text-sm p-3`}>
                {knownStandardsUsed}
              </span>
            ) : (
              <Unknown />
            )}
          </span>
        </div>

        <div className="profile-stats-card">
          <div className="flex gap-3 items-center w-full">
            <img src="/profile/privacy_specific_icon.svg" alt="icon" className="" />
            <span className="font-semibold text-sm">
              Privacy specific features included
            </span>
          </div>{" "}
          {/* features-top */}
          {privacySpecificFeaturesIncluded ? (
            <span className={`${textFormat} font-semibold text-sm p-3`}>
              {privacySpecificFeaturesIncluded}
            </span>
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
              src="/profile/known_partnership_icon.svg"
              alt="icon"
              className=""
            />
            <span className="font-semibold text-sm">
              Known partnerships (API industry)
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
            <img src="/profile/known_non_API_icon.svg" alt="icon" className="" />
            <span className="font-semibold text-sm">
              Known partnerships (Non-API industry)
            </span>
          </div>
          <div className={`${textFormat}`}>
            {knownPartnershipsNonApi ? (
              knownPartnershipsNonApi.split(",").map((partner, index) => {
                return (
                  <>
                    <span className="font-semibold text-sm my-2  me-1">
                      {partner}
                    </span>
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
