import React from 'react'

import { useRouter } from "next/router";
export default function CompanyCard({company,index,handleLoading}) {
  const handleCompany = (company) => {
    handleLoading()
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

   const handleImages = (url)=>{
    if(url.includes("https://drive.google.com")){
      return (`https://drive.google.com/thumbnail?id=${url.split('d/').pop().split('/view?usp=sharing')[0]}`)
    }else {
      return url
    }
    }

  const router = useRouter();


  const newParentCategorySlug = [...new Set(company?.parentCategorySlug?.split(","))]
    return (
        <div className="company-card  rounded bg-white" key={index} onClick={() => handleCompany(company)}>
        <div className="card-top">
  
            <div className="card-logo">
            {company.logo === "" || null ? <img src={`../apidaysReplacementLogo.png`} alt=""  className=""/> : <img srcset={`${handleImages(company.logo)} 2x`} alt="" className="img-fluid" /> }
{/*               <img src={handleImages(company.logo)} alt="" onClick={() => handleCompany(company)}/> */}
            </div>
            <div className="card-description">
              <h6 className="fw-bold text-company-color" onClick={() => handleCompany(company)}> {company.name}</h6>
              {/* <h6><span class="badge bg-dark-orange text-white">Go Deeper</span></h6> */}
              {/* <span className="xs-text badge tex-black">{company?.url?.length>6? "find out more":""}</span> */}
              <div className="card-founded-container">
                <div className="founded-icon">
                <img src="../../apilandscape__founded_in_40x40.png" alt="" className="icon m-0 p-0" />
   
                </div>
                <div className="founded-year">
                <p className="xs-text m-0 p-0 fw-bold">Founded</p>
                  <p className="xs-text">{company.yearFounded ? `${company.yearFounded}`: "-"}</p>
                  
                </div>
              </div> {/*  <!--card founded--> */}
              <div className="card-founded-container">
                <div className="founded-icon">
                <img src="../../apilandscape__headquarter_40x40.png" alt="" className="icon" />
                </div>
                <div className="founded-year">
                <p className="xs-text m-0 p-0 fw-bold">Headquarter</p>
                  <p className="xs-text">{company.headquartersCity},{company.headquartersCountry}</p>
                </div>
              </div>  {/* <!--card founded--> */}
            </div>
          </div> {/* <!--cardtop--> */}
        <div className="card-middle mt-1">
                {newParentCategorySlug?.map((category,index)=>{
                  return (<span className={`card-middle-tag mb-1 me-1 text-black
                  ${category.includes("API Lifecycle Platform") && "bg-dark-main-color text-white"}
                  ${category==="API Standards/Protocols" && "bg-dark-main-color text-white"}
                  ${category==="Backend Building Tools" && "bg-dark-main-color text-white"}
                  ${category==="Business processes as an API/API-as a Product" && "bg-dark-main-color text-white"}
                  ${category==="Business processes as an API/API-as a Products" && "bg-dark-main-color text-white"}
                  ${category==="Integration Platform as a Service" && "bg-dark-main-color text-white"}
                  ${category==="Vertical API Abstractions" && "bg-dark-main-color text-white"}
                  `}>{category}</span>)
                })}
   
              </div>{/* <!--card middle--> */}
        
        <div className="card-bottom">
          <div className="card-bottom-left">
            <span className="sm-text">Headcount</span>
            <p className="fw-bold">{company.headcount?company.headcount:"-"}</p>
            <img src="../apilandscape_headcount_80x50_companies card.png" alt="" class="sd-icon mt-3" />
            
          </div>{/*  <!--card-bottom -left--> */}
          <div className="card-bottom-center">
             <span>Total Funding</span>
            <p className="fw-bold ">{company.totalFunding? reduceNumber(company.totalFunding) : "-"}</p>
            <img src="../../apilandscape_total_funding__60x45.png" alt="" class="md-icon mt-3"/>
          </div> {/* <!--card-bottom -center--> */}
          <div className="card-bottom-right">
             <span>Estimated Revenue</span>
            <p className="sm-text fw-bold text-center">{company.estimatedRevenueRange?company.estimatedRevenueRange: "-"}</p>
            <img src="../../money-line.png" alt="" />
          </div> {/* <!--card-bottom -right--> */}
        </div> {/* card-bottom */}
      
      </div> /* company card */
    )
}