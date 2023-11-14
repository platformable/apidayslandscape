function ProfileLeftSide ({selectedCompany, handleImages}) {
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
      openSource
    } = selectedCompany;
  
    
  
  
  
    const newParentCategorySlug = [...new Set(category.split(","))]
  
    return (
      <div className="company-profile-left-column bg-white   p-5">
             <div className="company-name">
               <h3 className="p-0 m-0 mb-5 fw-bold">
               {name}
               </h3>
               </div> {/* company name */}
             <div className="company-logo d-flex justify-content-center align-items-center my-5">
             <a href={url} target="_blank">
             {logo === "" || null ? <img src={`../../../apidaysReplacementLogo.png`} alt=""  className=""/> : <img srcSet={`${handleImages(logo)} 2x`} alt="" className="img-fluid" /> }
             </a>
             </div> {/* company logo */}
             {/* <div className="company-url d-flex justify-content-center align-items-center">
               <a href={url} target="_blank">{url}</a>
             </div> */} {/* company url */}
             <div className="company-category mt-2 mb-2">
  
              {newParentCategorySlug?.map((category,index)=>{
  
                    return (<span className={`text-center badge my-1 text-black d-block
                    ${category.includes("API Lifecycle Platform") && "bg-dark-main-color text-white"}
                    ${category.includes("API Standards and Protocols") && "bg-dark-main-color text-white"}
                    ${category.includes("Media/Associations") && "bg-dark-main-color text-white"}
                    ${category.includes("Backend Building Tools") && "bg-dark-main-color text-white"}
                    ${category.includes("Business processes as an API/API-as-a-Product") && "bg-dark-main-color text-white"}
                    ${category.includes("Business processes as an API/API-as-a-Products") && "bg-dark-main-color text-white"}
                    ${category.includes("Integration Platform as a Service") && "bg-dark-main-color text-white"}
                    ${category.includes("Vertical API Abstractions") && "bg-dark-main-color text-white"}
                    `}>{category}</span>)
                  })} 
  
                  <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
                  </div>
  
   
  
    
                           { (<span className={`text-center badge mb-1 mt-1 text-black d-block
                            ${subcategory?.includes("API Management/API Gateway")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("API Consulting")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("API Analytics/Monitoring")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("API Design/Documentation Platforms")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("API Developer Portals")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("API Oriented IT Consulting Firms")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("API Testing")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("API Security")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Streaming/Event Architecture")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("IoT Platforms/Networks/Devices")&& "bg-light-company-color text-white"}
  
    ${subcategory?.includes("API Protocols")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("API Standards")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Media")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Associations")&& "bg-light-company-color text-white"}
  
    ${subcategory?.includes( "Accounting")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("AI/ML")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Audio/Visual")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Legal/Regulatory")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Time/Calendar")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Data governance/Data management")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("E-commerce")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Data")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Email/Messaging/Communications Platforms as a Service")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Forms")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Identity verification/KYC")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Human Resources")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Human-as-a-service")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Payments")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Search")&& "bg-light-company-color text-white"}
  
    ${subcategory?.includes("API Deployment/Back-end Building")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Banking/Finance/Insurance Backends")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Blockchain")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Headless CMS")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Infrastructure/Cloud/Serverless APIs")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Mobile Backend as a Service")&& "bg-light-company-color text-white"}
  
    ${subcategory?.includes("API Aggregators (General)")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Automation/Orchestration")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Database-as-a-service")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("API Aggregators (Finance)")&& "bg-light-company-color text-white"}
  
    ${subcategory?.includes("Cloud Storage")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Delivery/Transport/Logistics")&& "bg-light-company-color v"}
  
    ${subcategory?.includes("Healthcare")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Login")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Marketing/Analytics")&& "bg-light-company-color v"}
    ${subcategory?.includes("Finance")&& "bg-light-company-color text-white"}
    ${subcategory?.includes("Smart Home/Smart Facilities")&& "bg-light-company-color text-white"}
                       
  
                           
                            `}>{subcategory}</span>)
                            
                          }
                          {/* )}  */}
  
  <div className="open-source d-flex justify-content-center">
  
                 {openSource === "TRUE" ? <p className="sm-text mt-1 ml-2 open-source-text me-2 fw-bold text-center">Open source</p>: ""}
                 </div>
  
             </div> {/* company category */}
          
             <div className="description my-5">
             <p className="fst-italic">{description}</p>
             </div> {/* company description */}
             <div className="founded">
               <div className="founded-top">
             
                 <div className="founded-top-left">
                   <div className="icon">
                      <img src="../../apilandscape__founded_in_40x40.png" alt="" className="icon" />
                   </div> {/* icon */}
                   <div className="foundedIn-text ml-5">
                     <p className="sm-text mt-1 ml-2">Founded in</p> 
                   </div>
                   <div className="year">
                    <p className="fw-bold mx-1">{yearFounded}</p>
                   </div>
                 </div>{/*  founded top left */}
                 <div className="founded-top-left">
                   <div className="icon">
                      <img src="../../apilandscape__founder 40x40.png" alt="" className="icon" />
                   </div> {/* icon */}
                   <div className="foundedIn-text ml-2">
                     <p className="sm-text mt-1 ml-2">Founder(s)</p>
                   </div>
                   <div className="year ">
                    <p className="fw-bold mx-1">{founderNames}</p>
                   </div>
                 </div>{/*  founded top left */}
  
                 <div className="founded-top-left">
                   <div className="icon">
                      <img src="../../apilandscape__headquarter_40x40.png" alt="" className="icon" />
                   </div> {/* icon */}
                   <div className="foundedIn-text ml-2">
                     <p className="sm-text mt-2 ml-2">Headquarter</p>
                   </div>
                   <div className="year ">
                    <p className="fw-bold mx-1 mt-1">{headquartersCity}, {headquartersCountry}</p>
                   </div>
                 </div>{/*  founded top left */}
                 <div className="founded-top-right"></div>
               </div>
             </div> {/* company founded */}
  
  
             <div className="company-social-urls mt-2">
  
             <ul className="list-group list-group-horizontal border-0">
              
             {url && <li className="list-group-item border-0 ms-0 ps-0"><img src="../../sitio-web.png" alt=""  className="rounded" onClick={()=>handleSocial(url)}/></li>}
              {crunchbase && <li className="list-group-item border-0 "><img src="https://logo.clearbit.com/hot2tak.com" alt=""  className="rounded" onClick={()=>handleSocial(crunchbase)}/></li>}
              {linkedin && <li className="list-group-item border-0"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAe7X///8Ac7EAd7MAcLDs9fm71easzeIAcrH3/P0jhLpxqc3I3uv09/oAebQAdbKMuNbZ6fJFk8FZncczjb5lo8qEsdGcwdt6rtBQmMTR4+8vibzE2+rt9fkWgLeQu9dincbi7/YAZ6yjx94U8i/zAAAE+0lEQVR4nO2da3uiOhRGCUQFdYJivaBCh5n//x8PtrZnrGJeA0Q3z7vafpRmNZtcd9IgIIQQQgghhBBCCCGEeMWYKK2/omeXoydMGgdv681iM8vKMDTPLk7nRPqwXaovRpNcp4OSjML1/3qfFO8mfXaxuiPMKnVNstPPLlhXxH9v+J3YB4NodIz5GaD/VGM2gEg1wahRsCaXrxjdFVQqkx6ocXOInill9xrx1iaolvGzC9kG82YVVGoh+VW0x+gJwWFqVoig2sqtRA1VoUoCqbVoppCgUjuplZjaG9JP9lKbU6ydOSHU0BhUUOUyBzZQZ/jJRqZhNIMNJ+GzC+tEuoENxzINowVsOJfZ1DxgKLS7eCBKjzINozVsOJE5qDEH2HAhs7cwJkENhfb4QbxHDWW+hnVT8w4KzmV2hzUlaDgTGqT1DBgL0ySSOgMOTA4ZvosNUnCGmEjeZ4O6xJnM7v4MsCIsdMT2jTVOC7Ht6BeWnZlkKt7w/u5achAveH+HtCoHIBjc2eUeS+4nLridqVCs9VAE60i9kW2ySIcRoV9cZgxVk1zLHYw2cZH1NbD6++acuTe4yiOEEEII6ZF6CFV/1z9iM5KaqUeHsdbmkP/+vcqztzLVOh7QOQ8ThtP1dn45Ja32k0VexnHnK5dIeHQaQlGoV+OiadWkOO4C3WlVmnJqpylJGPjolZ/OJo2LQmeWizLuTjIc236fakym0ZYE8ROXBzYifbWScJtj1tn6CWZ4+93QjbF229DoWQX5nVjmHTm2MnysDsMDvOP8wbHsZMfLm6EBNkh+suniUJIvw3RaPSyo1LyDHtKTYYzlk19RTFt3j34MYzz56ietz115MdRoykcfij4M9eNtzL8c2vUaHgxjPAPyJkm71qZ/wwfSAxtol/nZu6FBk5LusGjT9fduCJ7KuU+bV7Fvwz9tmtFv2sRp34Zha7sP1u6tTc+GiXUyiDFyH6H2XYdd4Z4cKcWwcn4TpRi6p2GLMRy7VqIYQ+W64ifH0PUYqxxD15NXcgyVYwKaIEPHcY0gQ8ejV4IMK7eRmyBD5ST4DMOkqJb7agRsCfwgd2pqPBuOJuuDiT+Ignz72APenV5Er4bHTKenLe0zJtSrR1YA3E5bezScH653BSONH5h3bGr8Ge5u75alU/yFfG3DrCnETAArXu0ov5LhnbV5+AoZtXJpTD0Zru41g+EOfIrT9MKP4d/78wJ0TdXpMicvhoXlMtQow57j1F14MbSeXwQP6zpNEX0Y2hc7wd0bp6vxfBjab+8xEXT1QfGqhkgxjsiDfr1oS4McssVuWXG6Ns6DIdKLgXeQlI8L+jCEiqWhR7kM2/o3HEHNA3ZznMtOaf+G2Fl3qBzq7SUNsaEWdr9h9pKG2DJnCo2+Xa407t8Q+7tjF6m6bLH1b4i18AYafLtMEPs3xOYDWIfosrDfu2EBLq5AiUUuu/m9G4LzAROINdyDURogs4uXNARnrdj86SUN0et7BBuCayupXEOwDuUaoqtH8a+hG2oa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSMPXMEzHKrHR+H9mkGMu6EXVcWEtR+J6m7Cx0fTBaD2zswILZezlcL223P7gZkWEDssxvH9dRgghhBBCCCGEEEIIIZ3zH2/OiDS567+RAAAAAElFTkSuQmCC" alt="" className="rounded" onClick={()=>handleSocial(linkedin)}/></li>}
              {twitter && <li className="list-group-item border-0"><img src="https://logo.clearbit.com/twitter.com" alt="" className="rounded" onClick={()=>handleSocial(twitter)}/></li>}
              {github && <li className="list-group-item border-0"><img src="https://logo.clearbit.com/github.com" alt=""  className="rounded"onClick={()=>handleSocial(github)}/></li>}
              {developerPortal && <li className="list-group-item border-0 me-3"> <img srcSet="../../apilandscape__developer_portal_50x50.png 2x" alt="" className="rounded" onClick={()=>handleSocial(developerPortal)}/></li>}
            </ul>
  
             </div> {/* company-socials-url */}
  
  
             <div className="update-company d-flex justify-content-center bg-gray my-5">
             <a href="https://platformable.typeform.com/to/KDwe0Tbk" target="_blank" className="btn bg-company-orange-color text-white mx-0">Update company data</a>
               {/* <span className="text-sm text-gray">Wrong info? suggest </span> */}
             </div>
  
           </div>
    );
  }

  export default ProfileLeftSide