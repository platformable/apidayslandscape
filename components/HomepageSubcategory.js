import React,{useState,useEffect} from "react";
import ReactTooltip from "react-tooltip";
import Loader from "./Loader";
import { useRouter } from 'next/router'



export default function homepageSubcategory({handleCompany,subcategoryName,filteredCategory,handleEntity}) {
  const router = useRouter()



const handleImages = (url)=>{
if(url.includes("https://drive.google.com")){
  return (`https://drive.google.com/thumbnail?id=${url.split('d/').pop().split('/view?usp=sharing')[0]}`)
}else {
  return url
}
}


  return (
    <div className="fullWidth py-0">
      <h6 className="text-center sm-text py-2">{subcategoryName}({filteredCategory.length})</h6>


      <div className="homeCards  d-flex justify-content-start px-2">
        {filteredCategory
          ? filteredCategory.map((row, index) => {

    
              return (
                <div
                  href="https://nextjs.org/docs"
                  className="landscape-card landscape-box-card mb-0 me-1"
                  key={index}
                >
                  <div  onClick={()=> handleCompany(row)} data-bs-toggle="modal" data-bs-target="#exampleModal" data-tip={row.name} className={router.pathname!=="/homepage" ? "landscape-img" : "homepage-landscape-img"}>
                   {row.logo === "" || null ? <img src={`../apidaysReplacementLogo.png`} alt=""  className=""/> : <img srcset={`${handleImages(row.logo)} 2x`} alt="" className="img-fluid" /> }
                  </div>
                  {router.pathname!=="/homepage"? <p className="xs-text text-center">{row.name}</p> : ""} 
                


                </div>
              );
            })
          : "no data"}

    
          

      </div>

      {/* MODAL */}

 




      {/* MODAL */}
    </div>
  );
}
