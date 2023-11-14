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
         
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog ">
                <div className="modal-content ">
                  <div className="modal-header">
                  {/*   <h5 className="modal-title" id="exampleModalLabel">{selectedEntity.name}</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body" onClick={()=>handleRoute(selectedEntity)} data-bs-dismiss="modal">
   
                    <CompanyCardModal company={selectedEntity} data-bs-dismiss="modal"/>
                  </div>
                  <div className="modal-footer">
                 {/*    <button type="button" className="btn bg-dark-orange text-white" data-bs-dismiss="modal" onClick={()=>handleRoute(selectedEntity)}>Go deeper</button> */}
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
