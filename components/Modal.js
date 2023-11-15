import React from 'react'
import { useRouter } from 'next/router'
import CompanyCardModal from './CompanyCardModal'




export default function Modal({selectedEntity,setLoading}) {

  const handleRoute = () =>{
    setLoading(prev => !prev)
    router.push(`/company/${selectedEntity.name}`)
  }


  const router = useRouter()
    return (
        <div >
         
            <div className="modal fade shadow-lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog ">
                <div className="modal-content ">
                  <div className="modal-top flex justify-end p-2">
                  {/*   <h5 className="modal-title" id="exampleModalLabel">{selectedEntity.name}</h5> */}
                    <button type="button" className=" text-black font-bold px-2" data-bs-dismiss="modal" aria-label="Close">X</button>
                  </div>
                  <div className="modal-body" onClick={()=>handleRoute(selectedEntity)} data-bs-dismiss="modal">
   
                    <CompanyCardModal company={selectedEntity} data-bs-dismiss="modal" handleRoute={handleRoute} selectedEntity={selectedEntity}/>
                  </div>
                  <div className="modal-footerxs">
                 {/*    <button type="button" className="btn bg-dark-orange text-white" data-bs-dismiss="modal" onClick={()=>handleRoute(selectedEntity)}>Go deeper</button> */}
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
