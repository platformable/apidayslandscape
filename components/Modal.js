import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import CompanyCardModal from "./CompanyCardModal";

export default function Modal({ selectedEntity, setLoading, showModal, setShowModal }) {
  // const modal = useRef(null);

  const handleRoute = () => {
    setLoading((prev) => !prev);
    router.push(`/company/${selectedEntity.name}`);
  };
  const router = useRouter();
  return (
    <>


<dialog className="" open={showModal} onClick={() => setShowModal(false)}>
<div className="mx-auto mt-10 rounded-xl modal bg-white max-w-[500px] md:px-0 pb-4 pt-2">
  <div className="modal-top flex justify-end px-2 md:px-4 ">
    {/*   <h5 className="modal-title" id="exampleModalLabel">{selectedEntity.name}</h5> */}
    <button
      type="button"
      className=" text-black font-bold "
      data-bs-dismiss="modal"
      aria-label="Close"
      onClick={() => setShowModal(false)}
    >
      X
    </button>
  </div>
  <div
    className=""
    onClick={() => handleRoute(selectedEntity)}
    data-bs-dismiss="modal"
  >
    <CompanyCardModal
      company={selectedEntity}
      data-bs-dismiss="modal"
      handleRoute={handleRoute}
      selectedEntity={selectedEntity}
    />
  </div>
 
</div>
</dialog>



    </>
  );
}
