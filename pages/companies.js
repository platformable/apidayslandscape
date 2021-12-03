import React, {useState,useEffect,useRef,useContext} from 'react'
import Layout from '../components/Layout'
import Head from "next/head";
import CompanyCard from '../components/CompanyCard'
import TopBarProgress from "react-topbar-progress-indicator";
import { categories,subcategories,categoriesWithSubcategories } from '../utils/categoriesAndSubcategories';
import Loader from '../components/Loader';
import { CompanyContext } from "../context/CompanyContext";
export default function companiesCards({data}) {
    
    const [company, setCompany] = useContext(CompanyContext);
    
    const newData = data.values.filter(items=>items.parentCategorySlug !=="API Standards/Protocols" && items.parentCategorySlug !=="Media/Associations" || company.searchInput)


    const [loading,setLoading]=useState(false)
    const [loader,setLoader]=useState(true)
    const [search,setSearch]=useState("")
    const [noData,setNoData]=useState(true)
    
    const [liveData,setLiveData]=useState( [] || newData);
    const [categoriesList,setCategoriesList]=useState([])
    const [sorted,setSorted]=useState(true)
    const [subcategoryList,setSubcategoryList]=useState(subcategories  || [])
    const [selectedCategory,setSelectedCategory]=useState("All")
    const [selectedSubcategory,setSelectedSubcategory]=useState("All")
  
const total = liveData.filter(items=>items.parentCategorySlug !=="API Standards/Protocols" && items.parentCategorySlug !=="Media/Associations" || company.searchInput).length
  
  
    TopBarProgress.config({
        barColors: {
          "0": "#fdb43e",
          "1.0": "#fdb43e"
        },
        shadowBlur: 5
      });
   
   
    const handleCompanyName= (text)=>{
       
        const result = data.values.filter(
            (company, index) =>
            company.name.toLowerCase().includes(text)
        );

        setLiveData(result)
        if(result.length<=0){
            setNoData(true)
        }else{
            setNoData(false)
        }
     
    }

    const handleSorted =()=>{
    
    setSorted(!sorted)

    if(sorted){ 
       
       setLiveData(liveData.sort((b, a) => a.name.localeCompare(b.name))) 
    } else {
      
        setLiveData(liveData.sort((a, b) => a.name.localeCompare(b.name)))
    }
    }

    const handleFilter = () => {

        if(company.searchInput !==""){
            handleCompanyName(company.searchInput)
         }
  
        if(selectedSubcategory === "All" && selectedCategory === "All"){
            setLiveData(data.values)
            setSubcategoryList(subcategories)
        }

        if (selectedCategory !=="All" && selectedSubcategory === "All"){
            const result =  data.values.filter((company, index) =>company.parentCategorySlug?.includes(selectedCategory));
            const subcatgeoriesOfSelectedCategory = categoriesWithSubcategories.filter((category,index)=>category.name===selectedCategory)
            
            setLiveData(result)
            setCategoriesList(subcatgeoriesOfSelectedCategory)
            setSubcategoryList(subcatgeoriesOfSelectedCategory[0].subcategories)
        }

        if (selectedCategory !=="All" && selectedSubcategory !== "All"){
            const result =  data.values.filter(
                (company, index) =>
                company.parentCategorySlug?.includes(selectedCategory) && company.subcategory?.includes(selectedSubcategory));
                setLiveData(result)
        }

        if (selectedCategory ==="All" && selectedSubcategory !== "All"){
            const result =  data.values.filter(
                (company, index) =>
                company.subcategory?.includes(selectedSubcategory)
            );
            setLiveData(result)
        }

    }


    const handleLoading = ()=>{
        setLoading(!loading)
      }
    
   

   useEffect(()=>{ 
   

    liveData.sort((a, b) => a.name.localeCompare(b.name))
    handleFilter()
   
    setTimeout(function(){
        setLoader(false)
    },1000)

   },[selectedCategory,selectedSubcategory])



    return (
        <Layout>
            <Head>
          <title>apidays Landscape - Companies</title>
          <meta name="description" content="apidays landscape companies" />
        </Head>
        {loading && <TopBarProgress />}
        <section className="filter bg-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <select className="form-select mb-2" ariaLabel="Default select example" onChange={e => setSelectedCategory(e.target.value)} >
                        <option selected>Select a Category</option>
                        <option value="All">All</option>
                
                        {categories?categories.map((category,index)=>{
                            return (
                                <option value={category} >{category}</option>
                            )   
                        }):""}
                    </select>
                    </div>
                    <div className="col-md-3">
                    <select className="form-select mb-2" ariaLabel="Default select example" onChange={e => setSelectedSubcategory(e.target.value)}>
                        <option >Select a subcategory</option>
                        <option value="All">All</option>
                        {subcategoryList?subcategoryList.map((subcategory,index)=>{
                            return (
                                <option value={subcategory}>{subcategory}</option>
                            )   
                        }):""}
                    </select>
                    </div> {/* subcategory */}
                    <div className="col-md-3">
                    <div className="input-group mb-2">
                    <input type="text" class="form-control " id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04" aria-label="" 
                    onChange={(e)=>handleCompanyName(e.target.value)} />
                    <button className="btn border " type="button" id="inputGroupFileAddon04" onClick={handleCompanyName}>
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt="" className="sm-icon"/>
                    </button>
                    </div>

                    

                    </div>{/* search */}
                    <div className="col-md-2 d-flex justify-content-start">
                       <p className="rounded fw-bold  text-center shadow py-2 px-4 text-company-color"> {total} </p>
                    </div>
                    <div className="col-md-1 d-flex justify-content-end align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value={sorted} id="flexCheckDefault" onClick={handleSorted}/>
                        <label class="form-check-label fw-bold" for="flexCheckDefault">
                            A-Z
                        </label>
                        </div> {/* form check */}
                        </div> 
                </div>
               
            </div> {/* container */}
        </section>

        {loader &&   <div className="text-center d-flex justify-content-center my-5"><img src="../Spinner-1s-44px.gif"/> </div> }
                        
        <section className="cards my-2">
            <div className="container">
                <div className="card-container">
                    {liveData?liveData.map((company,index)=>{
                        return (
                            <CompanyCard company={company} index={index} handleLoading={handleLoading}/>
                        )
                    }):<Loader />}
                   
                    {liveData.length <=0  && !loader ? "No Data..." :""}
           
                   
                {/* {noData ? <h3 className="fw-bold">No Data</h3>: <img src="../waiting.gif"/>}  */}
                    
                    
                </div>
            </div>
        </section>

            
        </Layout>
    )
}


export async function getServerSideProps(context) {

    const res = await fetch(`https://apidaysserver-svmwd.ondigitalocean.app/companies` || `http://localhost:5000/companies`);

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