import styles from "../styles/Profilepage.module.css";

const textNewBlue = 'text-[#243672]'

function ProfileLeftSide({ selectedCompany, handleImages }) {
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
    openSource,
  } = selectedCompany;

  const newParentCategorySlug = [...new Set(cluster.split(","))];
  const categories = [...new Set(category.split(","))];
  const subcategories = [...new Set(subcategory.split(","))];
  
  const textNewBlue = 'text-[#243672] text-lg'
  const foundedRows = 'flex items-center gap-x-2 items-center'  
  return (
    <div className={`company-profile-left-column bg-white ${styles.rightShadow}  ${textNewBlue}  p-5`}>
      <div className="company-name">
        <h3 className="p-0 m-0 mb-5 font-bold text-center ">
          {name}
        </h3>
      </div>{" "}
      {/* company name */}
      <div className="company-logo flex justify-center items-center my-5">
        <a href={url} target="_blank">
          {logo === "" || null ? (
            <img
              src={`../../../apidaysReplacementLogo.png`}
              alt="icon"
              className=""
            />
          ) : (
            <img
              srcSet={`${handleImages(logo)} 2x`}
              alt="icon"
              className="img-fluid"
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
              className={`text-center bg-[#98BDFF] my-1 text-[#083ECB] block border-[#F69902] ${styles.orangeBorder}`}
            >
              {cluster}
            </span>
          );
        })}

        {categories?.map((category, index) => {
          return (
            <span
              key={index}
              className={`text-center bg-[#E6EFFF] my-1 text-[#083ECB] block ${styles.orangeBorder}`}
            >
              {category}
            </span>
          );
        })}

        {subcategories?.map((subcategory, index) => {
          return (
            <span
              key={index}
              className={`text-center bg-[#ffffff] my-1 text-[#083ECB] block ${styles.orangeBorder}`}
            >
              {subcategory}
            </span>
          );
        })}

        <div className="open-source flex justify-center">
          {openSource === "TRUE" ? (
            <p className="text-sm mt-1 ml-2 open-source-text me-2 font-bold text-center">
              Open source
            </p>
          ) : (
            ""
          )}
        </div>
      </div>{" "}
      {/* company category */}
      <div className="description mt-4 mb-5">
        <p className={`${textNewBlue}`}>{description}</p>
      </div>{" "}
      {/* company description */}
      <div className="founded">
        <div className="founded-top grid gap-y-3">
          <div className={`${foundedRows} `}>
            <div className="">
              <img src="/founded_icon.svg" alt="icon" className="icon" />
            </div>{" "}
            {/* icon */}
              <span className="text-sm text-[#083ECB]">Founded in</span>
              <span className={`${textNewBlue} text-base font-bold`}>{yearFounded}</span>
          </div>
          {/*  founded top left */}
          <div className={`flex gap-x-2 items-start`}>
            <div className="flex items-center gap-x-2">
              <img src="/founder_icon.svg" alt="icon" className="icon" />
              <span className="text-sm text-[#083ECB]">Founder(s)</span>

            </div>{" "}
            {/* icon */}
              <span className="font-bold text-base">{founderNames}</span>
          </div>
          {/*  founded top left */}

          <div className={`${foundedRows} `}>
            <div className="icon">
              <img src="/headquarter_icon.svg" alt="icon" className="icon" />
            </div>{" "}
            {/* icon */}
              <span className="text-sm text-[#083ECB]">Headquarter</span>
              <span className="font-bold text-base">
                {headquartersCity}, {headquartersCountry}
              </span>
          </div>
          {/*  founded top left */}
          {url && (
            <div className={`${foundedRows} `}>
              <div className="icon">
                <img src="/website_icon.svg" alt="icon" className="icon" />
              </div>{" "}
              {/* icon */}
                <span className="text-sm font-semibold underline">{url}</span>
            </div>
          )}
          {github && (
            <div className={`${foundedRows} `}>
              <div className="icon">
                <img src="/github_icon.svg" alt="icon" className="icon" />
              </div>{" "}
              {/* icon */}
                <span className="text-sm font-semibold underline">{github}</span>
            </div>
          )}
          {linkedin && (
            <div className={`${foundedRows} `}>
              <div className="icon">
                <img src="/linkedin_icon.svg" alt="icon" className="icon" />
              </div>{" "}
              {/* icon */}
                <span className="text-sm font-semibold underline">{linkedin}</span>
            </div>
          )}
        </div>
      </div>{" "}
      {/* company founded */}
      {/*  <div className="company-social-urls ">
      
        {github && (
          <li className="list-group-item border-0 ">
            <img
              src="/github_icon.svg"
              alt="icon"
              className="rounded"
              onClick={() => handleSocial(crunchbase)}
            />
          </li>
        )}
        {linkedin && (
          <li className="list-group-item border-0">
            {" "}
            <img
              src="/linkedin_icon.svg"
              alt="icon"
              className="rounded"
              onClick={() => handleSocial(linkedin)}
            />
          </li>
        )}
        {github && (
          <li className="list-group-item border-0">
            <img
              src="https://logo.clearbit.com/github.com"
              alt="icon"
              className="rounded"
              onClick={() => handleSocial(github)}
            />
          </li>
        )}
       
      </div>{" "} */}
      {/* company-socials-url */}
      <div className="update-company justify-content-center bg-gray my-5 grid">
        <h4 className="font-bold text-[#083ECB] text-center mb-5">
          Is this your tool?
        </h4>
        <a
          href="https://platformable.typeform.com/to/KDwe0Tbk"
          target="_blank"
          className="bg-[#1060FF] shadow-md px-10 py-3  text-white uppercase rounded"
        >
          Update details here
        </a>
        {/* <span className="text-sm text-gray">Wrong info? suggest </span> */}
      </div>
    </div>
  );
}

export default ProfileLeftSide;
