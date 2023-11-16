import React from 'react'

export default function SearchFilters({categories,subcategoryList,clusters,total,handleSorted,setSelectedCategory,setSelectedSubcategory,handleCompanyName,sorted}) {
  return (
    <section className="filter bg-[#083ECB] py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <select className="form-select mb-2" ariaLabel="Default select example" onChange={e => setSelectedCategory(e.target.value)} >
                        <option selected>Select a Category</option>
                        <option value="All">All</option>
                
                        {categories?categories.map((category,index)=>{
                            return (
                                <option value={category} key={index}>{category}</option>
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
                                <option value={subcategory} key={index}>{subcategory}</option>
                            )   
                        }):""}
                    </select>
                    </div> {/* subcategory */}
                    <div className="col-md-3">
                    <div className="input-group mb-2">
                    <input type="text" className="form-control " id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04" aria-label="" 
                    onChange={(e)=>handleCompanyName(e.target.value)} />
                    <button className="btn border bg-white" type="button" id="inputGroupFileAddon04" onClick={handleCompanyName}>
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt="" className="sm-icon"/>
                    </button>
                    </div>

                    

                    </div>{/* search */}
                    <div className="col-md-2 d-flex justify-content-start">
                       <p className="rounded fw-bold  text-center shadow py-2 px-4 text-[#083ECB] bg-white"> {total} </p>
                    </div>
                    <div className="col-md-1 d-flex justify-content-end align-items-center">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={sorted} id="flexCheckDefault" onClick={handleSorted}/>
                        <label className="form-check-label font-bold text-white" for="flexCheckDefault">
                            A-Z
                        </label>
                        </div> {/* form check */}
                        </div> 
                </div>
               
            </div> {/* container */}
        </section>
  )
}
