import React from 'react'

import { useRouter } from "next/router";
import Unknown from './Unknown';
export default function CompanyCardModal({company,index,loading}) {
  const handleCompany = (company) => {

    router.push(`/company/${company.name}`);
  };

  const reduceNumber=(total)=>{
    let result
    if(total.length>=7){
   
     result= `$${total.slice(0, 1)}M`

    }

    if(total.length>=8){
      result= `$${total.slice(0, 2)}M`

     }

     if(total.length>=9){
      result= `$${total.slice(0, 3)}M`
   
     }
     if(total.length>=10){
      result= `$${total.slice(0, 4)}M`

     }
 
     return result
   }

   const handleScore = (wm,dm)=>{
    let score="-";
  if(wm === "Yes" && dm === "Yes"){
    score="A+"
  }

  if(wm === "Yes" && dm === "No"){
    score="A"
  }
  if(wm === "No" && dm === "Yes"){
    score="A"
  }

  if (wm === "No" && dm ==="No"){
    score="-"
  }

  return score


}

   const newParentCategorySlug = [...new Set(company?.parentCategorySlug?.split(","))]

   const handleImages = (url)=>{
    if(url?.includes("https://drive.google.com")){
      return (`https://drive.google.com/thumbnail?id=${url.split('d/').pop().split('/view?usp=sharing')[0]}`)
    }else {
      return url
    }
    }

  const router = useRouter();
    return (
        <div className="company-card  rounded bg-white" key={index}>
        <div className="card-top">
  
            <div className="card-logo">
            {company.logo === "" || null ? <img src={`../../../apidaysReplacementLogo.png`} alt=""  className=""/> : <img srcset={`${handleImages(company.logo)} 2x`} alt="" className="img-fluid" /> }
           
            </div>
            <div className="card-description">
              <h6 className="fw-bold text-company-color" > {company.name}</h6>
          
              {/* <span className="xs-text badge tex-black">{company?.url?.length>6? "find out more":""}</span> */}
              <div className="card-founded-container">
                <div className="founded-icon">
                <img src="../../apilandscape__founded_in_40x40.png" alt="" className="icon m-0 p-0" />
   
                </div>
                <div className="founded-year">
                <p className="sm-text m-0 p-0 fw-bold text-company-color">Founded</p>
                  <p className="sm-text">{company.yearFounded ? `${company.yearFounded}`: "-"}</p>
                  
                </div>
              </div> {/*  <!--card founded--> */}
              <div className="card-founded-container">
                <div className="founded-icon">
                <img src="../../apilandscape__headquarter_40x40.png" alt="" className="icon" />
                </div>
                <div className="founded-year">
                <p className="sm-text m-0 p-0 fw-bold text-company-color">Headquarter</p>
                  <p className="sm-text">{company.headquartersCity},{company.headquartersCountry}</p>
                </div>
              </div>  {/* <!--card founded--> */}
            </div>
           
          </div> {/* <!--cardtop--> */}
          <div className="company-decription my-3">
            <p className="sm-text text-company-color">{company.description}</p>
            </div>
        <div className="card-middle mt-1">
             {/*    {newParentCategorySlug.map((category,index)=>{
                  return (<span className={`card-middle-tag mb-1 me-1 text-black
                  ${category.includes("API Lifecycle Platform") && "apilifecycleplatformBg text-white"}
                  ${category==="API Standards/Protocols" && "ApiStandardsandProtocolsBg"}
                  ${category==="Media/Associations" && "ApiStandardsandProtocolsBg"}
                  ${category==="Backend Building Tools" && "BackendBuildingToolsANDMBaasBg text-white"}
                  ${category==="Business processes as an API/API-as a Product" && "BusinessprocessesasanAPIAPIasaProductBg"}
                  ${category==="Business processes as an API/API-as a Products" && "BusinessprocessesasanAPIAPIasaProductsBg"}
                  ${category==="Integration Platform as a Service" && "IntegrationPlatformAsAServiceBg"}
                  ${category==="Vertical API Abstractions" && "VerticalAPIAbstractionsBg text-white"}
                  `}>{category}</span>)
                })} */}
                   {newParentCategorySlug.map((category,index)=>{
                  return (<span className={`card-middle-tag mb-1 me-1
                  ${category.includes("API Lifecycle Platform") && "mobile-bg-dark-company-color text-white"}
                  ${category==="API Standards/Protocols" && "mobile-bg-dark-company-color text-white"}
                  ${category==="Media/Associations" && "mobile-bg-dark-company-color text-white"}
                  ${category==="Backend Building Tools" && "mobile-bg-dark-company-color text-white text-white"}
                  ${category==="Business processes as an API/API-as a Product" && "mobile-bg-dark-company-color text-white"}
                  ${category==="Business processes as an API/API-as a Products" && "mobile-bg-dark-company-color text-white"}
                  ${category==="Integration Platform as a Service" && "mobile-bg-dark-company-color text-white"}
                  ${category==="Vertical API Abstractions" && "mobile-bg-dark-company-color text-white"}
                  `}>{category}</span>)
                })}
   
              </div>{/* <!--card middle--> */}
        
        <div className="card-bottom-modal">

        <div className="card-bottom-right  d-flex flex-direction-column ">
             <span className="sm-text text-company-color">Total Funding</span>
            <p className="fw-bold my-2">{company.totalFunding? reduceNumber(company.totalFunding) : "-"}</p>
            <img src="../../apilandscape_total_funding__60x45.png" alt="" class="md-icon mt-3"/>
          </div> {/* <!--card-bottom -center--> */}
            
          <div className="card-bottom-right border-start d-flex flex-direction-column ">
            <span className="sm-text text-company-color">Headcount</span>
            <p className="fw-bold my-2">{company.headcount?company.headcount:"-"}</p>
            <img src="../apilandscape_headcount_80x50_companies card.png" alt="" class="sd-icon mt-3" />
            
          </div>{/*  <!--card-bottom -left--> */}

       
          
          
          <div className="card-bottom-right border-start d-flex flex-direction-column ">
             <span className="sm-text text-company-color">Customers</span>
             {company.numbersOfCustomers?<p className="fw-bold  my-2 px-2">{company.numbersOfCustomers}</p>:<Unknown/>}
                 <img src="../../apilandscape__number_of_customers_50x60.png" alt="" className="sd-icon my-1 px-2" />
          </div> {/* <!--card-bottom -right--> */}

          <div className="card-bottom-right border-start d-flex flex-direction-column ">
             <span className="sm-text text-company-color">Diversity Score</span>
             <p className="fw-bold my-2 px-2">{handleScore(company.womanInManagement,company.nonWhitePeopleInManagement)}</p>
                 <img src="../../apilandscape_diversity_spot_80x50.png" alt="" className="xd-icon my-1 px-2" />
          </div> {/* <!--card-bottom -right--> */}

        </div> {/* card-bottom */}
      
      </div> /* company card */
    )
}

