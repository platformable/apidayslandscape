import React from 'react'
import { useRouter } from 'next/router'
import CompanyCardModal from './CompanyCardModal'




export default function Modal({selectedEntity}) {

  const router = useRouter()
    return (
        <div>
         
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog ">
                <div class="modal-content ">
                  <div class="modal-header">
                  {/*   <h5 class="modal-title" id="exampleModalLabel">{selectedEntity.name}</h5> */}
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
   
                    <CompanyCardModal company={selectedEntity} data-bs-dismiss="modal"/>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn bg-dark-orange text-white" data-bs-dismiss="modal" onClick={()=>router.push(`/company/${selectedEntity.name}`)}>Go deeper</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
