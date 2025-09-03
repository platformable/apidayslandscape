import Link from "next/link"
import styles from "../styles/Profilepage.module.css"

function ProfileLeftSide({ selectedCompany }) {
  const {
    name,
    logo,
    url,
    cluster,
    description,
    category,
    subcategory,
    yearFounded,
    founderNames,
    headquartersCountry,
    headquartersCity,
    linkedin,
    github,
    opensource,
  } = selectedCompany

  const newParentCategorySlug = [...new Set(cluster?.split(","))]
  const categories = [...new Set(category?.split(","))]
  const subcategories = [...new Set(subcategory?.split(","))]

  console.log("selectedCompany", selectedCompany)
  const foundedRows = "flex items-center gap-x-2 items-center"
  return (
    <div
      className={`company-profile-left-column bg-white ${styles.rightShadow}  px-2 py-5 lg:py-10 md:px-4 xl:px-7`}
    >
      <div className="company-name">
        <h3 className="p-0 m-0 mb-5 font-bold text-center text-xl">{name}</h3>
      </div>{" "}
      {/* company name */}
      <div className="company-logo flex justify-center items-center my-5">
        <a href={url} target="_blank">
          {!logo || logo === "" || null ? (
            <img
              src={`/landscape_logo.svg`}
              alt="Company default logo"
              className="object-cover object-center"
            />
          ) : (
            <img
              src={logo}
              alt={`${name} company logo`}
              className="max-h-[170px]"
            />
          )}
        </a>
      </div>{" "}
      {/* company logo */}
      {/* <div className="company-url d-flex justify-content-center align-items-center">
               <a href={url} target="_blank">{url}</a>
             </div> */}{" "}
      {/* company url */}
      <div className="company-category mt-2 mb-2">
        {newParentCategorySlug?.map((cluster, index) => {
          return (
            <span
              key={index}
              className={`text-center bg-[var(--main-blue)] my-2 text-white block`}
            >
              {cluster}
            </span>
          )
        })}

        {categories?.map((category, index) => {
          return (
            <span
              key={index}
              className={`text-center bg-[var(--main-green)] my-2 text-white block`}
            >
              {category}
            </span>
          )
        })}

        {subcategories?.map((subcategory, index) => {
          return (
            <span
              key={index}
              className={`text-center  my-2 text-[var(--main-blue)] block border-2 border-[var(--main-green)]`}
            >
              {subcategory}
            </span>
          )
        })}

        {/*  <div className="open-source flex justify-center">
          {openSource === "TRUE" ? (
            <p className="text-sm mt-1 ml-2 open-source-text me-2 font-bold text-center">
              Open source
            </p>
          ) : (
            ""
          )}
        </div> */}
      </div>{" "}
      {/* company category */}
      <div className="description mt-6 mb-5 font-bold">
        <p className={`text-black text-xl`}>{description}</p>
      </div>{" "}
      <div className="open-source flex  mb-10">
        <>
          <img src="/openSource_icon.svg" alt="icon" className="icon" />
          <p className="text-[var(--main-blue)] text-sm mt-1 ml-2  me-2 font-bold">
            Open source :
          </p>
          <p className="text-sm mt-1 ml-2  me-2 font-bold">
            {opensource ? "Yes" : "No"}
          </p>
        </>
      </div>
      {/* company description */}
      <div className="founded">
        <div className="founded-top grid gap-y-3">
          <div className={`${foundedRows} `}>
            <div className="">
              <img src="/founded_icon.svg" alt="icon" className="icon" />
            </div>{" "}
            {/* icon */}
            <span className="text-sm text-[var(--main-blue)] font-bold">
              Founded in
            </span>
            <span className={`text-black text-base font-bold`}>
              {yearFounded}
            </span>
          </div>
          {/*  founded top left */}
          <div className={`${foundedRows} `}>
            <div className="flex items-center gap-x-2">
              <img src="/founder_icon.svg" alt="icon" className="icon" />
              <span className="text-sm text-[var(--main-blue)] font-bold">
                Founder(s)
              </span>
            </div>{" "}
            {/* icon */}
            <span className="font-bold text-base text-black">
              {founderNames || "-"}
            </span>
          </div>
          {/*  founded top left */}

          <div className={`${foundedRows} `}>
            <div className="icon">
              <img src="/headquarter_icon.svg" alt="icon" className="icon" />
            </div>{" "}
            {/* icon */}
            <span className="text-sm text-[var(--main-blue)] font-bold">
              Headquarter
            </span>
            {headquartersCountry && (
              <img
                src={`https://flagsapi.com/${headquartersCountry}/flat/64.png`}
                alt="flag icon"
                className="w-7"
              />
            )}
            <span className="font-bold text-base text-black">
              {headquartersCity
                ? `${headquartersCity}, ${headquartersCountry}`
                : "-"}
            </span>
          </div>
          {/*  founded top left */}
          {url && (
            <div className={`${foundedRows} `}>
              <div className="icon">
                <img src="/website_icon.svg" alt="icon" className="icon" />
              </div>{" "}
              {/* icon */}
              <Link href={url || "#"}>
                <span className="text-sm text-black font-semibold underline">
                  {url}
                </span>
              </Link>
            </div>
          )}
          {github && (
            <div className={`${foundedRows} `}>
              <div className="icon">
                <img src="/github_icon.svg" alt="icon" className="icon" />
              </div>{" "}
              {/* icon */}
              <Link href={github || "#"}>
                <span className="text-sm text-black font-semibold underline">
                  {github}
                </span>
              </Link>
            </div>
          )}
          {linkedin && (
            <div className={`${foundedRows} `}>
              <div className="icon">
                <img src="/linkedin_icon.svg" alt="icon" className="icon" />
              </div>{" "}
              {/* icon */}
              <Link href={linkedin || "#"}>
                <span className="text-sm text-black font-semibold underline">
                  {linkedin}
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>{" "}
      {/* company-socials-url */}
      <div className="update-company justify-content-center bg-gray my-5 grid">
        <h4 className="font-bold text-2xl text-[var(--main-blue)] text-center mb-5">
          Is this your tool?
        </h4>
        <Link
          href="/report"
          target="_blank"
          className="bg-[var(--main-blue)] btn-transition shadow-md px-10 py-3  uppercase rounded"
        >
          <center className="text-white text-lg font-medium ">
            Update details here
          </center>
        </Link>
        {/* <span className="text-sm text-gray">Wrong info? suggest </span> */}
      </div>
    </div>
  )
}

export default ProfileLeftSide
