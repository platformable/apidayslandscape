import React,{useContext,useState} from "react";
import Head from 'next/head'
import Layout from "../../components/Layout";
// import BarChart from "../../components/BarChart"
import { useRouter } from "next/router";
import Image from "next/image";
import Loader from "../../public/loader.gif";
import { CompanyContext } from "../../context/CompanyContext";
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
   

   const handleImages = (url)=>{
    if(url?.includes("https://drive.google.com")){
      return (`https://drive.google.com/thumbnail?id=${url.split('d/').pop().split('/view?usp=sharing')[0]}`)
    }else {
      return url
    }
    }


  const handleScore = (wm,dm)=>{
        let score="-"
      if(wm === true && dm === true){
        score="A+"
      }

      if(wm === true && dm === null){
        score="A"
      }
      if(wm === null && dm === true){
        score="A"
      }

      if (wm === null && dm ===null){
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
          <title>APIdays Landscape - {slug} </title>
          <meta name="description" content="apidays landscape" />
        </Head>


      <div className="bg-[#E1F6F8]">
       <div className="container mx-auto grid lg:grid-cols-[1fr_2fr]  pt-6 gap-10">
        <ProfileLeftSide selectedCompany={data} />

        <ProfileRightSide selectedCompany={data}  handleScore={handleScore}/>
       </div> 
      </div> 
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {slug} = context.params
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v3/companies/${slug}`,  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });

  const data = await res.json();
  if (data?.message === 'No company found with that name, try again') {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}