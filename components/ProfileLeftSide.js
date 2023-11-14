import styles from "../styles/ProfileLeftSide.module.css";

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

  return (
    <div className="company-profile-left-column bg-white   p-5">
      <div className="company-name">
        <h3 className="p-0 m-0 mb-5 fw-bold text-center text-[#243672]">
          {name}
        </h3>
      </div>{" "}
      {/* company name */}
      <div className="company-logo d-flex justify-content-center align-items-center my-5">
        <a href={url} target="_blank">
          {logo === "" || null ? (
            <img
              src={`../../../apidaysReplacementLogo.png`}
              alt=""
              className=""
            />
          ) : (
            <img
              srcSet={`${handleImages(logo)} 2x`}
              alt=""
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
              className={`text-center bg-[#98BDFF] my-1 text-[#083ECB] d-block border-[#F69902] ${styles.orangeBorder}`}
            >
              {cluster}
            </span>
          );
        })}

        {categories?.map((category, index) => {
          return (
            <span
              key={index}
              className={`text-center bg-[#E6EFFF] my-1 text-[#083ECB] d-block ${styles.orangeBorder}`}
            >
              {category}
            </span>
          );
        })}

        {subcategories?.map((subcategory, index) => {
          return (
            <span
              key={index}
              className={`text-center bg-[#ffffff] my-1 text-[#083ECB] d-block ${styles.orangeBorder}`}
            >
              {subcategory}
            </span>
          );
        })}

        <div className="open-source d-flex justify-content-center">
          {openSource === "TRUE" ? (
            <p className="sm-text mt-1 ml-2 open-source-text me-2 fw-bold text-center">
              Open source
            </p>
          ) : (
            ""
          )}
        </div>
      </div>{" "}
      {/* company category */}
      <div className="description mt-4 mb-5">
        <p className="text-[#243672]">{description}</p>
      </div>{" "}
      {/* company description */}
      <div className="founded">
        <div className="founded-top">
          <div className="founded-top-left">
            <div className="icon">
              <img src="/founded_icon.svg" alt="" className="icon" />
            </div>{" "}
            {/* icon */}
            <div className="foundedIn-text ml-5">
              <p className="sm-text mt-1 ml-2 text-[#083ECB]">Founded in</p>
            </div>
            <div className="year">
              <p className="fw-bold mx-1 #243672">{yearFounded}</p>
            </div>
          </div>
          {/*  founded top left */}
          <div className="founded-top-left">
            <div className="icon">
              <img src="/founder_icon.svg" alt="" className="icon" />
            </div>{" "}
            {/* icon */}
            <div className="foundedIn-text ml-2">
              <p className="sm-text mt-1 ml-2 text-[#083ECB]">Founder(s)</p>
            </div>
            <div className="year ">
              <p className="fw-bold mx-1">{founderNames}</p>
            </div>
          </div>
          {/*  founded top left */}

          <div className="founded-top-left">
            <div className="icon">
              <img src="/headquarter_icon.svg" alt="" className="icon" />
            </div>{" "}
            {/* icon */}
            <div className="foundedIn-text ml-2">
              <p className="sm-text mt-2 ml-2 text-[#083ECB]">Headquarter</p>
            </div>
            <div className="year ">
              <p className="fw-bold mx-1 mt-1 text-[#243672]">
                {headquartersCity}, {headquartersCountry}
              </p>
            </div>
          </div>
          {/*  founded top left */}
          {url && (
            <div className="founded-top-left">
              <div className="icon">
                <img src="/website_icon.svg" alt="" className="icon" />
              </div>{" "}
              {/* icon */}
              <div className="foundedIn-text ml-2">
                <p className="sm-text mt-2 ml-2 text-[#243672]">{url}</p>
              </div>
            </div>
          )}
          {github && (
            <div className="founded-top-left">
              <div className="icon">
                <img src="/github_icon.svg" alt="" className="icon" />
              </div>{" "}
              {/* icon */}
              <div className="foundedIn-text ml-2">
                <p className="sm-text mt-2 ml-2 text-[#243672]">{github}</p>
              </div>
            </div>
          )}
          {linkedin && (
            <div className="founded-top-left">
              <div className="icon">
                <img src="/linkedin_icon.svg" alt="" className="icon" />
              </div>{" "}
              {/* icon */}
              <div className="foundedIn-text ml-2">
                <p className="sm-text mt-2 ml-2 text-[#243672]">{linkedin}</p>
              </div>
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
              alt=""
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
              alt=""
              className="rounded"
              onClick={() => handleSocial(linkedin)}
            />
          </li>
        )}
        {github && (
          <li className="list-group-item border-0">
            <img
              src="https://logo.clearbit.com/github.com"
              alt=""
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
