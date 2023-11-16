import React from 'react'

export default function SearchFilters({categories,subcategoryList,clusters,total,handleSorted,setSelectedCategory,setSelectedSubcategory,handleCompanyName,sorted}) {



  return (
    <section className="filter bg-[#083ECB] py-5">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5">
                <div className="clusters">
                    <select className="form-select mb-2" ariaLabel="Default select example" onChange={e => setSelectedCategory(e.target.value)} >
                        <option selected disabled>Select a Cluster</option>
                        <option value="All">All</option>
                
                        {clusters?clusters.map((cluster,index)=>{
                            return (
                                <option value={cluster} key={index}>{cluster}</option>
                            )   
                        }):""}
                    </select>
                    </div>
                    <div className="categories">
                    <select className="form-select mb-2" ariaLabel="Default select example" onChange={e => setSelectedCategory(e.target.value)} >
                        <option selected disabled>Select a Category</option>
                        <option value="All">All</option>
                
                        {categories?categories.map((category,index)=>{
                            return (
                                <option value={category} key={index}>{category}</option>
                            )   
                        }):""}
                    </select>
                    </div>
                    <div className="subcategories">
                    <select className="form-select mb-2" ariaLabel="Default select example" onChange={e => setSelectedSubcategory(e.target.value)}>
                        <option  selected disabled>Select a subcategory</option>
                        <option value="All">All</option>
                        {subcategoryList?subcategoryList.map((subcategory,index)=>{
                            return (
                                <option value={subcategory} key={index}>{subcategory}</option>
                            )   
                        }):""}
                    </select>
                    </div> {/* subcategory */}
                    <div className="search">
                    <div className="input-group mb-2">
                    <input type="text" className="form-control " id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04" aria-label="" 
                    onChange={(e)=>handleCompanyName(e.target.value)} />
                    <button className="btn border bg-white" type="button" id="inputGroupFileAddon04" onClick={handleCompanyName}>
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt="" className="sm-icon"/>
                    </button>
                    </div>

                    

                    </div>{/* search */}
                    <div></div>
                    <div></div>
                    <div className="">
                    
                    </div>
                    <div className="flex justify-end items-center gap-x-5">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={sorted} id="flexCheckDefault" onClick={handleSorted}/>
                        <label className="form-check-label font-bold text-white" for="flexCheckDefault">
                            A-Z
                        </label>
                        </div>
                  {/*   <p className="rounded font-bold  text-center shadow py-2 px-4 text-[#083ECB] bg-white"> {total} </p> */}
                   
                        </div> 
                </div>
               
            </div> {/* container */}
        </section>
  )
}
