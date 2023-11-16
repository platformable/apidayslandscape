import React from 'react'

export default function SearchFilters({categories,subcategoryList,clusters,total,handleSorted,setSelectedCategory,setSelectedSubcategory,handleCompanyName,sorted}) {



  return (
    <section className="filer bg-[#083ECB] py-5">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3">
                <div className="clusters">
                    <select className="bg-white px-2 py-1 w-full rounded-lg mb-2" ariaLabel="Default select example" onChange={e => setSelectedCategory(e.target.value)} >
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
                    <select className="bg-white px-2 py-1 w-full rounded-lg mb-2" ariaLabel="Default select example" onChange={e => setSelectedCategory(e.target.value)} >
                        <option selected disabled>Select a Category</option>
                        <option value="All">All</option>
                
                        {categories?categories.map((category,index)=>{
                            return (
                                <option value={category} key={index}>{category}</option>
                            )   
                        }):""}
                    </select>
                    </div>
                    <div className="subcategories ">
                    <select className="bg-white px-2 py-1 rounded-lg mb-2 w-full"  onChange={e => setSelectedSubcategory(e.target.value)}>
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
            {/*         <div className=" mb-2">
                    <input type="text" className="form-control " id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04" aria-label="" 
                    onChange={(e)=>handleCompanyName(e.target.value)} />
                    <button className="btn border bg-white" type="button" id="inputGroupFileAddon04" onClick={handleCompanyName}>
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt="" className="sm-icon"/>
                    </button>
                    </div> */}


                    <div class="relative">
     
        <input type="search" onChange={(e)=>handleCompanyName(e.target.value)} id="default-search" className="block w-full px-2 py-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
        <img src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt="" className="sm-icon absolute end-2.5 bottom-1" width={20}/>
       
    </div>

                    

                    </div>{/* search */}
                    <div></div>
                    <div></div>
                    <div className="">
                    
                    </div>
                    <div className="flex justify-end items-center gap-x-">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={sorted} id="flexCheckDefault" onClick={handleSorted}/>
                        <label className="form-check-label font-bold text-white" for="flexCheckDefault">
                          {' '}  A-Z
                        </label>
                        </div>
                  {/*   <p className="rounded font-bold  text-center shadow py-2 px-4 text-[#083ECB] bg-white"> {total} </p> */}
                   
                        </div> 
                </div>
               
            </div> {/* container */}
        </section>
  )
}
