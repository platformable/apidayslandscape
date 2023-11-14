import React,{useContext,useState} from "react";
import Head from 'next/head'
import Layout from "../../components/Layout";
// import BarChart from "../../components/BarChart"
import { useRouter } from "next/router";
import Image from "next/image";
import Loader from "../../public/loader.gif";
import { CompanyContext } from "../../context/CompanyContext";
import ProfileRightSide from "../../components/ProfileRightSide";
import Unknown from "../../components/Unknown";
import { categoriesWithSubcategories, subcategories } from '../../utils/categoriesAndSubcategories';
import ProfileRightSide from "../../components/ProfileRightSide";
import ProfileLeftSide from "../../components/ProfileLeftSide";
export default function CompanyDetailsName({ data }) {
  const router = useRouter();


  
  const { slug } = router.query;

  

  const [company,setCompany]=useContext(CompanyContext)
  const [details,setDetails]=useState(false)
  const [overview,setOverview]=useState(true)
  const [categoriesColor,setCategoriesColor]=useState([])

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

     result= `${total / 1000000}M`

    }
 
     return result
   }


   const reduceThounsand=(total)=>{
    let result = total
    if(total.length>=4){
   
     result= `$${total /1000}K`
   
    }

     return result
   }

   

   const handleImages = (url)=>{
    if(url?.includes("https://drive.google.com")){
      return (`https://drive.google.com/thumbnail?id=${url.split('d/').pop().split('/view?usp=sharing')[0]}`)
    }else {
      return url
    }
    }

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
  } = data;

  


  const newParentCategorySlug = [...new Set(category.split(","))]

  const newSubCategorySlug = [...new Set(subcategory.split(","))]


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




  const handleDetails = () =>{
    setOverview(!overview)
    setDetails(!details)

  }

  return (
    <Layout>
        <Head>
          <title>APIdays landscape - {slug} </title>
          <meta name="description" content="apidays landscape" />
        </Head>


      <div className="container shadow-r-md">
       <div className="grid grid-cols-[1fr_2fr] gap-2">
        <ProfileLeftSide selectedCompany={data} handleImages={handleImages}/>

        <ProfileRightSide selectedCompany={data} handleImages={handleImages} reduceNumber={reduceNumber} reduceThounsand={reduceThounsand} handleScore={handleScore}/>
       </div> 
      </div> 
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {slug} = context.params
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v2/companies/${slug}`,  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });

  const data = await res.json();
  console.log(data)

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}