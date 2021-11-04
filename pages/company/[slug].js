import React,{useContext} from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Loader from "../../public/loader.gif";
import { CompanyContext } from "../../context/CompanyContext";
import Unknown from "../../components/Unknown";
/* import { categories,subcategories } from '../../utils/categoriesAndSubcategories'; */
export default function CompanyDetailsName({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const [company,setCompany]=useContext(CompanyContext)

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
    twitter,
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
    industryGroups
  } = selectedCompany[0];
  
  const categories = [
    "API Lifecycle Platform",
    "API standards and Protocols",
    "Backend Building Tools/MBaaS",
    "Business processes as an API/API-as a Product",
    "Business processes as an API/API-as a Products",
    "Integration Platform as a Service",
    "Vertical API Abstraction",
  ];

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
           <div className="company-logo d-flex justify-content-center align-items-center">
             <img src={logo} alt="" />
           </div> {/* company logo */}
           <div className="company-url d-flex justify-content-center align-items-center">
             <a href={url} target="_blank">{url}</a>
           </div> {/* company url */}
           <div className="company-category">
            <h3 
            className={`text-center px-3 py-3 my-2 text-white
            ${parentCategorySlug==="API Lifecycle Platform" && "apilifecycleplatformBg"}
            ${parentCategorySlug==="API standards and Protocols" && "ApiStandardsandProtocolsBg"}
            ${parentCategorySlug==="Backend Building Tools/MBaaS" && "BackendBuildingToolsANDMBaasBg"}
            ${parentCategorySlug==="Business processes as an API/API-as a Product" && "BusinessprocessesasanAPIAPIasaProductBg"}
            ${parentCategorySlug==="Business processes as an API/API-as a Products" && "BusinessprocessesasanAPIAPIasaProductsBg"}
            ${parentCategorySlug==="Integration Platform as a Service" && "IntegrationPlatformAsAServiceBg"}
            ${parentCategorySlug==="Vertical API Abstractions" && "VerticalAPIAbstractionsBg"}
            `}>{parentCategorySlug}</h3>
           </div> {/* company category */}
           <div className="company-subcategory border mt-2 mb-3">
            <h3 className="text-center px-3 py-2 my-2">{subcategory}</h3>
           </div> {/* company subcategory */}
           <div className="description">
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
                  <p className="fw-bold mx-5">{yearFounded}</p>
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
                  <p className="fw-bold mx-5">{founderNames}</p>
                 </div>
               </div>{/*  founded top left */}
               <div className="founded-top-right"></div>
             </div>
           </div> {/* company founded */}
           <div className="map">
             <img src="https://desenio.es/bilder/artiklar/zoom/8450_2.jpg?imgwidth=435&qt=" alt="" />
             <div className="map-location d-flex gap-3 m-0 p-0">
               <div className="map-location-left d-flex  alig-items-center">
                 <div className="d-flex gap-3 map-headquarter">
                 <img src="../../apilandscape__headquarter_40x40.png" alt="" className="md-icon align-self-center" />
                 <p className="-mt-1">Headquarter</p> 
                 </div>
               </div> {/* map-location-left */}
               <div className="map-location-right  d-flex align-items-center align-middle">
              <p className="fw-bold align-middle">{headquartersCity}-{headquartersCountry}</p>
               </div> {/* map-location-right */}
             </div> {/* map-location */}
           </div>

           <div className="company-social-urls mt-5">
              <div className="company-social-url d-flex gap-3 crunchbase mb-3 align-items-center">
                <div className="company-social-logo rounded">
                  <img src="https://logo.clearbit.com/hot2tak.com" alt=""  className="rounded"/>
                </div> {/* company-social-logo */}
                <div className="company-social-url-link">
                    <a href={crunchbase}>{crunchbase}</a>
                </div> {/* company-social */}
              </div>{/* company-social-url crunchbase*/}

              <div className="company-social-url d-flex gap-3 linkedin mb-3 align-items-center">
                <div className="company-social-logo">
                  <img src="https://logo.clearbit.com/linkedin.com" alt="" className="rounded"/>
                </div> {/* company-social-logo */}
                <div className="company-social-url-link">
                    <a href={linkedin}>{linkedin}</a>
                </div> {/* company-social */}
              </div>{/* company-social-url linkedin*/}

              <div className="company-social-url d-flex gap-3 twitter mb-3 align-items-center">
                <div className="company-social-logo">
                  <img src="https://logo.clearbit.com/twitter.com" alt="" className="rounded" />
                </div> {/* company-social-logo */}
                <div className="company-social-url-link">
                    <a href={twitter}>{twitter}</a>
                </div> {/* company-social */}
              </div>{/* company-social-url twitter*/}
          
           </div> {/* company-socials-url */}

         </div> {/* company profile left-column */}


         <div className="company-profile-right-column ml-5 ">

           <section className="company-profile-right-one bg-white ">

           <div className="profile-right-side-top-top border-end border-bottom d-flex pt-2 px-2 ">
                   <div className="me-3 pb-2 ">
                   <p className="text-gray sm-text">Known industries <br />
                 working in</p>
                     <img src="../../apilandscape__known industries working in_80x50.png" alt="" className="md-icon"/>

                   </div> {/* div */}

                   <div className="">
                     {industryGroups? industryGroups.split(",").map((industry,index)=>{
                       return (
                         <>
                         <span class="badge bg-secondary me-1">{industry}</span>
                         </>
                       )
                     }):"Unknown"}
                   
                

                   </div> {/* div known-industries*/}
                  
                </div>{/* profile-right-side-top-top */}


             <div className="company-profile-right-one-top">

               <div className="company-profile-right-one-top-left    p-2 border-end">

                 <p className="text-gray sm-text">Estimated <br />
                 Revenue Range</p>

                 <h3 className="fw-bold fs-4 text-center mt-5">{estimatedRevenueRange?estimatedRevenueRange:<h6 className="text-center ">Unknown</h6>}</h3>

                 <img src="../money-line.png" alt="" />

               </div> {/* company-profile-right-one-top-left */}

               <div className="company-profile-right-one-top-right">

              
                 <div className="profile-right-side-top-bottom content-addressing  d-flex">

                   <div className="content-addressing-left-side px-2 pt-1">
                   <p className="text-gray sm-text">Content addressing</p>
                      <div className="content-addressing-box d-flex gap-3 align-content-start my-2">
                        <div className="content-addresing-box-icon">
                          <img src="../../apilandscape__financial services_45x45.png" alt="" className="sd-icon" />
                        </div>
                        <div className="content-addressing-url">
                          <p className="text-gray sm-text m-0">financial services</p>
                          {/* <a href="" className="m-0 p-0 xs-text">http://www.bnkbl.com/financialservices</a> */}
                          <p className="text-gray xs-text" >-</p>
                        </div>
                      </div> {/* content addressing box */}

                      <div className="content-addressing-box d-flex gap-3 align-content-start my-2">
                        <div className="content-addresing-box-icon">
                          <img src="../../apilandscape__health sector_45x45.png" alt="" className="sd-icon" />
                        </div>
                        <div className="content-addressing-url">
                          <p className="text-gray sm-text m-0">Health Sector</p>
                          <p className="text-gray xs-text" >-</p>
                        </div>
                      </div> {/* content addressing box */}

                   </div> {/* content-addressing-left-side */}

                   <div className="content-addressing-left-side px-2 pt-1">
                   <p className="text-gray"><br /></p>
                      <div className="content-addressing-box d-flex gap-3 align-content-start my-2">
                        <div className="content-addresing-box-icon">
                          <img src="../../apilandscape__sustainability_45x45.png" alt="" className="sd-icon" />
                        </div>
                        <div className="content-addressing-url">
                          <p className="text-gray sm-text m-0">Sustainability</p>
                         {/*  <a href="" className="m-0 p-0 xs-text">http://www.bnkbl.com/financialservices</a> */}
                         <p className="text-gray xs-text" >-</p>
                        </div>
                      </div> {/* content addressing box */}

                      <div className="content-addressing-box d-flex gap-3 align-content-start my-2">
                        <div className="content-addresing-box-icon">
                          <img src="../../apilandscape__government_45x45.png" alt="" className="sd-icon" />
                        </div>
                        <div className="content-addressing-url">
                          <p className="text-gray sm-text m-0">Government</p>
                          <p className="text-gray xs-text" >-</p>
                        </div>
                      </div> {/* content addressing box */}

                   </div> {/* content-addressing-right-side */}
                   
                </div>{/* profile-right-side-top-bottom */}

               </div> {/* company-profile-right-one-top-right */}


             </div> {/* company-profile-right-one-top */}


             <div className="company-profile-right-one-bottom d-flex">

               <div className="number-of-customers d-flex flex-column align-items-center border-top border-end">
                 <p className="text-gray m-0 px-2 sm-text">Number of Customers</p>

                 {numbersOfCustomers ?<h5 className="fw-bold px-2 pt-2"> {numbersOfCustomers} </h5>:<h6 className="fw-bold my-2 px-2"> - </h6>}
                 <img src="../../apilandscape__number_of_customers_50x60.png" alt="" className="md-icon my-1 px-2" />

               </div> {/* number-of-customer */}


               <div className="known-partnership border-end border-top flex-grow-1">
                <div className="known-partnership-container d-flex ">
                <img src="../../apilandscape__known_partnerships_API_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                <p className="text-gray m-0 px-2 sm-text">Known partnerships <br />(API industry)</p>
                </div>
               
               <div className="known-partnership-logo d-flex flex-wrap ">
            
                     </div> {/* known-partnership-logo */}
                   </div> {/* div known-partnership*/}

               <div className="know-partnerships-non-api  flex-grow-1 border-top">
               
               <div className="known-partnership-container d-flex ">
                <img src="../../apilandscape__known_partnerships_no_API_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                <p className="text-gray m-0 px-2 sm-text">Known partnerships <br />(Non-API industry)</p>
                </div>
               <div className="known-partnership-logo d-flex flex-wrap flex-grow-1">
               {/* <span class="badge bg-secondary m-1">Royale Oceaninc Super Yatchs</span> */}
             
                     </div> {/* known-partnership-logo */}

               </div> {/* know-partnerships non api*/}

             </div> {/* company-profile-right-one-bottom */}



           </section> {/* company-profile-right-one */}



           <section className="company-profile-right-side-section2 bg-white my-3 d-flex ">

             <div className="company-profile-right-side-section2-left headcount d-flex flex-column align-items-center border-end flex-grow-1">

                <p className="text-gray m-0 px-2 sm-text ">Headcount</p>
                 {headcount?<h5 className="fw-bold my-2 px-2">{headcount}</h5>:<h6 className="fw-bold my-2 px-2"> Unknown </h6>}
                 <img src="../../apilandscape_headcount_80x50_companies card.png" alt="" className="xd-icon my-1 px-2" />

             </div> {/* company-profile-right-side-section2 left */}

             <div className="company-profile-right-side-section2-center diversity  d-flex border-end">
               <div className="d-flex flex-column align-items-center flex-grow-1">

               <p className="text-gray m-0 px-2 sm-text">Diversity Spotlight (US only)</p>
                 {nonWhitePeopleInManagement?<h5 className="fw-bold my-2 px-2">{nonWhitePeopleInManagement}</h5>:<Unknown/>}
                 <img src="../../apilandscape_diversity_spot_80x50.png" alt="" className="xd-icon my-1 px-2" />

              </div>

              <div className="d-flex flex-column align-items-center flex-grow-1">

              <p className="text-gray m-0 px-2 sm-text">Women in management?</p>
              {womanInManagement? <h5 className="fw-bold my-2 px-2">{womanInManagement}</h5>:<Unknown/>}
                <img src="../../apilandscape__women_in_management_50x55.png" alt="" className="sd-icon my-1 px-2" />

              </div>


              <div className="d-flex flex-column align-items-center flex-grow-1">

              <p className="text-gray m-0 px-2 sm-text">Diverse management?</p>
              {nonWhitePeopleInManagement? <h5 className="fw-bold my-2 px-2">{nonWhitePeopleInManagement}</h5>:<Unknown/>}
                <img src="../../apilandscape__diverse_management_50x55.png" alt="" className="sd-icon my-1 px-2" />

              </div>

             </div> {/* company-profile-right-side-section2-center */}

             <div className="company-profile-right-side-section2-right vacant d-flex flex-column align-items-center  flex-grow-1">

             <p className="text-gray m-0 px-2 sm-text">Positions vacant Q4 2021</p>
             {numberOfPositionsVacantInPastYear?<h5 className="fw-bold my-2 px-2">{numberOfPositionsVacantInPastYear}</h5>:<Unknown/>}
                 <img src="../../apilandscape__positions_vacant_50x55.png" alt="" className="sd-icon my-1 px-2" />

             </div> {/* company-profile-right-side-section2 right*/}

           </section> {/* company-profile-right-side-section2 */}



           <section className="company-profile-right-side-section3 bg-white my-3">

             <div className="company-profile-right-side-section3-top d-flex ">
               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_new_product_feature_60x50.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">New Product Features</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {totalNumberOfNewProducFeaturesInLastYear? <h5 className="text-center">{totalNumberOfNewProducFeaturesInLastYear}</h5>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}


               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_active_products_60x50.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">Active products</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                      {totalProductsActive ? <h5 className="text-center">{totalProductsActive}</h5>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}



               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_patents_granted_60x50.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">Patents Granted</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {patentsGranted?<h5 className="text-center">{patentsGranted}</h5>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}



               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_acquisitions_60x50.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">Acquisition (of other entities)</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {acquisitions?<h5 className="text-center">{acquisitions}</h5>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}

             </div> {/* company-profile-right-side-section3-top */}

             <div className="company-profile-right-side-section3-bottom d-flex">

               <div className="section3-bottom-left flex-grow-1 p-2 border-end border-top">
               <div className="new-product-features-top d-flex align-items-center">
                  <img src="../../apilandscape_known_standards_used_integrated_60x50.png" alt="" className="xd-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">Known standard used/integrated</p>
                  </div> {/* features-top */}

               {/*    <h6 className="m-0 p-0">Data</h6>
                  <h6>Data</h6> */}

               </div> {/* section3 bottom left */}

               <div className="section3-bottom-right flex-grow-1 p-2 border-top">

                  <div className="new-product-features-top d-flex align-items-center">
                  <img src="../../apilandscape_privacy_specific_features_60x50.png" alt="" className="xd-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">Privacy specific features included</p>
                  </div> {/* features-top */}

                 {/*  <h6>Data</h6>
                  <h6>Data</h6>
                  <h6>Data</h6> */}

               </div> {/* section3 bottom right */}

             </div> {/* company-profile-right-side-section3-bottom */}

           </section> {/* company-profile-right-side-section3 */}






           <section className="charts">
             <div className="charts-top d-flex justify-content-center bg-white p-2">
               <div className="chart">
               <div className="new-product-features-top d-flex align-items-center">
                  <img src="../../apilandscape_blog_per_quarter_45x45.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">Average blogs per quarter</p>
                  </div> {/* features-top */}
               <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLkokDYa8s0nmdWhT_kLXNG91F_8-hNj4xC9JBN_teCv6QiYP2tSXz8poOaBF7OlLeB-1x5YSX0Y38/pubchart?oid=1970670565&amp;format=interactive"></iframe>
               </div> {/* chart */}
               {/* <div className="calendar">

               </div> */} {/* calendar */}
             </div> {/* charts-top */}

             <div className="charts-bottom d-flex justify-content-center bg-white">
               <div className="chart">
               <div className="new-product-features-top d-flex  align-items-center">
                  <img src="../../apilandscape_monthly_website_visits_45x45.png" alt="" className="sd-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">Monhtly website visit grows</p>
                  </div> {/* features-top */}
               <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLkokDYa8s0nmdWhT_kLXNG91F_8-hNj4xC9JBN_teCv6QiYP2tSXz8poOaBF7OlLeB-1x5YSX0Y38/pubchart?oid=1751432231&amp;format=interactive"></iframe>
               </div>

             </div> {/* charts-bottom */}
           </section> {/* charts */}



           <section className="company-profile-right-side-section4 bg-white my-3">

           <div className="company-profile-right-side-section3-top d-flex">
               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_active_tech_count_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">Active tech count</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {activeTechCount? <h5 className="text-center">{activeTechCount}</h5>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}


               <div className="new-product-features flex-grow-1 p-2 border-end">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_IT_spend_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">IT Spend</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {itSpend? <h5 className="text-center"> {itSpend}</h5>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}



               <div className="new-product-features flex-grow-1 p-2 ">
                  <div className="new-product-features-top d-flex">
                  <img src="../../apilandscape_privacy_breaches_vulnerabilities_45x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">Privacy breaches/vulnerabilities</p>
                  </div> {/* features-top */}

                  <div className="new-product-features-bottom">
                  {privacyBreaches?<h5 className="text-center">{privacyBreaches}</h5>:<Unknown/>}
                  </div> {/* features-top */}


               </div> {/* new product-features */}

             </div> {/* company-profile-right-side-section3-top */}

           </section> {/* company-profile-right-side-section4 */}


           <section className="company-profile-right-side-section5  bg-white ">

           <div className="company-profile-right-side-section5-left border-end p-2 flex-grow-1">

           <div className="new-product-features-top d-flex">
           <img src="../../apilandscape_top_5_investors__60x45.png" alt="" className="xd-icon my-1 px-2 align-self-center" />
                  <p className="text-gray m-0 px-2 sm-text">Top 5 Investors</p>
                  <p></p>
                  </div> {/* features-top */}

           <div className="px-2">
             
           <p className="sm-text mt-2">{top5Investors?top5Investors:<h6 className="text-center my-5">No Investors</h6>}</p>
           
           </div>

           </div> {/* company-profile-right-side-section5-left */}




           <div className="company-profile-right-side-section5-right ">

             <div className="section5-right-top d-flex">
               <div className="section5-box flex-grow-1 border-end p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-gray m-0 px-2 sm-text">Stage (Seed, A, B, C)</p>
               <h6><span className="badge bg-lightgreen text-black">{stage? stage:"Unknown"}</span></h6>
              
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end p-2">

                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-gray m-0 px-2 sm-text">Total Funding</p>
                 {totalFunding?<h6><span className="badge  text-black">{totalFunding}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_total_funding__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-gray m-0 px-2 sm-text">Last funding date</p>
                 {lastFundingDate?   <h6><span className="badge  text-black">{lastFundingDate}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_last_funding_date__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-gray m-0 px-2 sm-text">Lead Investor</p>
                 {numberLeadOfLeadInvestors? <h6><span className="badge  text-black">{numberLeadOfLeadInvestors}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_lead_investors__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}


               <div className="section5-box flex-grow-1">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-gray m-0 px-2 sm-text">Investors </p>
                 <p></p>
                 {numberOfInvestors?<h6><span className="badge text-black ">{numberOfInvestors}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_investors__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}


             </div> {/* section5-right-top */}


             <div className="section5-right-bottom d-flex">
               <div className="section5-box flex-grow-1 border-end border-top p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-gray m-0 px-2 sm-text text-center">Acquisition Price</p>
                 {acquisitionPrice? <h6><span className="badge  text-black">{acquisitionPrice}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_acquisition_price__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end border-top p-2">

                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-gray m-0 px-2 sm-text text-center">Acquisition Type</p>
                 {acquisitionType?  <h6><span className="badge text-black">{acquisitionType}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_acquisition_type__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end border-top p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-gray m-0 px-2 sm-text">IPO <br /> Date</p>
                 {ipoDate?<h6><span className="badge  text-black">{ipoDate}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_IPO_date__60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}

               <div className="section5-box flex-grow-1 border-end border-top p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-gray m-0 px-2 sm-text text-center">Money Raised at IPO</p>
                 {moneyRaisedAtIpo?<h6><span className="badge  text-black">{moneyRaisedAtIpo}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_money_raised_at_IPO_60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}


               <div className="section5-box flex-grow-1 border-top p-2">
                 <div className="box-container d-flex flex-column align-items-center">
                 <p className="text-gray m-0 px-2 sm-text">Valuation at IPO</p>
                 {valuationAtIpo? <h6><span className="badge text-black">{valuationAtIpo}</span></h6>:<Unknown/>}
               <img src="../../apilandscape_valuation_at_IPO_60x45.png" alt="" className="md-icon my-1 px-2 align-self-center" />
                 </div>
               
               </div> {/* section5 box */}


             </div> {/* section5-right-bottom */}

           </div> {/* company-profile-right-side-section5-right */}
           
           </section>


         
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
