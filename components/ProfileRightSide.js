import Link from "next/link";
import Unknown from "./Unknown";
import styles from "../styles/Profilepage.module.css";
import { reduceMillion, reduceThounsand } from "../helpers/functions.js";
import { Tooltip } from "react-tooltip";

export default function ProfileRightSide({ selectedCompany, handleScore }) {
  console.log("seleceted company", selectedCompany)
  const {
    headcount,
    nonWhitePeopleInManagement,
    womanInManagement,
    activeProducts,
    patentsGranted,
    acquisition,
    stage,
    totalFunding,
    lastFunding,
    moneyRaisedAtIpo,
    ipoDate,
    ipoValuation,
    knownPartnership,
    knownPartnershipNonAPI,
    knownStandardsUsed ,
    contentAddressingBanking,
    contentAddressingGovernment,
    contentAddressingHealth,
    contentAddressingSustainability,
    pricingPage,
    pricingModel,
    privacySpecific,
  } = selectedCompany;

  const textFormat = "text-[#243672] text-lg";

  return (
    <div className="profile-right-side grid gap-y-5 text-[var(--dark-blue)] my-5">
      <section
        id="first-row"
        className="save-section profile-row profile-row-4"
      >
        <div className="profile-stats-card">
          {headcount ? (
            <span className={`${textFormat} font-semibold my-2`}>
              {headcount}
            </span>
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
          <span className="font-semibold text-sm">Diversity Scores</span>
          <img
            src="/profile/diversity_score_icon.svg"
            alt="icon"
            className=""
          />
        </div>

        <div className="profile-stats-card">
          {womanInManagement ? (
            <span className={`${textFormat} font-semibold my-2`}>
              {womanInManagement}
            </span>
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
            <span className={`${textFormat} font-semibold my-2`}>
              {reduceMillion(totalFunding)}
            </span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Total Funding</span>

          <img src="/profile/total_funding_icon.svg" alt="icon" className=" " />
        </div>

        <div className="profile-stats-card">
          <span className={`${textFormat} font-semibold my-2`}>
            {stage ? stage : "-"}
          </span>
          <span className="font-semibold text-sm">Stage (Seed, A, B, C)</span>
          <img src="/profile/stage_icon.svg" alt="icon" className="" />
        </div>

        <div className="profile-stats-card">
          {lastFunding ? (
            <span className={`${textFormat} font-semibold my-2`}>
              {lastFunding}
            </span>
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
            <span className={`${textFormat} font-semibold my-2`}>
              {ipoDate}
            </span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">IPO Date</span>
          <img src="/profile/IPODate_icon.svg" alt="icon" className="ml-3" />
        </div>

        <div className="profile-stats-card">
          {moneyRaisedAtIpo ? (
            <span className={`${textFormat} font-semibold my-2`}>
              {reduceMillion(moneyRaisedAtIpo)}
            </span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm text-center">
            Money Raised at IPO
          </span>
          <img src="/profile/money_raised_icon.svg" alt="icon" className="" />
        </div>

        <div className="profile-stats-card">
          {ipoValuation ? (
            <span className={`${textFormat} font-semibold my-2`}>{reduceMillion(ipoValuation)}</span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Valuation at IPO</span>
          <img src="/profile/valuation_IPO_icon.svg" alt="icon" className="" />
        </div>

        <div className="profile-stats-card">
          {acquisition ? (
            <span className={`${textFormat} font-semibold my-2`}>
              {acquisition.split(",").join(", ")}
            </span>
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
          {activeProducts ? (
            <span className={`${textFormat} font-semibold my-2`}>
              {activeProducts}
            </span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Active products</span>
          <img
            src="/profile/active_products_icon.svg"
            alt="icon"
            className=""
          />
        </div>{" "}
        <div className="profile-stats-card">
          {patentsGranted ? (
            <span className={`${textFormat} font-semibold my-2`}>
              {patentsGranted}
            </span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Patents Granted</span>
          <img src="/profile/patents_icon.svg" alt="icon" className="" />
        </div>
        <div className="profile-stats-card">
          {pricingModel ? (
            <span className={`${textFormat} font-semibold my-2`}>
              {pricingModel}
            </span>
          ) : (
            <Unknown />
          )}
          <span className="font-semibold text-sm">Pricing Model</span>
          <img src="/profile/pricing_icon.svg" alt="icon" className="" />
        </div>
        <div className="profile-stats-card ">
          <Link
            target="_blank"
            href={pricingPage || "#"}
            className={`${!pricingPage ? "cursor-pointer" : "btn-transition"}`}
          >
            <button
              disabled={!pricingPage}
              data-tooltip-id="content-addressing"
              data-tooltip-content={
                pricingPage ? "" : "Information not available"
              }
              className={`${
                pricingPage ? "shadow-md " : "opacity-75"
              }  font-semibold text-sm mt-3 px-4 py-3 bg-[#F5F9FF] text-[var(--dark-blue)] rounded-md `}
            >
              Pricing page
            </button>
          </Link>
          <img src="/profile/pricing_page_icon.svg" alt="icon" className="" />
        </div>
      </section>
      <Tooltip
        backgroundColor="#0c4b6e"
        textColor="#fff"
        id="content-addressing"
        place="top"
        className="cluster-tooltip"
      />
      <section
        id="fifth-row"
        className="save-section profile-stats-card text-left px-4"
      >
        <div className="text-left text-sm w-full font-semibold">
          Check the content addressing:
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 2xl:gap-8 w-full my-2">
          <Link
            target="_blank"
            href={contentAddressingBanking || "#"}
            className={`${
              !contentAddressingBanking ? "cursor-pointer" : "btn-transition"
            } `}
          >
            <button
              disabled={!contentAddressingBanking}
              data-tooltip-content={
                contentAddressingBanking ? "" : "Information not available"
              }
              data-tooltip-id="content-addressing"
              className={`${
                contentAddressingBanking ? "shadow-md " : "opacity-75"
              } text-[var(--blue)]  font-semibold py-2 px-1 md:px-2 xl:px-3 w-full bg-[#F5F9FF] rounded-md flex items-center gap-2 md:gap-3`}
            >
              <img src="/profile/banking_icon.svg" alt="icon" />
              <span className="text-sm">Banking/Finance</span>
            </button>
          </Link>
          <Link
            target="_blank"
            href={contentAddressingHealth || "#"}
            className={`${
              !contentAddressingHealth ? "cursor-pointer" : "btn-transition"
            } `}
          >
            <button
              disabled={!contentAddressingHealth}
              data-tooltip-content={
                contentAddressingHealth ? "" : "Information not available"
              }
              data-tooltip-id="content-addressing"
              className={`${
                contentAddressingHealth ? "shadow-md " : "opacity-75"
              } text-[var(--blue)]  font-semibold py-2 px-1 md:px-2 xl:px-3 w-full bg-[#F5F9FF] rounded-md flex items-center gap-2 md:gap-3`}
            >
              <img src="/profile/health_sector_icon.svg" alt="icon" />
              <span className="text-sm">Health Sector</span>
            </button>
          </Link>
          <Link
            target="_blank"
            href={contentAddressingGovernment || "#"}
            className={`${
              !contentAddressingGovernment ? "cursor-pointer" : "btn-transition"
            } `}
          >
            <button
              disabled={!contentAddressingGovernment}
              data-tooltip-content={
                contentAddressingGovernment ? "" : "Information not available"
              }
              data-tooltip-id="content-addressing"
              className={`${
                contentAddressingGovernment ? "shadow-md " : "opacity-75"
              } text-[var(--blue)]  font-semibold py-2 px-1 md:px-2 xl:px-3 w-full bg-[#F5F9FF] rounded-md flex items-center gap-2 md:gap-3`}
            >
              <img src="/profile/government_icon.svg" alt="icon" />
              <span className="text-sm">Government</span>
            </button>
          </Link>
          <Link
            target="_blank"
            href={contentAddressingSustainability || "#"}
            className={`${
              !contentAddressingSustainability
                ? "cursor-pointer"
                : "btn-transition"
            } `}
          >
            <button
              disabled={!contentAddressingSustainability}
              data-tooltip-content={
                contentAddressingSustainability
                  ? ""
                  : "Information not available"
              }
              data-tooltip-id="content-addressing"
              className={`${
                contentAddressingSustainability ? "shadow-md " : "opacity-75"
              } text-[var(--blue)]  font-semibold py-2 px-1 md:px-2 xl:px-3 w-full bg-[#F5F9FF] rounded-md flex items-center gap-2 md:gap-3`}
            >
              <img src="/profile/sustainability_icon.svg" alt="icon" />
              <span className="text-sm">Sustainability</span>
            </button>
          </Link>
        </div>
      </section>

      <section id="sixt-row" className="save-section profile-row profile-row-2">
        <div className="profile-stats-card">
          <div className="flex gap-3 items-center w-full">
            <img
              src="/profile/known_standards_icon.svg"
              alt="icon"
              className=""
            />
            <span className="font-semibold text-sm">
              Known standards used/integrated
            </span>
          </div>{" "}
          {/* features-top */}
          <span className="font-semibold text-center md-text">
            {knownStandardsUsed  ? (
              <span className={`${textFormat} font-semibold text-sm p-3`}>
                {knownStandardsUsed }
              </span>
            ) : (
              <Unknown />
            )}
          </span>
        </div>

        <div className="profile-stats-card">
          <div className="flex gap-3 items-center w-full">
            <img
              src="/profile/privacy_specific_icon.svg"
              alt="icon"
              className=""
            />
            <span className="font-semibold text-sm">
              Privacy specific features included
            </span>
          </div>{" "}
          {/* features-top */}
          {privacySpecific ? (
            <span className={`${textFormat} font-semibold text-sm p-3`}>
              {privacySpecific}
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
          <div className={`${textFormat}  flex gap-x-2 flex-wrap`}>
            {knownPartnership ? (
                 (
                  <p className="font-semibold text-sm my-2 whitespace-pre-wrap">
                    {knownPartnership.split(',').join(", ")}
                  </p>
              )
            ) : (
              <Unknown />
            )}
          </div>{" "}
          {/* known-partnership-logo */}
        </div>
        <div className="profile-stats-card">
          <div className="flex gap-3 items-center w-full">
            <img
              src="/profile/known_non_API_icon.svg"
              alt="icon"
              className=""
            />
            <span className="font-semibold text-sm">
              Known partnerships (Non-API industry)
            </span>
          </div>
          <div className={`${textFormat} flex gap-x-2 flex-wrap`}>
            {knownPartnershipNonAPI ? (
              
                <span className="font-semibold text-sm my-2  me-1">
                    {knownPartnershipNonAPI.split(",").join(", ")}
                  </span>
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
