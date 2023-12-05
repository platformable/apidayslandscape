import Link from "next/link";
import styles from "../styles/Profilepage.module.css";

const textNewBlue = 'text-[#243672]'

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
    openSource,
  } = selectedCompany;

  const newParentCategorySlug = [...new Set(cluster?.split(","))];
  const categories = [...new Set(category?.split(","))];
  const subcategories = [...new Set(subcategory?.split(","))];
  
  const textNewBlue = 'text-[#243672] text-lg'
  const foundedRows = 'flex items-center gap-x-2 items-center'  
  return (
    <div className={`company-profile-left-column bg-white ${styles.rightShadow}  ${textNewBlue} px-2 py-5 lg:py-10 md:px-4 xl:px-7`}>
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
           src={`/landscape_logo.svg`}
           alt=""
           className='object-cover object-center'
           
         />
          ) : (
            <img
              src={logo}
              alt={`${name} logo`}
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
          <div className={`${foundedRows} `}>
            <div className="flex items-center gap-x-2">
              <img src="/founder_icon.svg" alt="icon" className="icon" />
              <span className="text-sm text-[#083ECB]">Founder(s)</span>

            </div>{" "}
            {/* icon */}
              <span className="font-bold text-base">{founderNames ||'-'}</span>
          </div>
          {/*  founded top left */}

          <div className={`${foundedRows} `}>
            <div className="icon">
              <img src="/headquarter_icon.svg" alt="icon" className="icon" />
            </div>{" "}
            {/* icon */}
              <span className="text-sm text-[#083ECB] mr-2">Headquarter</span>
              {headquartersCountry && (
              <img
                src={`https://flagsapi.com/${headquartersCountry}/flat/64.png`}
                alt=""
                className="w-7"
              />
            )}

              <span className="font-bold text-base">
              {headquartersCity ? `${headquartersCity}, ${headquartersCountry}` : '-' }

              </span>
          </div>
          {/*  founded top left */}
          {url && (
              <div className={`${foundedRows} `}>
              <div className="icon">
                <img src="/website_icon.svg" alt="icon" className="icon" />
              </div>{" "}
              {/* icon */}
              <Link href={url || '#'} >

                <span className="text-sm text-[#243672] font-semibold underline">{url}</span>
              </Link>
            </div>
            
          )}
          {github && (
            <div className={`${foundedRows} `}>
              <div className="icon">
                <img src="/github_icon.svg" alt="icon" className="icon" />
              </div>{" "}
              {/* icon */}
              <Link href={github || '#'} >
                <span className="text-sm text-[#243672] font-semibold underline">{github}</span>
              </Link>
            </div>
          )}
          {linkedin && (
            <div className={`${foundedRows} `}>
              <div className="icon">
                <img src="/linkedin_icon.svg" alt="icon" className="icon" />
              </div>{" "}
              {/* icon */}

              <Link href={linkedin || '#'} >
                <span className="text-sm text-[#243672] font-semibold underline">{linkedin}</span>
              </Link>

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
        <Link
          href="https://airtable.com/appObH1ILShMbYp30/shrubDVNRrBRF8I0s"
          target="_blank"
          className="bg-[#1060FF] btn-transition shadow-md px-10 py-3  uppercase rounded"
        >
          <center className="text-white ">
            Update details here
          </center>
        </Link>
        {/* <span className="text-sm text-gray">Wrong info? suggest </span> */}
      </div>
    </div>
  );
}

export default ProfileLeftSide;
