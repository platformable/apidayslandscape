import React from 'react'
import { reduceMillion } from '../helpers/functions';
import { useRouter } from "next/router";
export default function CompanyCard({company,index,handleLoading}) {
  const handleCompany = (company) => {
    handleLoading()
    router.push(`/company/${company.name}`);
  };


   const handleImages = (url)=>{
    if(url?.includes("https://drive.google.com")){
      return (`https://drive.google.com/thumbnail?id=${url.split('d/').pop().split('/view?usp=sharing')[0]}`)
    }else {
      return url
    }
    }

  const router = useRouter();


  const newParentCategorySlug = [...new Set(company?.cluster?.split(","))];
  const categories = [...new Set(company?.category?.split(","))];
  const subcategories = [...new Set(company?.subcategory?.split(","))];

  const foundedRows = 'flex items-center gap-x-2 items-center'

    return (
      <div className="company-card bg-white rounded-lg shadow-lg p-3 " key={index}>
      <div className="card-top">
        <div className="">
          <h6 className="font-bold text-company-color text-center text-[#243672] mb-5">
            {" "}
            {company.name}
          </h6>

          <div className="card-logo flex justify-center relative aspect-w-1 aspect-h-1 h-20 items-center">
            {company.logo === "" || null ? (
              <img
                src={`/landscape_logo.svg`}
                alt=""
                className='object-cover object-center'
                
              />
            ) : (
              <img
                srcSet={`${handleImages(company.logo)} 2x`}
                alt=""
                className='object-contain object-center w-full h-full'
                
              />
            )}
          </div>


          <div className={`${foundedRows} mt-5`}>
            <div>
              <img src="/founded_icon.svg" alt="" className="" />
            </div>
              <p className="md-text m-0 p-0 text-[#083ECB]">Founded</p>
              <p className="font-bold  m-0 p-0 text-[#243672]">
                {company.yearFounded ? `${company.yearFounded}` : "-"}
              </p>
          </div>

          <div className={`${foundedRows} mt-3`}>
            <div>
              <img src="/headquarter_icon.svg" alt="" className="" />
            </div>
            <div>
              {" "}
              <p className="md-text m-0 p-0  text-[#083ECB]">Headquarter</p>
            </div>
            {company.headquartersCountry && (
              <img
                src={`https://flagsapi.com/${company.headquartersCountry}/flat/64.png`}
                alt=""
                className="w-7"
              />
            )}
            <div>
              {" "}
              <p className="md-text font-bold  m-0 p-0 text-[#243672]">
                {company?.headquartersCity ? `${company?.headquartersCity}, ` : '-'} {company.headquartersCountry}
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* <!--cardtop--> */}
   
      <div className="grid grid-cols-3 gap-x-2 mb-3 mt-5">
        <div className="purpleBorder rounded-md p-2 flex flex-col gap-2 items-center">
          
          <p className="font-bold my-2 text-[#243672]">
            {company.headcount ? company.headcount : "-"}
          </p>
          <span className="text-[#083ECB]">Headcount</span>
          <img
            src="/headcount_icon.svg"
            alt=""
            className="sd-icon mt-auto"
          />
        </div>

        <div className="greenBorder rounded-md p-2 flex flex-col gap-2 items-center">
          
          <p className="font-bold my-2 text-[#243672]">
            {company.totalFunding ? reduceMillion(company.totalFunding) : "-"}
          </p>
          <span className="text-[#083ECB] text-center">Total Funding</span>
          <img
            src="/total funding_icon.svg"
            alt=""
            className="md-icon mt-auto"
          />
        </div>

        <div className="orangeBorder rounded-md p-2  flex flex-col gap-2 items-center">
          
          <p className="font-bold my-2 text-[#243672]">
          {
              company.totalProducts ? company.totalProducts :'-'
            }
          </p>
          <span className="text-[#083ECB] text-center">Active products</span>
          <img
            src="/active products_icon.svg"
            alt=""
            className="xd-icon mt-auto "
          />
        </div>
      </div>

      <div className="my-1 grid">
    
        <button
         onClick={()=>handleCompany(company)}
          className="bg-[#083ECB] shadow-md px-10 py-3  text-white uppercase rounded text-center"
        >
         View complete profile
        </button>
        {/* <span className="text-sm text-gray">Wrong info? suggest </span> */}
      </div>
    </div>
    )
}