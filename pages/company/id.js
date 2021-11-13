import React,{useContext,useState} from "react";
import Layout from "../../components/Layout";
import BarChart from "../../components/BarChart"
import { useRouter } from "next/router";
import Image from "next/image";
import Loader from "../../public/loader.gif";
import { CompanyContext } from "../../context/CompanyContext";
import Unknown from "../../components/Unknown";
/* import { categories,subcategories } from '../../utils/categoriesAndSubcategories'; */



export default function CompanyDetailsNameEntity({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const [company,setCompany]=useContext(CompanyContext)
  const [details,setDetails]=useState(false)
  const [overview,setOverview]=useState(true)

  const handleSocial=(url)=>{
    if(typeof window !== "undefined"){
      window.open(
        url,
        '_blank' 
      );
    }
  }

  const reduceNumber=(total)=>{

    let result
    if(total.length>=7){

     result= `${total.slice(0, 1)}M`

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


   const reduceThounsand=(total)=>{
    let result=total
    if(total.length>=4){
   
     result= `$${total.slice(0, 1)}K`
   
    }

    if(total.length>=5){
      result= `$${total.slice(0, 2)}K`
     }

     if(total.length>=6){
      result= `$${total.slice(0, 3)}K`
   
     }

     if(total.length>=7){
      result= `$${total.slice(0, 2)}M`
   
     }

     if(total.length>=8){
      result= `$${total.slice(0, 2)}M`
   
     }
     return result
   }

   const handleColors=()=>{
    const arr = [
    'industries-working-1',
    'industries-working-2',
    'industries-working-3',
    'industries-working-4',
    'industries-working-5',
    'industries-working-6',
    'industries-working-7',
    'industries-working-8',
    'industries-working-9',
    'industries-working-10',
    'industries-working-11',
  ];
    const color = Math.floor(Math.random() * arr.length);
    const selectedColor = arr[color]
    return selectedColor
   }


   const handleImages = (url)=>{
    if(url?.includes("https://drive.google.com")){
      return (`https://drive.google.com/thumbnail?id=${url.split('d/').pop().split('/view?usp=sharing')[0]}`)
    }else {
      return url
    }
    }
  const selectedCompany = data.values.filter((company) => company.name === slug);

  const {
    name,
    logo,
    url,
    description,
    parentCategorySlug,
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
    privacySpecificFeaturesIncluded
  } = selectedCompany[0];



  const newParentCategorySlug = [...new Set(parentCategorySlug.split(","))]



  const handleScore = (wm,dm)=>{
        let score="-"
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

  const categories = [
    "API Lifecycle Platform",
    "API standards and Protocols",
    "Backend Building Tools/MBaaS",
    "Business processes as an API/API-as a Product",
    "Business processes as an API/API-as a Products",
    "Integration Platform as a Service",
    "Vertical API Abstraction",
  ];


  const handleDetails = () =>{
    setOverview(!overview)
    setDetails(!details)

  }

  return (
    <Layout>
      <div className="container my-5">
       <div className="company-profile-container bg-light">
         <div className="company-profile-left-column bg-white   p-5">
           <div className="company-name">
             <h3 className="p-0 m-0 mb-5 fw-bold">
             {name}
             </h3>
             </div> {/* company name */}
           <div className="company-logo d-flex justify-content-center align-items-center my-5">
           <a href={url} target="_blank"><img src={handleImages(logo)} alt={name} /></a>
           </div> {/* company logo */}
           {/* <div className="company-url d-flex justify-content-center align-items-center">
             <a href={url} target="_blank">{url}</a>
           </div> */} {/* company url */}
           <div className="company-category mt-2 mb-2">

            {newParentCategorySlug?.map((category,index)=>{

                  return (<span className={`text-center badge my-1 text-black d-block
                  ${category.includes("API Lifecycle Platform") && "apilifecycleplatformBg text-white"}
                  ${category.includes("API Standards and Protocols") && "ApiStandardsandProtocolsBg"}
                  ${category.includes("Backend Building Tools") && "BackendBuildingToolsANDMBaasBg text-white"}
                  ${category.includes("Business processes as an API/API-as a Product") && "BusinessprocessesasanAPIAPIasaProductBg"}
                  ${category.includes("Business processes as an API/API-as a Products") && "BusinessprocessesasanAPIAPIasaProductsBg"}
                  ${category.includes("Integration Platform as a Service") && "IntegrationPlatformAsAServiceBg"}
                  ${category.includes("Vertical API Abstractions") && "VerticalAPIAbstractionsBg text-white"}
                  `}>{category}</span>)
                })}

                <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                </div>

            {subcategory?subcategory.split(",").map((subcat,index)=>{
                          return <span className={`text-center badge mb-1 mt-1 text-black d-block bg-light`}>{subcat}</span>
                        })
             
            :""}     
           </div> {/* company category */}
        
           <div className="description my-1">
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

           <ul class="list-group list-group-horizontal border-0">
            
           {url && <li class="list-group-item border-0 ms-0 ps-0"><img src="../../sitio-web.png" alt=""  className="rounded" onClick={()=>handleSocial(url)}/></li>}
            {crunchbase && <li class="list-group-item border-0 "><img src="https://logo.clearbit.com/hot2tak.com" alt=""  className="rounded" onClick={()=>handleSocial(crunchbase)}/></li>}
            {linkedin && <li class="list-group-item border-0"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAe7X///8Ac7EAd7MAcLDs9fm71easzeIAcrH3/P0jhLpxqc3I3uv09/oAebQAdbKMuNbZ6fJFk8FZncczjb5lo8qEsdGcwdt6rtBQmMTR4+8vibzE2+rt9fkWgLeQu9dincbi7/YAZ6yjx94U8i/zAAAE+0lEQVR4nO2da3uiOhRGCUQFdYJivaBCh5n//x8PtrZnrGJeA0Q3z7vafpRmNZtcd9IgIIQQQgghhBBCCCGEeMWYKK2/omeXoydMGgdv681iM8vKMDTPLk7nRPqwXaovRpNcp4OSjML1/3qfFO8mfXaxuiPMKnVNstPPLlhXxH9v+J3YB4NodIz5GaD/VGM2gEg1wahRsCaXrxjdFVQqkx6ocXOInill9xrx1iaolvGzC9kG82YVVGoh+VW0x+gJwWFqVoig2sqtRA1VoUoCqbVoppCgUjuplZjaG9JP9lKbU6ydOSHU0BhUUOUyBzZQZ/jJRqZhNIMNJ+GzC+tEuoENxzINowVsOJfZ1DxgKLS7eCBKjzINozVsOJE5qDEH2HAhs7cwJkENhfb4QbxHDWW+hnVT8w4KzmV2hzUlaDgTGqT1DBgL0ySSOgMOTA4ZvosNUnCGmEjeZ4O6xJnM7v4MsCIsdMT2jTVOC7Ht6BeWnZlkKt7w/u5achAveH+HtCoHIBjc2eUeS+4nLridqVCs9VAE60i9kW2ySIcRoV9cZgxVk1zLHYw2cZH1NbD6++acuTe4yiOEEEII6ZF6CFV/1z9iM5KaqUeHsdbmkP/+vcqztzLVOh7QOQ8ThtP1dn45Ja32k0VexnHnK5dIeHQaQlGoV+OiadWkOO4C3WlVmnJqpylJGPjolZ/OJo2LQmeWizLuTjIc236fakym0ZYE8ROXBzYifbWScJtj1tn6CWZ4+93QjbF229DoWQX5nVjmHTm2MnysDsMDvOP8wbHsZMfLm6EBNkh+suniUJIvw3RaPSyo1LyDHtKTYYzlk19RTFt3j34MYzz56ietz115MdRoykcfij4M9eNtzL8c2vUaHgxjPAPyJkm71qZ/wwfSAxtol/nZu6FBk5LusGjT9fduCJ7KuU+bV7Fvwz9tmtFv2sRp34Zha7sP1u6tTc+GiXUyiDFyH6H2XYdd4Z4cKcWwcn4TpRi6p2GLMRy7VqIYQ+W64ifH0PUYqxxD15NXcgyVYwKaIEPHcY0gQ8ejV4IMK7eRmyBD5ST4DMOkqJb7agRsCfwgd2pqPBuOJuuDiT+Ignz72APenV5Er4bHTKenLe0zJtSrR1YA3E5bezScH653BSONH5h3bGr8Ge5u75alU/yFfG3DrCnETAArXu0ov5LhnbV5+AoZtXJpTD0Zru41g+EOfIrT9MKP4d/78wJ0TdXpMicvhoXlMtQow57j1F14MbSeXwQP6zpNEX0Y2hc7wd0bp6vxfBjab+8xEXT1QfGqhkgxjsiDfr1oS4McssVuWXG6Ns6DIdKLgXeQlI8L+jCEiqWhR7kM2/o3HEHNA3ZznMtOaf+G2Fl3qBzq7SUNsaEWdr9h9pKG2DJnCo2+Xa407t8Q+7tjF6m6bLH1b4i18AYafLtMEPs3xOYDWIfosrDfu2EBLq5AiUUuu/m9G4LzAROINdyDURogs4uXNARnrdj86SUN0et7BBuCayupXEOwDuUaoqtH8a+hG2oa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSMPXMEzHKrHR+H9mkGMu6EXVcWEtR+J6m7Cx0fTBaD2zswILZezlcL223P7gZkWEDssxvH9dRgghhBBCCCGEEEIIIZ3zH2/OiDS567+RAAAAAElFTkSuQmCC" alt="" className="rounded" onClick={()=>handleSocial(linkedin)}/></li>}
            {twitter && <li class="list-group-item border-0"><img src="https://logo.clearbit.com/twitter.com" alt="" className="rounded" onClick={()=>handleSocial(twitter)}/></li>}
            {github && <li class="list-group-item border-0"><img src="https://logo.clearbit.com/github.com" alt=""  className="rounded"onClick={()=>handleSocial(github)}/></li>}
            {developerPortal && <li class="list-group-item border-0 me-3"> <img srcset="../../apilandscape__developer_portal_50x50.png 2x" alt="" className="rounded" onClick={()=>handleSocial(developerPortal)}/></li>}
          </ul>

           </div> {/* company-socials-url */}

         </div> {/* company profile left-column */}


         {/* RIGHT COLUMN */} {/* RIGHT COLUMN */}


         <div className="company-profile-right-column ml-5 ">




          {/* DETAILS */}  {/* DETAILS */} {/* DETAILS */}


          <section>
      
           <section className="company-profile-right-one bg-white ">

           <div className="profile-right-side-top-top  border-bottom  d-flex pt-2 px-2 ">
             
                   <div className="me-3 pb-2 ">
                   <p className="text-company-color sm-text">Known industries <br />
                 working in</p>
                     <img src="../../apilandscape__known industries working in_80x50.png" alt="" className="md-icon"/>

                   </div> {/* div */}

                   <div className="">
                     {industryGroups? industryGroups.split(",").map((industry,index)=>{
                       return (
                         <>
                         <span className={`badge text-black me-1 ${handleColors()}`}>{industry}</span>
                         </>
                       )
                     }):"-"}
                   
                

                   </div> {/* div known-industries*/}
                  
                </div>{/* profile-right-side-top-top */}


             <div className="company-profile-right-one-top">

               <div className="company-profile-right-one-top-left    p-2 border-end">

                 <p className="text-company-color sm-text">Estimated <br />
                 Revenue Range</p>

                 <h3 className="fw-bold fs-4 text-center mt-5">{estimatedRevenueRange?estimatedRevenueRange:<h6 className="text-center fw-bold ">-</h6>}</h3>

                 <img src="../money-line.png" alt="" />

               </div> {/* company-profile-right-one-top-left */}

               <div className="company-profile-right-one-top-right">

              
                 <div className="profile-right-side-top-bottom content-addressing  d-flex">

                   <div className="content-addressing-left-side px-2 pt-1 ">
                   <p className="text-company-color sm-text">Content addressing</p>
                      <div className="content-addressing-box d-flex gap-3 align-content-start my-2">
                        <div className="content-addresing-box-icon">
                          <img src="../../apilandscape__financial services_45x45.png" alt="" className="sd-icon" />
                        </div>
                        <div className="content-addressing-url mb-4">
                          <p className="text-company-color sm-text m-0">Banking/Finance</p>
                          {/* <a href="" className="m-0 p-0 xs-text">http://www.bnkbl.com/financialservices</a> */}
                          <p className="text-company-color xs-text" >-</p>
                        </div>
                      </div> {/* content addressing box */}

                      <div className="content-addressing-box d-flex gap-3 align-content-start my-2">
                        <div className="content-addresing-box-icon">
                          <img src="../../apilandscape__health sector_45x45.png" alt="" className="sd-icon" />
                        </div>
                        <div className="content-addressing-url">
                          <p className="text-company-color sm-text m-0">Health Sector</p>
                          <p className="text-company-color xs-text" >-</p>
                        </div>
                      </div> {/* content addressing box */}

                   </div> {/* content-addressing-left-side */}

                   <div className="content-addressing-left-side px-2 pt-1">
                   <p className="text-company-color"><br /></p>
                      <div className="content-addressing-box d-flex gap-3 align-content-start my-2">
                        <div className="content-addresing-box-icon">
                          <img src="../../apilandscape__sustainability_45x45.png" alt="" className="sd-icon" />
                        </div>
                        <div className="content-addressing-url mb-4">
                          <p className="text-company-color sm-text m-0">Sustainability</p>
                         {/*  <a href="" className="m-0 p-0 xs-text">http://www.bnkbl.com/financialservices</a> */}
                         <p className="text-company-color xs-text" >-</p>
                        </div>
                      </div> {/* content addressing box */}

                      <div className="content-addressing-box d-flex gap-3 align-content-start my-2">
                        <div className="content-addresing-box-icon">
                          <img src="../../apilandscape__government_45x45.png" alt="" className="sd-icon" />
                        </div>
                        <div className="content-addressing-url">
                          <p className="text-company-color sm-text m-0">Government</p>
                          <p className="text-company-color xs-text" >-</p>
                        </div>
                      </div> {/* content addressing box */}

                   </div> {/* content-addressing-right-side */}
                   
                </div>{/* profile-right-side-top-bottom */}

               </div> {/* company-profile-right-one-top-right */}


             </div> {/* company-profile-right-one-top */}


             <div className="company-profile-right-one-bottom d-flex">

               <div className="number-of-customers d-flex flex-column align-items-center border-top border-end">
                 <p className="text-company-color m-0 px-2 sm-text">Number of Customers</p>

                 {numbersOfCustomers ?<h6 className="fw-bold px-2 pt-2"> {reduceThounsand(numbersOfCustomers)} </h6>:<h6 className="fw-bold my-2 px-2"> - </h6>}
                 <img src="../../apilandscape__number_of_customers_50x60.png" alt="" className="md-icon my-1 px-2" />

               </div> {/* number-of-customer */}


               <div className="known-partnership border-end border-top flex-grow-1">
                <div className="known-partnership-container d-flex ">
                <img src="../../apilandscape__known_partnerships_API_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                <p className="text-company-color m-0 px-2 sm-text">Known partnerships <br />(API industry)</p>
                </div>
               
               <div className="known-partnership-logo d-flex flex-wrap align-items-center  ms-2">
                 {logoApiIndustry?logoApiIndustry.split(",").map((logo,index)=>{
                   return(
                    <div className="partnertship-logo"><img src={handleImages(logo)} className="img-fluid me-1"/></div>
                   )
                 }):<Unknown/>}
               
                     </div> {/* known-partnership-logo */}
                   </div> {/* div known-partnership*/}

               <div className="know-partnerships-non-api  flex-grow-1 border-top">
               
               <div className="known-partnership-container d-flex ">
                <img src="../../apilandscape__known_partnerships_no_API_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                <p className="text-company-color m-0 px-2 sm-text">Known partnerships <br />(Non-API industry)</p>
                </div>
               <div className="known-partnership-logo  text-center flex-grow-1 ms-2">
               {knownPartnershipsNonApi?knownPartnershipsNonApi.split(",").map((partner,index)=>{
                   return(
                   <>
                    <p className="sm-text my-2 fw-bold me-1">{partner}</p>
                
          
                    </>
                   )
                 }):<Unknown/>}
               {/* <span class="badge bg-secondary m-1">Royale Oceaninc Super Yatchs</span> */}
             
                     </div> {/* known-partnership-logo */}

               </div> {/* know-partnerships non api*/}

             </div> {/* company-profile-right-one-bottom */}



           </section> {/* company-profile-right-one */}



           <section className="company-profile-right-side-section2 bg-white my-3 d-flex flex-wrap">

             <div className="company-profile-right-side-section2-left headcount d-flex flex-column align-items-center border-end flex-grow-1">

                <p className="text-company-color m-0 px-2 sm-text ">Headcount</p>
                 {headcount?<h6 className="fw-bold my-2 px-2">{headcount}</h6>:<h6 className="fw-bold my-2 px-2"> - </h6>}
                 <img src="../../apilandscape_headcount_80x50_companies card.png" alt="" className="xd-icon my-1 px-2" />

             </div> {/* company-profile-right-side-section2 left */}

             <div className="company-profile-right-side-section2-center diversity  d-flex border-end">
               <div className="d-flex flex-column align-items-center flex-grow-1">

               <p className="text-company-color m-0 px-2 sm-text">Diversity Score</p>
                 <h6 className="fw-bold my-2 px-2">{handleScore(womanInManagement,nonWhitePeopleInManagement)}</h6>
                 <img src="../../apilandscape_diversity_spot_80x50.png" alt="" className="xd-icon my-1 px-2" />

              </div>

              <div className="d-flex flex-column align-items-center flex-grow-1">

              <p className="text-company-color m-0 px-2 sm-text">Women in management?</p>
              {womanInManagement? <h6 className="fw-bold my-2 px-2">{womanInManagement}</h6>:<Unknown/>}
                <img src="../../apilandscape__women_in_management_50x55.png" alt="" className="sd-icon my-1 px-2" />

              </div>


              <div className="d-flex flex-column align-items-center flex-grow-1">

              <p className="text-company-color m-0 px-2 sm-text">Diverse management?</p>
              {nonWhitePeopleInManagement? <h6 className="fw-bold my-2 px-2">{nonWhitePeopleInManagement}</h6>:<Unknown/>}
                <img src="../../apilandscape__diverse_management_50x55.png" alt="" className="sd-icon my-1 px-2" />

              </div>

             </div> {/* company-profile-right-side-section2-center */}

             <div className="company-profile-right-side-section2-right vacant d-flex flex-column align-items-center  flex-grow-1">

             <p className="text-company-color m-0 px-2 sm-text">Positions vacant Q4 2021</p>
             {numberOfPositionsVacantInPastYear?<h6 className="fw-bold my-2 px-2">{numberOfPositionsVacantInPastYear}</h6>:<Unknown/>}
                 <img src="../../apilandscape__positions_vacant_50x55.png" alt="" className="sd-icon my-1 px-2" />

             </div> {/* company-profile-right-side-section2 right*/}

           </section> {/* company-profile-right-side-section2 */}



           <section className="company-profile-right-side-section3 bg-white my-3">

             <div className="company-profile-right-side-section3-top d-flex flex-wrap">
               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_new_product_feature_60x50.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 px-2 sm-text">New Product Features</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {totalNumberOfNewProducFeaturesInLastYear? <h6 className="text-center fw-bold">{totalNumberOfNewProducFeaturesInLastYear}</h6>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}


               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_active_products_60x50.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 px-2 sm-text">Active products</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                      {totalProductsActive ? <h6 className="text-center fw-bold">{totalProductsActive}</h6>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}



               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_patents_granted_60x50.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 px-2 sm-text">Patents Granted</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {patentsGranted?<h6 className="text-center fw-bold">{patentsGranted}</h6>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}



               <div className="new-product-features flex-grow-1 p-2 ">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_acquisitions_60x50.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 px-2 sm-text">Acquisition (of other entities)</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {acquisitions?<h6 className="text-center fw-bold">{acquisitions}</h6>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}

             </div> {/* company-profile-right-side-section3-top */}

             <div className="company-profile-right-side-section3-bottom ">

               <div className="section3-bottom-left flex-grow-1 p-2 border-end border-top">
               <div className="new-product-features-top d-flex align-items-center">
                  <img src="../../apilandscape_known_standards_used_integrated_60x50.png" alt="" className="xd-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 px-2 sm-text">Known standard used/integrated</p>
                  </div> {/* features-top */}
                    <p className="text-center">Coming Soon</p>
               {/*    <h6 className="m-0 p-0">Data</h6>
                  <h6>Data</h6> */}

               </div> {/* section3 bottom left */}

               <div className="section3-bottom-right flex-grow-1 p-2 border-top">

                  <div className="new-product-features-top d-flex align-items-center">
                  <img src="../../apilandscape_privacy_specific_features_60x50.png" alt="" className="xd-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 px-2 sm-text">Privacy specific features included</p>
                  </div> {/* features-top */}

                {privacySpecificFeaturesIncluded?<p className="sm-text p-3">{privacySpecificFeaturesIncluded}</p>:<Unknown/>}
               </div> {/* section3 bottom right */}

             </div> {/* company-profile-right-side-section3-bottom */}

           </section> {/* company-profile-right-side-section3 */}






           <section className="charts">
             <div className="charts-top  bg-white ">
               <div className="chart p-2">
               <div className="new-product-features-top d-flex align-items-center">
                  <img src="../../apilandscape_blog_per_quarter_45x45.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 p2 sm-text">Blogs per quarter</p>
                  </div> {/* features-top */}



              <BarChart/>



               {/* <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLkokDYa8s0nmdWhT_kLXNG91F_8-hNj4xC9JBN_teCv6QiYP2tSXz8poOaBF7OlLeB-1x5YSX0Y38/pubchart?oid=1970670565&amp;format=interactive"></iframe> */}
               </div> {/* chart */}


               <div className="calendar border-start p-2 text-center">
               <p className="text-company-color  p-2  sm-text text-center">Participation in</p>
              <div className="text-center "> <img src="../apidayslogo_icon.png" alt="" className=" mb-5  lg-icon"  /></div>
               <div className="text-center ">
                    <ul className="timeline">
                    <li className={apidays2018 === "TRUE" && "timeline-item"}>
                 
                      <p class="float-right">2018</p>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p> */}
                    </li>
                    <li className={apidays2019 === "TRUE" && "timeline-item"}>
               
                    <p class="float-right">2019</p>
                      {/* <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p> */}
                    </li>
                    <li className={apidays2020 === "TRUE" && "timeline-item"}>
                
                    <p class="float-right">2020</p>
                      {/* <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p> */}
                    </li>
                    <li className={apidays2021 === "TRUE" && "timeline-item"}>
                
                    <p class="float-right">2021</p>
                      {/* <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p> */}
                    </li>
                  </ul>
                  </div>
               </div> {/* calendar */}
             </div> {/* charts-top */}

           </section> {/* charts */}



           <section className="company-profile-right-side-section4 bg-white my-3">

           <div className="company-profile-right-side-section3-top d-flex">
               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_active_tech_count_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 px-2 sm-text">Active tech count</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {activeTechCount? <h6 className="text-center fw-bold">{activeTechCount}</h6>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}


               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_IT_spend_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 px-2 sm-text">IT Spend</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {itSpend? <h6 className="text-center"> {reduceThounsand(itSpend)}</h6>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}



               <div className="new-product-features flex-grow-1 p-2 ">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_privacy_breaches_vulnerabilities_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 px-2 sm-text">Privacy breaches/vulnerabilities</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {privacyBreaches?<h6 className="text-center fw-bold">{privacyBreaches}</h6>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}

             </div> {/* company-profile-right-side-section3-top */}

           </section> {/* company-profile-right-side-section4 */}


           <section className="company-profile-right-side-section5  bg-white ">

           <div className="company-profile-right-side-section5-left border-end p-2 flex-grow-1">

           <div className="new-product-features-top d-flex">
           <img src="../../apilandscape_top_5_investors__60x45.png" alt="" className="xd-icon my-1 px-2 align-self-center" />
                  <p className="text-company-color m-0 px-2 sm-text">Top 5 Investors</p>
                  </div> {/* features-top */}

           <div className="px-2">
             
           <p className="sm-text mt-2">{top5Investors?top5Investors:<h6 className="text-center my-5 fw-bold">-</h6>}</p>
           
           </div>

           </div> {/* company-profile-right-side-section5-left */}




           <div className="company-profile-right-side-section5-right ">

             <div className="section5-right-top d-flex">
               <div className="section5-box flex-grow-1 border-end p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-company-color m-0 px-2 sm-text mb-3">Stage (Seed, A, B, C)</p>
               <h6><span className="badge bg-lightgreen text-black">{stage? stage:"-"}</span></h6>
              
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end p-2">

                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-company-color m-0 px-2 sm-text mb-3">Total Funding</p>
                 {totalFunding?<h6><span className="fw-bold text-black">{reduceNumber(totalFunding)}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_total_funding__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-company-color m-0 px-2 sm-text mb-3 ">Last funding date</p>
                 
                 {lastFundingDate?<h6><span className="text-black fw-bold">{lastFundingDate}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_last_funding_date__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-company-color m-0 px-2 sm-text mb-3">Lead Investor </p>
      
                 {numberLeadOfLeadInvestors? <h6><span className="text-black fw-bold">{numberLeadOfLeadInvestors}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_lead_investors__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}


               <div className="section5-box flex-grow-1 p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-company-color m-0 px-2 sm-text">Investors </p>
                 <p></p>
                 {numberOfInvestors?<h6><span className="text-black fw-bold">{numberOfInvestors}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_investors__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}


             </div> {/* section5-right-top */}


             <div className="section5-right-bottom d-flex">
               <div className="section5-box flex-grow-1 border-end border-top p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-company-color m-0 px-2 sm-text text-center">Acquisition Price</p>
                 {acquisitionPrice? <h6><span className="badge  fw-bold">{acquisitionPrice}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_acquisition_price__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end border-top p-2">

                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-company-color m-0 px-2 sm-text text-center">Acquisition Type</p>
                 {acquisitionType?  <h6><span className="badge fw-bold">{acquisitionType}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_acquisition_type__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end border-top p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-company-color m-0 px-2 sm-text">IPO <br /> Date</p>
                 {ipoDate?<h6><span className="badge  fw-bold">{ipoDate}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_IPO_date__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end border-top p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-company-color m-0 px-2 sm-text text-center">Money Raised at IPO</p>
                 {moneyRaisedAtIpo?<h6><span className="badge  text-black">{moneyRaisedAtIpo}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_money_raised_at_IPO_60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}


               <div className="section5-box flex-grow-1 border-top p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-company-color m-0 px-2 sm-text">Valuation at IPO</p>
                 {valuationAtIpo? <h6><span className="badge fw-bold">{valuationAtIpo}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_valuation_at_IPO_60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}


             </div> {/* section5-right-bottom */}

           </div> {/* company-profile-right-side-section5-right */}
           
           </section>


       
         </section> {/* end details */}
         </div> {/* company profile right column */}
       </div> {/* company-profile-container */}
      </div> {/* container */}
    </Layout>
  );
}

export async function getServerSideProps(context) {

  const res = await fetch(`https://apidaysserver-svmwd.ondigitalocean.app` || `http://localhost:5000`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
